import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Sujan Rathod",
    role: "Project Lead – DevSecOps Engineer",
    bio: "Driving the vision and technical architecture of SecOps AI, focusing on robust security automation.",
    avatar: "https://placehold.co/100x100.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rahul Kumar",
    role: "ML/NLP Engineer – Agent Logic",
    bio: "Specializing in the core AI models that power our agent's analytical and remediation capabilities.",
    avatar: "https://placehold.co/100x100.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Shriya",
    role: "Frontend Developer",
    bio: "Crafting intuitive and responsive user interfaces to make complex security data accessible and actionable.",
    avatar: "https://placehold.co/100x100.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Prajwal S",
    role: "Infra & Kubernetes Specialist",
    bio: "Ensuring our solutions are scalable, reliable, and deeply integrated with modern cloud-native ecosystems.",
    avatar: "https://placehold.co/100x100.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
        <p className="text-lg text-muted-foreground">
          We are a student-led team committed to building open-source tools for smarter security operations. Our vision: to automate the pain out of container security with AI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center bg-card border-border/50">
            <CardHeader className="items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <h3 className="font-headline text-xl font-bold">{member.name}</h3>
              <p className="text-accent font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
