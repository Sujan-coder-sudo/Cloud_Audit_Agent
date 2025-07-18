'use server';

/**
 * @fileOverview AI agent to suggest fixed versions of K8s manifests, Dockerfiles, and compose YAMLs.
 *
 * - suggestFixedVersion - A function that handles suggesting fixed versions for security issues.
 * - SuggestFixedVersionInput - The input type for the suggestFixedVersion function.
 * - SuggestFixedVersionOutput - The return type for the suggestFixedVersion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFixedVersionInputSchema = z.object({
  fileContent: z.string().describe('The content of the K8s manifest, Dockerfile, or compose YAML file.'),
  fileType: z.enum(['kubernetes', 'dockerfile', 'compose']).describe('The type of the file.'),
  identifiedIssues: z.string().describe('A description of the security issues identified in the file.'),
});
export type SuggestFixedVersionInput = z.infer<typeof SuggestFixedVersionInputSchema>;

const SuggestFixedVersionOutputSchema = z.object({
  fixedVersion: z.string().describe('The suggested fixed version of the file content with security issues remediated.'),
});
export type SuggestFixedVersionOutput = z.infer<typeof SuggestFixedVersionOutputSchema>;

export async function suggestFixedVersion(input: SuggestFixedVersionInput): Promise<SuggestFixedVersionOutput> {
  return suggestFixedVersionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFixedVersionPrompt',
  input: {schema: SuggestFixedVersionInputSchema},
  output: {schema: SuggestFixedVersionOutputSchema},
  prompt: `You are a security expert specializing in remediating security issues in K8s manifests, Dockerfiles, and compose YAML files.

You will receive the content of a file, its type, and a description of identified security issues.
Your task is to provide a fixed version of the file with the security issues remediated.

File Type: {{{fileType}}}
File Content:
{{{fileContent}}}

Identified Issues: {{{identifiedIssues}}}

Provide the fixed version of the file content:
`,
});

const suggestFixedVersionFlow = ai.defineFlow(
  {
    name: 'suggestFixedVersionFlow',
    inputSchema: SuggestFixedVersionInputSchema,
    outputSchema: SuggestFixedVersionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

