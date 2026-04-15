"use client";

import { useState } from "react";
import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Migration() {
  const router = useRouter();

  const [org, setOrg] = useState("");
  const [project, setProject] = useState("");
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!org || !project) {
      toast.error("Select Org & Project first ❌");
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
      toast.success("Plan Generated 🚀");
    } catch (err) {
      toast.error("Something went wrong ❌");
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
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Migration</h1>

      {/* STEP INDICATOR */}
      <div className="flex gap-3 mb-6">
        {[1, 2, 3, 4].map((step, i) => {
          const active =
            (step === 2 && org) ||
            (step === 3 && project) ||
            (step === 4 && plan) ||
            step === 1;

          return (
            <span
              key={i}
              className={`px-3 py-1 rounded text-sm font-medium ${
                active ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </span>
          );
        })}
      </div>

      {/* SELECT SECTION */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {/* ORG */}
        <select
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select Org</option>
          <option value="Org A">Org A</option>
          <option value="Org B">Org B</option>
        </select>

        {/* PROJECT */}
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select Project</option>
          <option value="Project X">Project X</option>
          <option value="Project Y">Project Y</option>
        </select>

        {/* BUTTON */}
        <button
          onClick={generatePlan}
          disabled={loading || !org || !project}
          className={`px-6 cursor-pointer py-2 rounded-lg font-medium transition
            ${
              loading || !org || !project
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 hover:scale-105"
            }`}
        >
          {loading ? "Generating..." : "Generate Plan"}
        </button>
      </div>

      {!org ||
        (!project && (
          <p className="text-sm text-gray-500 mb-4">
            Please select org & project to continue
          </p>
        ))}

      {/* PLAN SUMMARY */}
      {plan && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <h3 className="font-semibold mb-4 text-lg text-gray-800">
            📋 Plan Summary
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-gray-500">Repos</p>
              <p className="text-xl font-bold text-gray-900">{plan.repos}</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-gray-500">Branches</p>
              <p className="text-xl font-bold text-gray-900">{plan.branches}</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-gray-500">PRs</p>
              <p className="text-xl font-bold text-gray-900">{plan.prs}</p>
            </div>
          </div>

          <button
            onClick={confirmMigration}
            className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg transition"
          >
            Confirm Migration
          </button>
        </div>
      )}

      {/* TABLE */}
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
