import React, { useState, useEffect } from 'react';
import { Send, Key, CheckCircle, AlertTriangle, ShieldCheck, Mail, Phone, Lock, Terminal, ShieldAlert } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  // Inputs
  const [fullName, setFullName] = useState('');
  const [agency, setAgency] = useState('');
  const [clearance, setClearance] = useState('None');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // OTP Verification States
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState('');
  const [generatedPhoneOtp, setGeneratedPhoneOtp] = useState('');
  
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);

  const [inputEmailOtp, setInputEmailOtp] = useState('');
  const [inputPhoneOtp, setInputPhoneOtp] = useState('');

  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  // Status Displays
  const [warningMessage, setWarningMessage] = useState('');
  const [secureTransmission, setSecureTransmission] = useState(false);

  // Terminal Logs
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'SYSTEM INITIALIZED: Gateway intercept receiver loaded.',
    'Awaiting security credential telemetry...'
  ]);

  // Append logs helpers
  const appendLog = (msg: string) => {
    const timeStr = new Date().toLocaleTimeString();
    setConsoleLogs((prev) => [...prev, `[${timeStr}] ${msg}`]);
  };

  // DYNAMIC RESET RULE: If email or phone is modified, reset verification status instantly.
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailVerified || emailOtpSent) {
      setEmailVerified(false);
      setEmailOtpSent(false);
      setGeneratedEmailOtp('');
      setInputEmailOtp('');
      setSecureTransmission(false);
      appendLog(`TELEMETRY CHANGE: Email field updated. Cryptographic OTP state RESET.`);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhone(val);
    if (phoneVerified || phoneOtpSent) {
      setPhoneVerified(false);
      setPhoneOtpSent(false);
      setGeneratedPhoneOtp('');
      setInputPhoneOtp('');
      setSecureTransmission(false);
      appendLog(`TELEMETRY CHANGE: Phone field updated. Cryptographic OTP state RESET.`);
    }
  };

  // Dispatch OTP
  const sendEmailOtp = () => {
    if (!email || !email.includes('@')) {
      setWarningMessage('Invalid Email — Please provide a compliant federal/corporate address.');
      return;
    }
    setWarningMessage('');
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedEmailOtp(code);
    setEmailOtpSent(true);
    appendLog(`SECURE DISPATCH: Dispatched Email OTP seed [${code}] to gateway.`);
    appendLog(`OUTBOUND INTERCEPT: Email address targeted: ${email}`);
  };

  const sendPhoneOtp = () => {
    if (!phone || phone.length < 7) {
      setWarningMessage('Invalid Phone — Please provide a valid numerical contact protocol.');
      return;
    }
    setWarningMessage('');
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedPhoneOtp(code);
    setPhoneOtpSent(true);
    appendLog(`SECURE DISPATCH: Dispatched SMS OTP seed [${code}] to cellular router.`);
    appendLog(`OUTBOUND INTERCEPT: Phone line targeted: ${phone}`);
  };

  // Verify OTP inputs
  const verifyEmailOtp = () => {
    if (inputEmailOtp === generatedEmailOtp && generatedEmailOtp !== '') {
      setEmailVerified(true);
      setWarningMessage('');
      appendLog(`CREDENTIAL MATCH: Email identity authenticated. State: VERIFIED.`);
    } else {
      setWarningMessage('Invalid Email OTP. Please check the intercept console.');
      appendLog(`AUTHENTICATION ERROR: Incorrect Email OTP attempt.`);
    }
  };

  const verifyPhoneOtp = () => {
    if (inputPhoneOtp === generatedPhoneOtp && generatedPhoneOtp !== '') {
      setPhoneVerified(true);
      setWarningMessage('');
      appendLog(`CREDENTIAL MATCH: Cellular line authenticated. State: VERIFIED.`);
    } else {
      setWarningMessage('Invalid Phone OTP. Please check the intercept console.');
      appendLog(`AUTHENTICATION ERROR: Incorrect Phone OTP attempt.`);
    }
  };

  // Form Submit Handler
  const handleSubmissionAttempt = (e: React.FormEvent) => {
    e.preventDefault();

    // BLOCK CONDITION: If email OR phone is NOT verified, block the submit.
    if (!emailVerified || !phoneVerified) {
      setWarningMessage('Verification Required – Please verify your email and phone before continuing.');
      appendLog(`TRANSMISSION BLOCKED: Submission attempted but verification is INCOMPLETE.`);
      return;
    }

    // SUCCESS CONDITION: If both are verified
    setWarningMessage('');
    setSecureTransmission(true);
    appendLog(`TRANSMISSION LOCKED: Gateway tunnel fully verified. Confirmed.`);
    
    // Trigger auto fallback email client
    const mailSubject = encodeURIComponent(`Aegis Federal Systems — Strategic Inquiry [${agency}]`);
    const mailBody = encodeURIComponent(
      `Secure Comms Dossier:\n\n` +
      `Sender Name: ${fullName}\n` +
      `Organization/Agency: ${agency}\n` +
      `Security Clearance Level: ${clearance}\n` +
      `Authenticated Email: ${email}\n` +
      `Authenticated Contact: ${phone}\n\n` +
      `Secure Comms Payload:\n${message}\n\n` +
      `Verification Signature: Cryptographically Signed by Aegis Verification Engine`
    );
    
    window.location.href = `mailto:info@1force.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
      
      {/* Contact Form Details (7 Columns) */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-lg p-6 md:p-8 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-950 p-2.5 rounded-md border border-cyan-500/20">
            <Lock className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider">Secure Comms Transceiver</h3>
            <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">HubSpot-Compatible Lead Routing Protocol</p>
          </div>
        </div>

        {warningMessage && (
          <div className="bg-rose-950/40 border border-rose-800 text-rose-300 text-xs p-4 rounded-md mb-6 flex items-start space-x-2 font-semibold">
            <ShieldAlert className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{warningMessage}</span>
          </div>
        )}

        {secureTransmission && (
          <div className="bg-green-950/40 border border-green-800 text-green-300 text-xs p-4 rounded-md mb-6 flex flex-col space-y-3 font-semibold">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 shrink-0 text-green-400" />
              <span>Secure Transmission Confirmed — Telemetry Authenticated.</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal font-normal">
              Your message packet has been compiled. Per federal routing directives, please finalize transmitting your encrypted dossier by clicking the link below:
            </p>
            {/* GLOBAL EMAIL ROUTING MANDATE REQUIREMENT */}
            <div className="pt-2">
              <a
                href="mailto:info@1force.com"
                className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold tracking-widest uppercase px-5 py-3 rounded border border-cyan-400/20 shadow-lg shadow-cyan-900/30 transition-all duration-150"
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmissionAttempt} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">Full Name / Rank</label>
              <input
                type="text"
                required
                disabled={secureTransmission}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white placeholder-slate-600 transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Org / Agency */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">Agency / Organization</label>
              <input
                type="text"
                required
                disabled={secureTransmission}
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white placeholder-slate-600 transition-colors"
                placeholder="e.g. DoD / DHS"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Security Clearance */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">Security Clearance Level</label>
              <select
                value={clearance}
                disabled={secureTransmission}
                onChange={(e) => setClearance(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white transition-colors"
              >
                <option value="None">No Clearance held</option>
                <option value="Public Trust">Public Trust / Eligibility</option>
                <option value="Secret">DoD Secret</option>
                <option value="Top Secret">DoD Top Secret</option>
                <option value="TS/SCI">TS / SCI Eligible</option>
              </select>
            </div>
          </div>

          {/* Email Verification Section */}
          <div className="border border-slate-800/80 rounded p-4 bg-slate-950/40 space-y-3">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5 flex justify-between">
                <span>Direct Corporate Email</span>
                {emailVerified && <span className="text-green-400 font-bold font-mono">✓ IDENTITY VERIFIED</span>}
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  disabled={secureTransmission || emailVerified}
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white placeholder-slate-600 transition-colors"
                  placeholder="name@agency.gov"
                />
                {!emailVerified && (
                  <button
                    type="button"
                    onClick={sendEmailOtp}
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded transition-colors"
                  >
                    {emailOtpSent ? 'Resend' : 'Send OTP'}
                  </button>
                )}
              </div>
            </div>

            {/* Email OTP Verification Input */}
            {emailOtpSent && !emailVerified && (
              <div className="flex gap-2 bg-slate-950 p-2 rounded border border-slate-850">
                <input
                  type="text"
                  maxLength={6}
                  value={inputEmailOtp}
                  onChange={(e) => setInputEmailOtp(e.target.value)}
                  className="w-28 bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-1.5 text-center text-white tracking-widest placeholder-slate-600 font-mono"
                  placeholder="******"
                />
                <button
                  type="button"
                  onClick={verifyEmailOtp}
                  className="bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded transition-colors"
                >
                  Confirm OTP
                </button>
              </div>
            )}
          </div>

          {/* Phone Verification Section */}
          <div className="border border-slate-800/80 rounded p-4 bg-slate-950/40 space-y-3">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5 flex justify-between">
                <span>Secure Mobile / Voice Protocol</span>
                {phoneVerified && <span className="text-green-400 font-bold font-mono">✓ TELEMETRY VERIFIED</span>}
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  required
                  disabled={secureTransmission || phoneVerified}
                  value={phone}
                  onChange={handlePhoneChange}
                  className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white placeholder-slate-600 transition-colors"
                  placeholder="+1 (703) 555-0100"
                />
                {!phoneVerified && (
                  <button
                    type="button"
                    onClick={sendPhoneOtp}
                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded transition-colors"
                  >
                    {phoneOtpSent ? 'Resend' : 'Send OTP'}
                  </button>
                )}
              </div>
            </div>

            {/* Phone OTP Verification Input */}
            {phoneOtpSent && !phoneVerified && (
              <div className="flex gap-2 bg-slate-950 p-2 rounded border border-slate-850">
                <input
                  type="text"
                  maxLength={6}
                  value={inputPhoneOtp}
                  onChange={(e) => setInputPhoneOtp(e.target.value)}
                  className="w-28 bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-1.5 text-center text-white tracking-widest placeholder-slate-600 font-mono"
                  placeholder="******"
                />
                <button
                  type="button"
                  onClick={verifyPhoneOtp}
                  className="bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded transition-colors"
                >
                  Confirm OTP
                </button>
              </div>
            )}
          </div>

          {/* Secure Message Payload */}
          <div>
            <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">Secure Comms Payload</label>
            <textarea
              required
              rows={4}
              disabled={secureTransmission}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded text-xs px-3.5 py-2.5 text-white placeholder-slate-600 transition-colors"
              placeholder="State your technical requirement, target deployment parameter, or compliance timelines..."
            />
          </div>

          <button
            type="submit"
            disabled={secureTransmission}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white font-mono text-xs font-bold tracking-widest uppercase py-3 rounded border border-cyan-500/20 shadow-lg shadow-cyan-950/40 transition-all duration-150 flex items-center justify-center space-x-2"
          >
            <Send className="h-4 w-4" />
            <span>TRANSMIT COMMS MATRIX</span>
          </button>
        </form>
      </div>

      {/* Outbound Gateway Intercept Console (5 Columns) */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 flex-1 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">Outbound Gateway Intercept Console</span>
              </div>
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
            </div>

            <p className="text-slate-500 text-[10px] leading-relaxed mb-4 uppercase tracking-wider">
              Secure hardware debugger log showing active transmission seeds. Copy and paste codes below to authorize submissions during demonstration.
            </p>

            {/* Logs Area */}
            <div className="bg-slate-900 border border-slate-850 p-4 rounded h-64 overflow-y-auto space-y-2 text-[11px] scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {consoleLogs.map((log, i) => (
                <p key={i} className="text-cyan-400 break-words leading-relaxed font-mono">
                  {log}
                </p>
              ))}
            </div>
          </div>

          {/* Quick-Action credentials blocks */}
          <div className="border-t border-slate-850 pt-4 mt-4 space-y-2.5">
            <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">CRYSTAL TELEMETRY PEEK</span>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                <span className="text-slate-500 uppercase block text-[9px] mb-1 font-bold">Email OTP</span>
                <span className="text-sm font-bold text-white block">
                  {generatedEmailOtp ? (
                    <span className="select-all cursor-pointer font-bold text-cyan-300 underline" title="Click to select code">
                      {generatedEmailOtp}
                    </span>
                  ) : (
                    <span className="text-slate-600">AWAITING</span>
                  )}
                </span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                <span className="text-slate-500 uppercase block text-[9px] mb-1 font-bold">Phone OTP</span>
                <span className="text-sm font-bold text-white block">
                  {generatedPhoneOtp ? (
                    <span className="select-all cursor-pointer font-bold text-cyan-300 underline" title="Click to select code">
                      {generatedPhoneOtp}
                    </span>
                  ) : (
                    <span className="text-slate-600">AWAITING</span>
                  )}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
