"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const dynamicQuestions = [
  "Bhopal me cloud kitchen start karna hai...",
  "Textile boutique ke liye GST aur Gumasta license kaise milega?",
  "MSME Udyam registration & PMEGP subsidy ke rules kya hain?",
  "Retail dukaan ko online e-commerce pe scale karna hai...",
  "Pvt Ltd company register karni hai ya LLP better option hai?",
  "Food truck business ke liye FSSAI aur local NOC kaise lein?",
  "Manufacturing unit ke liye CGTMSE collateral-free loan chahiye...",
  "D2C brand ke liye trademark aur packaging compliance kya hai?",
];

const tenStages = [
  {
    id: "think",
    number: "01",
    name: "Think",
    tagline: "Idea & Market Fit",
    description: "Business viability, target audience research, aur competitor analysis.",
    deliverable: "Idea Viability Scorecard",
    documents: ["No documents required yet"],
    nextStep: "Target customers se interview aur pricing structure decide karein.",
  },
  {
    id: "validate",
    number: "02",
    name: "Validate",
    tagline: "Customer Interest",
    description: "Pilot testing, pre-orders, aur initial customer feedback check.",
    deliverable: "Validation Report",
    documents: ["Product / Service Prototype"],
    nextStep: "Pre-launch signups aur location footfall survey finalize karein.",
  },
  {
    id: "plan",
    number: "03",
    name: "Plan",
    tagline: "Financials & Budget",
    description: "Initial capital requirement, margin calculations, aur unit economics.",
    deliverable: "12-Month Cashflow Model",
    documents: ["Cost of Machinery", "Estimated Rent", "Working Capital"],
    nextStep: "Government subsidy eligibility check karein (PMEGP / Mudra).",
  },
  {
    id: "setup",
    number: "04",
    name: "Setup",
    tagline: "Legal Entity & Name",
    description: "Sole Proprietorship, LLP, One Person Company, ya Private Limited chunna.",
    deliverable: "Certificate of Incorporation / Partnership Deed",
    documents: ["PAN Card", "Aadhaar Card", "Address Proof", "Electricity Bill"],
    nextStep: "MCA RUN name approval ya state registry filing.",
  },
  {
    id: "prepare",
    number: "05",
    name: "Prepare",
    tagline: "Licences & Registrations",
    description: "Udyam MSME, GST, FSSAI Food License, aur Shop Act (Gumasta).",
    deliverable: "Central & State Registrations",
    documents: ["Rent Agreement", "NOC from Landlord", "Bank Cancelled Cheque"],
    nextStep: "Udyam portal par free instant registration karein.",
  },
  {
    id: "launch",
    number: "06",
    name: "Launch",
    tagline: "First Customers",
    description: "Current Account opening, billing software setup, aur opening marketing.",
    deliverable: "Operational Bank Account & Billing POS",
    documents: ["GST Certificate", "Udyam Certificate", "Entity PAN"],
    nextStep: "Swiggy/Zomato ya local trade portals par live onboarding.",
  },
  {
    id: "run",
    number: "07",
    name: "Run",
    tagline: "Daily Operations",
    description: "GST return filings (GSTR-1, GSTR-3B), TDS, vendor billing, payroll.",
    deliverable: "Monthly Compliance Scorecard",
    documents: ["Purchase Invoices", "Sales Registers"],
    nextStep: "Quarterly filing deadlines aur bank reconciliation review.",
  },
  {
    id: "grow",
    number: "08",
    name: "Grow",
    tagline: "Funding & Scaling",
    description: "CGTMSE collateral-free loan, GeM portal vendor registration, ONDC seller account.",
    deliverable: "Expansion Capital & Government Tenders",
    documents: ["3 Years ITR / Projected Balance Sheet", "GST Returns"],
    nextStep: "GeM (Government e-Marketplace) par supplier register karein.",
  },
  {
    id: "change",
    number: "09",
    name: "Change",
    tagline: "Pivot / Restructure",
    description: "Proprietorship to Pvt Ltd conversion, adding new directors/partners, new branches.",
    deliverable: "Amended MoA/AoA & Multi-state GST",
    documents: ["Board Resolution", "ROC Form MGT-14"],
    nextStep: "ROC compliance aur multi-state GST registration.",
  },
  {
    id: "exit",
    number: "10",
    name: "Exit",
    tagline: "Sale / Succession / Strike-off",
    description: "Business valuation, merger, equity buyout, ya voluntary closure (FTE strike-off).",
    deliverable: "Valuation Report / ROC Strike-off Certificate",
    documents: ["Audited Financials", "NOC from Creditors"],
    nextStep: "Legal indemnity aur tax clearance certificate obtain karein.",
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedJourney, setSelectedJourney] = useState<"idea" | "existing">("idea");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStage, setActiveStage] = useState(tenStages[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Typewriter animation state
  const [animatedText, setAnimatedText] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuestion = dynamicQuestions[questionIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (animatedText.length < currentQuestion.length) {
        timer = setTimeout(() => {
          setAnimatedText(currentQuestion.slice(0, animatedText.length + 1));
        }, 45);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (animatedText.length > 0) {
        timer = setTimeout(() => {
          setAnimatedText(currentQuestion.slice(0, animatedText.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setQuestionIndex((prev) => (prev + 1) % dynamicQuestions.length);
      }
    }

    return () => clearTimeout(timer);
  }, [animatedText, isDeleting, questionIndex]);

  const quickCategories = [
    {
      id: "kitchen",
      title: "Cloud Kitchen",
      query: "Bhopal me cloud kitchen start karna hai",
      badge: "FSSAI + Setup",
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
    },
    {
      id: "boutique",
      title: "Textile Boutique",
      query: "Textile boutique ke liye GST aur Gumasta license",
      badge: "GST & Gumasta",
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      id: "msme",
      title: "MSME Scheme",
      query: "MSME Udyam registration & PMEGP subsidy",
      badge: "PMEGP 35%",
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors">
          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2 2 7h20L12 2z" />
        </svg>
      ),
    },
    {
      id: "scale",
      title: "Scale Online",
      query: "Retail store ko e-commerce pe scale karna hai",
      badge: "D2C & E-com",
      renderIcon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
  ];

  const handlePromptSelect = (prompt: string) => {
    setSearchQuery(prompt);
    router.push(`/guide?q=${encodeURIComponent(prompt)}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryToUse = searchQuery.trim() || dynamicQuestions[questionIndex];
    router.push(`/guide?q=${encodeURIComponent(queryToUse)}`);
  };

  const faqs = [
    {
      q: "Kya Prarambh Hindi aur Hinglish me support karta hai?",
      a: "Haan, bilkul. Prarambh ko khas Indian business owners ke liye banaya gaya hai. Aap plain Hindi, English ya Hinglish me kuch bhi pooch sakte hain aur pura guidance step-by-step simple bhasha me milta hai.",
    },
    {
      q: "Kya mujhe har government portal par alag se dhakke khane padenge?",
      a: "Nahi! Prarambh 50+ central aur state government portals (MCA, FoSCoS, GSTN, Udyam, NSWS, GeM) ke direct links, exact document checklist aur eligibility rules ek jagah provide karta hai.",
    },
    {
      q: "Kya mujhe CA ya Vakil ki zaroorat padegi?",
      a: "Basic registrations jaise Udyam MSME, Shop Act (Gumasta), aur FSSAI Basic aap Prarambh ki guide dekh kar khud 15 minutes me free kar sakte hain. Jab complex MCA Private Limited filings ya audit ki zaroorat hoti hai, tab Prarambh aapko verify karke best step batata hai.",
    },
    {
      q: "PMEGP aur CGTMSE government subsidy loan me Prarambh kaise madad karta hai?",
      a: "Prarambh aapke business model aur location ke hisaab se calculate karta hai ki aapko 15% se 35% tak ki PMEGP subsidy milegi ya nahi, aur bank project report ke liye exact documentation checklist prepare karta hai.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[480px] bg-gradient-to-b from-neutral-100/60 via-neutral-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-800 shadow-2xs mb-7 hover:border-neutral-300 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-tight">India ka smart business guide</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-500 font-normal">AI-Powered OS</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-neutral-950 max-w-4xl leading-[1.08]">
          Idea se business tak. <br />
          <span className="text-neutral-400">Business se growth tak.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-normal">
          Prarambh aapko simple steps me batata hai ki{" "}
          <span className="font-semibold text-neutral-900">
            kya karna hai, kya chahiye, aur next best step kya hai
          </span>{" "}
          — business idea, setup, documents, licences, compliance, schemes aur growth tak.
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/guide"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 cursor-pointer"
          >
            <span>Start with your idea</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 stroke-current stroke-2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>

          <Link
            href="/schemes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-200/90 text-neutral-800 font-semibold text-sm px-7 py-3.5 rounded-full shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <span>I already run a business</span>
          </Link>
        </div>

        {/* Small Trust Line */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          <span>Hindi • Hinglish • English • Step-by-step guidance</span>
        </div>

        {/* Unified AI Command Capsule */}
        <div className="mt-10 w-full max-w-3xl text-left">
          <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.09),0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden">
            
            {/* Header Strip inside Capsule */}
            <div className="px-5 sm:px-6 pt-4 pb-2 flex items-center justify-between border-b border-black/[0.03]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-neutral-950 flex items-center justify-center text-white shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-white">
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.6-6.4l-2.1 2.1m-8.6 8.6l-2.1 2.1m0-12.8l2.1 2.1m8.6 8.6l2.1 2.1" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-neutral-950 tracking-tight">
                  Aapke mind me kya hai?
                </span>
                <span className="hidden sm:inline-block text-[11px] font-medium text-neutral-400">
                  • AI Business Navigator
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant Roadmap Ready</span>
              </div>
            </div>

            {/* Seamless Main Input Row */}
            <form onSubmit={handleFormSubmit} className="p-3 sm:p-4 flex items-center gap-3">
              <div className="pl-3 text-neutral-400 shrink-0">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-neutral-400">
                  <circle cx="9" cy="9" r="6" />
                  <path d="m14 14 4 4" />
                </svg>
              </div>

              <input
                id="ai-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={animatedText ? `“${animatedText}”` : "Type your business idea or question..."}
                className="w-full py-2.5 text-sm sm:text-base bg-transparent border-0 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-0 font-normal"
              />

              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                <span>Get Plan</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
            </form>

            {/* Bottom Quick Suggestion Shelf */}
            <div className="px-4 sm:px-6 py-2.5 bg-neutral-50/70 border-t border-black/[0.04] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1.5 shrink-0 text-neutral-400 pl-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-neutral-400">
                  <path d="M9.5 1.5a1.5 1.5 0 0 0-2.3-1.28A6.98 6.98 0 0 0 4 6c0 1.25.33 2.42.91 3.44A3.5 3.5 0 0 1 8 8a3.5 3.5 0 0 1 3.09 1.44A6.98 6.98 0 0 0 12 6c0-2.15-1-4.07-2.5-4.5z" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Trending:
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {quickCategories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handlePromptSelect(item.query)}
                    className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-neutral-100/80 border border-black/[0.07] hover:border-black/20 text-neutral-800 hover:text-neutral-950 text-xs transition-all shadow-2xs hover:shadow-xs cursor-pointer select-none"
                  >
                    <span className="shrink-0 flex items-center justify-center">{item.renderIcon()}</span>
                    <span className="font-semibold text-neutral-900 text-xs tracking-tight">{item.title}</span>
                    <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 group-hover:bg-neutral-200/80 px-1.5 py-0.2 rounded-md transition-colors">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DUAL-PATH JOURNEY SWITCHER (0→1 vs 1→100) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
            Choose Your Stage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-2 tracking-tight">
            Aap kis stage par hain?
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Chahe aap zero se start kar rahe hon ya already running business ko grow kar rahe hon, Prarambh aapka personalized roadmap tayyar karta hai.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="mt-6 inline-flex p-1.5 rounded-full bg-neutral-100 border border-black/[0.06] shadow-inner">
            <button
              onClick={() => setSelectedJourney("idea")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedJourney === "idea"
                  ? "bg-white text-neutral-950 shadow-xs border border-black/[0.08]"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Naya Business Start Karna Hai (0 → 1)
            </button>
            <button
              onClick={() => setSelectedJourney("existing")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedJourney === "existing"
                  ? "bg-white text-neutral-950 shadow-xs border border-black/[0.08]"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Existing Business Ko Grow Karna Hai (1 → 100)
            </button>
          </div>
        </div>

        {/* Dynamic Journey Content */}
        {selectedJourney === "idea" ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Idea Validation & Entity</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Proprietorship, LLP, ya Pvt Ltd? Apne budget aur partner count ke hisaab se sahi structure select karein.
              </p>
              <span className="inline-block text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                1-Day Resolution
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Central & State Licences</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Udyam MSME certificate, GST registration, aur state-specific Shop Act (Gumasta) license.
              </p>
              <span className="inline-block text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Direct Govt Portals
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Bank & Payment Setup</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Current account opening checklist, zero balance options, UPI QR code aur invoicing portal integration.
              </p>
              <span className="inline-block text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                Zero Paperwork
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Govt Setup Subsidy</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                PMEGP scheme ke under 15% to 35% capital subsidy for machinery, plant setup aur initial working capital.
              </p>
              <span className="inline-block text-[11px] font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                Up to ₹50 Lakh
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Compliance Health Scan</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                GSTR-1, GSTR-3B filings, annual MCA filings aur pending renewals ka automatic audit.
              </p>
              <span className="inline-block text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                Penalty Protection
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Collateral-Free Credit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                CGTMSE scheme ke tahat bina kisi collateral property ke ₹5 Crore tak ka business loan guarantee.
              </p>
              <span className="inline-block text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                ₹5 Cr Limit
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Govt Tenders & GeM</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                GeM (Government e-Marketplace) seller registration aur MSME purchase preference reservation.
              </p>
              <span className="inline-block text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                25% MSME Quota
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-black/20 transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Multi-Channel & ONDC</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Local dukaan se national brand banna — ONDC open network integration aur multi-state GST filing.
              </p>
              <span className="inline-block text-[11px] font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                Pan-India Reach
              </span>
            </div>
          </div>
        )}
      </section>

      {/* 3. 10-STAGE OPERATING SYSTEM (THINK → EXIT) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
            Complete Lifecycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-2 tracking-tight">
            10-Stage Business Operating System
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Click on any stage to see what applies, what is needed, and your next best action.
          </p>
        </div>

        {/* 10 Stage Horizontal Timeline Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6">
          {tenStages.map((stage) => {
            const isCurrent = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  isCurrent
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                    : "bg-white text-neutral-600 border-black/[0.07] hover:border-black/20 hover:bg-neutral-50"
                }`}
              >
                <span className={`text-[10px] font-mono ${isCurrent ? "text-neutral-400" : "text-neutral-400"}`}>
                  {stage.number}
                </span>
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspector Card */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-black/[0.06]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded">
                  Stage {activeStage.number}
                </span>
                <span className="text-xs font-semibold text-neutral-400">•</span>
                <span className="text-xs font-medium text-neutral-500">{activeStage.tagline}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1">
                {activeStage.name} Phase
              </h3>
              <p className="text-sm text-neutral-600 mt-1 max-w-xl">
                {activeStage.description}
              </p>
            </div>

            <div className="shrink-0 bg-neutral-50 p-4 rounded-2xl border border-black/[0.05] w-full lg:w-72">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Deliverable
              </span>
              <span className="text-xs font-bold text-neutral-900 block">
                {activeStage.deliverable}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-xs">
            <div>
              <span className="font-bold text-neutral-900 block mb-2">Documents Required:</span>
              <ul className="space-y-1.5 text-neutral-600">
                {activeStage.documents.map((doc) => (
                  <li key={doc} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold text-neutral-900 block mb-2">Recommended Next Step:</span>
              <p className="text-neutral-700 bg-neutral-50 p-3 rounded-xl border border-black/[0.04] leading-relaxed">
                {activeStage.nextStep}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between">
            <span className="text-xs text-neutral-400">
              Prarambh tracks every stage automatically with zero jargon.
            </span>
            <Link
              href="/guide"
              className="text-xs font-bold text-neutral-950 hover:text-neutral-700 underline underline-offset-4"
            >
              Open Full Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GOVERNMENT SCHEMES SPOTLIGHT */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
              Financial Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-1 tracking-tight">
              Top Government Schemes & Subsidies
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Government grants, capital subsidies, aur low-interest loans directly verified by Prarambh.
            </p>
          </div>
          <Link
            href="/schemes"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 shrink-0"
          >
            <span>Explore All Schemes</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: PMEGP */}
          <div className="bg-white rounded-2xl border border-black/[0.07] p-6 shadow-xs hover:shadow-sm hover:border-black/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  Up to 35% Subsidy
                </span>
                <span className="text-[11px] text-neutral-400">KVIC / MSME</span>
              </div>
              <h3 className="text-base font-bold text-neutral-950">PMEGP Scheme</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Prime Minister Employment Generation Programme — new manufacturing units ke liye ₹50 Lakh tak aur service businesses ke liye ₹20 Lakh tak project cost.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">Urban: 15-25% | Rural: 25-35%</span>
              <Link href="/schemes" className="font-bold text-neutral-950 hover:underline">
                Check Eligibility →
              </Link>
            </div>
          </div>

          {/* Card 2: CGTMSE */}
          <div className="bg-white rounded-2xl border border-black/[0.07] p-6 shadow-xs hover:shadow-sm hover:border-black/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60">
                  Collateral Free
                </span>
                <span className="text-[11px] text-neutral-400">SIDBI / Govt</span>
              </div>
              <h3 className="text-base font-bold text-neutral-950">CGTMSE Guarantee</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Credit Guarantee Fund Trust for Micro and Small Enterprises — bina kisi property mortgage ke ₹5 Crore tak credit facility.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">Guarantee Cover: up to 85%</span>
              <Link href="/schemes" className="font-bold text-neutral-950 hover:underline">
                Check Eligibility →
              </Link>
            </div>
          </div>

          {/* Card 3: Mudra */}
          <div className="bg-white rounded-2xl border border-black/[0.07] p-6 shadow-xs hover:shadow-sm hover:border-black/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200/60">
                  Instant Bank Loan
                </span>
                <span className="text-[11px] text-neutral-400">PMMY</span>
              </div>
              <h3 className="text-base font-bold text-neutral-950">Mudra Loan (Tarun / Kishore)</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Shishu (up to ₹50k), Kishore (₹50k to ₹5L), aur Tarun (₹5L to ₹10L) loans for retail dukaan, traders aur small manufacturers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">No processing fee on Shishu</span>
              <Link href="/schemes" className="font-bold text-neutral-950 hover:underline">
                Check Eligibility →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LICENCE & COMPLIANCE MATRIX */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
              Statutory Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-1 tracking-tight">
              Essential Licences & Registrations
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Prarambh clarifies whether a license is Central, State-specific, or optional for your turnover.
            </p>
          </div>
          <Link
            href="/licences"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-neutral-700 shrink-0"
          >
            <span>Open Licence Finder</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>

        <div className="overflow-x-auto no-scrollbar border border-black/[0.08] rounded-2xl bg-white shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50/80 border-b border-black/[0.06] text-neutral-600 uppercase tracking-wider text-[11px] font-bold">
              <tr>
                <th className="p-4">Licence / Registration</th>
                <th className="p-4">Authority & Scope</th>
                <th className="p-4">Applicability</th>
                <th className="p-4">Processing Time</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] text-neutral-800">
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-4 font-bold text-neutral-950">MSME Udyam Certificate</td>
                <td className="p-4 text-neutral-600">Ministry of MSME (Central)</td>
                <td className="p-4">All Manufacturing & Services</td>
                <td className="p-4 text-emerald-600 font-semibold">Instant (Free)</td>
                <td className="p-4">
                  <Link href="/licences" className="font-bold underline underline-offset-4 hover:text-neutral-600">
                    Guide →
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-4 font-bold text-neutral-950">GST Registration</td>
                <td className="p-4 text-neutral-600">GSTN / CBIC (Central & State)</td>
                <td className="p-4">&gt; ₹40L Goods / &gt; ₹20L Services / E-com</td>
                <td className="p-4">3 to 7 Days</td>
                <td className="p-4">
                  <Link href="/licences" className="font-bold underline underline-offset-4 hover:text-neutral-600">
                    Guide →
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-4 font-bold text-neutral-950">FSSAI Food Licence</td>
                <td className="p-4 text-neutral-600">FoSCoS Portal (Food Safety)</td>
                <td className="p-4">All Food, Cloud Kitchen & Cafe</td>
                <td className="p-4">5 to 15 Days</td>
                <td className="p-4">
                  <Link href="/licences" className="font-bold underline underline-offset-4 hover:text-neutral-600">
                    Guide →
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-4 font-bold text-neutral-950">Shop Act (Gumasta)</td>
                <td className="p-4 text-neutral-600">State Labour Dept / Municipal</td>
                <td className="p-4">Physical Commercial Establishments</td>
                <td className="p-4">1 to 5 Days</td>
                <td className="p-4">
                  <Link href="/licences" className="font-bold underline underline-offset-4 hover:text-neutral-600">
                    Guide →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. WHY PRARAMBH VS TRADITIONAL CA CHAOS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-1 tracking-tight">
            Why Founders Choose Prarambh
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            No running between government offices, no arbitrary broker commission, zero confusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/60 border border-black/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Traditional Way / Local Brokers</span>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Confusing, expensive, and delayed
            </h3>
            <ul className="space-y-3 text-xs text-neutral-600 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Brokers charge ₹5,000–₹15,000 for government forms that are completely free.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>You have to figure out which department (MCA, FoSCoS, GSTN) handles what.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Missed return deadlines result in huge daily late penalty fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Complex legal English jargon with zero plain Hindi/Hinglish explanations.</span>
              </li>
            </ul>
          </div>

          {/* Prarambh Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-900 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-950">The Prarambh Way</span>
            </div>
            <h3 className="text-lg font-bold text-neutral-950">
              One simple operating system for your business
            </h3>
            <ul className="space-y-3 text-xs text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Direct official government links so you never pay extra broker commissions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Just tell AI what you want to build; it tells you exact documents and next steps.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Automated compliance reminders so you never pay late penalty fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Built in Hindi, Hinglish, and English tailored for everyday Indian entrepreneurs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FOUNDER STORIES & TESTIMONIALS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
            Real Stories
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-1 tracking-tight">
            Trusted by Founders Across India
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            See how entrepreneurs from Bhopal, Surat, Indore, and Jaipur built their businesses with Prarambh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
            <p className="text-xs text-neutral-700 leading-relaxed italic">
              &ldquo;Mujhe Bhopal me cloud kitchen start karni thi aur CA 15,000 maang raha tha. Prarambh ne mujhe bataya ki FSSAI state aur Gumasta license direct FoSCoS portal se kaise lein. 10 din me kitchen live ho gayi!&rdquo;
            </p>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-950 block">Aman Sharma</span>
                <span className="text-[11px] text-neutral-500">Zaiqa Cloud Kitchen, Bhopal</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                FSSAI + Gumasta
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
            <p className="text-xs text-neutral-700 leading-relaxed italic">
              &ldquo;Textile boutique ke liye GST aur trade license ka confusion tha. Prarambh ke step-by-step guide ne zero hassle ke saath sab kuch clear kiya. Ab hum ONDC par bhi live hain.&rdquo;
            </p>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-950 block">Priya Patel</span>
                <span className="text-[11px] text-neutral-500">Surat Ethnic Hub, Surat</span>
              </div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                GST + ONDC
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
            <p className="text-xs text-neutral-700 leading-relaxed italic">
              &ldquo;Manufacturing unit lagane ke liye PMEGP subsidy ki eligibility check ki. Prarambh ke calculator ne exactly bataya ki 35% subsidy milegi. Machinery loan sanction ho gaya!&rdquo;
            </p>
            <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-950 block">Rajesh Verma</span>
                <span className="text-[11px] text-neutral-500">Verma Eco-Packs, Indore</span>
              </div>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                35% PMEGP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 mt-1 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-neutral-950 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-neutral-400 text-base">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-black/[0.03] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL HIGH-CONVERSION CTA */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
          {/* Ambient Glow in dark card */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 inline-block">
            Start Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Aapka business idea tayyar hai? <br />
            Shuru karein Prarambh ke saath.
          </h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-lg mx-auto">
            Free me apna customized business blueprint banayein aur dekhein ki kaunse licences aur government schemes aapke business par apply hote hain.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Build My Blueprint Free</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 stroke-current stroke-2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              href="/schemes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-850 font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
            >
              <span>Explore 35% Subsidies</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
