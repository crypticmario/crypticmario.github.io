// =====================================================================
//  content.js — EVERYTHING you might want to change lives in this file.
//  Edit the text between the quotes, save, commit, push. That's it.
//  To remove an item, delete its whole { ... } block (including the comma).
//  To add one, copy an existing block and change the words.
// =====================================================================

window.SITE = {

  // ---------- Basics ----------
  name: "Richard Anekwe",
  nickname: "Richie",
  fullName: "Richard Izuchukwu Anekwe",
  title: "Social Psychologist × Data Analyst",
  tagline: "I study how AI systems treat people differently, and I build the evidence with code.",
  location: "Limerick, Ireland",
  email: "richardizuchukwu062@gmail.com",
  linkedin: "https://www.linkedin.com/in/richardanekwe",
  github: "https://github.com/crypticmario",
  cvFile: "",   // e.g. "Richard_Anekwe_CV.pdf" — put the file in this folder and name it here to show a "Download CV" button
  photo: "",    // e.g. "photo.jpg" — put a square-ish photo in this folder and name it here. Leave "" for the initials badge.

  // Short availability line shown in the hero (leave "" to hide)
  availability: "Open to people-analytics, research and responsible-AI roles, and PhD opportunities in computational social science.",

  // ---------- About ----------
  about: [
    "What does an AI model refuse to say, and about whom? My master's thesis answered that question with data. I built a Python pipeline that ran 2,400 controlled trials across four open-source language models and found that safety guardrails systematically treat low-passport-power nationalities differently. Psychology gave me the theory; code gave me the evidence.",
    "I work at the intersection of human behaviour and data. On the research side: experimental design, R (SEM, multilevel models), SPSS, Python (pandas, scipy, statsmodels), survey design and open-science practice. On the human side: frontline support work in addiction services at Coolmine Therapeutic Community, where I also designed and delivered the organisation's first intercultural competence training.",
    "I came to Ireland through the Erasmus Mundus Global MINDS programme (ISCTE Lisbon and the University of Limerick) after a First Class psychology degree in Nigeria and three years leading client research projects. That journey is part of why I study what I study: I know what it means to be on the wrong side of an algorithm's assumptions."
  ],

  // Quick facts shown beside the About text
  facts: [
    { label: "Based in", value: "Limerick, Ireland" },
    { label: "Education", value: "MSc Global MINDS (Erasmus Mundus) · BSc Psychology, First Class" },
    { label: "Tools", value: "Python · R · SPSS · Qualtrics" },
    { label: "Languages", value: "English · Igbo · Yoruba (basic) · Portuguese (elementary)" }
  ],

  // ---------- Headline numbers ----------
  stats: [
    { number: "2,400", label: "LLM trials analysed" },
    { number: "4", label: "open-source models audited" },
    { number: "+34", label: "point improvement from my training programme" },
    { number: "30+", label: "research clients served" }
  ],

  // ---------- Research & projects ----------
  projects: [
    {
      tag: "MSc Thesis",
      title: "Algorithmic Taboos: How LLM safety alignment treats national identities differently",
      summary: "Designed and built an automated pipeline in Python (Ollama, Google Colab) running four locally hosted LLMs: Llama 3 8B, Llama 3.1, Mistral 7B and Qwen 2.5. Embedded 20 national identities from the top and bottom of the Henley Passport Index in positive, neutral and negative prompts, producing 2,400 experimental trials. Coded refusals, safety lectures, preamble length and latency; analysed with chi-square, t-tests and logistic regression.",
      finding: "All three refusal-capable models refused significantly more often for bottom-10-passport countries on negative prompts. Safety alignment tracks geopolitical privilege.",
      meta: "Supervisors: Prof. Mike Quayle & Dr. Ana Jovancevic, University of Limerick · Submitted June 2026",
      tags: ["Python", "LLM auditing", "statsmodels", "AI fairness"],
      link: "",       // add a preprint or GitHub link here when it's public
      linkText: "Read more"
    },
    {
      tag: "Training & Evaluation",
      title: "Intercultural Competence Training Programme at Coolmine Therapeutic Community",
      summary: "Identified a service gap, then designed, proposed, delivered and evaluated a full intercultural-competence programme for a national addiction service. Grounded in Deardorff's Process Model, cultural humility and microaggression research, adapted to Coolmine's Community-as-Method framework. Delivered a full-day staff training, co-facilitated with Prof. Anca Minescu (UL).",
      finding: "Pre/post surveys showed a +34-point average improvement across all items; 100% of staff could explain microaggressions afterwards; participants asked for it to become recurring.",
      meta: "2025 – 2026 · Needs analysis → design → facilitation → evaluation → reporting",
      tags: ["L&D", "DEI", "Programme evaluation", "Facilitation"],
      link: "",
      linkText: "Read more"
    },
    {
      tag: "Independent Project",
      title: "Global MINDS website accessibility & cultural inclusion audit",
      summary: "Developed an original evaluation framework, the Cultural Cognitive Load Assessment (CCLA), combining cognitive load theory, cross-cultural psychology and WCAG 2.2 accessibility standards. Designed and ran a Qualtrics survey of current students and prospective applicants and delivered recommendations to the programme consortium.",
      finding: "",
      meta: "Research internship, Centre for Social Issues Research, University of Limerick · 2025 – 2026",
      tags: ["WCAG 2.2", "Survey design", "Cross-cultural psychology", "Qualtrics"],
      link: "",
      linkText: "Read more"
    },
    {
      tag: "Open Science",
      title: "STAND Project: Education for Global Citizenship among UL Staff",
      summary: "Contributed research infrastructure to a Research Ireland-funded national pilot led by Dr. Sarah Jay with STAND. Authored the OSF preregistration: theoretical foundations, hypotheses and measurement instruments (global citizenship identity, collective efficacy, collective empathy, critical consciousness).",
      finding: "",
      meta: "Centre for Social Issues Research, University of Limerick · 2025",
      tags: ["OSF preregistration", "Measurement", "Research design"],
      link: "",
      linkText: "Read more"
    }
  ],

  // ---------- Experience ----------
  experience: [
    {
      role: "Support Worker",
      org: "Coolmine Therapeutic Community, Midwest",
      period: "Oct 2025 – present",
      location: "Limerick, Ireland",
      points: [
        "Frontline therapeutic support in a residential addiction-treatment community for women and children.",
        "Clinical documentation, safeguarding (Children First), de-escalation and group facilitation.",
        "Designed and delivered the service's first staff intercultural competence training."
      ]
    },
    {
      role: "Research Intern",
      org: "Centre for Social Issues Research, University of Limerick",
      period: "Sep 2025 – 2026",
      location: "Limerick, Ireland",
      points: [
        "Authored the OSF preregistration for a Research Ireland-funded pilot study (STAND project, Dr. Sarah Jay).",
        "Led an independent accessibility and cultural inclusion audit of the Global MINDS website.",
        "Took part in research meetings on attitude networks, identity integration and social network analysis."
      ]
    },
    {
      role: "Lead Researcher",
      org: "Blue Coral Consult",
      period: "Jun 2021 – Aug 2024",
      location: "Nigeria",
      points: [
        "Designed research methodologies for 30+ clients using surveys, interviews and case studies.",
        "Analysed data in SPSS (ANOVA, regression, mediation) and managed delivery across concurrent projects."
      ]
    },
    {
      role: "Social Psychology Tutor & Lay Counsellor",
      org: "Everything Psych_NG",
      period: "Jul 2023 – Aug 2024",
      location: "Remote",
      points: [
        "Taught social psychology virtually to undergraduates across several universities.",
        "Provided psychological first aid and basic counselling online."
      ]
    },
    {
      role: "Case Manager",
      org: "General Hospital, Toro, Bauchi State",
      period: "May 2022 – Jul 2023",
      location: "Nigeria",
      points: [
        "Coordinated care for 500+ patients with multidisciplinary teams.",
        "Planned monthly training for 300+ NYSC corps members as Learning & Development Coordinator; Award of Meritorious Service."
      ]
    },
    {
      role: "Research Assistant",
      org: "Department of Psychology, University of Nigeria, Nsukka",
      period: "Oct 2021 – Jul 2023",
      location: "Nsukka, Nigeria",
      points: [
        "Supported doctoral research experiments, SPSS analysis and paper writing."
      ]
    }
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "MSc, Psychology of Global Mobility, Inclusion and Diversity in Society (Global MINDS)",
      school: "Erasmus Mundus Joint Master's · ISCTE Lisbon → University of Limerick",
      period: "2024 – 2026",
      note: "Erasmus Mundus scholar · Path A: Culture and Diversity · UL President's Volunteer Award (Bronze, 2025)"
    },
    {
      degree: "BSc Psychology, First Class Honours (4.58 / 5.00)",
      school: "University of Nigeria, Nsukka",
      period: "2016 – 2021",
      note: "UNN-USA Alumni Scholarship · Best 2nd Year Student (2019)"
    }
  ],

  // ---------- Skills ----------
  skills: [
    { group: "Statistics & research", items: ["SPSS", "R (lavaan: CFA, SEM, multilevel)", "JASP", "Qualtrics", "Survey design", "OSF preregistration", "Systematic review", "Zotero"] },
    { group: "Programming & AI", items: ["Python (pandas, scipy, statsmodels)", "Ollama / local LLMs", "Google Colab", "Prompt engineering", "LLM auditing"] },
    { group: "Practice & facilitation", items: ["Training design & delivery", "Programme evaluation", "Psychological first aid", "Trauma-informed care", "Case management", "Group facilitation"] },
    { group: "Learning next", items: ["SQL", "Power BI"] }
  ],

  // ---------- Talks ----------
  talks: [
    "Music preferences and emotional intelligence among young adults: mediating role of emotion regulation. 5th International Conference of the Acoustical Society of Nigeria, 2022.",
    "Moderating role of intimate partner violence in the relationship between infidelity intentions and marital satisfaction (presented on behalf of faculty). 8th Annual Departmental Conference, UNN, 2021."
  ],

  // ---------- Certifications & awards ----------
  certifications: [
    "Psychological First Aid (Johns Hopkins)",
    "Fundamental Neuroscience for Neuroimaging (Johns Hopkins)",
    "Foundations of AI Safety and Governance",
    "Ethics in the Age of Generative AI",
    "Introduction to Python (DataCamp)",
    "Children First · SAOR · Suicide Prevention · MECC · DSGBV · Dignity at Work · GDPR (Irish health & social care)",
    "Be MindfUL Peer Support (University of Limerick)"
  ],
  awards: [
    "Erasmus Mundus Scholarship (2024 – 2026)",
    "University of Limerick President's Volunteer Award, Bronze (2025)",
    "NYSC Award of Meritorious Service (2023)",
    "First Class Honours, University of Nigeria (2021)",
    "UNN-USA Alumni Scholarship (2018 – 2020)"
  ],

  // ---------- Contact ----------
  contactBlurb: "I'm always glad to talk about responsible AI, people analytics, cross-cultural psychology, or PhD ideas. The quickest way to reach me is email.",

  footerNote: "Built with plain HTML, CSS and a little JavaScript. Hosted on GitHub Pages."
};
