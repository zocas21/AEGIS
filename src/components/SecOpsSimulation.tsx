import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Play, RotateCcw, Activity, ShieldCheck, AlertCircle } from 'lucide-react';

interface LogLine {
  id: string;
  timestamp: string;
  source: string;
  event: string;
  status: 'SAFE' | 'WARNING' | 'ALERT' | 'INFO';
}

const SOURCES = ['GW-EAST-01', 'KERN-SYS-NODE4', 'FIREWALL-GOVCLOUD', 'ZT-PROXY-A', 'SECURE-CONTAINER-6'];
const EVENTS = [
  'Cryptographic certificate verification complete.',
  'Active packet sweep: inspected 512 ingress frames.',
  'NIST 800-171 control auditing heartbeat verified.',
  'Zero-Trust authorization token issued successfully.',
  'Potential intrusion attempts quarantined at gateway router.',
  'Automated STIG compliance integrity validation completed.',
  'Encrypted database connection pooling verified.'
];

export default function SecOpsSimulation() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [isActive, setIsActive] = useState(true);
  const [threatLevel, setThreatLevel] = useState('LOW');
  const [inspectionCount, setInspectionCount] = useState(102434);
  const [defenseIndex, setDefenseIndex] = useState(99.4);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with some log lines
  useEffect(() => {
    const initialLogs: LogLine[] = [];
    for (let i = 0; i < 8; i++) {
      initialLogs.push(generateLogLine());
    }
    setLogs(initialLogs);
  }, []);

  // Log ticker effect
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setLogs((prev) => {
        const updated = [...prev, generateLogLine()];
        // Limit log queue size
        if (updated.length > 30) {
          updated.shift();
        }
        return updated;
      });

      setInspectionCount((c) => c + Math.floor(Math.random() * 24) + 1);
      
      // Minor jitter to defense index
      setDefenseIndex((idx) => {
        const change = (Math.random() * 0.1 - 0.05);
        const newIdx = parseFloat((idx + change).toFixed(2));
        return Math.max(98.5, Math.min(100.0, newIdx));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive]);

  // Scroll to bottom of terminal
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const generateLogLine = (): LogLine => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
    const source = SOURCES[Math.floor(Math.random() * SOURCES.length)];
    const event = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    
    // Weighted status allocation
    const rand = Math.random();
    let status: 'SAFE' | 'WARNING' | 'ALERT' | 'INFO' = 'INFO';
    if (rand > 0.85) status = 'WARNING';
    else if (rand > 0.96) status = 'ALERT';
    else if (rand > 0.5) status = 'SAFE';

    return {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: timeStr,
      source,
      event,
      status,
    };
  };

  const triggerDefensiveSweep = () => {
    setThreatLevel('SCANNING');
    setIsActive(false);

    // Simulate extensive sweep
    setLogs((prev) => [
      ...prev,
      {
        id: 'sweep-start',
        timestamp: new Date().toTimeString().split(' ')[0],
        source: 'AEGIS-TACTICAL-CORE',
        event: '⚡ INITIALIZING ENTERPRISE SECURITY SWEEP & HARDENING ROUTINES...',
        status: 'INFO',
      }
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        {
          id: 'sweep-mid-1',
          timestamp: new Date().toTimeString().split(' ')[0],
          source: 'AEGIS-TACTICAL-CORE',
          event: '✓ SCANNING FIREWALL PORT CONTEXTS... NO LEAKS DETECTED.',
          status: 'SAFE',
        },
        {
          id: 'sweep-mid-2',
          timestamp: new Date().toTimeString().split(' ')[0],
          source: 'AEGIS-TACTICAL-CORE',
          event: '✓ SCANNING GovCloud S3 BUCKET ENCRYPTION POLICIES... 100% SECURE.',
          status: 'SAFE',
        },
        {
          id: 'sweep-mid-3',
          timestamp: new Date().toTimeString().split(' ')[0],
          source: 'AEGIS-TACTICAL-CORE',
          event: '✓ COMPLIANCE INVENTORY: CMMC L2 COMPLIANCE STATE AFFIRMED.',
          status: 'SAFE',
        }
      ]);
    }, 1200);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        {
          id: 'sweep-end',
          timestamp: new Date().toTimeString().split(' ')[0],
          source: 'AEGIS-TACTICAL-CORE',
          event: '🛡️ SECURITY AUDIT COMPLETE. DEFENSIBILITY AT MAXIMUM RESILIENCE POSTURE.',
          status: 'SAFE',
        }
      ]);
      setThreatLevel('NOMINAL');
      setDefenseIndex(100.0);
      setIsActive(true);
    }, 2400);
  };

  const getStatusColor = (status: LogLine['status']) => {
    switch (status) {
      case 'SAFE':
        return 'text-green-400';
      case 'WARNING':
        return 'text-amber-400';
      case 'ALERT':
        return 'text-rose-500 font-bold animate-pulse';
      case 'INFO':
      default:
        return 'text-cyan-400';
    }
  };

  return (
    <div id="security-operations-simulation-widget" className="bg-slate-950 border border-slate-800 rounded-lg p-5 shadow-2xl max-w-4xl mx-auto overflow-hidden">
      
      {/* Header telemetry stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-slate-800 text-xs font-mono mb-4">
        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
          <span className="text-slate-500 block uppercase tracking-widest text-[9px]">Postural Threat Matrix</span>
          <span className={`text-sm font-bold block mt-1 ${threatLevel === 'NOMINAL' || threatLevel === 'LOW' ? 'text-green-400' : threatLevel === 'SCANNING' ? 'text-cyan-400 animate-pulse' : 'text-rose-500'}`}>
            ● {threatLevel}
          </span>
        </div>
        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
          <span className="text-slate-500 block uppercase tracking-widest text-[9px]">Audited Comm Ingress</span>
          <span className="text-sm font-bold text-white block mt-1">{inspectionCount.toLocaleString()}</span>
        </div>
        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
          <span className="text-slate-500 block uppercase tracking-widest text-[9px]">Tactical Defense Index</span>
          <span className="text-sm font-bold text-cyan-400 block mt-1">{defenseIndex}%</span>
        </div>
        <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800/80 flex items-center justify-between">
          <div>
            <span className="text-slate-500 block uppercase tracking-widest text-[9px]">Telemetry Loop</span>
            <span className="text-[11px] text-slate-300 font-semibold block mt-1">
              {isActive ? 'ACTIVE TICKER' : 'STANDBY'}
            </span>
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white"
            title={isActive ? "Pause Telemetry Stream" : "Resume Telemetry Stream"}
          >
            <Activity className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal View */}
      <div className="bg-slate-900 rounded border border-slate-800 p-4 font-mono text-[11px] leading-relaxed relative">
        <div className="absolute top-3 right-4 flex items-center space-x-1.5 text-[9px] text-slate-500 select-none uppercase tracking-widest">
          <Terminal className="h-3.5 w-3.5 text-cyan-500" />
          <span>AEGIS SECURE LOG AGENT</span>
        </div>
        
        {/* Scroll Container */}
        <div 
          ref={logContainerRef} 
          className="h-64 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent pr-2"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex flex-col sm:flex-row sm:items-start sm:space-x-2 text-slate-300 font-mono">
              <span className="text-slate-500 shrink-0 select-none">[{log.timestamp}]</span>
              <span className="text-slate-400 font-bold shrink-0 select-none">{log.source}:</span>
              <span className={`${getStatusColor(log.status)} break-words flex-1`}>{log.event}</span>
            </div>
          ))}
          {isActive && (
            <div className="flex items-center space-x-1 text-cyan-400 animate-pulse font-bold">
              <span>&gt;</span>
              <span className="w-2 h-3.5 bg-cyan-400 inline-block"></span>
            </div>
          )}
        </div>
      </div>

      {/* Control Actions Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-800">
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wide">
          SecOps simulation panel: visual demonstration of federal security telemetry systems.
        </p>
        <div className="flex space-x-2 w-full sm:w-auto shrink-0">
          <button
            onClick={triggerDefensiveSweep}
            disabled={threatLevel === 'SCANNING'}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white font-mono text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded border border-cyan-500/20 shadow-lg shadow-cyan-950/40 transition-all duration-150"
          >
            <Shield className="h-3.5 w-3.5" />
            <span>TRIGGER AUDIT SWEEP</span>
          </button>
        </div>
      </div>

    </div>
  );
}
