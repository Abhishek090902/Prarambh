"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface ChecklistItem {
  id: string;
  title: string;
  authority: string;
  cost: string;
  time: string;
  mandatory: boolean;
  portalUrl: string;
  description: string;
}

const industryGuides: Record<
  string,
  {
    name: string;
    description: string;
    checklists: ChecklistItem[];
  }
> = {
  food: {
    name: "Food & Cloud Kitchen",
    description: "Cloud kitchen, cafe, restaurant, bakery, aur food packaging businesses ke liye complete setup guide.",
    checklists: [
      {
        id: "fssai",
        title: "FSSAI State / Basic Food License",
        authority: "FoSCoS Portal (Central/State)",
        cost: "₹100 (Basic) / ₹2,000 (State)",
        time: "5-10 Days",
        mandatory: true,
        portalUrl: "https://foscos.fssai.gov.in",
        description: "Swiggy, Zomato aur kisi bhi food business ke liye 100% mandatory license.",
      },
      {
        id: "gumasta",
        title: "Shop & Establishment Act (Gumasta)",
        authority: "State Labour Dept",
        cost: "₹500 - ₹1,500",
        time: "2-4 Days",
        mandatory: true,
        portalUrl: "https://labour.gov.in",
        description: "Kitchen premises ke commercial operation aur staff employment ke liye required.",
      },
      {
        id: "udyam",
        title: "MSME Udyam Certificate",
        authority: "Ministry of MSME",
        cost: "₹0 (Completely Free)",
        time: "Instant",
        mandatory: true,
        portalUrl: "https://udyamregistration.gov.in",
        description: "Kitchen equipment subsidy aur bank collateral-free loans ke liye zaroori.",
      },
      {
        id: "gst",
        title: "GST Registration (5% Composition / Regular)",
        authority: "GSTN Portal",
        cost: "₹0 (Govt Fee)",
        time: "3-7 Days",
        mandatory: true,
        portalUrl: "https://www.gst.gov.in",
        description: "Online delivery platforms par onboarding ke liye GST number mandatory hota hai.",
      },
      {
        id: "fire_noc",
        title: "Fire NOC / Municipal Health Trade License",
        authority: "Local Municipal Corporation",
        cost: "State dependent",
        time: "7-14 Days",
        mandatory: false,
        portalUrl: "https://services.india.gov.in",
        description: "Commercial gas pipeline ya deep fry equipment setup ke liye zaroori hota hai.",
      },
    ],
  },
  retail: {
    name: "Retail & Textile Boutique",
    description: "Clothing showroom, fashion boutique, jewellery, aur general merchandise retail setups ke liye.",
    checklists: [
      {
        id: "gst_retail",
        title: "GST Registration (Input Tax Credit)",
        authority: "GSTN Portal",
        cost: "₹0",
        time: "3-7 Days",
        mandatory: true,
        portalUrl: "https://www.gst.gov.in",
        description: "Fabric aur readymade purchase par ITC claim karne ke liye.",
      },
      {
        id: "gumasta_retail",
        title: "Trade License & Shop Act",
        authority: "Municipal Corporation",
        cost: "₹1,000 - ₹2,500",
        time: "3-5 Days",
        mandatory: true,
        portalUrl: "https://services.india.gov.in",
        description: "Commercial shop front run karne ke liye local body license.",
      },
      {
        id: "udyam_retail",
        title: "Udyam MSME Registration",
        authority: "Ministry of MSME",
        cost: "₹0",
        time: "Instant",
        mandatory: true,
        portalUrl: "https://udyamregistration.gov.in",
        description: "Priority sector lending aur Mudra working capital loans ke liye.",
      },
      {
        id: "trademark",
        title: "Brand Name & Trademark Filing",
        authority: "IP India Portal",
        cost: "₹4,500 (Govt Fee for MSME)",
        time: "Instant Diary No",
        mandatory: false,
        portalUrl: "https://ipindia.gov.in",
        description: "Apne boutique brand name aur logo ko copy hone se bachane ke liye.",
      },
    ],
  },
  manufacturing: {
    name: "Manufacturing & Factory Setup",
    description: "Packaging units, plastics, food processing, eco-products, aur fabrication units ke liye.",
    checklists: [
      {
        id: "pmegp",
        title: "PMEGP 35% Capital Subsidy Application",
        authority: "KVIC / KVIB / DIC Portal",
        cost: "₹0",
        time: "15-30 Days",
        mandatory: true,
        portalUrl: "https://www.kviconline.gov.in/pmegpeportal",
        description: "Machinery aur factory setup par up to 35% government capital subsidy.",
      },
      {
        id: "pcb_noc",
        title: "Pollution Control Board Consent (CTE / CTO)",
        authority: "State PCB (Green/White Category)",
        cost: "₹1,500 - ₹5,000",
        time: "7-20 Days",
        mandatory: true,
        portalUrl: "https://ocmms.nic.in",
        description: "Factory aur manufacturing unit operational karne ke liye state PCB clearance.",
      },
      {
        id: "factory_act",
        title: "Factory License Registration",
        authority: "Directorate of Industrial Safety",
        cost: "State dependent",
        time: "15 Days",
        mandatory: false,
        portalUrl: "https://labour.gov.in",
        description: "Agar 10+ workers power ke sath ya 20+ workers bina power ke employ hain.",
      },
    ],
  },
  services: {
    name: "Tech & Professional Services",
    description: "Digital agencies, software development, consulting, coaching, aur creative services.",
    checklists: [
      {
        id: "pvt_ltd",
        title: "Private Limited Company / LLP Incorporation",
        authority: "Ministry of Corporate Affairs (SPICe+)",
        cost: "₹1,000 - ₹4,000 (Govt fees)",
        time: "5-10 Days",
        mandatory: true,
        portalUrl: "https://www.mca.gov.in",
        description: "VC funding, angel investment, aur ESOP issue karne ke liye best entity.",
      },
      {
        id: "startup_india",
        title: "DPIIT Startup India Recognition",
        authority: "Startup India Portal",
        cost: "₹0",
        time: "2-4 Days",
        mandatory: true,
        portalUrl: "https://www.startupindia.gov.in",
        description: "Section 80-IAC under 3-year income tax exemption aur patent subsidy.",
      },
      {
        id: "lut_gst",
        title: "Letter of Undertaking (LUT) for Zero GST Exports",
        authority: "GSTN Portal",
        cost: "₹0",
        time: "Instant",
        mandatory: false,
        portalUrl: "https://www.gst.gov.in",
        description: "Foreign clients ko bina 18% GST charge kiye invoice karne ke liye.",
      },
    ],
  },
};

function GuideContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [selectedIndustry, setSelectedIndustry] = useState<string>("food");
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [customSearch, setCustomSearch] = useState(initialQuery);

  const guide = industryGuides[selectedIndustry] || industryGuides.food;

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round(
    (completedItems.length / guide.checklists.length) * 100
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Interactive Business Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-2 tracking-tight">
          Step-by-Step Business Navigator
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
          Apna industry select karein aur dekhein ki kaunse licences, documents aur schemes mandatory hain.
        </p>

        {customSearch && (
          <div className="mt-4 inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 text-xs px-4 py-1.5 rounded-full">
            <span className="font-semibold">Query:</span>
            <span>&ldquo;{customSearch}&rdquo;</span>
            <button
              onClick={() => setCustomSearch("")}
              className="text-neutral-400 hover:text-neutral-900 ml-1 font-bold"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Industry Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
        {Object.entries(industryGuides).map(([key, val]) => {
          const isSelected = selectedIndustry === key;
          return (
            <button
              key={key}
              onClick={() => {
                setSelectedIndustry(key);
                setCompletedItems([]);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                isSelected
                  ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                  : "bg-white text-neutral-600 border-black/[0.08] hover:border-black/20 hover:bg-neutral-50"
              }`}
            >
              {val.name}
            </button>
          );
        })}
      </div>

      {/* Progress & Overview Bar */}
      <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-950">{guide.name}</h2>
            <p className="text-xs text-neutral-500 mt-1">{guide.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-neutral-900">
              Readiness: {progressPercentage}%
            </span>
            <div className="w-32 h-2.5 rounded-full bg-neutral-100 overflow-hidden">
              <div
                className="h-full bg-neutral-950 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Checklist Cards */}
        <div className="space-y-4 mt-6">
          {guide.checklists.map((item, index) => {
            const isDone = completedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isDone
                    ? "bg-neutral-50/70 border-black/[0.05] opacity-80"
                    : "bg-white border-black/[0.08] shadow-2xs hover:border-black/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all cursor-pointer ${
                        isDone
                          ? "bg-neutral-950 text-white border-neutral-950"
                          : "bg-white border-neutral-300 hover:border-neutral-900 text-transparent"
                      }`}
                    >
                      ✓
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-neutral-950">
                          {index + 1}. {item.title}
                        </span>
                        {item.mandatory ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                            Mandatory
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2.5 text-[11px] text-neutral-500">
                        <span>Authority: <strong className="text-neutral-800">{item.authority}</strong></span>
                        <span>Govt Fee: <strong className="text-neutral-800">{item.cost}</strong></span>
                        <span>Timeline: <strong className="text-neutral-800">{item.time}</strong></span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={item.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-950 text-neutral-800 hover:text-white text-xs font-semibold transition-all border border-black/[0.06]"
                  >
                    <span>Direct Govt Portal</span>
                    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 stroke-current stroke-2">
                      <path d="M4 12L12 4M12 4H6M12 4V10" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Assistance Box */}
      <div className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          <span className="font-bold text-neutral-900 block">Confused about which applies to your turnover?</span>
          <span className="text-neutral-500">Prarambh automatically cross-references your state municipal rules and revenue bracket.</span>
        </div>
        <Link
          href="/schemes"
          className="inline-flex items-center gap-1.5 bg-neutral-950 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all shrink-0"
        >
          <span>Calculate Subsidies</span>
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-xs text-neutral-500 font-medium">
          Loading Prarambh Navigator...
        </div>
      }
    >
      <GuideContent />
    </Suspense>
  );
}
