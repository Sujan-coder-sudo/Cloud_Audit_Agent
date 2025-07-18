"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UploadCloud, File, Trash2 } from "lucide-react";

const uploadedFiles = [
  { name: "production-dockerfile", type: "Dockerfile", size: "2.5 KB", lastModified: "2024-07-29" },
  { name: "api-gateway-k8s.yml", type: "Kubernetes", size: "5.1 KB", lastModified: "2024-07-28" },
  { name: "docker-compose.dev.yml", type: "Compose", size: "1.8 KB", lastModified: "2024-07-25" },
];

export default function UploadPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-headline text-3xl font-bold text-foreground">
        Upload Configurations
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload New File</CardTitle>
          <CardDescription>
            Upload your Dockerfiles, Kubernetes manifests, or Compose files for analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Configuration File</Label>
            <div className="flex gap-2">
                <Input id="picture" type="file" />
                <Button>
                    <UploadCloud className="mr-2 h-4 w-4" /> Upload
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
            <CardDescription>Manage your previously uploaded configuration files.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>File Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Last Modified</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {uploadedFiles.map((file) => (
                        <TableRow key={file.name}>
                            <TableCell className="font-medium flex items-center gap-2">
                                <File className="h-4 w-4 text-muted-foreground" />
                                {file.name}
                            </TableCell>
                            <TableCell>{file.type}</TableCell>
                            <TableCell>{file.size}</TableCell>
                            <TableCell>{file.lastModified}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
