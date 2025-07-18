'use server';

/**
 * @fileOverview This file defines a Genkit flow for displaying AI Agent responses in a streaming format within the dashboard.
 *
 * - agentResponseDisplay - A function that initiates the AI agent response display flow.
 * - AgentResponseDisplayInput - The input type for the agentResponseDisplay function.
 * - AgentResponseDisplayOutput - The return type for the agentResponseDisplay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AgentResponseDisplayInputSchema = z.object({
  prompt: z.string().describe('The prompt to send to the AI Agent.'),
});
export type AgentResponseDisplayInput = z.infer<typeof AgentResponseDisplayInputSchema>;

const AgentResponseDisplayOutputSchema = z.object({
  response: z.string().describe('The AI Agent\'s response.'),
});
export type AgentResponseDisplayOutput = z.infer<typeof AgentResponseDisplayOutputSchema>;

export async function agentResponseDisplay(input: AgentResponseDisplayInput): Promise<AgentResponseDisplayOutput> {
  return agentResponseDisplayFlow(input);
}

const agentResponseDisplayPrompt = ai.definePrompt({
  name: 'agentResponseDisplayPrompt',
  input: {schema: AgentResponseDisplayInputSchema},
  output: {schema: AgentResponseDisplayOutputSchema},
  prompt: `You are a security operations AI agent. Respond to the following prompt: {{{prompt}}}`,
});

const agentResponseDisplayFlow = ai.defineFlow(
  {
    name: 'agentResponseDisplayFlow',
    inputSchema: AgentResponseDisplayInputSchema,
    outputSchema: AgentResponseDisplayOutputSchema,
  },
  async input => {
    const {output} = await agentResponseDisplayPrompt(input);
    return output!;
  }
);
