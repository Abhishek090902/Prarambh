"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Transparent Pricing
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-2 tracking-tight">
          Simple Plans for Every Indian Founder
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
          Start for free to explore licences and calculate government subsidies. Upgrade only when you want automated compliance alerts and document management.
        </p>

        {/* Monthly / Annual Switcher */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-neutral-100 border border-black/[0.06]">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              !isAnnual
                ? "bg-white text-neutral-950 shadow-xs border border-black/[0.08]"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnnual
                ? "bg-white text-neutral-950 shadow-xs border border-black/[0.08]"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
              Save 33%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Card 1: Free Starter */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Starter
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1">Free Explorer</h3>
              <p className="text-xs text-neutral-500 mt-1">
                For aspiring founders testing an idea or checking requirements.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.05]">
              <span className="text-4xl font-extrabold text-neutral-950">₹0</span>
              <span className="text-xs text-neutral-400 ml-1">/ forever</span>
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>10-Stage Operating System access</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>AI Prompt Navigator (Hindi & English)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Central & State Licence Matrix</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Govt Subsidy & PMEGP Calculator</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Direct official government portal links</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Link
              href="/guide"
              className="w-full inline-flex items-center justify-center bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 font-semibold text-xs py-3 rounded-full transition-all"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Card 2: Pro Founder (Featured) */}
        <div className="p-8 rounded-3xl bg-white border-2 border-neutral-950 shadow-lg flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider">
            Most Popular
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Pro Founder
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1">Growth & Compliance</h3>
              <p className="text-xs text-neutral-500 mt-1">
                For active businesses needing zero-penalty compliance & document storage.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.05]">
              <span className="text-4xl font-extrabold text-neutral-950">
                {isAnnual ? "₹333" : "₹499"}
              </span>
              <span className="text-xs text-neutral-400 ml-1">/ month</span>
              {isAnnual && (
                <span className="block text-[11px] text-emerald-600 font-medium mt-0.5">
                  Billed annually at ₹3,999/yr
                </span>
              )}
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-neutral-800 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Everything in Starter plan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Automated GST & ROC filing deadline alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>WhatsApp & SMS compliance alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Encrypted Document Vault (Aadhaar/PAN/Certificates)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Pre-filled PMEGP & Mudra bank project report template</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Unlimited AI Business Blueprint generations</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Link
              href="/guide"
              className="w-full inline-flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs py-3 rounded-full transition-all shadow-sm"
            >
              Start 14-Day Free Trial
            </Link>
          </div>
        </div>

        {/* Card 3: CA & Consultant Partner */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Practitioners
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1">CA & Partner Network</h3>
              <p className="text-xs text-neutral-500 mt-1">
                For chartered accountants, tax consultants, and startup incubators.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.05]">
              <span className="text-4xl font-extrabold text-neutral-950">
                {isAnnual ? "₹1,499" : "₹1,999"}
              </span>
              <span className="text-xs text-neutral-400 ml-1">/ month</span>
              {isAnnual && (
                <span className="block text-[11px] text-neutral-500 font-medium mt-0.5">
                  Billed annually at ₹17,999/yr
                </span>
              )}
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Manage up to 25 client businesses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Bulk compliance health scans & export</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Co-branded client roadmap reports</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-950 font-bold">✓</span>
                <span>Dedicated relationship manager</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Link
              href="/guide"
              className="w-full inline-flex items-center justify-center bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 font-semibold text-xs py-3 rounded-full transition-all"
            >
              Contact Partner Sales
            </Link>
          </div>
        </div>

      </div>

      {/* Trust & Guarantee Strip */}
      <div className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] text-center max-w-2xl mx-auto text-xs text-neutral-500">
        <span className="font-bold text-neutral-900">100% Money-Back Guarantee. </span>
        <span>Cancel anytime in 1 click. Zero lock-in period, zero hidden broker fees.</span>
      </div>
    </div>
  );
}
