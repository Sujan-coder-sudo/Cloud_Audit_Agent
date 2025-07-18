import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const logs = [
  {
    id: "LOG-001",
    timestamp: "2024-07-30T10:00:00Z",
    level: "Info",
    message: "User 'admin' initiated a Docker configuration audit.",
  },
  {
    id: "LOG-002",
    timestamp: "2024-07-30T10:00:05Z",
    level: "Warning",
    message: "Audit found 3 medium severity vulnerabilities in 'Dockerfile'.",
  },
  {
    id: "LOG-003",
    timestamp: "2024-07-30T10:01:10Z",
    level: "Info",
    message: "Generated fix suggestion for 'Dockerfile'.",
  },
  {
    id: "LOG-004",
    timestamp: "2024-07-30T10:05:00Z",
    level: "Info",
    message: "User 'dev-user' initiated a Kubernetes manifest audit.",
  },
  {
    id: "LOG-005",
    timestamp: "2024-07-30T10:05:15Z",
    level: "Error",
    message: "Failed to parse 'k8s.yml': Invalid syntax on line 42.",
  },
    {
    id: "LOG-006",
    timestamp: "2024-07-30T10:06:00Z",
    level: "Info",
    message: "User 'admin' accessed the agent chat.",
  },
];

export default function LogsPage() {
  const getBadgeVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case "error":
        return "destructive";
      case "warning":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="font-headline text-3xl font-bold text-foreground">
        Audit & Agent Logs
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>System Logs</CardTitle>
          <CardDescription>
            A stream of recent activities and events from the SecOps AI system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Log ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.id}</TableCell>
                  <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(log.level)}>{log.level}</Badge>
                  </TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
