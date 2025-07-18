import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const messages = [
  {
    role: "user",
    content: "What are the most common vulnerabilities you find in Dockerfiles?",
  },
  {
    role: "agent",
    content: "The most common vulnerabilities I find are running containers as the root user, exposing the Docker socket, and using outdated base images. It's also common to see secrets hardcoded as environment variables.",
  },
  {
    role: "user",
    content: "How can I prevent running as root?",
  },
  {
    role: "agent",
    content: "You should create a dedicated user and group in your Dockerfile and use the `USER` instruction to switch to that user. For example:\n```\nRUN groupadd -r appuser && useradd -r -g appuser appuser\nUSER appuser\n```\nThis ensures that your container and its processes run with limited privileges, reducing the potential impact of a compromise.",
  },
];

export default function ChatPage() {
  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-4rem)]">
      <h1 className="font-headline text-3xl font-bold text-foreground mb-4">
        Agent Chat
      </h1>
      <Card className="flex-1 flex flex-col">
        <CardHeader>
            <CardTitle>Chat with SecOps AI</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto space-y-6 p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              {message.role === "agent" && (
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Agent" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-xl rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === "user" && (
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="pt-6 border-t">
            <form className="flex w-full items-center space-x-2">
                <Input
                    id="message"
                    placeholder="Type your message..."
                    className="flex-1"
                    autoComplete="off"
                />
                <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                </Button>
            </form>
        </CardFooter>
      </Card>
    </div>
  );
}
