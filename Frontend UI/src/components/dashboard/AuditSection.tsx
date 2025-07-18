"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useDashboardStore } from "@/lib/store";
import { runAuditAction, suggestFixAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader, ServerCrash, Wand2, FileWarning } from "lucide-react";
import CodeBlock from "../shared/CodeBlock";
import { useState } from "react";

const auditSchema = z.object({
  configuration: z.string().min(10, "Configuration must be at least 10 characters long."),
  type: z.enum(["kubernetes", "docker"], { required_error: "Please select an audit type." }),
});

export default function AuditSection() {
  const { isLoading, auditResults, error, setIsLoading, setAuditResults, setError } = useDashboardStore();
  const { toast } = useToast();
  const [suggestedFix, setSuggestedFix] = useState<string | null>(null);
  const [isFixing, setIsFixing] = useState(false);

  const form = useForm<z.infer<typeof auditSchema>>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      configuration: "",
      type: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof auditSchema>) {
    setIsLoading(true);
    setSuggestedFix(null);
    const result = await runAuditAction(values);
    if (result.success) {
      setAuditResults(result.data);
      toast({
        title: "Audit Complete",
        description: "Security audit finished successfully.",
      });
    } else {
      setError(result.error);
      toast({
        title: "Audit Failed",
        description: result.error,
        variant: "destructive",
      });
    }
  }

  async function handleSuggestFix() {
    if (!auditResults || !form.getValues().configuration) return;

    setIsFixing(true);
    const result = await suggestFixAction({
        fileContent: form.getValues().configuration,
        fileType: form.getValues().type === 'docker' ? 'dockerfile' : 'kubernetes',
        identifiedIssues: auditResults.auditResults,
    });

    if (result.success && result.data) {
        setSuggestedFix(result.data.fixedVersion);
        toast({
            title: "Fix Suggested",
            description: "AI has generated a suggested fix.",
        });
    } else {
        toast({
            title: "Failed to Suggest Fix",
            description: result.error,
            variant: "destructive",
        });
    }
    setIsFixing(false);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Run New Audit</CardTitle>
          <CardDescription>Paste your configuration file below to start the security audit.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Configuration Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type (e.g., Docker, Kubernetes)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="docker">Docker</SelectItem>
                        <SelectItem value="kubernetes">Kubernetes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="configuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Configuration (Dockerfile, docker-compose.yml, k8s.yml)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., FROM ubuntu:latest..."
                        className="min-h-[250px] font-code text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? "Auditing..." : "Run Audit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Agent Response</CardTitle>
          <CardDescription>Results from the AI security agent will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
              <Loader className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">AI agent is analyzing...</p>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <ServerCrash className="h-4 w-4" />
              <AlertTitle>An Error Occurred</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {auditResults && !isLoading && (
            <div className="space-y-4">
               <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                  <FileWarning className="h-4 w-4" />
                  <AlertTitle className="font-headline text-destructive-foreground">Audit Results</AlertTitle>
                  <AlertDescription className="text-destructive-foreground/80 whitespace-pre-wrap">{auditResults.auditResults}</AlertDescription>
              </Alert>
              <Alert>
                  <Wand2 className="h-4 w-4" />
                  <AlertTitle className="font-headline text-foreground">Suggested Fixes</AlertTitle>
                  <AlertDescription className="whitespace-pre-wrap">{auditResults.suggestedFixes}</AlertDescription>
              </Alert>
              <Button onClick={handleSuggestFix} disabled={isFixing} className="w-full bg-accent hover:bg-accent/90">
                {isFixing ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                {isFixing ? "Generating..." : "Generate Fixed Version"}
              </Button>
            </div>
          )}
          {suggestedFix && (
            <div className="space-y-2 pt-4">
                <h3 className="font-headline text-lg font-semibold">Suggested Fixed Configuration</h3>
                <CodeBlock command={suggestedFix} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
