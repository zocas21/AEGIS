import { Capability, ComplianceStandard, PastPerformance, Executive, CareerRole, NewsInsight } from './types';

export const CORE_CAPABILITIES: Capability[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Operations & Defense',
    shortDesc: 'State-of-the-art defensive cyber capabilities, Threat Hunting, and Security Operations Center (SOC) management.',
    longDesc: 'Aegis Federal Systems provides end-to-end cybersecurity services tailored for high-threat environments. We protect vital federal networks, defense systems, and enterprise infrastructure through continuous monitoring, proactive hunt operations, and zero-trust engineering.',
    iconName: 'ShieldAlert',
    subCapabilities: [
      'Managed Security Operations (SOC/MDR)',
      'Advanced Threat Intelligence & Active Hunting',
      'Zero-Trust Architecture (ZTA) Implementation',
      'Penetration Testing & Red Teaming',
      'Federal Incident Response & Recovery'
    ],
    applications: [
      'U.S. Department of Defense (DoD) Networks',
      'Defense Industrial Base (DIB) Organizations',
      'Highly Classified Intelligence Enclaves',
      'Critical Energy & Telecommunications Infrastructure'
    ]
  },
  {
    id: 'secure-infrastructure',
    title: 'Secure Infrastructure & Cloud Systems',
    shortDesc: 'Hardened cloud deployments, secure enterprise networks, and SCIF-grade secure facility design.',
    longDesc: 'Our engineering teams build and manage infrastructure that complies with the most stringent security controls. From multi-region hybrid cloud environments to physical secure facilities (SCIFs), we secure every node in your communications matrix.',
    iconName: 'ServerCrash',
    subCapabilities: [
      'AWS GovCloud & Azure Government Architecture',
      'SCIF & Tactical Network Engineering',
      'Hardened Software-Defined Networks (SDN)',
      'Cryptographic Key Management & HSM Deployments',
      'Disaster Recovery & Extreme Continuity of Operations (COOP)'
    ],
    applications: [
      'Government Agencies transitioning to FedRAMP High Cloud',
      'Joint Tactical Communications Frameworks',
      'Emergency Response Operations Centers'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & DevSecOps',
    shortDesc: 'Automated continuous integration/delivery pipelines hardened with secure-by-design pipelines.',
    longDesc: 'We accelerate code-to-mission delivery without sacrificing security. By embedding compliance checks, static analysis, and cryptographic signatures directly into software delivery pipelines, we achieve rapid Authority to Operate (ATO).',
    iconName: 'Cpu',
    subCapabilities: [
      'Secure Software Supply Chain (S2C2F)',
      'Automated Compliance-as-Code (CaC)',
      'Kubernetes & Microservices Hardening',
      'Continuous Authority to Operate (cATO) Pipelines',
      'Legacy Application Modernization'
    ],
    applications: [
      'Modern Mission Command Software',
      'Secure Mobile & Field Applications',
      'Federal Enterprise Resource Systems'
    ]
  },
  {
    id: 'mission-support',
    title: 'Mission Support Services',
    shortDesc: 'Tactical assistance, program management, and operational support in austere settings globally.',
    longDesc: 'Aegis coordinates mission-critical logistics, technical program management, and engineering support for federal deployments. Our personnel hold elite clearances and operate with strict operational discipline under demanding schedules.',
    iconName: 'Globe',
    subCapabilities: [
      'Systems Engineering & Integration (SE&I)',
      ' austere Environment Operational Logistics',
      'Technical Program & Acquisition Support',
      'C4ISR Mission Planning and Integration',
      'Tactical Communications Assistance'
    ],
    applications: [
      'Joint Forces Overseas Deployments',
      'Agency-level Program Management Offices (PMO)',
      'Tactical Communications Maintenance'
    ]
  },
  {
    id: 'investigative-intelligence',
    title: 'Investigative & Intelligence Support',
    shortDesc: 'Advanced OSINT, counter-intelligence analysis, forensics, and intelligence modernization.',
    longDesc: 'We deliver analytical superiority. Our intelligence analysts, data scientists, and digital forensics investigators support counter-intelligence, insider threat detection, and Open Source Intelligence (OSINT) workflows.',
    iconName: 'Eye',
    subCapabilities: [
      'Open Source Intelligence (OSINT) Frameworks',
      'Digital Forensics & Incident Reconstruction',
      'Insider Threat Detection & Analytics',
      'Biometric & Identity Intelligence Support',
      'Threat Finance & Geo-Political Risk Analysis'
    ],
    applications: [
      'Federal Law Enforcement Operations',
      'National Security Analysis Centers',
      'Corporate Insider Threat Programs'
    ]
  }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    id: 'cmmc-l2',
    name: 'CMMC 2.0 Level 2',
    fullName: 'Cybersecurity Maturity Model Certification Level 2',
    level: 'Advanced (110 Practices)',
    description: 'Required for defense contractors handling Controlled Unclassified Information (CUI). Aligns precisely with NIST SP 800-171 controls.',
    controlAreas: ['Access Control', 'Incident Response', 'Risk Assessment', 'System & Communications Protection'],
    status: 'COMPLIANT'
  },
  {
    id: 'nist-800-171',
    name: 'NIST SP 800-171',
    fullName: 'National Institute of Standards & Technology Special Publication 800-171',
    level: 'Full Alignment',
    description: 'Protects the confidentiality of Controlled Unclassified Information (CUI) in non-federal systems and organizations.',
    controlAreas: ['Configuration Management', 'Identification & Authentication', 'Media Protection', 'Physical Protection'],
    status: 'COMPLIANT'
  },
  {
    id: 'iso-27001',
    name: 'ISO/IEC 27001:2022',
    fullName: 'International Standard for Information Security Management Systems',
    level: 'Enterprise Certified',
    description: 'An international framework for establishing, implementing, operating, monitoring, reviewing, and maintaining an Information Security Management System.',
    controlAreas: ['Asset Management', 'Cryptography', 'Operational Security', 'Supplier Relations'],
    status: 'AUTHORIZED'
  },
  {
    id: 'soc2-type2',
    name: 'SOC 2 Type II',
    fullName: 'System and Organization Controls 2 Audit Report',
    level: 'Clean Opinion',
    description: 'Rigorous assessment of security, availability, processing integrity, confidentiality, and privacy over a sustained testing period.',
    controlAreas: ['Trust Services Criteria', 'Operational Effectiveness', 'Continuous Logging', 'Data Encryption'],
    status: 'AUDIT_READY'
  },
  {
    id: 'fisma-high',
    name: 'FISMA High',
    fullName: 'Federal Information Security Modernization Act High Baseline',
    level: 'Agency Authorization Ready',
    description: 'Defines information security standards for federal agencies and systems categorized as high-impact for confidentiality, integrity, or availability.',
    controlAreas: ['Continuous Monitoring', 'Risk Assessment', 'System & Services Acquisition', 'Incident Response Plan'],
    status: 'AUTHORIZED'
  }
];

export const PAST_PERFORMANCE: PastPerformance[] = [
  {
    id: 'perf-1',
    client: 'U.S. Department of Defense (DoD) Agency',
    title: 'Enterprise Cyber Threat Defensive Modernization',
    challenge: 'A major defense branch faced thousands of persistent nation-state threat campaigns daily across legacy distributed networks, resulting in latency in threat hunting and intelligence processing.',
    solution: 'Aegis designed and deployed a unified, AI-enhanced Security Operations Center (SOC) running on hardened federal cloud endpoints. We introduced automated threat-hunting runbooks and configured a Zero-Trust Network Access (ZTNA) posture.',
    result: 'Drastically reduced mean time to detect (MTTD) cyber incidents and consolidated multiple fragmented centers into a single highly responsive command node.',
    metrics: [
      '94% reduction in threat identification latency',
      '99.99% system availability under intense network load',
      'Zero unauthorized security breaches over 24 months'
    ],
    classification: 'CUI / UNCLASSIFIED (DISTRIBUTION A)'
  },
  {
    id: 'perf-2',
    client: 'Federal Civilian Authority',
    title: 'SecDevOps Cloud Transformation Initiative',
    challenge: 'An essential federal agency required rapid modernization of its core records database, which was running on legacy on-premise hardware, stalling updates and failing security compliance standards (FISMA High).',
    solution: 'Aegis built an automated, FedRAMP High-compliant AWS DevSecOps pipeline with automated compliance-as-code guards, scanning software artifacts for container vulnerabilities and verifying security parameters prior to deployments.',
    result: 'Streamlined the continuous integration and deployment pipeline, achieving Continuous Authority to Operate (cATO) and permitting multiple daily feature drops.',
    metrics: [
      '14-day average audit timeline reduced to < 3 hours',
      '80% reduction in deployment-related rollbacks',
      'Full FISMA High compliance verified post-migration'
    ],
    classification: 'UNCLASSIFIED'
  },
  {
    id: 'perf-3',
    client: 'Intelligence Community (IC) Component',
    title: 'Global Tactical Communications Hardening',
    challenge: 'Personnel deployed in remote environments required reliable, low-probability-of-intercept voice and data channels with defense-grade cryptographic guarantees under severe physical and RF constraints.',
    solution: 'Aegis engineered a tactical Software-Defined Wide Area Network (SD-WAN) using hardware security modules (HSMs) and advanced military-grade cryptography standards, supported by automated failovers.',
    result: 'Delivered robust, resilient communication platforms that remain reliable even in heavily jammed or contested spectrum spaces.',
    metrics: [
      '100% voice/data link continuity during active jamming drills',
      '256-bit dynamic encryption with keys changed every 60 seconds',
      'Ruggedized field nodes configured and deployed within 48 hours'
    ],
    classification: 'SECRET // NOFORN'
  }
];

export const LEADERSHIP_TEAM: Executive[] = [
  {
    id: 'exec-1',
    name: 'Gen. James R. Vance (Ret.)',
    role: 'Chief Executive Officer',
    biography: 'Retired U.S. Army Major General with over 32 years of distinguished service. Former commander of military intelligence divisions and cyber defense components. Gen. Vance leads Aegis with a deep strategic focus on national security priorities and operational readiness.',
    credentials: ['M.S. in Strategic Studies, National War College', 'B.S. in Electrical Engineering, USMA West Point', 'Former Joint Chiefs Cyber Advisor'],
    background: 'Defense',
    imagePlaceholder: 'JV'
  },
  {
    id: 'exec-2',
    name: 'Dr. Sarah K. Lin',
    role: 'Chief Technology Officer',
    biography: 'Former Principal Cybersecurity Architect at a leading intelligence agency. Over 18 years of technical research in cryptography, software supply chain security, and distributed threat containment. Dr. Lin designs the technical capabilities behind Aegis’s secure software engineering.',
    credentials: ['Ph.D. in Computer Science, Carnegie Mellon', 'Recipient of Federal Technology Leadership Award', 'Published Author, Zero Trust Cloud Architecture'],
    background: 'Intelligence',
    imagePlaceholder: 'SL'
  },
  {
    id: 'exec-3',
    name: 'Marcus Vance, Esq.',
    role: 'Chief Compliance & Operations Officer',
    biography: 'Distinguished compliance attorney specializing in federal defense acquisition regulations (DFARS), CMMC rules, and FISMA protocols. Former legal counsel to Tier-1 defense contractors with a perfect audit-readiness record.',
    credentials: ['J.D., Georgetown University Law Center', 'B.A. in Public Policy, Princeton', 'Certified Information Systems Security Professional (CISSP)'],
    background: 'Enterprise',
    imagePlaceholder: 'MV'
  },
  {
    id: 'exec-4',
    name: 'Col. Raymond Mercer (Ret.)',
    role: 'VP of Intelligence & Mission Support',
    biography: 'Retired Intelligence Community officer with extensive counter-intelligence and geopolitical risk analysis experience across Europe and the Middle East. Expert in asymmetric threat profiles and tactical field communications.',
    credentials: ['Master of Military Art and Science, CGSC', 'B.A. in International Relations, Annapolis Naval Academy', 'OSINT Specialist, Defense Intelligence Agency'],
    background: 'Cybersecurity',
    imagePlaceholder: 'RM'
  }
];

export const CAREER_OPPORTUNITIES: CareerRole[] = [
  {
    id: 'car-1',
    title: 'Lead Cyber Threat Hunter / Red Teamer',
    department: 'Cybersecurity Operations',
    clearanceRequired: 'TS/SCI',
    location: 'Reston, VA (Hybrid Available)',
    type: 'Full-Time',
    description: 'We are seeking an elite cybersecurity practitioner to lead offensive cyber simulations and pro-active threat hunting operations for national defense agency networks. You will design next-generation cyber defense mechanisms by actively seeking out advanced persistent threats (APTs).',
    responsibilities: [
      'Lead tactical threat hunt investigations on production military networks.',
      'Construct state-of-the-art malware analysis and payload emulation frameworks.',
      'Coordinate with security architecture squads to implement persistent active firewall rules.',
      'Mentor and guide junior analysts in SOC protocols and modern intrusion frameworks.'
    ],
    requirements: [
      'Active DoD TS/SCI security clearance with Polygraph.',
      '8+ years of professional cyber engineering or security incident investigation.',
      'Certifications: OSCE, GPEN, GCIH, or equivalent credentials.',
      'Deep knowledge of nation-state threat vectors and the MITRE ATT&CK framework.'
    ]
  },
  {
    id: 'car-2',
    title: 'Senior DevSecOps Solutions Architect',
    department: 'Digital Transformation',
    clearanceRequired: 'Secret',
    location: 'Fort Meade, MD (On-Site)',
    type: 'Full-Time',
    description: 'Aegis is hiring a solution architect to spearhead the engineering of fully compliant Continuous Authorization to Operate (cATO) systems for federal civilian and DoD networks. You will replace manual systems with automated compliance pipelines.',
    responsibilities: [
      'Design hardened multi-tenant Kubernetes and microservices infrastructures.',
      'Incorporate static code scanners (SAST/DAST) and artifact signers into GitLab CI/CD systems.',
      'Formulate compliance-as-code configurations matching NIST SP 800-53 standards.',
      'Present security control layouts to federal authorizing officials.'
    ],
    requirements: [
      'Active DoD Secret (or higher) clearance.',
      '6+ years of DevOps engineering, cloud security, or federal infrastructure administration.',
      'Expertise in Terraform, Kubernetes, Helm, and secure AWS GovCloud systems.',
      'In-depth knowledge of FedRAMP High security baselines.'
    ]
  },
  {
    id: 'car-3',
    title: 'Digital Forensics & Incident Response Specialist',
    department: 'Investigative & Intelligence Support',
    clearanceRequired: 'Top Secret',
    location: 'Washington, D.C. (On-Site)',
    type: 'Full-Time',
    description: 'Provide forensic investigation support to federal law enforcement and national intelligence agencies. You will reconstruct malicious actions, analyze volatile storage buffers, and compile authoritative cyber litigation packets.',
    responsibilities: [
      'Perform detailed structural analysis of compromised server registers and disks.',
      'Execute volatile memory forensics to capture advanced rootkits or active payloads.',
      'Formulate chain-of-custody documentation for legal prosecution support.',
      'Brief agency directors on technical forensic discoveries.'
    ],
    requirements: [
      'Active DoD Top Secret clearance.',
      '5+ years of digital forensics, volatile memory analysis, or federal incident containment.',
      'Expertise in EnCase, FTK, Volatility, or Sleuthkit platforms.',
      'GCFE, GCFA, or EnCE certifications.'
    ]
  },
  {
    id: 'car-4',
    title: 'Junior Secure Systems Administrator',
    department: 'Secure Infrastructure',
    clearanceRequired: 'Public Trust',
    location: 'Huntsville, AL (Hybrid)',
    type: 'Full-Time',
    description: 'Support federal mission systems through hardened server management, active OS patch cycles, and regulatory control administration. This role is a prime stepping-stone for career growth in federal systems engineering.',
    responsibilities: [
      'Deploy operating system security templates (DISA STIGs) across Linux and Windows systems.',
      'Verify that routine system backups are encrypted and stored at secondary locations.',
      'Respond to standard infrastructure alerts and maintain hardware inventories.',
      'Assist compliance personnel during periodic federal security reviews.'
    ],
    requirements: [
      'Ability to obtain and maintain a Federal Public Trust authorization.',
      '2+ years of Linux/Windows systems administration or database operation.',
      'CompTIA Security+ certification or equivalent.',
      'Eagerness to train in secure AWS configurations and FedRAMP frameworks.'
    ]
  }
];

export const NEWS_INSIGHTS: NewsInsight[] = [
  {
    id: 'news-1',
    category: 'CHOUGHT_LEADERSHIP',
    title: 'Establishing Continuous Authority to Operate (cATO) in Defense Networks',
    summary: 'A strategic review of how automation is replacing legacy compliance audits, enabling weapon systems and mission software to deploy secure code updates within minutes.',
    date: 'June 18, 2026',
    author: 'Dr. Sarah K. Lin',
    readTime: '8 min read',
    content: 'Securing modern software systems in federal defense spaces requires shifting from static security assessments to automated continuous authorization. By integrating real-time vulnerability telemetry and secure artifact signatures directly into container registries, agencies can establish compliance frameworks that dynamically approve deployments. This article explores the architectural standards required to satisfy both defense acquisition regulations and tactical mission parameters.'
  },
  {
    id: 'news-2',
    category: 'INDUSTRY_ANALYSIS',
    title: 'The CMMC 2.0 Level 2 Timeline: Critical Deadlines for the Defense Industrial Base',
    summary: 'With full integration into federal defense contracts imminent, what steps must small-to-midsize defense contractors prioritize to verify compliance and protect controlled unclassified data?',
    date: 'May 12, 2026',
    author: 'Marcus Vance, Esq.',
    readTime: '12 min read',
    content: 'The implementation of CMMC 2.0 represents a watershed moment for defense supply chain security. Defense contractors must immediately evaluate their network segmentation, asset tracking, and employee cybersecurity awareness training. Failure to secure formal assessment validation from certified inspectors will disqualify organizations from government contract competitions. We unpack the critical checkpoints that leadership teams must pass.'
  },
  {
    id: 'news-3',
    category: 'TECHNICAL_ARTICLE',
    title: 'Countering Nation-State Supply Chain Attacks with Cryptographic Artifact Verification',
    summary: 'A deep-dive technical look at signing software pipelines, utilizing in-toto metadata, and verifying software bills of materials (SBOM) within high-threat federal enclaves.',
    date: 'April 05, 2026',
    author: 'Aegis Red Team Labs',
    readTime: '15 min read',
    content: 'Recent global compromises highlight the extreme threat posed by software supply chain attacks. Standard malware scanning is no longer sufficient. Modern defenses must employ strict cryptographic proofs, utilizing attestation formats to guarantee that the binary code executing on server nodes perfectly matches the source code approved in secure staging. We outline practical configuration recipes for federal DevOps administrators.'
  },
  {
    id: 'news-4',
    category: 'COMPANY_UPDATE',
    title: 'Aegis Federal Systems Awarded $45M Defense Intelligence Support Contract',
    summary: 'Aegis has been selected to deliver secure cloud infrastructure and advanced digital threat forensics to defense intelligence agencies operating in austere global environments.',
    date: 'March 14, 2026',
    author: 'Corporate Relations',
    readTime: '4 min read',
    content: 'Aegis Federal Systems is proud to announce the award of a multi-year prime contract to support tactical communications systems and intelligence modernization efforts. This critical work will leverage our secure GovCloud solutions and field logistics frameworks. We are honored to continue our dedicated service to the defense of our nation and its critical infrastructure.'
  }
];

export const GOV_PROCUREMENT_DETAILS = {
  cageCode: '8X9D3',
  samUei: 'LNJ9X3B5V2K1',
  duns: '965381274',
  naicsCodes: [
    { code: '541511', desc: 'Custom Computer Programming Services' },
    { code: '541512', desc: 'Computer Systems Design Services' },
    { code: '541513', desc: 'Computer Facilities Management Services' },
    { code: '541519', desc: 'Other Computer Related Services (Primary)' },
    { code: '541611', desc: 'Administrative & General Management Consulting' },
    { code: '541690', desc: 'Other Scientific and Technical Consulting Services' },
    { code: '541990', desc: 'All Other Professional, Scientific, and Technical Services' }
  ],
  pscCodes: [
    { code: 'D301', desc: 'IT and Telecom - Facility Operation and Maintenance' },
    { code: 'D302', desc: 'IT and Telecom - Systems Development' },
    { code: 'D310', desc: 'IT and Telecom - Cyber Security & Information Assurance' },
    { code: 'D318', desc: 'IT and Telecom - Integrated Hardware/Software Co-Design' },
    { code: 'R408', desc: 'Support - Professional: Program Management/Support' },
    { code: 'R425', desc: 'Support - Professional: Engineering/Technical' }
  ],
  socioeconomicStatus: ['U.S. Owned Corporate Entity', 'VOSB (Veteran-Owned Small Business Eligible)', 'Full Compliance Security Verified']
};
