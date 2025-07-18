import { create } from 'zustand';
import type { RunAuditOutput } from '@/ai/flows/run-audit';

interface DashboardState {
  isLoading: boolean;
  auditResults: RunAuditOutput | null;
  error: string | null;
  setIsLoading: (loading: boolean) => void;
  setAuditResults: (results: RunAuditOutput | null) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  isLoading: false,
  auditResults: null,
  error: null,
  setIsLoading: (isLoading) => set({ isLoading, error: null }),
  setAuditResults: (auditResults) => set({ auditResults, isLoading: false }),
  setError: (error) => set({ error, isLoading: false }),
  reset: () => set({ isLoading: false, auditResults: null, error: null }),
}));
