// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Vikalp Kumar Bharti",
  short: "VKB",
  role: "Data · ML · Software",
  location: "Goa, India",
  coords: "15.2° N / 74.0° E",
  affiliation: "NIT Goa — M.Tech CSE",
  email: "vikalpbharti51@gmail.com",
  github: "https://github.com/vikalpbharti",
  linkedin: "https://www.linkedin.com/in/vikalp-bharti-03ab53234",
  url: "https://vikalp-portfolio.vercel.app",
  tags: ["DATA", "BI", "ML", "ASR", "API", "WEB", "WEB3"],
  intro:
    "M.Tech Computer Science candidate at NIT Goa and former Data Analyst at Wyscout. I work across data analysis, machine learning, speech recognition and full-stack web — turning raw data into dashboards, models and products people can use.",
};

export const resumes = [
  { label: "Data Analyst", file: "/resume/Vikalp_Bharti_Data_Analyst_Resume.pdf" },
  { label: "Data Science", file: "/resume/Vikalp_Bharti_Data_Science_Resume.pdf" },
  { label: "Software Engineer", file: "/resume/Vikalp_Bharti_Software_Engineer_Resume.pdf" },
  { label: "Frontend", file: "/resume/Vikalp_Bharti_Frontend_Resume.pdf" },
];

export type Category = "ML & Speech" | "Data & Analytics" | "Full-Stack Web" | "Mobile" | "Blockchain";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  status: "In progress" | "Completed";
  period: string;
  categories: Category[];
  summary: string;
  points: string[];
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "speech",
    title: "Multilingual Speech-to-Text",
    subtitle: "Transcription & translation · M.Tech project, NIT Goa",
    status: "In progress",
    period: "Aug 2026 – Present",
    categories: ["ML & Speech", "Full-Stack Web"],
    summary:
      "A Whisper-based speech-to-text and translation system for low-resource Indian languages, with a live-caption interface in the browser.",
    points: [
      "Building a Whisper-based speech-to-text and translation system for low-resource Indian languages.",
      "Built an evaluation pipeline measuring WER, CER and real-time factor on FLEURS with Hugging Face Transformers.",
      "Designed real-time live captioning using faster-whisper, Silero VAD and WebSockets — mic audio streams from the browser.",
      "Planning full fine-tuning and LoRA on the IndicVoices and Kathbath speech datasets.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "Whisper", "faster-whisper", "Silero VAD", "WebSockets", "jiwer"],
  },
  {
    id: "banker",
    title: "Banker",
    subtitle: "Full-stack banking web app with transaction analytics",
    status: "Completed",
    period: "Jan 2024 – Jun 2024",
    categories: ["Full-Stack Web", "Data & Analytics"],
    summary:
      "A Flask banking backend with deposits, withdrawals and transfers, plus a real-time analytics API visualised with Chart.js.",
    points: [
      "Built a Flask + SQLAlchemy banking backend with CRUD operations and atomic transactions for data integrity.",
      "Designed a REST analytics API with 3 real-time endpoints: transaction volume, balance history and transaction types.",
      "Built interactive Chart.js visualisations and the user flows for deposits, withdrawals and transfers.",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "JavaScript", "Chart.js", "HTML", "CSS"],
  },
  {
    id: "iehs",
    title: "IEHS",
    subtitle: "E-healthcare management system · Android",
    status: "Completed",
    period: "Dec 2021 – Jun 2023",
    categories: ["Mobile"],
    summary:
      "An Android app for managing patient records, appointments and billing. Ranked Top 3 in the Major Project Competition at MIT ADT University.",
    points: [
      "Designed and developed the Android app UI in Java and XML.",
      "Covers patient records, appointment scheduling and billing in one app.",
      "Ranked Top 3 in the Major Project Competition at MIT ADT University.",
    ],
    stack: ["Java", "XML", "Android Studio"],
  },
  {
    id: "dhealth",
    title: "Decentralised Patient Records",
    subtitle: "Built during the D-Health internship",
    status: "Completed",
    period: "Jan 2023 – Mar 2023",
    categories: ["Blockchain"],
    summary:
      "Connected a healthcare data platform to Solidity smart contracts and stored patient data on IPFS for persistent, fault-tolerant records.",
    points: [
      "Developed and deployed 3+ Solidity smart contracts, wired to the platform with Web3.js.",
      "Designed fault-tolerant, decentralised patient data storage with IPFS and Pinata.",
      "Performed contract testing and debugging.",
    ],
    stack: ["Solidity", "Web3.js", "JavaScript", "IPFS", "Pinata"],
  },
  {
    id: "wyscout",
    title: "Football Analytics Dashboards",
    subtitle: "Built during the Wyscout Data Analyst role",
    status: "Completed",
    period: "Jun 2023 – Jan 2024",
    categories: ["Data & Analytics", "ML & Speech"],
    summary:
      "KPI dashboards, data pipelines and predictive models over 100K+ record datasets for stakeholder decisions.",
    points: [
      "Built 5+ interactive Power BI and Tableau dashboards tracking 10+ KPIs.",
      "Cleaned, transformed and analysed 100K+ record datasets with SQL and Python (Pandas, NumPy).",
      "Developed predictive models in Scikit-learn and contributed to 3+ end-to-end data pipelines.",
    ],
    stack: ["SQL", "Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Tableau"],
  },
];

export const experience = [
  {
    company: "Wyscout",
    role: "Data Analyst",
    period: "Jun 2023 – Jan 2024",
    points: [
      "Built 5+ interactive Power BI and Tableau dashboards tracking 10+ KPIs for stakeholder decisions.",
      "Cleaned, transformed and analysed datasets of 100K+ records using SQL and Python (Pandas, NumPy); ran EDA to surface trends and actionable insights.",
      "Developed predictive ML models (Scikit-learn) and contributed to 3+ end-to-end data pipelines, monitoring stability for business-critical analytics workloads.",
    ],
  },
  {
    company: "D-Health",
    role: "Blockchain Developer Intern",
    period: "Jan 2023 – Mar 2023",
    points: [
      "Developed and deployed 3+ Solidity smart contracts with Web3.js for a healthcare data platform.",
      "Designed fault-tolerant patient data storage using IPFS and Pinata.",
    ],
  },
];

// level: 2 = used at work / in a project, 1 = coursework / practice
export const skills: { group: string; items: [string, 1 | 2][] }[] = [
  {
    group: "Languages",
    items: [["Python", 2], ["SQL", 2], ["Java", 2], ["JavaScript", 2], ["TypeScript", 1], ["Solidity", 2], ["HTML / CSS", 2]],
  },
  {
    group: "Data & BI",
    items: [["Pandas / NumPy", 2], ["EDA & statistics", 2], ["Power BI", 2], ["Tableau", 2], ["Chart.js", 2], ["KPI dashboards", 2], ["Amazon Redshift", 1]],
  },
  {
    group: "ML & speech",
    items: [["PyTorch", 2], ["Hugging Face", 2], ["Whisper / ASR", 2], ["Scikit-learn", 2], ["TensorFlow", 1], ["NLTK / NLP", 1], ["MLflow", 1]],
  },
  {
    group: "Web & backend",
    items: [["Flask", 2], ["SQLAlchemy", 2], ["REST APIs", 2], ["WebSockets", 2], ["React", 1], ["Tailwind CSS", 1], ["Bootstrap", 1]],
  },
  {
    group: "Databases & cloud",
    items: [["SQLite", 2], ["PostgreSQL", 1], ["MySQL", 1], ["AWS (S3, EC2, RDS)", 1], ["Docker", 1], ["Git / GitHub", 2]],
  },
  {
    group: "Other",
    items: [["Android Studio", 2], ["Web3.js", 2], ["IPFS / Pinata", 2], ["DSA · OOP · DBMS", 1], ["OS · Networks", 1]],
  },
];

export const journey = [
  { when: "2017", what: "Class X, CBSE", where: "St. Anselm's Sr. Sec. School · CGPA 9.2" },
  { when: "2019", what: "Class XII, CBSE", where: "Eden International School · 76.2%" },
  { when: "2021 – 23", what: "IEHS Android app", where: "Top 3, Major Project Competition" },
  { when: "2023", what: "B.Tech CSE + GATE 2023", where: "MIT ADT University · CGPA 7.93 · GATE score 373" },
  { when: "Jan 2023", what: "Blockchain Developer Intern", where: "D-Health" },
  { when: "Jun 2023", what: "Data Analyst", where: "Wyscout" },
  { when: "2024", what: "Banker — full-stack app", where: "Flask · SQLAlchemy · Chart.js" },
  { when: "Aug 2026", what: "Multilingual speech-to-text", where: "M.Tech project, NIT Goa" },
  { when: "Now", what: "M.Tech CSE, NIT Goa", where: "Graduating 2027" },
];

export const achievements = [
  "Qualified GATE 2023 (CSE) with a score of 373.",
  "Top 3 in the Major Project Competition at MIT ADT University for IEHS.",
  "Represented NIT Goa at the Inter-NIT Football Tournament, Jamshedpur.",
];
