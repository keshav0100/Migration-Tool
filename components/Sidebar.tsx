// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { LayoutDashboard, Link2, Settings, Rocket } from "lucide-react";

// export default function Sidebar() {
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Dashboard", href: "/", icon: LayoutDashboard },
//     { name: "Connections", href: "/connections", icon: Link2 },
//     { name: "Migration", href: "/migration", icon: Settings },
//     { name: "Runs", href: "/runs", icon: Rocket },
//   ];

//   return (
//     <div className="fixed h-screen w-64 bg-[#020617]/80 backdrop-blur-xl border-r border-gray-800 p-6">
//       <h1 className="text-2xl font-bold mb-10">Accelerator</h1>

//       <ul className="space-y-3">
//         {navItems.map((item, i) => {
//           const Icon = item.icon;
//           const isActive = pathname === item.href;

//           return (
//             <li key={i}>
//               <Link
//                 href={item.href}
//                 className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
//                   ${
//                     isActive
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-400 hover:text-white hover:bg-gray-800"
//                   }`}
//               >
//                 <Icon size={18} />
//                 {item.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Link2, Settings, Rocket } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Connections", href: "/connections", icon: Link2 },
    { name: "Migration", href: "/migration", icon: Settings },
    { name: "Runs", href: "/runs", icon: Rocket },
  ];

  return (
    <div className="fixed h-screen w-64 bg-white border-r border-gray-200 p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10 text-gray-900">Accelerator</h1>

      {/* Nav */}
      <ul className="space-y-3">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={i}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}