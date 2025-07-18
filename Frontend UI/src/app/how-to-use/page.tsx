import CodeBlock from "@/components/shared/CodeBlock";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const steps = [
  {
    title: "1. Clone the Repository",
    description: "Get the source code on your local machine.",
    command: "git clone https://github.com/your-repo/secops-ai-dashboard.git",
  },
  {
    title: "2. Navigate to Directory",
    description: "Change into the project directory.",
    command: "cd secops-ai-dashboard",
  },
  {
    title: "3. Start the Services",
    description: "Use Docker Compose to build and run the application and its dependencies.",
    command: "docker-compose up --build",
  },
  {
    title: "4. Open in Browser",
    description: "The application will be available at the following address.",
    command: "http://localhost:3000",
  },
  {
    title: "5. Interact with the SecOps AI Agent",
    description: "Navigate to the dashboard to start running audits on your Docker and Kubernetes configurations.",
    command: "Navigate to the Dashboard page.",
  },
  {
    title: "6. (Optional) Connect Kubernetes Context",
    description: "For live cluster analysis, ensure your `kubectl` is configured to the correct context.",
    command: "kubectl config use-context your-cluster-context",
  },
];

export default function HowToUsePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">How to Use</h1>
          <p className="text-lg text-muted-foreground">
            Get started with SecOps AI on your local machine in just a few minutes.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="aspect-video bg-card border border-border/50 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">YouTube video coming soon...</p>
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index}>
              <h2 className="font-headline text-2xl font-semibold mb-2">{step.title}</h2>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <CodeBlock command={step.command} />
            </div>
          ))}
        </div>

        <Alert className="mt-16 bg-card border-accent/50">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="font-headline text-accent">Phase 2 Sneak Peek</AlertTitle>
          <AlertDescription>
            The next phase will support direct AWS/GCP integration with IAM scanning, cloud policy misconfiguration checks, and more automated security analysis features. Stay tuned!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
