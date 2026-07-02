import React, { useState } from 'react';
import { ClipboardCheck, ArrowRight, ShieldCheck, RefreshCw, AlertTriangle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: string;
  points: number;
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Do you systematically segment Controlled Unclassified Information (CUI) from general corporate networks?',
    category: 'Network Segmentation',
    points: 25,
  },
  {
    id: 2,
    text: 'Is Multi-Factor Authentication (MFA) mandated for all local, network, and administrative access enclaves?',
    category: 'Access Control',
    points: 25,
  },
  {
    id: 3,
    text: 'Do you possess complete, cryptographically verified Software Bills of Materials (SBOM) for current production pipelines?',
    category: 'Software Supply Chain',
    points: 15,
  },
  {
    id: 4,
    text: 'Are DISA STIGs or CIS benchmarks automatically applied and audited across all active servers and containers?',
    category: 'Hardening & Configuration',
    points: 20,
  },
  {
    id: 5,
    text: 'Is there an operational incident response team capable of notifying defense authorities of a breach within 72 hours?',
    category: 'Incident Response Readiness',
    points: 15,
  },
];

export default function ComplianceChecker() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (val: boolean) => {
    const nextAnswers = { ...answers, [ASSESSMENT_QUESTIONS[currentQuestionIdx].id]: val };
    setAnswers(nextAnswers);

    if (currentQuestionIdx < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const restartAssessment = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setIsCompleted(false);
  };

  const calculateScore = () => {
    let score = 0;
    ASSESSMENT_QUESTIONS.forEach((q) => {
      if (answers[q.id]) {
        score += q.points;
      }
    });
    return score;
  };

  const getAssessmentOutcome = (score: number) => {
    if (score >= 85) {
      return {
        title: 'Tier 1: High Audit Readiness',
        style: 'bg-green-950/40 border-green-800 text-green-300',
        desc: 'Your posture shows strong alignment with CMMC Level 2 and NIST SP 800-171 protocols. You possess key protective safeguards ready for validation audits.',
        icon: ShieldCheck,
      };
    } else if (score >= 50) {
      return {
        title: 'Tier 2: Transitional Posture',
        style: 'bg-amber-950/40 border-amber-800 text-amber-300',
        desc: 'Essential defenses are configured, but vulnerabilities exist in network controls or continuous supply chain scanning. Remediation is advised to prevent bidding disqualification.',
        icon: AlertTriangle,
      };
    } else {
      return {
        title: 'Tier 3: Regulatory Notice Required',
        style: 'bg-red-950/40 border-red-800 text-red-300',
        desc: 'Critical security controls are unconfigured. Your current configuration faces immediate regulatory assessment friction and does not satisfy NIST SP 800-171 requirements.',
        icon: AlertTriangle,
      };
    }
  };

  const totalScore = calculateScore();
  const outcome = getAssessmentOutcome(totalScore);

  return (
    <div id="compliance-readiness-panel" className="bg-slate-900 border border-slate-800 rounded-lg p-6 lg:p-8 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <ClipboardCheck className="h-6 w-6 text-cyan-400" />
        <div>
          <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider">Aegis Compliance Readiness Audit</h3>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Interactive NIST SP 800-171 / CMMC Diagnostic v2.0</p>
        </div>
      </div>

      {!isCompleted ? (
        <div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-950 h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-cyan-500 h-1.5 transition-all duration-300"
              style={{ width: `${((currentQuestionIdx + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
            />
          </div>

          <div className="mb-6">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              Parameter {currentQuestionIdx + 1} of {ASSESSMENT_QUESTIONS.length}: {ASSESSMENT_QUESTIONS[currentQuestionIdx].category}
            </span>
            <h4 className="text-white text-base md:text-lg font-medium leading-relaxed mt-2">
              {ASSESSMENT_QUESTIONS[currentQuestionIdx].text}
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 bg-slate-800 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-500 text-slate-100 py-3 rounded-md font-semibold text-xs tracking-wider uppercase transition-all duration-150"
            >
              Affirmative / Enabled
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 py-3 rounded-md font-semibold text-xs tracking-wider uppercase transition-all duration-150"
            >
              Negative / Non-configured
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`p-5 rounded border ${outcome.style}`}>
            <div className="flex items-start space-x-3">
              <outcome.icon className="h-6 w-6 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white">{outcome.title}</h4>
                <p className="text-xs mt-2 leading-relaxed opacity-90">{outcome.desc}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded border border-slate-800">
            <h5 className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-3">Postural Analytics</h5>
            <div className="flex items-end justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs text-slate-300">COMPLIANCE INDEX SCORE:</span>
              <span className="text-lg font-mono font-bold text-cyan-400">{totalScore} / 100</span>
            </div>
            <div className="text-xs text-slate-400 space-y-2">
              <p>
                <strong>Audit Readiness:</strong> {totalScore}% compliance rating based on primary Federal acquisition controls.
              </p>
              <p>
                <strong>Target Mandate:</strong> Department of Defense contractors require 100/100 matching points (with documented POA&Ms) under the CMMC 2.0 framework to bid on sensitive defense-related contracts.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={restartAssessment}
              className="flex-1 flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-150"
            >
              <RefreshCw className="h-3.5 w-3.5 text-slate-400" />
              <span>RESTART ASSESSOR</span>
            </button>
            {/* Direct link to contact tab or email */}
            <a
              href="mailto:info@1force.com"
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-center"
            >
              <span>REQUEST TECHNICAL RECOVERY PLAN</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
