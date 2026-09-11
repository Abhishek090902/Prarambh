"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scheme {
  id: string;
  name: string;
  category: "subsidy" | "loan" | "women" | "tech";
  department: string;
  maxAmount: string;
  benefit: string;
  eligibility: string;
  portalUrl: string;
  badge: string;
}

const schemesData: Scheme[] = [
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    category: "subsidy",
    department: "KVIC / Ministry of MSME",
    maxAmount: "₹50 Lakh (Mfg) / ₹20 Lakh (Service)",
    benefit: "15% to 35% Capital Subsidy",
    eligibility: "Any individual above 18 years; minimum 8th pass for projects above ₹10L in mfg.",
    portalUrl: "https://www.kviconline.gov.in/pmegpeportal",
    badge: "Most Popular",
  },
  {
    id: "cgtmse",
    name: "Credit Guarantee Scheme (CGTMSE)",
    category: "loan",
    department: "SIDBI & Ministry of MSME",
    maxAmount: "Up to ₹5 Crore",
    benefit: "100% Collateral-Free Bank Loan Guarantee",
    eligibility: "New and existing Micro & Small enterprises; manufacturing and service providers.",
    portalUrl: "https://www.cgtmse.in",
    badge: "Collateral Free",
  },
  {
    id: "mudra",
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    category: "loan",
    department: "Department of Financial Services",
    maxAmount: "Up to ₹10 Lakh (Tarun)",
    benefit: "Low-interest working capital without guarantor",
    eligibility: "Non-corporate small business segment (retail shops, artisans, food units).",
    portalUrl: "https://www.mudra.org.in",
    badge: "Zero Processing Fee",
  },
  {
    id: "standup",
    name: "Stand-Up India Scheme",
    category: "women",
    department: "SIDBI / Ministry of Finance",
    maxAmount: "₹10 Lakh to ₹1 Crore",
    benefit: "Composite loan (term loan + working capital) for greenfield projects",
    eligibility: "At least one Woman or SC/ST entrepreneur per bank branch.",
    portalUrl: "https://www.standupmitra.in",
    badge: "For Women & SC/ST",
  },
  {
    id: "sisfs",
    name: "Startup India Seed Fund Scheme (SISFS)",
    category: "subsidy",
    department: "DPIIT / Startup India",
    maxAmount: "Up to ₹50 Lakh",
    benefit: "Grants up to ₹20L for validation + ₹50L debt/convertible debenture",
    eligibility: "DPIIT-recognized startups incorporated within 2 years.",
    portalUrl: "https://seedfund.startupindia.gov.in",
    badge: "For Tech & D2C",
  },
  {
    id: "clcss",
    name: "Credit Linked Capital Subsidy Scheme (CLCSS)",
    category: "tech",
    department: "Ministry of MSME",
    maxAmount: "Up to ₹15 Lakh",
    benefit: "15% upfront capital subsidy on institutional finance for modern machinery",
    eligibility: "Existing MSMEs upgrading from obsolete technology to state-of-the-art plant.",
    portalUrl: "https://my.msme.gov.in",
    badge: "Tech Upgrade",
  },
];

export default function SchemesPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState("");

  // Subsidy Calculator State
  const [projectCost, setProjectCost] = useState<number>(1500000); // 15 Lakh
  const [locationType, setLocationType] = useState<"urban" | "rural">("rural");
  const [categoryType, setCategoryType] = useState<"general" | "special">("special");

  // PMEGP Calculation logic
  let subsidyPercent = 15;
  if (locationType === "urban" && categoryType === "general") subsidyPercent = 15;
  else if (locationType === "urban" && categoryType === "special") subsidyPercent = 25;
  else if (locationType === "rural" && categoryType === "general") subsidyPercent = 25;
  else if (locationType === "rural" && categoryType === "special") subsidyPercent = 35;

  const calculatedSubsidy = Math.round((projectCost * subsidyPercent) / 100);
  const ownContribution = Math.round(
    projectCost * (categoryType === "general" ? 0.1 : 0.05)
  );
  const bankLoanRequired = projectCost - calculatedSubsidy - ownContribution;

  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesCategory =
      selectedFilter === "all" || scheme.category === selectedFilter;
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      scheme.department.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Government Schemes Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-2 tracking-tight">
          Subsidies & Collateral-Free Loans
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
          Central aur state government schemes ke direct details, maximum funding limits aur interactive subsidy calculator.
        </p>
      </div>

      {/* Interactive Subsidy Calculator Box */}
      <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-14">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Live Interactive Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              PMEGP Government Subsidy Estimator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Apna project cost aur location select karein to see exact government subsidy amount credited to your bank account.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-5 text-right w-full lg:w-auto">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
              Estimated Govt Subsidy
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block mt-1">
              ₹{calculatedSubsidy.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-neutral-400 mt-0.5 block">
              ({subsidyPercent}% of Project Cost)
            </span>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-xs">
          <div>
            <label className="text-neutral-400 font-semibold block mb-2">
              Total Project Cost: <strong className="text-white">₹{projectCost.toLocaleString("en-IN")}</strong>
            </label>
            <input
              type="range"
              min={200000}
              max={5000000}
              step={100000}
              value={projectCost}
              onChange={(e) => setProjectCost(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
              <span>₹2 Lakh</span>
              <span>₹25 Lakh</span>
              <span>₹50 Lakh</span>
            </div>
          </div>

          <div>
            <label className="text-neutral-400 font-semibold block mb-2">
              Business Location
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLocationType("rural")}
                className={`py-2 px-3 rounded-xl border font-bold transition-all cursor-pointer text-center ${
                  locationType === "rural"
                    ? "bg-white text-neutral-950 border-white"
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                Rural Area (25-35%)
              </button>
              <button
                type="button"
                onClick={() => setLocationType("urban")}
                className={`py-2 px-3 rounded-xl border font-bold transition-all cursor-pointer text-center ${
                  locationType === "urban"
                    ? "bg-white text-neutral-950 border-white"
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                Urban Area (15-25%)
              </button>
            </div>
          </div>

          <div>
            <label className="text-neutral-400 font-semibold block mb-2">
              Founder Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCategoryType("special")}
                className={`py-2 px-3 rounded-xl border font-bold transition-all cursor-pointer text-center ${
                  categoryType === "special"
                    ? "bg-white text-neutral-950 border-white"
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                Women / SC / ST / OBC
              </button>
              <button
                type="button"
                onClick={() => setCategoryType("general")}
                className={`py-2 px-3 rounded-xl border font-bold transition-all cursor-pointer text-center ${
                  categoryType === "general"
                    ? "bg-white text-neutral-950 border-white"
                    : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                General Male
              </button>
            </div>
          </div>
        </div>

        {/* Breakdown Output */}
        <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
            <span className="text-neutral-400">Own Contribution:</span>
            <span className="text-white font-bold block text-sm mt-0.5">
              ₹{ownContribution.toLocaleString("en-IN")} ({categoryType === "general" ? "10%" : "5%"})
            </span>
          </div>

          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
            <span className="text-neutral-400">Govt Subsidy Benefit:</span>
            <span className="text-emerald-400 font-bold block text-sm mt-0.5">
              ₹{calculatedSubsidy.toLocaleString("en-IN")} ({subsidyPercent}%)
            </span>
          </div>

          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
            <span className="text-neutral-400">Bank Loan Required:</span>
            <span className="text-white font-bold block text-sm mt-0.5">
              ₹{bankLoanRequired.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      {/* Directory Search & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
          {[
            { id: "all", label: "All Schemes" },
            { id: "subsidy", label: "Capital Subsidies" },
            { id: "loan", label: "Collateral-Free Loans" },
            { id: "women", label: "Women & SC/ST" },
            { id: "tech", label: "Tech Upgradation" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedFilter === tab.id
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-white text-neutral-600 border-black/[0.08] hover:bg-neutral-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search schemes (e.g. Mudra, PMEGP)..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full text-xs px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400"
          />
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="p-6 rounded-3xl bg-white border border-black/[0.07] shadow-2xs hover:shadow-xs hover:border-black/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-black/[0.05]">
                  {scheme.badge}
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">
                  {scheme.department}
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-950 leading-snug">
                {scheme.name}
              </h3>

              <div className="mt-4 p-3 bg-neutral-50/70 rounded-xl border border-black/[0.04] space-y-1.5 text-xs">
                <div>
                  <span className="text-neutral-400">Funding Limit: </span>
                  <strong className="text-neutral-900">{scheme.maxAmount}</strong>
                </div>
                <div>
                  <span className="text-neutral-400">Core Benefit: </span>
                  <strong className="text-emerald-700">{scheme.benefit}</strong>
                </div>
              </div>

              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                <strong className="text-neutral-900">Eligibility: </strong>
                {scheme.eligibility}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
              <Link
                href="/guide"
                className="font-bold text-neutral-950 hover:underline"
              >
                Apply with Prarambh
              </Link>
              <a
                href={scheme.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 font-medium"
              >
                <span>Govt Portal</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 stroke-current stroke-2">
                  <path d="M4 12L12 4M12 4H6M12 4V10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
