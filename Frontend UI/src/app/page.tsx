import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Container, HardHat, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Intelligent Audit',
    description: 'Leverage AI to perform deep security audits on your container configurations.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Misconfig Detection',
    description: 'Automatically detect common and obscure misconfigurations in Docker & K8s.',
  },
  {
    icon: <HardHat className="h-8 w-8 text-accent" />,
    title: 'Agentic Analysis',
    description: 'Our agent provides detailed analysis and actionable remediation steps.',
  },
  {
    icon: <Container className="h-8 w-8 text-accent" />,
    title: 'Docker & K8s Native',
    description: 'Built from the ground up to understand the nuances of containerized environments.',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Secure your containers with intelligence.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              SecOps AI brings agentic automation to Docker and Kubernetes security – fast audits, misconfiguration detection, and AI-driven fixes. Built by devs, for devs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/how-to-use">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="AI Security" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-2xl"
              data-ai-hint="security containers"
            />
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border-border/50 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline pt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
