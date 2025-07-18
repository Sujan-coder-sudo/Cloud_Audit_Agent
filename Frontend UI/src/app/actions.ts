// src/app/actions.ts
'use server';

import { runAudit as runAuditFlow, type RunAuditInput } from '@/ai/flows/run-audit';
import { suggestFixedVersion as suggestFixedVersionFlow, type SuggestFixedVersionInput } from '@/ai/flows/suggest-fixed-version';

export async function runAuditAction(input: RunAuditInput) {
  try {
    const result = await runAuditFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Audit Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: `Failed to run audit. ${errorMessage}` };
  }
}

export async function suggestFixAction(input: SuggestFixedVersionInput) {
    try {
      const result = await suggestFixedVersionFlow(input);
      return { success: true, data: result };
    } catch (error) {
      console.error('Suggest Fix Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return { success: false, error: `Failed to suggest fix. ${errorMessage}` };
    }
  }