import React, { useState } from 'react';
import { TrendingUp, Users, Award, Briefcase, ChevronRight, DollarSign, Target, ShieldCheck } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  sub: string;
  icon: React.ComponentType<any>;
}

const CORPORATE_METRICS: Metric[] = [
  {
    label: 'FY2026 Revenue Run Rate',
    value: '$84.5 Million',
    change: '+28.4% YoY',
    sub: 'Audited Federal Contract Pipeline',
    icon: DollarSign
  },
  {
    label: 'Awarded Prime Contracts',
    value: '14 Active Primes',
    change: '100% Win Rate',
    sub: 'Defense & Intelligence Agency Portfolios',
    icon: Award
  },
  {
    label: 'Credentialed Personnel',
    value: '91% Clearable',
    change: 'TS/SCI Ready',
    sub: 'Active clearance hold ratio',
    icon: Users
  },
  {
    label: 'Contract Backlog Value',
    value: '$210 Million',
    change: '3.6 Years Run-Time',
    sub: 'Committed multi-year funding blocks',
    icon: Briefcase
  }
];

const FISCAL_YEARS = [
  { year: '2022', revenue: 24.2, backlog: 45.0, staff: 48 },
  { year: '2023', revenue: 38.5, backlog: 82.0, staff: 85 },
  { year: '2024', revenue: 52.0, backlog: 120.0, staff: 130 },
  { year: '2025', revenue: 68.4, backlog: 165.0, staff: 195 },
  { year: '2026 (Proj)', revenue: 84.5, backlog: 210.0, staff: 250 },
];

export default function InvestorDashboard() {
  const [selectedYear, setSelectedYear] = useState(FISCAL_YEARS[4]);

  return (
    <div id="investor-dashboard-panel" className="bg-slate-900 border border-slate-800 rounded-lg p-6 lg:p-8 shadow-xl max-w-5xl mx-auto space-y-8">
      {/* Upper header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider">Aegis Investor & Procurement Vitals</h3>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Fiscal Growth, Contract Posture, and Capacity Indexes</p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          <span>SAR-COMPLIANT FISCAL TRANSPARENCY</span>
        </div>
      </div>

      {/* Grid: Core Corporate Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORPORATE_METRICS.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="bg-slate-950 p-4 rounded border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">{metric.label}</span>
                <Icon className="h-4 w-4 text-cyan-500" />
              </div>
              <p className="text-xl font-bold font-sans text-white mt-1.5">{metric.value}</p>
              <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-900/80 text-[10px]">
                <span className="text-green-400 font-bold font-mono">{metric.change}</span>
                <span className="text-slate-500">{metric.sub}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Analytics / Interactive Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        {/* Left Column: Interactive Fiscal Chart (Custom SVG - Highly reliable and pixel perfect) */}
        <div className="lg:col-span-2 bg-slate-950 p-5 rounded border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span>Fiscal Performance Multi-Year Trend</span>
            </h4>
            <span className="text-[10px] text-slate-500 uppercase font-mono">Millions (USD)</span>
          </div>

          {/* SVG Bar Chart */}
          <div className="relative h-56 w-full pt-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[9px] font-mono text-slate-600">
              <div>$250M</div>
              <div>$200M</div>
              <div>$150M</div>
              <div>$100M</div>
              <div>$50M</div>
              <div className="border-b border-slate-800"></div>
            </div>

            {/* Bars container */}
            <div className="h-full w-full flex justify-around items-end pb-6 relative z-10 pl-8">
              {FISCAL_YEARS.map((f, i) => {
                const maxBacklog = 250;
                // Backlog height percent
                const bHeight = `${(f.backlog / maxBacklog) * 100}%`;
                // Revenue height percent
                const rHeight = `${(f.revenue / maxBacklog) * 100}%`;

                return (
                  <div
                    key={i}
                    onClick={() => setSelectedYear(f)}
                    className="flex flex-col items-center group cursor-pointer w-12 sm:w-16 hover:bg-slate-900/30 rounded p-1 transition-all"
                  >
                    <div className="w-full flex justify-center space-x-1 items-end h-36">
                      {/* Revenue Bar (Cyan) */}
                      <div
                        className={`w-3 sm:w-4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm transition-all duration-300 ${
                          selectedYear.year === f.year ? 'opacity-100 ring-2 ring-cyan-300' : 'opacity-70 group-hover:opacity-90'
                        }`}
                        style={{ height: rHeight }}
                        title={`Revenue: $${f.revenue}M`}
                      />
                      {/* Backlog Bar (Blue) */}
                      <div
                        className={`w-3 sm:w-4 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t-sm transition-all duration-300 ${
                          selectedYear.year === f.year ? 'opacity-100 ring-2 ring-blue-400' : 'opacity-70 group-hover:opacity-90'
                        }`}
                        style={{ height: bHeight }}
                        title={`Contract Backlog: $${f.backlog}M`}
                      />
                    </div>
                    {/* Label */}
                    <span className={`text-[10px] font-mono mt-2 block ${selectedYear.year === f.year ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                      FY{f.year.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center space-x-6 text-[10px] font-mono text-slate-400">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 bg-cyan-500 rounded-sm inline-block"></span>
              <span>Corporate Annual Revenue</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm inline-block"></span>
              <span>Committed Contract Backlog</span>
            </div>
          </div>
        </div>

        {/* Right Column: Year Specific Drills */}
        <div className="bg-slate-950 p-5 rounded border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-1.5">
              <Target className="h-4 w-4 text-cyan-400" />
              <span>Postural Audit: FY{selectedYear.year}</span>
            </h4>

            <div className="space-y-4 text-xs font-mono">
              <div className="bg-slate-900/60 p-3 rounded border border-slate-800">
                <span className="text-slate-500 block uppercase text-[9px]">Revenue Output</span>
                <span className="text-base font-bold text-white block mt-0.5">${selectedYear.revenue} Million</span>
              </div>

              <div className="bg-slate-900/60 p-3 rounded border border-slate-800">
                <span className="text-slate-500 block uppercase text-[9px]">Committed Backlog</span>
                <span className="text-base font-bold text-cyan-400 block mt-0.5">${selectedYear.backlog} Million</span>
              </div>

              <div className="bg-slate-900/60 p-3 rounded border border-slate-800">
                <span className="text-slate-500 block uppercase text-[9px]">Headcount Growth</span>
                <span className="text-base font-bold text-white block mt-0.5">{selectedYear.staff} Personnel</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900 text-[10px] text-slate-500 leading-relaxed">
            *Click on any fiscal column bar to drill down into corresponding annual metrics and staffing matrices.
          </div>
        </div>
      </div>

      {/* Corporate Milestones */}
      <div className="border-t border-slate-800 pt-6">
        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Significant Expansion Milestones</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950/60 p-4 rounded border border-slate-850">
            <span className="text-cyan-400 font-mono font-semibold block mb-1">Q1 2026 — Geographic Expansion</span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Opened highly secure development hubs near Huntsville, Alabama, and Reston, Virginia, incorporating secret-level physical access protocols.
            </p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded border border-slate-850">
            <span className="text-cyan-400 font-mono font-semibold block mb-1">Q4 2025 — Certification Milestones</span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Formally achieved SOC 2 Type II audit clearance and satisfied Level 2 self-assessments within the Joint CMMC defense supplier matrix.
            </p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded border border-slate-850">
            <span className="text-cyan-400 font-mono font-semibold block mb-1">Q2 2025 — Supply Chain Fortification</span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Acquired automated compliance systems ensuring SBOM cryptographic signing across all client GovCloud deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
