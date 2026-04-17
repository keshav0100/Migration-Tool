import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      <Sidebar />

      <div className="flex-1 p-6 md:p-10 ml-0 md:ml-64 relative">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
