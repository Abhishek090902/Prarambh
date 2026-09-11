import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.07] bg-neutral-50/50 text-neutral-600 font-sans mt-auto">
      {/* Top Banner inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-black/[0.05]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/black-logo.png"
                alt="Prarambh"
                width={128}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              India ka smart business operating system. From ideation and company registration to government subsidies, compliance, and growth.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-neutral-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Hindi & Hinglish Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-neutral-700 font-medium">
                50+ Govt Portals Linked
              </span>
            </div>
          </div>

          {/* Col 1: Platform & Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guide" className="hover:text-neutral-950 transition-colors">
                  10-Stage Operating System
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-neutral-950 transition-colors">
                  Interactive Business Guide
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  Subsidy Calculator
                </Link>
              </li>
              <li>
                <Link href="/licences" className="hover:text-neutral-950 transition-colors">
                  Licence Finder Matrix
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-neutral-950 transition-colors">
                  Pricing & Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Government Schemes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Govt Schemes</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  PMEGP Scheme (35% Subsidy)
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  CGTMSE Collateral-Free Loans
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  Pradhan Mantri Mudra Yojana
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  Stand-Up India for Women/SC/ST
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-neutral-950 transition-colors">
                  Startup India Seed Fund
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Licences */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/licences" className="hover:text-neutral-950 transition-colors">
                  FSSAI Food License
                </Link>
              </li>
              <li>
                <Link href="/licences" className="hover:text-neutral-950 transition-colors">
                  GST Registration & Returns
                </Link>
              </li>
              <li>
                <Link href="/licences" className="hover:text-neutral-950 transition-colors">
                  MSME Udyam Certificate
                </Link>
              </li>
              <li>
                <Link href="/licences" className="hover:text-neutral-950 transition-colors">
                  Shop & Establishment (Gumasta)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-950 transition-colors">
                  About Prarambh
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Trust Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Prarambh Technologies Private Limited.</span>
          <span>•</span>
          <span className="font-medium text-neutral-700">Built for Indian Entrepreneurs</span>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/about" className="hover:text-neutral-900 transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-neutral-900 transition-colors">Pricing</Link>
          <a href="#privacy" className="hover:text-neutral-900 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900 transition-colors">Terms</a>
          <span className="text-neutral-300">|</span>
          <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Portals Active
          </span>
        </div>
      </div>
    </footer>
  );
}
