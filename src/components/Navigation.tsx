import React, { useState } from 'react';
import { Shield, Menu, X, FileText, PhoneCall } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCapabilityStatement: () => void;
}

export default function Navigation({ activeTab, setActiveTab, onOpenCapabilityStatement }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Capabilities' },
    { id: 'compliance', label: 'Compliance & Audit' },
    { id: 'past-performance', label: 'Past Performance' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'careers', label: 'Careers' },
    { id: 'news', label: 'Insights' },
    { id: 'contact', label: 'Secure Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="aegis-primary-navigation" className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white backdrop-blur-md bg-opacity-95 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-700 p-2.5 rounded-lg border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Shield className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg tracking-wider text-slate-100 uppercase block leading-none">AEGIS</span>
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 block uppercase font-semibold mt-1">FEDERAL SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-xs font-medium tracking-wide uppercase transition-all duration-150 ${
                  activeTab === item.id
                    ? 'text-cyan-400 bg-slate-800/80 border-b-2 border-cyan-400 rounded-b-none'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center space-x-3">
            <button
              id="nav-btn-capability"
              onClick={onOpenCapabilityStatement}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              <span>CAPABILITY STATEMENT</span>
            </button>
            <button
              id="nav-btn-contact"
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase shadow-lg shadow-cyan-950/40 border border-cyan-500/20 transition-all duration-200"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>TRANSMIT COMMS</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenCapabilityStatement}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
              title="Capability Statement"
            >
              <FileText className="h-5 w-5" />
            </button>
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-xl px-4 py-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase text-left transition-all duration-150 ${
                  activeTab === item.id
                    ? 'bg-slate-800 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-3 flex flex-col space-y-2">
            <button
              onClick={() => {
                onOpenCapabilityStatement();
                setIsOpen(false);
              }}
              className="flex items-center justify-center space-x-2 w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-150"
            >
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>CAPABILITY STATEMENT</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-150"
            >
              <PhoneCall className="h-4 w-4" />
              <span>TRANSMIT SECURE COMMS</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
