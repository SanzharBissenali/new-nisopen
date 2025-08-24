import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Navigation } from "@/components/navigation";
import { DashboardContent } from "@/components/dashboard-content";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DashboardContent />
    </div>
  );
}