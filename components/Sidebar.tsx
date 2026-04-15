"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  Link2,
  Settings,
  Rocket,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Connections", href: "/connections", icon: Link2 },
    { name: "Migration", href: "/migration", icon: Settings },
    { name: "Runs", href: "/runs", icon: Rocket },
  ];

  return (
    <>
      {/* Mobile Top */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900">
        <h1 className="font-bold">Migration Tool</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-black p-6 z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition`}
      >
        <h1 className="text-2xl font-bold mb-10">⚡ Migration Tool</h1>

        <ul className="space-y-3">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
