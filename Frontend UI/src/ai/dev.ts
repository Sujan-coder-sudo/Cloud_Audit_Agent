import { config } from 'dotenv';
config();

import '@/ai/flows/run-audit.ts';
import '@/ai/flows/suggest-fixed-version.ts';
import '@/ai/flows/agent-response-display.ts';