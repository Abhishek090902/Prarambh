"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

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

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<"idea" | "existing">("idea");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRoadmap, setActiveRoadmap] = useState<string>("Bhopal me cloud kitchen start karna hai");
  const [isGenerating, setIsGenerating] = useState(false);

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
        }, 45); // Typing speed
      } else {
        // Pause at the end of the full question
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (animatedText.length > 0) {
        timer = setTimeout(() => {
          setAnimatedText(currentQuestion.slice(0, animatedText.length - 1));
        }, 25); // Faster backspace speed
      } else {
        // Move to the next question
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
    triggerRoadmap(prompt);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryToUse = searchQuery.trim() || dynamicQuestions[questionIndex];
    triggerRoadmap(queryToUse);
  };

  const triggerRoadmap = (query: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      setActiveRoadmap(query);
      setIsGenerating(false);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Prarambh All-White Theme Navbar */}
      <Navbar onCtaClick={() => setSelectedMode("idea")} />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Ambient Subtle Radial Glow (Ultra Soft) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[480px] bg-gradient-to-b from-neutral-100/60 via-neutral-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* 1. Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-800 shadow-2xs mb-7 hover:border-neutral-300 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-tight">India ka smart business guide</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-500 font-normal">AI-Powered Journey</span>
        </div>

        {/* 2. Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-neutral-950 max-w-4xl leading-[1.08]">
          Idea se business tak. <br />
          <span className="text-neutral-400">Business se growth tak.</span>
        </h1>

        {/* 3. Subheading */}
        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-normal">
          Prarambh aapko simple steps me batata hai ki{" "}
          <span className="font-semibold text-neutral-900">
            kya karna hai, kya chahiye, aur next best step kya hai
          </span>{" "}
          — business idea, setup, documents, licences, compliance, schemes aur growth tak.
        </p>

        {/* 4. Primary & Secondary Dual CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={() => {
              setSelectedMode("idea");
              handlePromptSelect("Bhopal me cloud kitchen start karna hai");
            }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 cursor-pointer ${
              selectedMode === "idea"
                ? "bg-neutral-950 text-white hover:bg-neutral-800"
                : "bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50"
            }`}
          >
            <span>Start with your idea</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 stroke-current stroke-2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              setSelectedMode("existing");
              handlePromptSelect("Retail store ko e-commerce pe scale karna hai");
            }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full shadow-2xs hover:shadow-xs transition-all cursor-pointer ${
              selectedMode === "existing"
                ? "bg-neutral-950 text-white hover:bg-neutral-800"
                : "bg-white hover:bg-neutral-50 border border-neutral-200/90 text-neutral-800"
            }`}
          >
            <span>I already run a business</span>
          </button>
        </div>

        {/* 5. Small Trust Line */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          <span>Hindi • Hinglish • English • Step-by-step guidance</span>
        </div>

        {/* 6. REDESIGNED AI Smart Command Bar ("Aapke mind me kya hai?") */}
        <div className="mt-10 w-full max-w-3xl text-left">
          {/* Main Floating Capsule */}
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
                disabled={isGenerating}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition-all active:scale-95 cursor-pointer disabled:opacity-70 shadow-sm"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>Analyzing...</span>
                  </span>
                ) : (
                  <>
                    <span>Get Plan</span>
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Quick Suggestion Shelf (Redesigned) */}
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

        {/* 7. Interactive Roadmap Preview Mockup */}
        <div className="mt-14 w-full max-w-4xl text-left">
          <div className="rounded-3xl p-2 sm:p-3 bg-neutral-100/70 border border-neutral-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="bg-white rounded-2xl border border-neutral-200/70 overflow-hidden shadow-xs">
              
              {/* Header Bar */}
              <div className="p-4 sm:p-5 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-neutral-200" />
                    <span className="w-3 h-3 rounded-full bg-neutral-200" />
                    <span className="w-3 h-3 rounded-full bg-neutral-200" />
                  </div>
                  <div className="h-4 w-px bg-neutral-200 mx-1 hidden sm:block" />
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block sm:inline">
                      Prarambh Blueprint
                    </span>
                    <span className="text-[11px] text-neutral-500 sm:ml-2">
                      Target: &ldquo;{activeRoadmap}&rdquo;
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    Step-by-Step AI Guide
                  </span>
                </div>
              </div>

              {/* Roadmap Steps */}
              <div className="p-6 sm:p-7 space-y-4">
                {selectedMode === "idea" ? (
                  <>
                    {/* Step 1 */}
                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Entity Selection & Name Approval</h4>
                          <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                            Recommended: LLP ya OPC
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          Bhopal me cloud kitchen ke liye single-founder OPC ya 2-partners LLP best hai limited liability ke liye.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Food & State Licences (FSSAI + Gumasta)</h4>
                          <span className="text-[11px] font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                            Mandatory for Swiggy/Zomato
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          FSSAI State Registration (FoSCoS portal) aur MP Shop & Establishment Act (Gumasta) license.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Tax, Bank & MSME Udyam</h4>
                          <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                            PMEGP Subsidy Eligible (Up to 35%)
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          GST Registration, Current Account in Bank, aur Udyam Certificate for government kitchen equipment subsidies.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Existing Business Flow */}
                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Compliance & Health Check</h4>
                          <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                            Instant Scan
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          GST 1/3B filing status, pending annual MCA ROC compliances, aur renewal dates reminder.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Government Schemes & Collateral-Free Loans</h4>
                          <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            CGTMSE up to ₹5 Crore
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          MSME credit guarantee scheme, interest subvention aur Mudra Tarun loan eligibility check.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neutral-950 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-neutral-900">Multi-Channel Expansion & ONDC</h4>
                          <span className="text-[11px] font-medium text-neutral-800 bg-neutral-150 px-2 py-0.5 rounded border border-neutral-200">
                            Growth Phase
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1">
                          ONDC seller integration, GST multi-state registrations, aur e-commerce catalog setup.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom Bar */}
                <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-neutral-500 font-medium">
                    Prarambh AI automatically tracks applicable deadlines and missing documents.
                  </span>
                  <button
                    onClick={() => alert("Detailed step-by-step checklist opened!")}
                    className="font-bold text-neutral-950 hover:text-neutral-700 underline underline-offset-4 cursor-pointer self-start sm:self-auto"
                  >
                    View Full Checklist →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Minimalist All-White Footer */}
      <footer className="mt-auto border-t border-neutral-100 py-10 px-4 sm:px-6 lg:px-8 bg-neutral-50/30 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/black-logo.png"
              alt="Prarambh"
              width={96}
              height={27}
              className="h-6 w-auto object-contain"
            />
            <span className="text-neutral-300">•</span>
            <span>India ka Smart Business Guide</span>
          </div>

          <p>© {new Date().getFullYear()} Prarambh. Built for Indian Entrepreneurs.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-neutral-900 transition-colors">Guide</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Schemes</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Licences</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
