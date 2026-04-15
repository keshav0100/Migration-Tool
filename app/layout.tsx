import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-white text-black">
          <Sidebar />

          <div className="flex-1 p-6 md:p-10 ml-0 md:ml-64">
            <Topbar />
            {children}
          </div>
        </div>

        {/* ✅ ADD HERE */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
