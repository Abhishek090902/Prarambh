"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LicenceItem {
  id: string;
  name: string;
  level: "Central" | "State" | "Municipal";
  authority: string;
  govtFee: string;
  validity: string;
  turnoverLimit: string;
  mandatoryFor: string[];
  exemptedFor: string[];
  portalUrl: string;
  documents: string[];
}

const licenceDatabase: LicenceItem[] = [
  {
    id: "udyam",
    name: "MSME Udyam Registration",
    level: "Central",
    authority: "Ministry of MSME, Govt of India",
    govtFee: "₹0 (100% Free)",
    validity: "Lifetime (No Renewal)",
    turnoverLimit: "Up to ₹250 Crore",
    mandatoryFor: ["All Manufacturing & Service businesses wanting subsidies or bank loans"],
    exemptedFor: ["None, every business is eligible"],
    portalUrl: "https://udyamregistration.gov.in",
    documents: ["Aadhaar of Founder", "PAN Card", "Business Bank Account details"],
  },
  {
    id: "gst",
    name: "Goods & Services Tax (GST)",
    level: "Central",
    authority: "GST Network (CBIC)",
    govtFee: "₹0 (Official Govt Portal)",
    validity: "Active until cancelled",
    turnoverLimit: "> ₹40L for Goods (> ₹20L special states) / > ₹20L for Services",
    mandatoryFor: [
      "Any business selling inter-state",
      "E-commerce sellers (Amazon, Flipkart, Swiggy)",
      "Businesses crossing turnover threshold",
    ],
    exemptedFor: ["Local intra-state small businesses below threshold without e-commerce"],
    portalUrl: "https://www.gst.gov.in",
    documents: ["Electricity bill of premises", "Rent agreement / Ownership proof", "Bank cancelled cheque", "Aadhaar & PAN"],
  },
  {
    id: "fssai",
    name: "FSSAI Food Safety Licence / Registration",
    level: "Central",
    authority: "Food Safety and Standards Authority of India (FoSCoS)",
    govtFee: "₹100/yr (Basic) / ₹2,000/yr (State) / ₹7,500/yr (Central)",
    validity: "1 to 5 Years",
    turnoverLimit: "< ₹12L (Basic) | ₹12L to ₹20 Cr (State) | > ₹20 Cr (Central)",
    mandatoryFor: ["All Cloud Kitchens, Cafes, Bakeries, Food Trucks, Packaging units"],
    exemptedFor: ["Non-food commercial businesses"],
    portalUrl: "https://foscos.fssai.gov.in",
    documents: ["Kitchen layout blueprint", "Water test report (for state license)", "Food handler medical certificate", "Electricity bill"],
  },
  {
    id: "gumasta",
    name: "Shop & Establishment Act (Gumasta)",
    level: "State",
    authority: "State Labour Department / Municipal Corporation",
    govtFee: "₹500 to ₹2,500 (Varies by State)",
    validity: "1 Year to Lifetime (State dependent)",
    turnoverLimit: "Any commercial establishment with or without employees",
    mandatoryFor: ["Physical commercial offices, shops, warehouses, kitchens"],
    exemptedFor: ["Pure home-run virtual consulting without commercial premises in some states"],
    portalUrl: "https://labour.gov.in",
    documents: ["Photo of shop front with Hindi/Regional name board", "Rent agreement", "Partners/Proprietor ID proof"],
  },
  {
    id: "trade",
    name: "Municipal Health Trade License",
    level: "Municipal",
    authority: "Local Municipal Corporation (Nagar Nigam)",
    govtFee: "₹1,000 to ₹5,000/year",
    validity: "Annual Renewal (April 1st)",
    turnoverLimit: "Applicable to specific business trades (Food, Salon, Chemical, Printing)",
    mandatoryFor: ["Health and sanitation related retail businesses"],
    exemptedFor: ["IT software consulting and pure digital agencies"],
    portalUrl: "https://services.india.gov.in",
    documents: ["Property tax receipt", "Water bill", "NOC from neighbors/society"],
  },
  {
    id: "iec",
    name: "Import Export Code (IEC)",
    level: "Central",
    authority: "Directorate General of Foreign Trade (DGFT)",
    govtFee: "₹500 (Official DGFT Portal)",
    validity: "Lifetime (Annual update required)",
    turnoverLimit: "Mandatory for any import/export transaction",
    mandatoryFor: ["Cross-border exporters, digital SaaS exporters, importers"],
    exemptedFor: ["Pure domestic trading businesses"],
    portalUrl: "https://www.dgft.gov.in",
    documents: ["Entity PAN Card", "Bank Certificate / Cancelled Cheque", "Address Proof"],
  },
];

const indianStates = [
  "Madhya Pradesh",
  "Maharashtra",
  "Delhi NCR",
  "Karnataka",
  "Gujarat",
  "Uttar Pradesh",
  "Tamil Nadu",
  "Rajasthan",
];

export default function LicencesPage() {
  const [selectedState, setSelectedState] = useState<string>("Madhya Pradesh");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedLicence, setSelectedLicence] = useState<LicenceItem>(licenceDatabase[0]);

  const filteredLicences = licenceDatabase.filter((item) => {
    if (selectedLevel === "all") return true;
    return item.level === selectedLevel;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Statutory Compliance Finder
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-2 tracking-tight">
          Central & State Licence Matrix
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
          Pata karein ki aapke business, state aur turnover ke hisaab se kaunse registrations mandatory hain aur kaunse unnecessary.
        </p>
      </div>

      {/* State Selector Pill Strip */}
      <div className="bg-neutral-50/70 border border-black/[0.06] rounded-2xl p-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 text-xs">
          <span className="font-bold text-neutral-900">
            Select Your Business Location / State:
          </span>
          <span className="text-neutral-500">
            Selected: <strong className="text-neutral-950">{selectedState}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {indianStates.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedState === state
                  ? "bg-neutral-950 text-white font-semibold shadow-xs"
                  : "bg-white text-neutral-700 hover:bg-neutral-200/70 border border-black/[0.06]"
              }`}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Level Filters (All / Central / State / Municipal) */}
      <div className="flex items-center gap-2 mb-6 text-xs">
        {["all", "Central", "State", "Municipal"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer border ${
              selectedLevel === level
                ? "bg-neutral-950 text-white border-neutral-950"
                : "bg-white text-neutral-600 border-black/[0.08] hover:bg-neutral-50"
            }`}
          >
            {level === "all" ? "All Jurisdictions" : `${level} Licences`}
          </button>
        ))}
      </div>

      {/* Two Column Layout: List & Active Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Licence List */}
        <div className="lg:col-span-1 space-y-3">
          {filteredLicences.map((licence) => {
            const isSelected = selectedLicence.id === licence.id;
            return (
              <div
                key={licence.id}
                onClick={() => setSelectedLicence(licence)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-neutral-950 shadow-md translate-x-1"
                    : "bg-white border-black/[0.07] hover:border-black/20 hover:bg-neutral-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    licence.level === "Central"
                      ? "bg-purple-50 text-purple-800"
                      : licence.level === "State"
                      ? "bg-blue-50 text-blue-800"
                      : "bg-amber-50 text-amber-800"
                  }`}>
                    {licence.level}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">{licence.govtFee}</span>
                </div>

                <h3 className="text-sm font-bold text-neutral-950 mt-2">
                  {licence.name}
                </h3>
                <span className="text-xs text-neutral-500 mt-0.5 block line-clamp-1">
                  {licence.authority}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Col: Deep Details Inspector */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-black/[0.06]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800">
                  {selectedLicence.level} Level
                </span>
                <span className="text-xs text-neutral-400">•</span>
                <span className="text-xs text-neutral-500 font-medium">
                  State Rule Applied: {selectedState}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-neutral-950 mt-1">
                {selectedLicence.name}
              </h2>
              <span className="text-xs text-neutral-500 block mt-0.5">
                Regulating Authority: <strong>{selectedLicence.authority}</strong>
              </span>
            </div>

            <a
              href={selectedLicence.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shrink-0"
            >
              <span>Direct Portal</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
                <path d="M4 12L12 4M12 4H6M12 4V10" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-black/[0.06] text-xs">
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
              <span className="text-neutral-400 font-medium block">Official Govt Fee</span>
              <span className="text-neutral-950 font-bold text-sm block mt-0.5">
                {selectedLicence.govtFee}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
              <span className="text-neutral-400 font-medium block">Validity / Renewal</span>
              <span className="text-neutral-950 font-bold text-sm block mt-0.5">
                {selectedLicence.validity}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
              <span className="text-neutral-400 font-medium block">Turnover Threshold</span>
              <span className="text-neutral-950 font-bold text-xs block mt-0.5 line-clamp-2">
                {selectedLicence.turnoverLimit}
              </span>
            </div>
          </div>

          <div className="space-y-6 pt-6 text-xs">
            <div>
              <span className="font-bold text-neutral-900 block mb-2">Mandatory For:</span>
              <ul className="space-y-1.5 text-neutral-600">
                {selectedLicence.mandatoryFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold text-neutral-900 block mb-2">Documents Checklist for Application:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedLicence.documents.map((doc) => (
                  <div key={doc} className="p-2.5 rounded-xl bg-neutral-50 border border-black/[0.04] flex items-center gap-2 text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-100/70 border border-black/[0.05] flex items-center justify-between">
              <span className="text-neutral-600">
                Want automated renewal reminders before penalty dates?
              </span>
              <Link href="/pricing" className="font-bold text-neutral-950 underline underline-offset-4">
                Explore Pro →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
