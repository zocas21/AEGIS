import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink, Lock } from 'lucide-react';
import { GOV_PROCUREMENT_DETAILS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenCapabilityStatement: () => void;
}

export default function Footer({ setActiveTab, onOpenCapabilityStatement }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="aegis-corporate-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Identity & Procurement Vitals */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="font-sans font-black tracking-wider text-white uppercase text-base">AEGIS FEDERAL</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Securing critical infrastructure, protecting classified enclaves, and engineering advanced DevSecOps pipelines for the United States Defense, Intelligence, and Government sectors.
            </p>
            {/* Government Registrations */}
            <div className="bg-slate-900/60 p-3.5 rounded border border-slate-800 font-mono text-[10px] space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">CAGE CODE:</span>
                <span className="text-cyan-400 font-bold">{GOV_PROCUREMENT_DETAILS.cageCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">SAM UEI:</span>
                <span className="text-cyan-400 font-bold">{GOV_PROCUREMENT_DETAILS.samUei}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">DUNS:</span>
                <span className="text-cyan-400 font-bold">{GOV_PROCUREMENT_DETAILS.duns}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-cyan-500 pl-2">CORPORATE PATHWAYS</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-cyan-400 transition-colors">Home & Core Focus</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-cyan-400 transition-colors">Our Corporate Identity</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-cyan-400 transition-colors">Technical Capabilities</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('compliance')} className="hover:text-cyan-400 transition-colors">Federal Audits & Compliance</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('past-performance')} className="hover:text-cyan-400 transition-colors">Past Performance Cases</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('careers')} className="hover:text-cyan-400 transition-colors">Defense & Cyber Careers</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Secure Routing (Mandatory Mailto) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-cyan-500 pl-2">SECURE ENDPOINTS</h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Headquarters:<br />
                  11950 Freedom Drive, Suite 600<br />
                  Reston, VA 20190
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>+1 (703) 555-0190</span>
              </div>
              <div className="pt-2">
                <span className="block text-slate-500 font-mono uppercase text-[10px] mb-1.5">GLOBAL TRANSCEIVER ROUTE</span>
                {/* STRICT MANDATE: MUST USE <a href="mailto:info@1force.com">Send Email</a> */}
                <a 
                  id="footer-mailto-link"
                  href="mailto:info@1force.com" 
                  className="inline-flex items-center space-x-2 bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/40 px-3.5 py-2 rounded-md text-cyan-400 hover:text-cyan-300 font-mono text-[11px] tracking-wide uppercase transition-all duration-150"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Assets & Certifications */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-cyan-500 pl-2">CAPABILITY & CLEARANCE</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Procurement personnel can instantly generate and print our pre-formatted Capability Statement for regulatory dossier inclusion.
            </p>
            <div className="space-y-2">
              <button
                onClick={onOpenCapabilityStatement}
                className="flex items-center justify-between w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded text-xs text-slate-300 hover:text-white tracking-wide transition-all duration-150"
              >
                <span>Print Capability Statement</span>
                <ExternalLink className="h-3 w-3 text-cyan-500" />
              </button>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500">
                <Lock className="h-3.5 w-3.5 text-cyan-500" />
                <span>NIST 800-171 & CMMC ASSESSMENT COMPLIANT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Disclosures & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 space-y-4 md:space-y-0 font-mono">
          <div>
            &copy; {currentYear} Aegis Federal Systems LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <span>U.S. GOVERNMENT ELIGIBLE CONTRACTOR</span>
            <span className="text-slate-700">|</span>
            <span>ITAR REGISTERED</span>
            <span className="text-slate-700">|</span>
            <span>SECURE SHIELD V2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
