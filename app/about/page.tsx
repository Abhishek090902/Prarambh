import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
          Our Mission & Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight leading-tight">
          Empowering 63+ Million <br />
          Indian Entrepreneurs
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
          Prarambh was engineered to eliminate the chaos of 50+ government portals, opaque middlemen commissions, and confusing legal jargon for everyday Indian business owners.
        </p>
      </div>

      {/* Core Philosophy Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white text-center shadow-xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-4">
          The Prarambh Philosophy
        </span>
        <blockquote className="text-xl sm:text-3xl font-extrabold tracking-tight max-w-2xl mx-auto leading-snug">
          &ldquo;You do not need to know which service, portal, licence, or department you need. Just tell Prarambh what you want to do.&rdquo;
        </blockquote>
        <p className="text-xs sm:text-sm text-neutral-400 mt-4 max-w-lg mx-auto">
          Prarambh figures out what applies, what is missing, which documents are needed, which schemes apply, and what your next best step is.
        </p>
      </div>

      {/* The Problem & The Prarambh Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/[0.06] space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            The Reality in India
          </span>
          <h3 className="text-lg font-bold text-neutral-900">
            The Fragmented Government Maze
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Starting a business in India meant navigating Ministry of Corporate Affairs (MCA), Food Safety (FoSCoS), Central Board of Indirect Taxes (GSTN), MSME Udyam, State Labour Departments (Gumasta), and Municipal Corporations separately.
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Uninformed founders spent tens of thousands of rupees on local agents for forms that were completely free, or missed annual compliance dates leading to heavy daily penalty fees.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-950 shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            The Prarambh Standard
          </span>
          <h3 className="text-lg font-bold text-neutral-950">
            One Intelligent Operating System
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Prarambh bridges the gap by linking 50+ official government databases directly. We translate complex legal statutes into simple, actionable steps in plain Hindi, Hinglish, and English.
          </p>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            From initial idea validation to PMEGP 35% subsidies and CGTMSE collateral-free loans, every Indian founder gets institutional-grade business intelligence.
          </p>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-extrabold text-neutral-950 text-center tracking-tight">
          Our Three Guiding Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-950">
              01
            </div>
            <h4 className="text-sm font-bold text-neutral-950">Zero Jargon</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              No dense legal paragraphs. Everything is communicated in everyday language that any shopkeeper, homemaker, or young graduate can immediately understand.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-950">
              02
            </div>
            <h4 className="text-sm font-bold text-neutral-950">Direct Government Portals</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We never trap you behind artificial paywalls for public government services. We route you directly to official government portals with pre-filled checklists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-950">
              03
            </div>
            <h4 className="text-sm font-bold text-neutral-950">Lifecycle Guidance</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We don&apos;t abandon you after registration. We guide you through everyday GST returns, banking, marketing, government schemes, and multi-state expansion.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-3xl bg-neutral-50 border border-black/[0.06] space-y-4">
        <h3 className="text-xl font-bold text-neutral-950">
          Ready to launch your dream venture?
        </h3>
        <p className="text-xs text-neutral-600 max-w-md mx-auto">
          Start for free today and get your personalized blueprint in under 2 minutes.
        </p>
        <Link
          href="/guide"
          className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs px-7 py-3 rounded-full transition-all"
        >
          <span>Start with Your Idea</span>
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
