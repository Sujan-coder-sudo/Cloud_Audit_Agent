import AuditSection from "@/components/dashboard/AuditSection";
import DashboardCharts from "@/components/dashboard/DashboardCharts";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Container Security Dashboard
        </h1>
      </div>
      
      <AuditSection />
      
      <DashboardCharts />
    </div>
  );
}
