"use client";

import { useState } from "react";
import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Migration() {
  const router = useRouter();

  const [org, setOrg] = useState("");
  const [project, setProject] = useState("");
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!org || !project) {
      toast.error("Select Org & Project first");
      return;
    }

    try {
      setLoading(true);

      await new Promise((res) => setTimeout(res, 1200));

      const data = {
        repos: 2,
        branches: 5,
        prs: 10,
      };

      setPlan(data);
      toast.success("Plan Generated");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const confirmMigration = () => {
    toast.success("Migration Started");
    router.push("/runs");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Migration</h1>

      {/* STEP INDICATOR */}
      <div className="flex gap-3 mb-6">
        {[1, 2, 3, 4].map((step) => {
          const active =
            step === 1 ||
            (step === 2 && org) ||
            (step === 3 && project) ||
            (step === 4 && plan);

          return (
            <span
              key={step}
              className={`px-3 py-1 rounded text-sm font-medium ${
                active ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </span>
          );
        })}
      </div>

      <div className="flex gap-4 mb-6 flex-wrap items-center">
        <Select value={org} onValueChange={(value) => setOrg(value)}>
          <SelectTrigger className="w-[200px] bg-white border border-gray-300 shadow-sm hover:border-gray-400">
            <SelectValue placeholder="Select Org" />
          </SelectTrigger>

          <SelectContent className="rounded-xl border border-gray-200 shadow-lg">
            <SelectItem value="Org A">Org A</SelectItem>
            <SelectItem value="Org B">Org B</SelectItem>
          </SelectContent>
        </Select>

        <Select value={project} onValueChange={(value) => setProject(value)}>
          <SelectTrigger className="w-[200px] bg-white border border-gray-300 shadow-sm hover:border-gray-400">
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>

          <SelectContent className="rounded-xl border border-gray-200 shadow-lg">
            <SelectItem value="Project X">Project X</SelectItem>
            <SelectItem value="Project Y">Project Y</SelectItem>
          </SelectContent>
        </Select>

        <button
          onClick={generatePlan}
          disabled={loading || !org || !project}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            loading || !org || !project
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 hover:shadow-md"
          }`}
        >
          {loading ? "Generating..." : "Generate Plan"}
        </button>
      </div>

      {(!org || !project) && (
        <p className="text-sm text-gray-500 mb-4">
          Please select org & project to continue
        </p>
      )}

      {plan && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <h3 className="font-semibold mb-4 text-lg text-gray-800">
            Plan Summary
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-gray-500 text-xs">Repos</p>
              <p className="text-lg font-bold text-gray-900">{plan.repos}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-gray-500 text-xs">Branches</p>
              <p className="text-lg font-bold text-gray-900">{plan.branches}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <p className="text-gray-500 text-xs">PRs</p>
              <p className="text-lg font-bold text-gray-900">{plan.prs}</p>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg transition">
                Confirm Migration
              </button>
            </DialogTrigger>

            <DialogContent className="rounded-2xl p-6 shadow-2xl border border-gray-200 bg-white/90 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Confirm Migration
                </DialogTitle>

                <DialogDescription className="text-gray-500">
                  This will start migration process. Cannot be undone.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-100 p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-xs">Repos</p>
                  <p className="text-lg font-bold">{plan.repos}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-xs">Branches</p>
                  <p className="text-lg font-bold">{plan.branches}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl text-center">
                  <p className="text-gray-500 text-xs">PRs</p>
                  <p className="text-lg font-bold">{plan.prs}</p>
                </div>
              </div>

              <DialogFooter className="mt-6 flex gap-2">
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Cancel
                  </button>
                </DialogClose>

                <button
                  onClick={confirmMigration}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:scale-105"
                >
                Start Migration
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {plan && (
        <Table
          data={[
            { source: "Repo A", target: "Repo B", status: "Pending" },
            { source: "Repo X", target: "Repo Y", status: "Done" },
          ]}
        />
      )}
    </div>
  );
}
