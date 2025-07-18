// src/ai/flows/run-audit.ts
'use server';
/**
 * @fileOverview This file defines the runAudit flow for performing security audits on Kubernetes and Docker configurations using an AI Agent.
 *
 * @function runAudit - The main function to trigger the audit process.
 * @interface RunAuditInput - Defines the input schema for the runAudit function, including configuration files and commands.
 * @interface RunAuditOutput - Defines the output schema for the runAudit function, including audit results and suggested fixes.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RunAuditInputSchema = z.object({
  configuration: z.string().describe('The configuration file content (e.g., Kubernetes manifest, Dockerfile, docker-compose.yml).'),
  command: z.string().optional().describe('Optional command to run for the audit.'),
  type: z.enum(['kubernetes', 'docker']).describe('The type of audit to perform (Kubernetes or Docker).'),
});

export type RunAuditInput = z.infer<typeof RunAuditInputSchema>;

const RunAuditOutputSchema = z.object({
  auditResults: z.string().describe('The results of the security audit.'),
  suggestedFixes: z.string().describe('AI-suggested fixes for identified vulnerabilities.'),
});

export type RunAuditOutput = z.infer<typeof RunAuditOutputSchema>;

export async function runAudit(input: RunAuditInput): Promise<RunAuditOutput> {
  return runAuditFlow(input);
}

const runAuditPrompt = ai.definePrompt({
  name: 'runAuditPrompt',
  input: {schema: RunAuditInputSchema},
  output: {schema: RunAuditOutputSchema},
  prompt: `You are a security expert specializing in identifying vulnerabilities in Kubernetes and Docker configurations.

You will receive a configuration file (e.g., Kubernetes manifest, Dockerfile, docker-compose.yml) and, optionally, a command to run.
Your task is to analyze the configuration, identify potential security issues (such as containers running as root, privileged access, missing resource limits, etc.), and suggest fixes.

Configuration Type: {{{type}}}
Configuration Content:
\`\`\`
{{{configuration}}}
\`\`\`

Command (Optional): {{{command}}}

Provide a detailed audit report, including identified vulnerabilities and AI-driven suggestions for remediation.
`, 
});

const runAuditFlow = ai.defineFlow(
  {
    name: 'runAuditFlow',
    inputSchema: RunAuditInputSchema,
    outputSchema: RunAuditOutputSchema,
  },
  async input => {
    const {output} = await runAuditPrompt(input);
    return output!;
  }
);
