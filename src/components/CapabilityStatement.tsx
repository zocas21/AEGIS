import React from 'react';
import { X, Printer, Shield, Mail, FileText, CheckSquare, Globe } from 'lucide-react';
import { GOV_PROCUREMENT_DETAILS, CORE_CAPABILITIES, PAST_PERFORMANCE } from '../data';

interface CapabilityStatementProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CapabilityStatement({ isOpen, onClose }: CapabilityStatementProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Print the document using standard browser prints
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      {/* Outer Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col print:absolute print:inset-0 print:m-0 print:max-h-none print:w-full print:bg-white print:text-black print:border-none print:shadow-none">
        
        {/* Header - Non-Printable */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">FEDERAL PROCUREMENT DOSSIER</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div 
          id="printable-capability-sheet" 
          className="p-8 md:p-12 overflow-y-auto print:overflow-visible print:p-0 print:text-slate-900 bg-slate-900 text-slate-300 font-sans leading-relaxed print:bg-white"
        >
          {/* Cover Header */}
          <div className="border-b-4 border-cyan-500 pb-6 mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4 print:border-cyan-600">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-8 w-8 text-cyan-400 print:text-cyan-600" />
                <span className="font-sans font-black text-2xl tracking-wider text-white print:text-slate-900">AEGIS FEDERAL SYSTEMS</span>
              </div>
              <h1 className="font-sans font-bold text-lg text-cyan-400 uppercase tracking-wider print:text-cyan-700 leading-none">CAPABILITY STATEMENT</h1>
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-1.5 print:text-slate-500">Corporate Qualification Profile & Past Performance</p>
            </div>
            
            {/* Core Procure Vitals (Boxed) */}
            <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono text-xs text-slate-300 print:bg-slate-100 print:text-slate-800 print:border-slate-300 shrink-0">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <span className="text-slate-500 uppercase font-bold text-[10px] print:text-slate-600">CAGE CODE:</span>
                <span className="text-cyan-400 font-bold text-right print:text-cyan-700">{GOV_PROCUREMENT_DETAILS.cageCode}</span>
                
                <span className="text-slate-500 uppercase font-bold text-[10px] print:text-slate-600">SAM UEI:</span>
                <span className="text-cyan-400 font-bold text-right print:text-cyan-700">{GOV_PROCUREMENT_DETAILS.samUei}</span>
                
                <span className="text-slate-500 uppercase font-bold text-[10px] print:text-slate-600">DUNS:</span>
                <span className="text-cyan-400 font-bold text-right print:text-cyan-700">{GOV_PROCUREMENT_DETAILS.duns}</span>
              </div>
            </div>
          </div>

          {/* Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Core Competencies (2/3 width) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Section 1: Corporate Profile */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  CORPORATE PROFILE
                </h3>
                <p className="text-xs leading-relaxed text-slate-400 print:text-slate-600">
                  Aegis Federal Systems LLC is an elite, Veteran-Owned eligible technical services organization specializing in modern cybersecurity, software-defined infrastructure engineering, and automated cloud systems. Aegis secures critical networks and transitions sensitive agency applications to hardened cloud architectures (FedRAMP High / GovCloud) with accelerated Authority to Operate (ATO) capabilities.
                </p>
              </div>

              {/* Section 2: Core Capabilities */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  CORE CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {CORE_CAPABILITIES.map((cap) => (
                    <div key={cap.id} className="space-y-1">
                      <span className="font-semibold text-cyan-400 print:text-cyan-700 block">{cap.title}</span>
                      <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-400 print:text-slate-600">
                        {cap.subCapabilities.slice(0, 3).map((sub, idx) => (
                          <li key={idx}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Past Performance Highlights */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  PAST PERFORMANCE SUMMARY
                </h3>
                <div className="space-y-4">
                  {PAST_PERFORMANCE.slice(0, 2).map((perf) => (
                    <div key={perf.id} className="bg-slate-950 p-3.5 rounded border border-slate-850 print:bg-slate-50 print:border-slate-200">
                      <div className="flex justify-between items-start mb-1 text-xs">
                        <span className="font-bold text-white print:text-slate-900">{perf.client}</span>
                        <span className="font-mono text-[9px] text-slate-500">{perf.classification}</span>
                      </div>
                      <span className="block font-medium text-cyan-400 text-[11px] mb-1.5 print:text-cyan-700">{perf.title}</span>
                      <p className="text-[11px] text-slate-400 print:text-slate-600 leading-relaxed mb-1.5">
                        <strong>Outcome:</strong> {perf.result}
                      </p>
                      <div className="flex flex-wrap gap-x-4 text-[10px] font-mono text-cyan-500 print:text-cyan-800">
                        {perf.metrics.slice(0, 2).map((m, idx) => (
                          <span key={idx}>• {m}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Differentiators & Procurement Codes (1/3 width) */}
            <div className="space-y-6 lg:border-l lg:border-slate-800 lg:pl-6 print:border-l-0 print:pl-0">
              
              {/* Differentiators */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  DIFFERENTIATORS
                </h3>
                <ul className="space-y-2 text-xs text-slate-400 print:text-slate-600">
                  <li className="flex items-start space-x-1.5">
                    <CheckSquare className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5 print:text-cyan-700" />
                    <span><strong>100% NIST 800-171 Audit Readiness</strong>: Security-by-design templates pre-aligned with federal parameters.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <CheckSquare className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5 print:text-cyan-700" />
                    <span><strong>Continuous ATO Pipelines</strong>: Proprietary containers reducing software security audits from weeks to under 3 hours.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <CheckSquare className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5 print:text-cyan-700" />
                    <span><strong>Elite Clearance Levels</strong>: Technical core staff with verified TS/SCI military & intelligence credentials.</span>
                  </li>
                </ul>
              </div>

              {/* NAICS Codes */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  PERTINENT NAICS CODES
                </h3>
                <div className="font-mono text-[10px] space-y-1 text-slate-400 print:text-slate-700">
                  {GOV_PROCUREMENT_DETAILS.naicsCodes.slice(0, 5).map((n) => (
                    <div key={n.code} className="flex space-x-2">
                      <span className="text-cyan-400 font-bold shrink-0 print:text-cyan-700">{n.code}</span>
                      <span className="truncate" title={n.desc}>{n.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PSC Codes */}
              <div>
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-white border-b border-slate-800 pb-2 mb-3 print:text-slate-900 print:border-slate-300">
                  PRODUCT SERVICE CODES (PSC)
                </h3>
                <div className="font-mono text-[10px] space-y-1 text-slate-400 print:text-slate-700">
                  {GOV_PROCUREMENT_DETAILS.pscCodes.slice(0, 4).map((p) => (
                    <div key={p.code} className="flex space-x-2">
                      <span className="text-cyan-400 font-bold shrink-0 print:text-cyan-700">{p.code}</span>
                      <span className="truncate" title={p.desc}>{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Contact Point */}
              <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono text-[11px] space-y-2 print:bg-slate-100 print:border-slate-300 print:text-slate-800">
                <span className="text-slate-500 font-bold block uppercase text-[9px] print:text-slate-600">POINT OF CONTACT</span>
                <div>
                  <span className="font-bold block text-white print:text-slate-900">Marcus Vance, Esq.</span>
                  <span className="text-[10px] block text-slate-400 print:text-slate-500">Chief Compliance Officer</span>
                </div>
                {/* STRICT MANDATE: MUST USE <a href="mailto:info@1force.com">Send Email</a> */}
                <div className="pt-1.5">
                  <a 
                    id="capability-statement-mailto-link"
                    href="mailto:info@1force.com" 
                    className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-bold uppercase text-[10px] print:text-cyan-700"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Clearance Row */}
          <div className="border-t border-slate-800 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-mono print:border-slate-300 print:text-slate-400">
            <span>AEGIS FEDERAL SYSTEMS LLC | ITAR REGISTERED</span>
            <span className="mt-2 sm:mt-0">DOCUMENT CLASSIFICATION: CUI // UNCLASSIFIED</span>
          </div>

        </div>

        {/* Footer actions for closing modal */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-right print:hidden shrink-0">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
}
