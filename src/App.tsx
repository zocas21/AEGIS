import React, { useState } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Briefcase, 
  ArrowRight, 
  ChevronRight, 
  FileText, 
  Filter, 
  Terminal, 
  Eye, 
  Cpu, 
  Globe, 
  ServerCrash, 
  Mail, 
  Clock, 
  Check, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

import { 
  CORE_CAPABILITIES, 
  COMPLIANCE_STANDARDS, 
  PAST_PERFORMANCE, 
  LEADERSHIP_TEAM, 
  CAREER_OPPORTUNITIES, 
  NEWS_INSIGHTS, 
  GOV_PROCUREMENT_DETAILS 
} from './data';
import { CareerRole, NewsInsight } from './types';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ComplianceChecker from './components/ComplianceChecker';
import SecOpsSimulation from './components/SecOpsSimulation';
import InvestorDashboard from './components/InvestorDashboard';
import CapabilityStatement from './components/CapabilityStatement';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isCapabilityStatementOpen, setIsCapabilityStatementOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsInsight | null>(null);
  
  // Careers interaction states
  const [selectedJob, setSelectedJob] = useState<CareerRole | null>(null);
  const [careersFilterClearance, setCareersFilterClearance] = useState('All');
  const [careersFilterDept, setCareersFilterDept] = useState('All');
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidateClearance, setCandidateClearance] = useState('None');

  // Capability statement triggers
  const triggerCapabilityOpen = () => {
    setIsCapabilityStatementOpen(true);
  };

  const handleApplyNow = (job: CareerRole) => {
    setSelectedJob(job);
    setIsApplicationSubmitted(false);
    setCandidateName('');
    setCandidateEmail('');
    setCandidateClearance(job.clearanceRequired);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail) return;
    setIsApplicationSubmitted(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-20">
            {/* HERO SECTION */}
            <section id="hero-portal" className="relative bg-slate-950 pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.08),transparent_50%)]"></div>
              {/* Subtle Tech Grid Accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>U.S. National Security Level Service Provider</span>
                  </div>

                  <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                    Securing Federal Infrastructure.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Defending Vital Enclaves.</span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                    Aegis Federal Systems delivers advanced cybersecurity operations, secure software-defined environments, and GovCloud digital transformation to defense, law enforcement, and intelligence communities.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white font-mono text-xs font-bold tracking-wider uppercase px-6 py-4 rounded border border-cyan-500/20 shadow-lg shadow-cyan-950/40 transition-all text-center"
                    >
                      Transmit Comms Link
                    </button>
                    <button
                      onClick={triggerCapabilityOpen}
                      className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-mono text-xs font-bold tracking-wider uppercase px-6 py-4 rounded transition-all text-center flex items-center justify-center space-x-2"
                    >
                      <FileText className="h-4 w-4 text-cyan-400" />
                      <span>Request Capability Statement</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('careers')}
                      className="text-slate-400 hover:text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase py-2 px-4 transition-all text-center flex items-center justify-center space-x-1"
                    >
                      <span>Careers & Clearances</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* TRUST INDICATORS & ACCREDITATIONS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 md:p-8">
                <div className="text-center space-y-2 mb-8">
                  <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold">Eligibility Accreditations</span>
                  <h2 className="font-sans font-bold text-white text-base md:text-lg uppercase tracking-wider">Federal Trust & Security Compliance Readiness</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {COMPLIANCE_STANDARDS.map((std) => (
                    <div key={std.id} className="bg-slate-950 p-4 rounded border border-slate-850 flex flex-col justify-between hover:border-slate-700 transition-all">
                      <div className="mb-2">
                        <span className="font-sans font-bold text-slate-200 text-xs block truncate">{std.name}</span>
                        <span className="font-mono text-[8px] text-slate-500 block uppercase tracking-wider mt-0.5">{std.level}</span>
                      </div>
                      <span className="inline-flex items-center space-x-1 font-mono text-[8px] text-green-400 font-bold bg-green-950/50 px-2 py-0.5 rounded border border-green-800/20 w-fit">
                        <ShieldCheck className="h-2.5 w-2.5" />
                        <span>{std.status}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CORE CAPABILITIES OVERVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-5">
                <div>
                  <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-semibold block">Mission Execution Portfolio</span>
                  <h2 className="font-sans font-black text-2xl text-white uppercase tracking-wider mt-1.5">Primary Services & Capabilities</h2>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-xs font-bold tracking-wider uppercase mt-4 md:mt-0 flex items-center space-x-1.5"
                >
                  <span>Explore Capabilities Spec</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CORE_CAPABILITIES.slice(0, 3).map((cap) => {
                  let Icon = Shield;
                  if (cap.id === 'cybersecurity') Icon = ShieldCheck;
                  else if (cap.id === 'secure-infrastructure') Icon = ServerCrash;
                  else if (cap.id === 'digital-transformation') Icon = Cpu;
                  
                  return (
                    <div key={cap.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                      <div className="space-y-4">
                        <div className="text-cyan-400 bg-slate-950 p-3 rounded border border-slate-800 w-fit">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-sans font-bold text-white text-sm uppercase tracking-wider">{cap.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{cap.shortDesc}</p>
                        <ul className="space-y-1.5 text-[11px] text-slate-500 font-mono pt-2">
                          {cap.subCapabilities.slice(0, 3).map((sub, idx) => (
                            <li key={idx} className="flex items-center space-x-1.5">
                              <span className="text-cyan-500">•</span>
                              <span className="truncate">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setActiveTab('services')}
                        className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 flex items-center space-x-1.5 mt-6 pt-4 border-t border-slate-850 uppercase tracking-wider"
                      >
                        <span>Analyze Applications</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* TELEMETRY ACTIVE SIMULATION INTERFACE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-semibold block">Live Security Telemetry</span>
                <h2 className="font-sans font-black text-2xl text-white uppercase tracking-wider">Aegis Operations Simulator</h2>
                <p className="text-xs text-slate-400 leading-normal">
                  Interact with our simulated tactical intelligence sweep. Monitor real-time system authorizations, container integrity checks, and zero-trust proxy updates.
                </p>
              </div>
              <SecOpsSimulation />
            </section>

            {/* OUTBOUND CALL-TO-ACTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
              <div className="bg-gradient-to-r from-slate-950 to-blue-950/40 border border-slate-800 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl">
                  <h3 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-wider">Ready to Establish Mission Parameters?</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Contact our compliance engineers to schedule a complete evaluation of your security maturity. Aegis helps defense industrial base entities achieve perfect, compliant system transitions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded transition-all text-center"
                  >
                    Establish Secure Uplink
                  </button>
                  <button
                    onClick={triggerCapabilityOpen}
                    className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 py-3.5 px-6 rounded text-xs font-bold font-mono tracking-widest uppercase transition-all text-center"
                  >
                    View Capability Codes
                  </button>
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-16 py-12">
            {/* Mission & Vision Intro */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-cyan-500/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                <span>WHO WE ARE</span>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-wider">Operational Integrity & Defense-Tech Mastery</h2>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Aegis Federal Systems is an elite professional services firm dedicated to engineering secure computational platforms for the critical infrastructure nodes of the United States. Founded by cybersecurity developers and retired national defense advisors, we exist to deliver absolute posture guarantees under extreme threat matrices.
              </p>
            </div>

            {/* Company values grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-3.5">
                  <ShieldCheck className="h-6 w-6 text-cyan-400" />
                  <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Integrity First</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    We maintain absolute operational security and moral clarity. Our engineers hold premium government clearances, reflecting trusted national security compliance.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-3.5">
                  <Lock className="h-6 w-6 text-cyan-400" />
                  <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Security-by-Design</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    We do not append security at compilation; we design it at conception. We embed cryptographic signatures and strict compliance controls into every code pipeline.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-3.5">
                  <Award className="h-6 w-6 text-cyan-400" />
                  <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Operational Excellence</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    We achieve rapid and reliable delivery of compliant code, automating security assertions to clear federal audits in hours rather than months.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg space-y-3.5">
                  <Globe className="h-6 w-6 text-cyan-400" />
                  <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">Mission Readiness</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Our architectures remain robust under extreme circumstances, enabling resilient communication channels globally across tactical or Austere settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate posturing & historical expansion */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-wider border-l-4 border-cyan-500 pl-3">A History of Resolute Service</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Established in 2018 in response to escalating nation-state supply chain cyber incursions, Aegis was constructed to replace obsolete procurement cycles with automated, secure-by-design infrastructure frameworks. 
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Today, our specialists support Tier-1 defense networks and civil agency databases, continuously auditing and protecting enclaves handling sensitive, Controlled Unclassified Information (CUI).
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setActiveTab('compliance')}
                    className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>Analyze Audit Credentials</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Investor overview inline */}
              <div className="bg-slate-900 border border-slate-850 p-6 rounded-lg space-y-4">
                <h4 className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Enterprise Corporate Vitals</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Aegis maintains solid compound annual expansion, backed by multi-year committed federal budgets and an impeccable compliance track record.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-950 p-3 rounded border border-slate-800">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">CAGR Growth</span>
                    <span className="text-sm font-bold text-white block mt-1">+34.2%</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded border border-slate-800">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Defense Backlog</span>
                    <span className="text-sm font-bold text-cyan-400 block mt-1">$210M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">TECHNICAL SPECIFICATIONS</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Aegis Core Capabilities Catalog</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                We design and sustain secure operational postures across 5 specialized technical domains, adhering fully to regulatory acquisition benchmarks.
              </p>
            </div>

            {/* Services Detailed List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {CORE_CAPABILITIES.map((cap, idx) => {
                let Icon = Shield;
                if (cap.id === 'cybersecurity') Icon = ShieldCheck;
                else if (cap.id === 'secure-infrastructure') Icon = ServerCrash;
                else if (cap.id === 'digital-transformation') Icon = Cpu;
                else if (cap.id === 'mission-support') Icon = Globe;
                else if (cap.id === 'investigative-intelligence') Icon = Eye;

                return (
                  <div 
                    key={cap.id} 
                    className="bg-slate-900 border border-slate-800 rounded-lg p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-slate-700 transition-all"
                  >
                    {/* Header Info */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="text-cyan-400 bg-slate-950 p-3 rounded border border-slate-800 w-fit">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[8px] text-slate-500 uppercase block tracking-widest">TECHNICAL SPECTRUM 0{idx + 1}</span>
                        <h3 className="font-sans font-bold text-white text-base uppercase tracking-wider mt-1">{cap.title}</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{cap.shortDesc}</p>
                    </div>

                    {/* Long Description and Sub capabilities */}
                    <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l lg:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
                      <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Functional Safeguards</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{cap.longDesc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-2">
                        {cap.subCapabilities.map((sub, sidx) => (
                          <li key={sidx} className="flex items-start space-x-1.5">
                            <span className="text-cyan-500 shrink-0 mt-0.5">•</span>
                            <span className="text-[11px] leading-snug">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="lg:col-span-3 bg-slate-950 p-5 rounded border border-slate-850 space-y-3">
                      <h4 className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Active Deployments</h4>
                      <ul className="space-y-2 text-[10px] font-mono text-slate-400">
                        {cap.applications.map((app, aidx) => (
                          <li key={aidx} className="flex items-start space-x-2 border-b border-slate-900/60 pb-1.5 last:border-0 last:pb-0">
                            <span className="text-cyan-500">✔</span>
                            <span className="leading-snug">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'compliance':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">ASSESSMENT MATRIX</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Regulatory Compliance & Security Maturities</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Analyze our alignment with strict federal guidelines. Complete our interactive checker below to receive a diagnostic overview of your CMMC/NIST readiness.
              </p>
            </div>

            {/* Compliance Standards Detail */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPLIANCE_STANDARDS.map((std) => (
                <div key={std.id} className="bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider">{std.name}</h3>
                      <span className="text-[8px] font-mono text-green-400 bg-green-950/40 border border-green-800/20 px-2 py-0.5 rounded font-bold uppercase shrink-0">
                        {std.status}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-cyan-500 block uppercase tracking-widest">{std.level}</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{std.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-850">
                    <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest block mb-1.5">Primary Control Families</span>
                    <div className="flex flex-wrap gap-1">
                      {std.controlAreas.map((ctrl, cidx) => (
                        <span key={cidx} className="bg-slate-950 text-slate-400 font-mono text-[8px] px-2 py-0.5 rounded border border-slate-850 uppercase">
                          {ctrl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* INTERACTIVE COMPLIANCE DIAGNOSTIC */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-semibold block">Audit Preparation Diagnostic</span>
                <h3 className="font-sans font-bold text-xl text-white uppercase tracking-wider">Are You Ready For Federal Verification?</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Identify your organizational compliance posture before triggering formal defense assessments. Start the assessment below.
                </p>
              </div>
              <ComplianceChecker />
            </section>
          </div>
        );

      case 'past-performance':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">VERIFIED PERFORMANCE</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Federal Case Studies & Security Outcomes</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                We support our assertions with quantifiable performance logs across highly classified and critical federal agencies.
              </p>
            </div>

            {/* Case Studies */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              {PAST_PERFORMANCE.map((perf) => (
                <div key={perf.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6 lg:p-8 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-4 mb-6">
                    <div>
                      <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-bold block">{perf.client}</span>
                      <h3 className="font-sans font-black text-lg text-white uppercase tracking-wider mt-1">{perf.title}</h3>
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 bg-slate-950 px-3 py-1 rounded border border-slate-800 mt-2 sm:mt-0 w-fit shrink-0 font-bold uppercase tracking-widest">
                      {perf.classification}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Challenge/Solution/Result */}
                    <div className="lg:col-span-8 space-y-4 text-xs leading-relaxed text-slate-300">
                      <div>
                        <strong className="text-rose-400 block font-mono text-[10px] uppercase tracking-widest mb-1">■ CHALLENGE POSTURE</strong>
                        <p className="text-slate-400">{perf.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-cyan-400 block font-mono text-[10px] uppercase tracking-widest mb-1">■ AEGIS IMPLEMENTATION</strong>
                        <p className="text-slate-300">{perf.solution}</p>
                      </div>
                      <div>
                        <strong className="text-green-400 block font-mono text-[10px] uppercase tracking-widest mb-1">■ COMPLIANCE OUTCOME</strong>
                        <p className="text-slate-300">{perf.result}</p>
                      </div>
                    </div>

                    {/* Quantifiable metrics display */}
                    <div className="lg:col-span-4 bg-slate-950 p-5 rounded border border-slate-850 space-y-4">
                      <h4 className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">Quantifiable Impact metrics</h4>
                      <div className="space-y-3 font-mono">
                        {perf.metrics.map((metric, midx) => (
                          <div key={midx} className="bg-slate-900/60 p-3 rounded border border-slate-800 flex items-start space-x-2">
                            <span className="text-cyan-400">✓</span>
                            <span className="text-[11px] text-slate-300 leading-snug">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investor Dashboard Widget */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-semibold block">FINANCIAL OUTLINE</span>
                <h3 className="font-sans font-bold text-xl text-white uppercase tracking-wider">Aegis Corporate Performance Overview</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Our growth trajectory reflects continuous performance execution and long-term contract backlogs. Check our multi-year vitals.
                </p>
              </div>
              <InvestorDashboard />
            </section>
          </div>
        );

      case 'leadership':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">OFFICERS & ADVISORS</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Aegis Executive Leadership</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Meet the corporate directors driving security-first engineering and intelligence modernization strategies.
              </p>
            </div>

            {/* Leadership grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {LEADERSHIP_TEAM.map((exec) => (
                <div key={exec.id} className="bg-slate-900 border border-slate-850 rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:border-slate-750 transition-all">
                  {/* Photo / initials placeholder */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 border border-slate-800 shrink-0 flex items-center justify-center font-sans font-black text-white text-2xl uppercase select-none tracking-widest shadow-inner">
                    {exec.imagePlaceholder}
                  </div>

                  {/* Bio details */}
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-bold block">{exec.background} Focus</span>
                      <h3 className="font-sans font-bold text-white text-base tracking-wide mt-0.5">{exec.name}</h3>
                      <span className="text-xs text-slate-400 font-medium">{exec.role}</span>
                    </div>
                    
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{exec.biography}</p>
                    
                    <div className="pt-2">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Technical Credentials</span>
                      <ul className="space-y-1 text-[10px] font-mono text-slate-400">
                        {exec.credentials.map((cred, cidx) => (
                          <li key={cidx} className="flex items-center space-x-1.5 truncate" title={cred}>
                            <span className="text-cyan-500">•</span>
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">HUMAN CAPITAL RECRUITMENT</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Security Cleared Career Pathways</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                We recruit elite engineers, threat forensic specialists, and cloud administrators. Our personnel support highly sensitive defense initiatives globally.
              </p>
            </div>

            {/* Open positions filter and listing */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              {/* Filters toolbar */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 shrink-0">
                    <Filter className="h-4 w-4 text-cyan-400" />
                    <span>FILTERS:</span>
                  </div>
                  
                  {/* Clearance select */}
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-500 font-mono">Clearance:</span>
                    <select
                      value={careersFilterClearance}
                      onChange={(e) => setCareersFilterClearance(e.target.value)}
                      className="bg-slate-950 text-slate-300 border border-slate-800 rounded px-2.5 py-1.5 focus:border-cyan-500 focus:outline-none text-xs"
                    >
                      <option value="All">All Levels</option>
                      <option value="TS/SCI">TS/SCI</option>
                      <option value="Top Secret">Top Secret</option>
                      <option value="Secret">Secret</option>
                      <option value="Public Trust">Public Trust</option>
                    </select>
                  </div>

                  {/* Department select */}
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-500 font-mono">Department:</span>
                    <select
                      value={careersFilterDept}
                      onChange={(e) => setCareersFilterDept(e.target.value)}
                      className="bg-slate-950 text-slate-300 border border-slate-800 rounded px-2.5 py-1.5 focus:border-cyan-500 focus:outline-none text-xs"
                    >
                      <option value="All">All Departments</option>
                      <option value="Cybersecurity Operations">Cybersecurity Operations</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Investigative & Intelligence Support">Investigative Support</option>
                      <option value="Secure Infrastructure">Secure Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider text-right">
                  Showing {
                    CAREER_OPPORTUNITIES.filter((role) => {
                      const clearanceMatch = careersFilterClearance === 'All' || role.clearanceRequired === careersFilterClearance;
                      const deptMatch = careersFilterDept === 'All' || role.department === careersFilterDept;
                      return clearanceMatch && deptMatch;
                    }).length
                  } Available Postings
                </div>
              </div>

              {/* Roles listing */}
              <div className="space-y-4">
                {CAREER_OPPORTUNITIES.filter((role) => {
                  const clearanceMatch = careersFilterClearance === 'All' || role.clearanceRequired === careersFilterClearance;
                  const deptMatch = careersFilterDept === 'All' || role.department === careersFilterDept;
                  return clearanceMatch && deptMatch;
                }).map((role) => (
                  <div key={role.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-slate-950 text-slate-400 font-mono text-[9px] px-2 py-0.5 rounded border border-slate-850 uppercase">
                          {role.department}
                        </span>
                        <span className="bg-cyan-950/40 text-cyan-400 font-mono text-[9px] px-2.5 py-0.5 rounded border border-cyan-850/20 uppercase font-bold">
                          Security clearance: {role.clearanceRequired}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-white text-sm uppercase tracking-wide">{role.title}</h3>
                      <div className="flex items-center space-x-3 text-[10px] text-slate-500 font-mono uppercase">
                        <span>{role.location}</span>
                        <span>•</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleApplyNow(role)}
                      className="bg-slate-800 hover:bg-cyan-950/40 border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded transition-all shrink-0 w-full md:w-auto text-center"
                    >
                      Initialize Application
                    </button>
                  </div>
                ))}
              </div>

            </div>

            {/* CAREER APPLICATION MODAL */}
            {selectedJob && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-2xl w-full p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="p-1 text-slate-500 hover:text-white hover:bg-slate-800 rounded"
                    >
                      Close
                    </button>
                  </div>

                  {!isApplicationSubmitted ? (
                    <form onSubmit={handleSubmitApplication} className="space-y-4">
                      <div>
                        <span className="font-mono text-[8px] text-cyan-400 uppercase tracking-widest block mb-1">CANDIDATE DISCLOSURE INGEST</span>
                        <h3 className="font-sans font-bold text-white text-base uppercase tracking-wider">{selectedJob.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                          Aegis requires rigorous background profiling. Please state your real security clearance and credentials.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">Your Full Name</label>
                          <input
                            type="text"
                            required
                            value={candidateName}
                            onChange={(e) => setCandidateName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3 py-2 text-white placeholder-slate-700 font-mono"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">Direct Contact Email</label>
                          <input
                            type="email"
                            required
                            value={candidateEmail}
                            onChange={(e) => setCandidateEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3 py-2 text-white placeholder-slate-700 font-mono"
                            placeholder="name@agency.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">Self-Certified Clearance</label>
                          <select
                            value={candidateClearance}
                            onChange={(e) => setCandidateClearance(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3 py-2 text-white font-mono"
                          >
                            <option value="None">None held</option>
                            <option value="Public Trust">Public Trust</option>
                            <option value="Secret">Secret</option>
                            <option value="Top Secret">Top Secret</option>
                            <option value="TS/SCI">TS/SCI</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">Attach Resume Profile</label>
                          <div className="border border-dashed border-slate-800 rounded bg-slate-950/40 p-2.5 text-center text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                            Select Resume / PDF File
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-4 rounded border border-slate-850 text-[11px] text-slate-400 space-y-2 leading-relaxed">
                        <span className="font-bold text-white uppercase tracking-wider block text-[9px] mb-1">SECURITY NOTICE</span>
                        <p>
                          Aegis participates in E-Verify and requires exhaustive vetting of military and enterprise records. False declarations of active clearances constitute federal procurement misrepresentation.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-mono text-xs font-bold tracking-widest uppercase py-3 rounded border border-cyan-500/20"
                      >
                        Transmit Application Packet
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-5 text-center py-6">
                      <div className="bg-blue-950 w-12 h-12 rounded-full flex items-center justify-center mx-auto border border-cyan-500/30">
                        <Check className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-sans font-bold text-white text-base uppercase tracking-wider">Telemetry Package Dispatched Successfully</h4>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
                          Candidate profile for <strong>{candidateName}</strong> ({candidateClearance} clearance parameter affirmed) has been transmitted to recruitment router.
                        </p>
                      </div>
                      <div className="bg-slate-950 p-4 rounded border border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest max-w-sm mx-auto">
                        ID: REC-{Math.floor(1000 + Math.random() * 9000)}-TELEMETRY-ESTABLISHED
                      </div>
                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                        >
                          Return to Listings
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>
        );

      case 'news':
        return (
          <div className="py-12 space-y-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">INTELLIGENCE LOGS</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Aegis Cybersecurity Insights</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stay updated with federal compliance news, SBOM analysis, and thought leadership from our research teams.
              </p>
            </div>

            {/* News list */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {NEWS_INSIGHTS.map((news) => (
                <div key={news.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[9px] font-mono">
                      <span className="text-cyan-400 uppercase tracking-widest font-bold">
                        {news.category.replace('_', ' ')}
                      </span>
                      <span className="text-slate-500 font-medium">{news.date}</span>
                    </div>

                    <h3 className="font-sans font-bold text-white text-sm uppercase tracking-wide leading-snug">{news.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{news.summary}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-850 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                    <div className="flex space-x-2">
                      <span>By {news.author}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedNews(news)}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold uppercase tracking-wider flex items-center space-x-1"
                    >
                      <span>Read Full Ingest</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* READ ARTICLE FULL INGEST OVERLAY */}
            {selectedNews && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-3xl w-full p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded transition-colors"
                    >
                      Close Ingest
                    </button>
                  </div>

                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="flex gap-2 text-[10px] font-mono text-cyan-400 uppercase">
                      <span>{selectedNews.category.replace('_', ' ')}</span>
                      <span>•</span>
                      <span>{selectedNews.date}</span>
                    </div>
                    <h3 className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-wider leading-snug">{selectedNews.title}</h3>
                    <div className="flex gap-4 text-[10px] font-mono text-slate-500 uppercase pt-1">
                      <span>Author: {selectedNews.author}</span>
                      <span>Read Time: {selectedNews.readTime}</span>
                    </div>
                  </div>

                  <div className="text-slate-300 text-xs md:text-sm leading-relaxed space-y-4 font-sans max-w-none">
                    <p>{selectedNews.content}</p>
                    <p className="bg-slate-950 p-4 rounded border border-slate-850 font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-normal">
                      CLASSIFICATION: UNCLASSIFIED // INTEL LOG SEC-ALPHA-5. THIS DOCUMENT IS DISTRIBUTED ACCORDING TO REGULATORY PROVISIONS AND COVERS STANDARD HIGH-LEVEL SYSTEM OUTLINES ONLY.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Return to Insights
                    </button>
                    {/* Direct mailto link matching rules */}
                    <a
                      href="mailto:info@1force.com"
                      className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider flex items-center space-x-1"
                    >
                      <span>Inquire regarding study</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'contact':
        return (
          <div className="py-12 space-y-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-semibold block">SECURE COMMS ENDPOINT</span>
              <h2 className="font-sans font-black text-3xl text-white uppercase tracking-wider">Establish Transceiver Link</h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
                All external communications must satisfy active OTP verification prior to transport. Use the Outbound Intercept Console to verify identities.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ContactForm />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dynamic Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenCapabilityStatement={triggerCapabilityOpen} 
      />

      {/* Main Content Assembly */}
      <main className="flex-1">
        {renderTabContent()}
      </main>

      {/* Corporate Compliance Statement Modal (Procurement dossier) */}
      <CapabilityStatement 
        isOpen={isCapabilityStatementOpen} 
        onClose={() => setIsCapabilityStatementOpen(false)} 
      />

      {/* Corporate Regulatory Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenCapabilityStatement={triggerCapabilityOpen} 
      />

    </div>
  );
}
