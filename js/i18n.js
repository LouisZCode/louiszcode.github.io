// Define translations
const translations = {
  en: {
    "spralingua-overview-title": "Spralingua - AI Language Learning Platform",
    "spralingua-overview-desc": "Full-stack AI language learning platform supporting Spanish, German, Portuguese, and English. Features conversation practice, email writing exercises, voice input/output, and progress tracking across CEFR levels (A1-B2).",

    "spralingua-case-study": {
      "back-to-portfolio": "Back to Portfolio",
      "live-app": "Live Production App",
      "title": "Spralingua: <br> AI Language Tutor",
      "description": "An immersive language learning platform that uses Voice-to-Text and LLMs to simulate real-world conversations, bridging the gap between textbook theory and speaking confidence.",
      "visit-live": "Visit Live Site",
      "view-source": "View Source",
      "response-time": "Response Time",
      "stack": "Stack",
      "stack-value": "Python, Flask, JavaScript",
      "ai-models": "AI Models",
      "ai-models-value": "Claude 3.5, Minimax TTS",
      "database": "Database",
      "database-value": "PostgreSQL + SQLAlchemy",
      "deployment": "Deployment",
      "deployment-value": "Railway + Gunicorn",
      "challenge": "The Challenge",
      "challenge-p1": "Most language apps (like Duolingo) focus on vocabulary and grammar drills, but fail to prepare users for the anxiety of real-time conversation. I wanted to build a tool that forces the user to <em>speak</em>, not just tap buttons.",
      "challenge-p2": "The technical hurdle was <strong class=\"text-white\">latency</strong>. A conversation loop (User Speak \u2192 Transcribe \u2192 LLM Think \u2192 TTS \u2192 Audio Playback) usually takes 4-5 seconds. This destroys immersion. I needed to get it under 2 seconds while maintaining conversation quality.",
      "architecture": "System Architecture",
      "arch-step1": "Web Speech API<br><span class=\"text-xs text-slate-500\"> (Voice Input)</span>",
      "arch-step2": "Flask Backend<br><span class=\"text-xs text-slate-500\"> (Orchestrator)</span>",
      "arch-step3": "Claude 3.5<br><span class=\"text-xs text-slate-500\"> (Reasoning)</span>",
      "arch-step4": "Minimax TTS<br><span class=\"text-xs text-slate-500\"> (Voice Output)</span>",
      "arch-caption": "Full conversation loop in under 2 seconds",
      "tech-impl": "Key Technical Implementation",
      "tech-impl-p1": "Managing context history was crucial. I implemented a rolling-window context manager in Python to ensure the AI remembers the conversation without exceeding token limits or increasing costs.",
      "grammar-engine": "Grammar Correction Engine",
      "grammar-engine-p1": "The app doesn\'t just correct errors - it explains <em>why</em> something is wrong. I engineered specialized prompts that leverage my C2-level German knowledge to provide pedagogically sound corrections.",
      "screenshots": "App Screenshots",
      "screenshot1-caption": "AI Conversation Practice",
      "screenshot2-caption": "Grammar Correction",
      "screenshot3-caption": "Character Selection",
      "screenshot4-caption": "Main Dashboard",
      "key-features": "Key Features",
      "feature1": "Real-time Voice Synthesis (TTS)",
      "feature2": "Grammar Correction Engine",
      "feature3": "Multi-language Support (ES, DE, PT, EN)",
      "feature4": "AI Character Conversations",
      "feature5": "Adaptive Difficulty Levels",
      "feature6": "Conversation History Persistence",
      "lessons-learned": "Lessons Learned",
      "lesson1-title": "Prompt Engineering",
      "lesson1-desc": "The AI \"persona\" needs specific guardrails to prevent breaking character. I learned to add explicit constraints in system prompts.",
      "lesson2-title": "Latency Optimization",
      "lesson2-desc": "Streaming responses and parallel API calls reduced perceived latency by 60%. Every millisecond matters in conversation.",
      "lesson3-title": "Database Design",
      "lesson3-desc": "PostgreSQL with SQLAlchemy ORM was the right choice for storing conversation history and user progress efficiently.",
      "technologies": "Technologies",
      "live-site": "Live Site",
      "source-code": "Source Code",
      "back-home": "\u2190 Back to Portfolio Home"
    },

    // Construction Banner
    "construction-message": "Website under active development - New features being added regularly!",
    
    // Navigation
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-experience": "Experience",
    
    // Hero section
    "hero-greeting": "Hello, I\'m",
    "hero-ai-credit": "This website was created with the help of AI ✨",
    "hero-title": "Talent Partner & AI Application Engineer",
    "hero-subtitle": "Building Production-Ready LLM Apps & Empowering Talent Acquisition with AI",
    "hero-description": "Specialized in developing practical AI solutions with LangChain, LangGraph, Python, and LLM calls both API and local-based. I design multi-agent systems and voice AI applications that solve real business problems. Background in recruitment gives me unique insight into building tools people actually want to use.",
    "hero-tech-badge": "Python \u2022 LangChain \u2022 LangGraph",
    "hero-cta-portfolio": "View My Work",
    "hero-cta-contact": "Contact Me",
    "hero-status": "Open to Work",

    // Bento grid stats
    "stats-background": "Background",
    "stats-years-ta": "Years in Talent Acquisition",
    "stats-education": "Education",
    "stats-certifications": "Certifications",

    // Project status
    "project-status-live": "Live Product",
    "try-demo": "Try Demo",
    "coming-soon": "Coming Soon",
    "status-building": "Building",
    "more-certs-coming": "More Coming",
    "more-certs-desc": "Currently pursuing additional AI certifications",

    // Project preview section
    "preview-heading": "Recent AI Projects",
    "ai-recruiting-title": "AI Recruiting Assistant",
    "ai-recruiting-desc": "A custom-trained LLM that helps automate parts of the recruiting process, from initial screening to interview preparation.",
    "comfyui-title": "Custom ComfyUI Workflows",
    "comfyui-desc": "Developed specialized image generation pipelines for consistent brand visuals and creative content production.",
    "localllm-title": "Local LLM Integration",
    "localllm-desc": "Built a system using Ollama to run AI models locally for privacy-focused document analysis and summarization.",
    "view-details": "View Details",
    "portfolio-intro": "A collection of AI development projects showcasing my work with large language models, image generation, and autonomous agents.",
    "more-projects-desc": "More AI projects currently in development",
    "spralingua-highlight1": "Full-stack application live at spralingua.com",
    "spralingua-highlight2": "Multi-language support: Spanish, German, Portuguese, English",
    "spralingua-highlight3": "Conversation practice with AI characters",
    "spralingua-highlight4": "Voice input/output with Web Speech API",

    "preview-spralingua-title": "Spralingua - AI Language Learning Platform",
    "preview-spralingua-desc": "Full-stack AI language learning platform supporting Spanish, German, Portuguese, and English with conversation practice, email writing exercises, and voice input/output.",

    // Certifications section
    "certifications-heading": "Certifications",
    "cert-mba-title": "M.B.A.",
    "cert-mba-desc": "International Business Administration",
    "cert-mba-institution": "Karlshochschule International University",
    "cert-hf-title": "Hugging Face Agents Course",
    "cert-hf-desc": "Certificate of Excellence",
    "cert-mcp-title": "The MCP Course: Unit 1",
    "cert-mcp-desc": "Fundamentals of MCP",

    // Featured experience cards on home page
    "featured-lucanet-title": "Talent Partner",
    "featured-lucanet-desc": "Full-cycle recruiter for revenue and financial teams, specializing in SaaS and Fintech sales roles across DACH, Benelux, Spanish, French and Italian regions.",
    "featured-lucanet-location": "Berlin/Remote",
    "featured-lucanet-period": "2023-Present",
    "featured-rapid-title": "Talent and Coordination Partner",
    "featured-rapid-desc": "Created and executed a new coordination automation process for 180+ employees, while serving as a full-cycle recruiter for tech roles.",
    "featured-rapid-location": "Berlin/Remote",
    "featured-rapid-period": "2022-2023",

    // Filter buttons
    "filter-all": "All",

    // About section
    "about-heading": "About Me",
    "about-p1": "I\'m an AI Application Engineer focused on building production-ready LLM applications that solve real business problems. Special focus on Talent Acquisition AI projects—sourcing, evaluating, interview prep, and decision making using AI, making processes 70% faster and less biased. After spending 2 years deep in AI development—from multi-agent systems to RAG pipelines to voice AI—I\'m now seeking opportunities to build impactful AI applications in Europe.",
    "about-p2": "My approach combines technical implementation with practical thinking. Before transitioning to AI engineering, I spent 4+ years as a Talent Partner, which taught me how to identify what users actually need versus what sounds impressive on paper. This background helps me build AI tools that people want to use, not just technically interesting demos.",
    "about-p3": "I specialize in Python-based LLM applications using LangGraph for agent orchestration, Flask for full-stack web applications, and Claude/GPT-4 for reasoning tasks. My projects focus on practical applications: a multi-language learning platform with real-time AI tutoring, voice-enabled interactions, and production-ready deployment on Railway.",
    "about-p4": "I\'m looking for AI Application Engineer roles where I can contribute to building, deploying, and iterating on LLM-powered products\u2014not training models, but making them useful. ",
    
    // Skills section
    "skills-heading": "Technical Skills",
    "skills-languages-frameworks": "Languages & Frameworks",
    "skill-python": "Python (Primary)",
    "skill-flask": "Flask",
    "skill-langchain": "LangChain",
    "skill-web": "JavaScript/HTML/CSS",
    "skills-llm-tools": "LLM & AI Tools",
    "skill-openai": "OpenAI API (GPT-4)",
    "skill-claude": "Anthropic Claude",
    "skill-ollama": "Ollama (Local LLMs)",
    "skill-llama": "Llama 3.1/3.2",
    "skill-langfuse": "Langfuse (Observability)",
    "skills-vector-rag": "Vector DBs & RAG",
    "skill-chromadb": "ChromaDB",
    "skill-pinecone": "Pinecone",
    "skill-rag": "RAG Pipeline Design",
    "skill-semantic": "Semantic Search",
    "skills-dev-deployment": "Development & Deployment",
    "skill-git": "Git & GitHub",
    "skill-rest": "REST APIs",
    "skill-linux": "Linux/Windows",
    "skills-databases": "Databases",
    "skill-postgresql": "PostgreSQL",
    "skill-sqlalchemy": "SQLAlchemy",
    "skills-ai-specializations": "AI Specializations",
    "skill-multiagent": "Multi-Agent Architecture",
    "skill-prompt": "Prompt Engineering",
    "skill-rag-systems": "RAG Systems",
    "skill-voice": "Voice AI (TTS/STT)",
    "skill-agent-design": "Agent Design Patterns",
    "skill-railway": "Railway",
    "skill-gunicorn": "Gunicorn",
    "skill-claude-code": "Claude Code",
    "recruitment-tools": "Recruitment Tools",
    "tech-stack": "Tech Stack",
    "languages": "Languages",
    
    // Experience section
    "experience-heading": "Featured Experience",
    "lucanet-title": "Talent Partner",
    "lucanet-desc": "Full-cycle recruiter for revenue and financial teams, specializing in SaaS and Fintech sales roles across DACH, Benelux, Spanish, French and Italian regions.",
    "rapid-title": "Talent and Coordination Partner",
    "rapid-desc": "Created and executed a new coordination automation process for 180+ employees, while serving as a full-cycle recruiter for tech roles.",
    "view-all": "View All Experience",
    
    // Contact section
    "contact-heading": "Get In Touch",
    "contact-text": "Feel free to reach out to me for collaborations or just a friendly chat.",
    "contact-name": "Name",
    "contact-name-placeholder": "Your name",
    "contact-email": "Email",
    "contact-email-placeholder": "Your email",
    "contact-subject": "Subject",
    "contact-subject-placeholder": "Subject",
    "contact-message": "Message",
    "contact-message-placeholder": "Your message",
    "contact-send": "Send Message",
    "contact-success": "Your message has been sent successfully!",
    
    // Footer
    "copyright": "© 2025 Luis Zermeno. All Rights Reserved.",
    
    // Portfolio page
    "portfolio-description": "A collection of my professional roles and achievements spanning talent acquisition and HR.",
    "filter-talent": "Talent Acquisition",
    "filter-hr": "HR",
    "filter-education": "Education",
    
    // Experience page
    "experience-description": "A detailed overview of my career journey and professional achievements in talent acquisition and beyond.",
    "download-resume": "Download Resume",
    "professional-skills": "Professional Skills",
    "soft-skills": "Soft Skills",
    
    // New translations for portfolio page
    "ai-projects-heading": "AI Projects",
    "ai-projects-description": "A collection of AI development projects showcasing my work with large language models, image generation, and autonomous agents.",
    "filter-llm": "LLM Projects",
    "filter-image-gen": "Image Generation",
    "filter-ai-agents": "AI Agents",

    // Experience overview
    "experience-overview": "M.B.A. with 4+ years of experience in Talent Acquisition for the DACH region, 2 years also recruiting for EMEA (France, Italy, Spain, Benelux and Spain, DACH). Worked on both startup environments and big corp. Tackled Tech recruitment (Full-stack) and currently tackling Sales recruitment (Account Executives, Sales Engineers, BDRs).",
    
    // LucaNet Experience
    "lucanet-position": "Talent Partner",
    "lucanet-description": "Full-cycle recruiter for revenue and financial teams across DACH, Benelux, Spain, France, and Italy. Recruiting Account Executives, Sales Engineers, Account Managers, Cross-sell/Upsell specialists, Sales Operations, and BDRs/SDRs for complex cloud SaaS/Fintech products.",
    "lucanet-achievement1": "110% of hiring KPIs in last two quarters, 85% offer acceptance rate (vs 70% market standard).",
    "lucanet-achievement2": "Built Spanish sales department from 3 to 30 employees in 1.5 years (Team Leads → BDRs → AMs → AEs).",
    "lucanet-achievement3": "Implemented AI tools: Python/LangChain assistant, Claude Desktop, LinkedIn AI Assist, BrightHire integration with Greenhouse.",

    // Saily Experience
    "saily-position": "Talent and Coordination Partner",
    "saily-description": "Dual role managing talent acquisition and interview coordination for API marketplace during hyper-growth. Affected by company-wide layoffs.",
    "saily-achievement1": "Created company-wide interview coordination automation for 180+ employees, 20+ hiring managers, 5+ C-level executives across Germany, USA and Tel-Aviv. Automated 500+ interviews, reducing scheduling friction by 90%.",
    "saily-achievement2": "Full-cycle recruiting for developers and engineers: backend, frontend, DevOps, product operations, APIs.",

    // Velocopter Experience
    "velocopter-position": "Talent Acquisition Specialist",
    "velocopter-description": "Full-cycle recruiter for engineering, battery, tech, and project management with specialties in machine building, electrics, aerospace, programming, software development, automotive retail and energy.",
    "velocopter-achievement": "The company went from around 200 to almost 600 employees the year I was working there.",

    // Microsoft Experience
    "microsoft-position": "HR Generalist, Data Entry Lead",
    "microsoft-description": "Processed HR data transactions for EMEA, LATAM, and APAC employees using SAP and PeopleSoft.",
    "microsoft-achievement": "Raised data quality to 99% and delivery to 100% within first 3 months, maintained throughout tenure.",
    
    // Honeywell Experience
    "honeywell-position": "Human Resources Generalist, Customer Exp. Lead",
    
    // Education
    "purdue-degree": "Applied Generative AI Specialization",
    "mba-degree": "Master in Business Administration",
    "bachelor-degree": "Bachelor of Business Administration",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Independent AI Development",
    "ai-projects-location": "Remote",
    "ai-projects-description": "Full-time focus on building production-ready LLM applications and AI-powered tools. My recruitment background directly informs my AI development work\u2014understanding user needs, identifying workflow pain points, and translating business requirements into solutions gives me a unique advantage in building AI applications that solve real problems, not just interesting technical demos.",
    "ai-projects-achievement1": "Multi-language learning platform with <2s response times built using LangGraph for agent orchestration, Flask for full-stack web application, and Claude for reasoning. Supports A1-B2 proficiency levels with intelligent grammar correction.",
    "ai-projects-achievement2": "Privacy-first voice assistant with 90%+ recognition accuracy, running entirely offline using Python, Vosk (speech recognition), and XTTS-v2 (neural TTS). Zero cloud dependency, zero recurring costs.",
    "ai-projects-achievement3": "Godot game with 50% AI-generated assets (ComfyUI, stable diffusion workflows), completed in 7-day game jam with 46 player ratings averaging 4.2/5 stars.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, RAG Systems, Voice AI (TTS/STT)",
    "career-bridge-text": "My recruitment background directly informs my AI development work. Four years of understanding what users need, identifying pain points in workflows, and translating business requirements into solutions gives me a unique advantage in building AI applications that solve real problems\u2014not just interesting technical demos.",

    // ========== NEW: Single-page redesign keys ==========

    // Navigation
    "nav-projects": "Projects",
    "nav-about": "About",

    // Theme toggle
    "theme-light": "Light Mode",
    "theme-dark": "Dark Mode",

    // Hero
    "hero-label": "AI Applications Engineer",
    "hero-headline-prefix": "I build AI products that ",
    "hero-headline-accent": "solve real problems",
    "hero-subtitle-new": "From multilingual language learning platforms to intelligent agent systems \u2014 I design, build, and ship AI applications end to end.",
    "hero-cta-projects": "View Projects",
    "hero-cta-contact": "Get in Touch",

    // Projects section
    "section-projects-label": "Selected Work",
    "section-projects-title": "Projects",
    "section-projects-desc": "AI applications built from problem to production.",
    "view-case-study": "View Case Study",
    "project-spralingua-outcome": "AI language learning platform that delivers personalized lessons, real-time grammar correction, and natural conversation practice in 4 languages.",
    "project-voice-agent-title": "AI Voice Agent",
    "project-voice-agent-outcome": "Privacy-first voice assistant with 90%+ recognition accuracy, running entirely offline with zero cloud dependency.",
    "project-recruiting-ai-title": "AI Recruiting Assistant",
    "project-recruiting-ai-outcome": "Custom LLM assistant that automates candidate screening, interview preparation, and hiring decision support.",

    // Case study labels
    "cs-label-problem": "The Problem",
    "cs-label-approach": "The Approach",
    "cs-label-result": "The Result",
    "cs-label-decisions": "Key Decisions",
    "cs-try-demo": "Try Live Demo",
    "cs-view-source": "View Source",
    "cs-full-case-study": "Full Case Study",

    // Case study: Spralingua
    "cs-spralingua-problem": "Language learners plateau because generic apps lack personalized feedback and real conversational practice. Existing tools treat every learner the same, ignoring proficiency gaps and native language interference patterns.",
    "cs-spralingua-approach": "Built a full-stack platform using Claude\u2019s language understanding to generate adaptive lessons, provide contextual grammar corrections, and simulate natural conversations. Multi-agent architecture with specialized agents for vocabulary, grammar, and conversation.",
    "cs-spralingua-result": "A production application serving users across 4 languages (Spanish, German, Portuguese, English) with real-time speech-to-text, text-to-speech, and intelligent lesson progression. Sub-2-second conversation loop. Deployed on Railway with PostgreSQL persistence.",
    "cs-spralingua-decisions": "Chose Flask over Django for faster iteration. Used Minimax TTS for natural-sounding multilingual speech. Implemented session-based learning to track progress without requiring accounts. Prioritized conversation quality over feature breadth.",

    // Case study: Voice Agent
    "cs-voice-agent-problem": "Cloud-based voice assistants raise privacy concerns and incur recurring costs. Users who want AI assistance with sensitive documents need an offline-first solution that never sends data externally.",
    "cs-voice-agent-approach": "Built a fully offline voice assistant using Vosk for speech recognition and XTTS-v2 for neural text-to-speech. The entire pipeline runs locally with no cloud dependency.",
    "cs-voice-agent-result": "Privacy-first assistant achieving 90%+ recognition accuracy with zero recurring costs. Handles document analysis and summarization entirely on-device.",
    "cs-voice-agent-decisions": "Chose Vosk over Whisper for lower resource requirements. XTTS-v2 selected for its natural-sounding multilingual output. Designed for consumer hardware without GPU requirements.",

    // Case study: Recruiting AI
    "cs-recruiting-ai-problem": "Recruiters spend hours on repetitive screening tasks that could be automated. Manual candidate evaluation is inconsistent and prone to bias.",
    "cs-recruiting-ai-approach": "Building a custom LLM assistant with RAG pipeline for automated candidate scoring, interview preparation, and data-driven hiring decision support.",
    "cs-recruiting-ai-result": "In development. Targeting 70% reduction in initial screening time with more consistent evaluation criteria.",
    "cs-recruiting-ai-decisions": "Using LangChain for document processing pipeline. RAG architecture for context-aware candidate evaluation. Designed to augment recruiter judgment, not replace it.",

    // About section
    "about-label": "About",
    "about-name": "Luis Zermeno",
    "about-intro": "I started in recruitment \u2014 understanding people, roles, and what makes a great match. Then I discovered that AI could amplify that same intuition at scale. So I made the leap.",
    "about-detail": "Now I build AI applications end to end: from problem definition through architecture, development, and deployment. I care about products that work for real users, not just impressive demos.",
    "about-meta": "Based in Germany \u00b7 Fluent in Spanish, German, English & French",

    // Contact
    "contact-title": "Get in Touch",

    // Footer
    "copyright-new": "\u00a9 2026 Luis Zermeno. All rights reserved.",
  },
  
  de: {
    "spralingua-case-study": {
      "back-to-portfolio": "Zurück zum Portfolio",
      "live-app": "Live Produktions-App",
      "title": "Spralingua: <br> KI-Sprachtutor",
      "description": "Eine immersive Sprachlernplattform, die Voice-to-Text und LLMs nutzt, um realistische Konversationen zu simulieren und die Lücke zwischen Lehrbuchtheorie und Sprechsicherheit zu schließen.",
      "visit-live": "Live-Seite besuchen",
      "view-source": "Quellcode ansehen",
      "response-time": "Antwortzeit",
      "stack": "Stack",
      "stack-value": "Python, Flask, JavaScript",
      "ai-models": "KI-Modelle",
      "ai-models-value": "Claude 3.5, Minimax TTS",
      "database": "Datenbank",
      "database-value": "PostgreSQL + SQLAlchemy",
      "deployment": "Deployment",
      "deployment-value": "Railway + Gunicorn",
      "challenge": "Die Herausforderung",
      "challenge-p1": "Die meisten Sprach-Apps (wie Duolingo) konzentrieren sich auf Vokabeln und Grammatikübungen, bereiten aber nicht auf die Angst vor Echtzeitgesprächen vor. Ich wollte ein Tool bauen, das den Nutzer zum <em>Sprechen</em> zwingt, nicht nur zum Tippen.",
      "challenge-p2": "Die technische Hürde war <strong class=\"text-white\">Latenz</strong>. Eine Konversationsschleife (Nutzer spricht \u2192 Transkription \u2192 LLM denkt \u2192 TTS \u2192 Audio-Wiedergabe) dauert normalerweise 4-5 Sekunden. Das zerstört die Immersion. Ich musste es auf unter 2 Sekunden bringen, bei gleichbleibender Konversationsqualität.",
      "architecture": "Systemarchitektur",
      "arch-step1": "Web Speech API<br><span class=\"text-xs text-slate-500\"> (Spracheingabe)</span>",
      "arch-step2": "Flask Backend<br><span class=\"text-xs text-slate-500\"> (Orchestrator)</span>",
      "arch-step3": "Claude 3.5<br><span class=\"text-xs text-slate-500\"> (Reasoning)</span>",
      "arch-step4": "Minimax TTS<br><span class=\"text-xs text-slate-500\"> (Sprachausgabe)</span>",
      "arch-caption": "Komplette Konversationsschleife in unter 2 Sekunden",
      "tech-impl": "Wichtige technische Implementierung",
      "tech-impl-p1": "Die Verwaltung des Kontextverlaufs war entscheidend. Ich habe einen Rolling-Window-Kontextmanager in Python implementiert, um sicherzustellen, dass die KI sich an die Konversation erinnert, ohne Token-Limits zu überschreiten oder Kosten zu erhöhen.",
      "grammar-engine": "Grammatikkorrektur-Engine",
      "grammar-engine-p1": "Die App korrigiert nicht nur Fehler - sie erklärt <em>warum</em> etwas falsch ist. Ich habe spezialisierte Prompts entwickelt, die mein C2-Deutschniveau nutzen, um pädagogisch fundierte Korrekturen zu liefern.",
      "screenshots": "App-Screenshots",
      "screenshot1-caption": "KI-Konversationsübung",
      "screenshot2-caption": "Grammatikkorrektur",
      "screenshot3-caption": "Charakterauswahl",
      "screenshot4-caption": "Haupt-Dashboard",
      "key-features": "Hauptfunktionen",
      "feature1": "Echtzeit-Sprachsynthese (TTS)",
      "feature2": "Grammatikkorrektur-Engine",
      "feature3": "Mehrsprachige Unterstützung (ES, DE, PT, EN)",
      "feature4": "KI-Charakter-Konversationen",
      "feature5": "Adaptive Schwierigkeitsstufen",
      "feature6": "Konversationsverlauf-Speicherung",
      "lessons-learned": "Gelernte Lektionen",
      "lesson1-title": "Prompt Engineering",
      "lesson1-desc": "Die KI-\"Persona\" braucht spezifische Leitplanken, um nicht aus der Rolle zu fallen. Ich habe gelernt, explizite Einschränkungen in System-Prompts einzubauen.",
      "lesson2-title": "Latenz-Optimierung",
      "lesson2-desc": "Streaming-Antworten und parallele API-Aufrufe reduzierten die wahrgenommene Latenz um 60%. Jede Millisekunde zählt in einer Konversation.",
      "lesson3-title": "Datenbank-Design",
      "lesson3-desc": "PostgreSQL mit SQLAlchemy ORM war die richtige Wahl für effiziente Speicherung von Konversationsverlauf und Nutzerfortschritt.",
      "technologies": "Technologien",
      "live-site": "Live-Seite",
      "source-code": "Quellcode",
      "back-home": "\u2190 Zurück zur Portfolio-Startseite"
    },
    
    // Construction Banner
    "construction-message": "Website in aktiver Entwicklung - Neue Features werden regelmäßig hinzugefügt!",
    
    // Navigation
    "nav-home": "Startseite",
    "nav-portfolio": "Portfolio",
    "nav-experience": "Erfahrung",
    
    // Hero section
    "hero-greeting": "Hallo, ich bin",
    "hero-ai-credit": "Diese Website wurde mit Hilfe von KI erstellt ✨",
    "hero-title": "Talent Partner & KI-Anwendungsingenieur",
    "hero-subtitle": "Entwicklung produktionsreifer LLM-Apps & KI-gestützte Talent Acquisition",
    "hero-description": "Spezialisiert auf die Entwicklung praktischer KI-Lösungen mit LangChain, LangGraph, Python und LLM-Aufrufen sowohl API- als auch lokal-basiert. Ich entwerfe Multi-Agenten-Systeme und Sprach-KI-Anwendungen, die echte Geschäftsprobleme lösen. Mein Hintergrund im Recruitment gibt mir einzigartige Einblicke in den Bau von Tools, die Menschen tatsächlich nutzen möchten.",
    "hero-tech-badge": "Python \u2022 LangChain \u2022 LangGraph",
    "hero-cta-portfolio": "Meine Arbeit ansehen",
    "hero-cta-contact": "Kontakt aufnehmen",
    "hero-status": "Offen für Arbeit",

    // Bento grid stats
    "stats-background": "Hintergrund",
    "stats-years-ta": "Jahre in der Talentakquise",
    "stats-education": "Ausbildung",
    "stats-certifications": "Zertifizierungen",

    // Project status
    "project-status-live": "Live-Produkt",
    "try-demo": "Demo testen",
    "coming-soon": "Demnächst",
    "status-building": "In Entwicklung",
    "more-certs-coming": "Weitere folgen",
    "more-certs-desc": "Aktuell weitere KI-Zertifizierungen in Arbeit",

    // Project preview section
    "preview-heading": "Aktuelle KI-Projekte",
    "ai-recruiting-title": "KI-Recruiting-Assistent",
    "ai-recruiting-desc": "Ein speziell trainiertes LLM, das Teile des Rekrutierungsprozesses automatisiert, von der ersten Überprüfung bis zur Interviewvorbereitung.",
    "comfyui-title": "Individuelle ComfyUI-Workflows",
    "comfyui-desc": "Entwicklung spezialisierter Bildgenerierungs-Pipelines für konsistente Markenvisualisierung und kreative Content-Produktion.",
    "localllm-title": "Lokale LLM-Integration",
    "localllm-desc": "Ein System mit Ollama, um KI-Modelle lokal für datenschutzorientierte Dokumentenanalyse und -zusammenfassung auszuführen.",
    "view-details": "Details ansehen",
    "portfolio-intro": "Eine Sammlung von KI-Entwicklungsprojekten, die meine Arbeit mit großen Sprachmodellen, Bildgenerierung und autonomen Agenten präsentiert.",
    "key-features": "Hauptmerkmale",
    "more-projects-desc": "Weitere KI-Projekte derzeit in Entwicklung",
    "spralingua-highlight1": "Full-Stack-Anwendung live auf spralingua.com",
    "spralingua-highlight2": "Mehrsprachige Unterstützung: Spanisch, Deutsch, Portugiesisch, Englisch",
    "spralingua-highlight3": "Konversationspraxis mit KI-Charakteren",
    "spralingua-highlight4": "Spracheingabe/-ausgabe mit Web Speech API",

    "preview-spralingua-title": "Spralingua - KI-Sprachlernplattform",
    "preview-spralingua-desc": "Full-Stack KI-Sprachlernplattform für Spanisch, Deutsch, Portugiesisch und Englisch mit Konversationspraxis, E-Mail-Schreibübungen und Spracheingabe/-ausgabe.",

    // Certifications section
    "certifications-heading": "Zertifizierungen",
    "cert-mba-title": "M.B.A.",
    "cert-mba-desc": "Internationale Betriebswirtschaftslehre",
    "cert-mba-institution": "Karlshochschule International University",
    "cert-hf-title": "Hugging Face Agents Kurs",
    "cert-hf-desc": "Zertifikat mit Auszeichnung",
    "cert-mcp-title": "Der MCP-Kurs: Einheit 1",
    "cert-mcp-desc": "Grundlagen von MCP",

    // Featured experience cards on home page
    "featured-lucanet-title": "Talent Partner",
    "featured-lucanet-desc": "Full-Cycle-Recruiter für Umsatz- und Finanzteams, spezialisiert auf SaaS- und Fintech-Vertriebsrollen in den Regionen DACH, Benelux, Spanien, Frankreich und Italien.",
    "featured-lucanet-location": "Berlin/Remote",
    "featured-lucanet-period": "2023-Heute",
    "featured-rapid-title": "Talent- und Koordinationspartner",
    "featured-rapid-desc": "Erstellung und Durchführung eines neuen Automatisierungsprozesses für die Koordination von 180+ Mitarbeitern, während ich als Full-Cycle-Recruiter für technische Rollen tätig war.",
    "featured-rapid-location": "Berlin/Remote",
    "featured-rapid-period": "2022-2023",

    // Filter buttons
    "filter-all": "Alle",

    // About section
    "about-heading": "Über mich",
    "about-p1": "Ich bin ein KI-Anwendungsingenieur, der sich auf den Aufbau produktionsreifer LLM-Anwendungen konzentriert, die echte Geschäftsprobleme lösen. Besonderer Fokus auf Talent Acquisition KI-Projekte—Sourcing, Bewertung, Interview-Vorbereitung und Entscheidungsfindung mit KI, wodurch Prozesse 70% schneller und weniger voreingenommen werden. Nach 2 Jahren intensiver KI-Entwicklung—von Multi-Agenten-Systemen über RAG-Pipelines bis hin zu Sprach-KI—suche ich nun nach Möglichkeiten, wirkungsvolle KI-Anwendungen in Europa zu entwickeln.",
    "about-p2": "Mein Ansatz kombiniert technische Umsetzung mit praktischem Denken. Bevor ich zur KI-Entwicklung wechselte, war ich 4+ Jahre als Talent Partner tätig, was mir beibrachte, zu erkennen, was Benutzer wirklich brauchen, anstatt was nur auf dem Papier beeindruckend klingt. Dieser Hintergrund hilft mir, KI-Tools zu entwickeln, die Menschen nutzen möchten, nicht nur technisch interessante Demos.",
    "about-p3": "Ich spezialisiere mich auf Python-basierte LLM-Anwendungen unter Verwendung von LangGraph für Agenten-Orchestrierung, Flask für Full-Stack-Webanwendungen und Claude/GPT-4 für Reasoning-Aufgaben. Meine Projekte konzentrieren sich auf praktische Anwendungen: eine mehrsprachige Lernplattform mit Echtzeit-KI-Nachhilfe, sprachgesteuerten Interaktionen und produktionsreifem Deployment auf Railway.",
    "about-p4": "Ich suche nach KI-Anwendungsingenieur-Positionen, bei denen ich zum Aufbau, zur Bereitstellung und zur Iteration von LLM-gestützten Produkten beitragen kann\u2014nicht zum Trainieren von Modellen, sondern dazu, sie nützlich zu machen.",
    
    // Skills section
    "skills-heading": "Technische Fähigkeiten",
    "skills-languages-frameworks": "Sprachen & Frameworks",
    "skill-python": "Python (Hauptsprache)",
    "skill-flask": "Flask",
    "skill-langchain": "LangChain",
    "skill-web": "JavaScript/HTML/CSS",
    "skills-llm-tools": "LLM & KI-Tools",
    "skill-openai": "OpenAI API (GPT-4)",
    "skill-claude": "Anthropic Claude",
    "skill-ollama": "Ollama (Lokale LLMs)",
    "skill-llama": "Llama 3.1/3.2",
    "skill-langfuse": "Langfuse (Observability)",
    "skills-vector-rag": "Vektor-DBs & RAG",
    "skill-chromadb": "ChromaDB",
    "skill-pinecone": "Pinecone",
    "skill-rag": "RAG-Pipeline-Design",
    "skill-semantic": "Semantische Suche",
    "skills-dev-deployment": "Entwicklung & Deployment",
    "skill-git": "Git & GitHub",
    "skill-rest": "REST APIs",
    "skill-linux": "Linux/Windows",
    "skills-databases": "Datenbanken",
    "skill-postgresql": "PostgreSQL",
    "skill-sqlalchemy": "SQLAlchemy",
    "skills-ai-specializations": "KI-Spezialisierungen",
    "skill-multiagent": "Multi-Agenten-Architektur",
    "skill-prompt": "Prompt Engineering",
    "skill-rag-systems": "RAG-Systeme",
    "skill-voice": "Sprach-KI (TTS/STT)",
    "skill-agent-design": "Agenten-Design-Muster",
    "skill-railway": "Railway",
    "skill-gunicorn": "Gunicorn",
    "skill-claude-code": "Claude Code",
    "recruitment-tools": "Rekrutierungswerkzeuge",
    "tech-stack": "Tech-Stack",
    "languages": "Sprachen",
    
    // Experience section
    "experience-heading": "Ausgewählte Erfahrung",
    "lucanet-title": "Talent Partner",
    "lucanet-desc": "Full-Cycle-Recruiter für Umsatz- und Finanzteams, spezialisiert auf SaaS- und Fintech-Vertriebsrollen in den Regionen DACH, Benelux, Spanien, Frankreich und Italien.",
    "rapid-title": "Talent- und Koordinationspartner",
    "rapid-desc": "Erstellung und Ausführung eines neuen Koordinationsautomatisierungsprozesses für mehr als 180 Mitarbeiter und gleichzeitig Full-Cycle-Recruiter für technische Rollen.",
    "view-all": "Alle Erfahrungen ansehen",
    
    // Contact section
    "contact-heading": "Kontakt aufnehmen",
    "contact-text": "Kontaktieren Sie mich gerne für Zusammenarbeit oder einfach für einen freundlichen Austausch.",
    "contact-name": "Name",
    "contact-name-placeholder": "Ihr Name",
    "contact-email": "E-Mail",
    "contact-email-placeholder": "Ihre E-Mail",
    "contact-subject": "Betreff",
    "contact-subject-placeholder": "Betreff",
    "contact-message": "Nachricht",
    "contact-message-placeholder": "Ihre Nachricht",
    "contact-send": "Nachricht senden",
    "contact-success": "Ihre Nachricht wurde erfolgreich gesendet!",
    
    // Footer
    "copyright": "© 2025 Luis Zermeno. Alle Rechte vorbehalten.",
    
    // Portfolio page
    "portfolio-description": "Eine Sammlung meiner beruflichen Rollen und Erfolge in den Bereichen Talentakquise und Personalwesen.",
    "filter-talent": "Talentakquise",
    "filter-hr": "Personalwesen",
    "filter-education": "Bildung",
    
    // Experience page
    "experience-description": "Ein detaillierter Überblick über meinen beruflichen Werdegang und meine Erfolge im Talent Acquisition und darüber hinaus.",
    "download-resume": "Lebenslauf herunterladen",
    "professional-skills": "Berufliche Fähigkeiten",
    "soft-skills": "Soft Skills",
    
    // New translations for portfolio page
    "ai-projects-heading": "KI-Projekte",
    "ai-projects-description": "Eine Sammlung von KI-Entwicklungsprojekten, die meine Arbeit mit großen Sprachmodellen, Bildgenerierung und autonomen Agenten zeigt.",
    "filter-llm": "LLM-Projekte",
    "filter-image-gen": "Bildgenerierung",
    "filter-ai-agents": "KI-Agenten",

    // Experience overview
    "experience-overview": "M.B.A. mit mehr als 4 Jahren Erfahrung im Talent Acquisition für die DACH-Region, 2 Jahre auch für EMEA (Frankreich, Italien, Spanien, Benelux und Spanien, DACH). Erfahrung sowohl in Startup-Umgebungen als auch in großen Unternehmen. Schwerpunkt auf Tech-Rekrutierung (Full-Stack) und aktuell Vertriebsrekrutierung (Account Executives, Sales Engineers, BDRs).",
    
    // LucaNet Experience
    "lucanet-position": "Talent Partner",
    "lucanet-description": "Full-Cycle-Recruiter für Revenue- und Finanzteams in DACH, Benelux, Spanien, Frankreich und Italien. Rekrutierung von Account Executives, Sales Engineers, Account Managers, Cross-sell/Upsell-Spezialisten, Sales Operations und BDRs/SDRs für komplexe Cloud-SaaS/Fintech-Produkte.",
    "lucanet-achievement1": "110% der Einstellungs-KPIs in den letzten zwei Quartalen, 85% Angebotsannahmequote (vs. 70% Marktstandard).",
    "lucanet-achievement2": "Spanische Vertriebsabteilung von 3 auf 30 Mitarbeiter in 1,5 Jahren aufgebaut (Team Leads → BDRs → AMs → AEs).",
    "lucanet-achievement3": "KI-Tools implementiert: Python/LangChain-Assistent, Claude Desktop, LinkedIn AI Assist, BrightHire-Integration mit Greenhouse.",

    // Saily Experience
    "saily-position": "Talent- und Koordinationspartner",
    "saily-description": "Doppelrolle bei Talentakquise und Interviewkoordination für API-Marktplatz während Hyperwachstum. Von unternehmensweiten Entlassungen betroffen.",
    "saily-achievement1": "Unternehmensweite Interview-Koordinationsautomatisierung für 180+ Mitarbeiter, 20+ Hiring Manager, 5+ C-Level-Führungskräfte in Deutschland, USA und Tel-Aviv erstellt. 500+ Interviews automatisiert, Terminplanungsaufwand um 90% reduziert.",
    "saily-achievement2": "Full-Cycle-Recruiting für Entwickler und Ingenieure: Backend, Frontend, DevOps, Produktoperationen, APIs.",

    // Velocopter Experience
    "velocopter-position": "Talent Acquisition Specialist",
    "velocopter-description": "Full-Cycle-Recruiter für Engineering, Batterie, Technik und Projektmanagement mit Schwerpunkten im Maschinenbau, Elektrotechnik, Luft- und Raumfahrt, Programmierung, Softwareentwicklung, Automobileinzelhandel und Energie.",
    "velocopter-achievement": "Das Unternehmen wuchs während meiner einjährigen Tätigkeit von etwa 200 auf fast 600 Mitarbeiter.",

    // Microsoft Experience
    "microsoft-position": "HR Generalist, Data Entry Lead",
    "microsoft-description": "Verarbeitung von HR-Datentransaktionen für EMEA-, LATAM- und APAC-Mitarbeiter mit SAP und PeopleSoft.",
    "microsoft-achievement": "Datenqualität auf 99% und Lieferung auf 100% innerhalb der ersten 3 Monate gesteigert, während der gesamten Beschäftigung aufrechterhalten.",
    
    // Honeywell Experience
    "honeywell-position": "Human Resources Generalist, Leiter Kundenerfahrung",
    "honeywell-description": "Verarbeitung von allgemeinen Datentransaktionen für alle neuen EMEA- und LATAM-Honeywell-Mitarbeiter sowie Verwaltung der HR-Datenbank und Koordination von über 10 HR-Programmen.",
    "honeywell-achievement": "Bewältigung eines 300%-Anstiegs des Transaktionsvolumens mit bestehenden Ressourcen durch Prozessverbesserungen und automatisierte Lösungen.",
    
    // Education
    "purdue-degree": "Applied Generative AI Specialization",
    "mba-degree": "Master in Betriebswirtschaftslehre",
    "bachelor-degree": "Bachelor in Betriebswirtschaftslehre",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Unabhängige KI-Entwicklung",
    "ai-projects-location": "Remote",
    "ai-projects-description": "Vollzeit-Fokus auf den Aufbau produktionsreifer LLM-Anwendungen und KI-gestützter Tools. Mein Recruitment-Hintergrund beeinflusst direkt meine KI-Entwicklungsarbeit\u2014das Verstehen von Benutzerbedürfnissen, die Identifizierung von Schwachstellen in Workflows und die Übersetzung von Geschäftsanforderungen in Lösungen gibt mir einen einzigartigen Vorteil beim Bau von KI-Anwendungen, die echte Probleme lösen, nicht nur technisch interessante Demos.",
    "ai-projects-achievement1": "Mehrsprachige Lernplattform mit <2s Antwortzeiten, entwickelt mit LangGraph für Agenten-Orchestrierung, Flask für Full-Stack-Webanwendung und Claude für Reasoning. Unterstützt A1-B2-Kompetenzstufen mit intelligenter Grammatikkorrektur.",
    "ai-projects-achievement2": "Datenschutzorientierter Sprachassistent mit 90%+ Erkennungsgenauigkeit, vollständig offline mit Python, Vosk (Spracherkennung) und XTTS-v2 (neurales TTS). Null Cloud-Abhängigkeit, null laufende Kosten.",
    "ai-projects-achievement3": "Godot-Spiel mit 50% KI-generierten Assets (ComfyUI, Stable Diffusion Workflows), fertiggestellt in 7-Tage-Game-Jam mit 46 Spielerbewertungen im Durchschnitt 4,2/5 Sternen.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, RAG-Systeme, Sprach-KI (TTS/STT)",
    "career-bridge-text": "Mein Recruitment-Hintergrund beeinflusst direkt meine KI-Entwicklungsarbeit. Vier Jahre des Verstehens, was Benutzer brauchen, der Identifizierung von Schwachstellen in Workflows und der Übersetzung von Geschäftsanforderungen in Lösungen gibt mir einen einzigartigen Vorteil beim Bau von KI-Anwendungen, die echte Probleme lösen\u2014nicht nur technisch interessante Demos.",

    // ========== NEW: Single-page redesign keys ==========

    // Navigation
    "nav-projects": "Projekte",
    "nav-about": "\u00dcber mich",

    // Theme toggle
    "theme-light": "Heller Modus",
    "theme-dark": "Dunkler Modus",

    // Hero
    "hero-label": "KI-Anwendungsingenieur",
    "hero-headline-prefix": "Ich baue KI-Produkte, die ",
    "hero-headline-accent": "echte Probleme l\u00f6sen",
    "hero-subtitle-new": "Von mehrsprachigen Sprachlernplattformen bis hin zu intelligenten Agentensystemen \u2014 ich entwerfe, baue und liefere KI-Anwendungen von Anfang bis Ende.",
    "hero-cta-projects": "Projekte ansehen",
    "hero-cta-contact": "Kontakt aufnehmen",

    // Projects section
    "section-projects-label": "Ausgew\u00e4hlte Arbeiten",
    "section-projects-title": "Projekte",
    "section-projects-desc": "KI-Anwendungen vom Problem bis zur Produktion.",
    "view-case-study": "Fallstudie ansehen",
    "project-spralingua-outcome": "KI-Sprachlernplattform mit personalisierten Lektionen, Echtzeit-Grammatikkorrektur und nat\u00fcrlicher Konversations\u00fcbung in 4 Sprachen.",
    "project-voice-agent-title": "KI-Sprachagent",
    "project-voice-agent-outcome": "Datenschutzorientierter Sprachassistent mit 90%+ Erkennungsgenauigkeit, vollst\u00e4ndig offline ohne Cloud-Abh\u00e4ngigkeit.",
    "project-recruiting-ai-title": "KI-Recruiting-Assistent",
    "project-recruiting-ai-outcome": "Ma\u00dfgeschneiderter LLM-Assistent zur Automatisierung von Kandidatenscreening, Interviewvorbereitung und Einstellungsentscheidungen.",

    // Case study labels
    "cs-label-problem": "Das Problem",
    "cs-label-approach": "Der Ansatz",
    "cs-label-result": "Das Ergebnis",
    "cs-label-decisions": "Wichtige Entscheidungen",
    "cs-try-demo": "Live-Demo testen",
    "cs-view-source": "Quellcode ansehen",
    "cs-full-case-study": "Vollst\u00e4ndige Fallstudie",

    // Case study: Spralingua
    "cs-spralingua-problem": "Sprachlerner stagnieren, weil generische Apps kein personalisiertes Feedback und keine echte Konversations\u00fcbung bieten. Bestehende Tools behandeln jeden Lerner gleich und ignorieren Kompetenzl\u00fccken und Interferenzmuster der Muttersprache.",
    "cs-spralingua-approach": "Entwicklung einer Full-Stack-Plattform mit Claude\u2019s Sprachverst\u00e4ndnis f\u00fcr adaptive Lektionen, kontextbezogene Grammatikkorrekturen und simulierte nat\u00fcrliche Konversationen. Multi-Agenten-Architektur mit spezialisierten Agenten f\u00fcr Vokabular, Grammatik und Konversation.",
    "cs-spralingua-result": "Eine Produktionsanwendung f\u00fcr Benutzer in 4 Sprachen (Spanisch, Deutsch, Portugiesisch, Englisch) mit Echtzeit-Sprache-zu-Text, Text-zu-Sprache und intelligenter Lektionsprogression. Konversationsschleife unter 2 Sekunden. Deployed auf Railway mit PostgreSQL.",
    "cs-spralingua-decisions": "Flask statt Django f\u00fcr schnellere Iteration gew\u00e4hlt. Minimax TTS f\u00fcr nat\u00fcrlich klingende mehrsprachige Sprache. Sitzungsbasiertes Lernen zur Fortschrittsverfolgung ohne Kontoerstellung. Konversationsqualit\u00e4t \u00fcber Funktionsumfang priorisiert.",

    // Case study: Voice Agent
    "cs-voice-agent-problem": "Cloud-basierte Sprachassistenten werfen Datenschutzbedenken auf und verursachen wiederkehrende Kosten. Nutzer, die KI-Unterst\u00fctzung f\u00fcr sensible Dokumente ben\u00f6tigen, brauchen eine Offline-L\u00f6sung, die niemals Daten extern sendet.",
    "cs-voice-agent-approach": "Entwicklung eines vollst\u00e4ndig offline funktionierenden Sprachassistenten mit Vosk f\u00fcr Spracherkennung und XTTS-v2 f\u00fcr neurale Text-zu-Sprache. Die gesamte Pipeline l\u00e4uft lokal ohne Cloud-Abh\u00e4ngigkeit.",
    "cs-voice-agent-result": "Datenschutzorientierter Assistent mit 90%+ Erkennungsgenauigkeit ohne wiederkehrende Kosten. Dokumentenanalyse und -zusammenfassung vollst\u00e4ndig auf dem Ger\u00e4t.",
    "cs-voice-agent-decisions": "Vosk statt Whisper f\u00fcr geringere Ressourcenanforderungen gew\u00e4hlt. XTTS-v2 wegen nat\u00fcrlich klingender mehrsprachiger Ausgabe ausgew\u00e4hlt. F\u00fcr Consumer-Hardware ohne GPU-Anforderungen konzipiert.",

    // Case study: Recruiting AI
    "cs-recruiting-ai-problem": "Recruiter verbringen Stunden mit wiederkehrenden Screening-Aufgaben, die automatisiert werden k\u00f6nnten. Manuelle Kandidatenbewertung ist inkonsistent und anf\u00e4llig f\u00fcr Voreingenommenheit.",
    "cs-recruiting-ai-approach": "Entwicklung eines ma\u00dfgeschneiderten LLM-Assistenten mit RAG-Pipeline f\u00fcr automatisiertes Kandidatenscoring, Interviewvorbereitung und datengest\u00fctzte Einstellungsentscheidungen.",
    "cs-recruiting-ai-result": "In Entwicklung. Ziel: 70% Reduzierung der anf\u00e4nglichen Screening-Zeit mit konsistenteren Bewertungskriterien.",
    "cs-recruiting-ai-decisions": "LangChain f\u00fcr die Dokumentenverarbeitungspipeline. RAG-Architektur f\u00fcr kontextbewusste Kandidatenbewertung. Konzipiert zur Unterst\u00fctzung des Recruiter-Urteils, nicht als Ersatz.",

    // About section
    "about-label": "\u00dcber mich",
    "about-name": "Luis Zermeno",
    "about-intro": "Ich begann im Recruitment \u2014 Menschen, Rollen und das Verst\u00e4ndnis daf\u00fcr, was ein gutes Match ausmacht. Dann entdeckte ich, dass KI diese Intuition skalieren kann. Also machte ich den Sprung.",
    "about-detail": "Jetzt baue ich KI-Anwendungen von Anfang bis Ende: von der Problemdefinition \u00fcber die Architektur bis hin zur Entwicklung und zum Deployment. Mir sind Produkte wichtig, die f\u00fcr echte Nutzer funktionieren, nicht nur beeindruckende Demos.",
    "about-meta": "Standort Deutschland \u00b7 Flie\u00dfend in Spanisch, Deutsch, Englisch & Franz\u00f6sisch",

    // Contact
    "contact-title": "Kontakt aufnehmen",

    // Footer
    "copyright-new": "\u00a9 2026 Luis Zermeno. Alle Rechte vorbehalten.",
  },
  
  es: {
    "spralingua-case-study": {
      "back-to-portfolio": "Volver al Portafolio",
      "live-app": "Aplicación en Producción",
      "title": "Spralingua: <br> Tutor de Idiomas con IA",
      "description": "Una plataforma inmersiva de aprendizaje de idiomas que utiliza Voz a Texto y LLMs para simular conversaciones del mundo real, cerrando la brecha entre la teoría de los libros de texto y la confianza al hablar.",
      "visit-live": "Visitar Sitio en Vivo",
      "view-source": "Ver Código Fuente",
      "response-time": "Tiempo de Respuesta",
      "stack": "Stack",
      "stack-value": "Python, Flask, JavaScript",
      "ai-models": "Modelos de IA",
      "ai-models-value": "Claude 3.5, Minimax TTS",
      "database": "Base de Datos",
      "database-value": "PostgreSQL + SQLAlchemy",
      "deployment": "Despliegue",
      "deployment-value": "Railway + Gunicorn",
      "challenge": "El Desafío",
      "challenge-p1": "La mayoría de las aplicaciones de idiomas (como Duolingo) se centran en ejercicios de vocabulario y gramática, pero no preparan a los usuarios para la ansiedad de una conversación en tiempo real. Quería construir una herramienta que obligue al usuario a <em>hablar</em>, no solo a tocar botones.",
      "challenge-p2": "El obstáculo técnico era la <strong class=\"text-white\">latencia</strong>. Un ciclo de conversación (Usuario Habla \u2192 Transcribir \u2192 LLM Piensa \u2192 TTS \u2192 Reproducción de Audio) suele tardar de 4 a 5 segundos. Esto destruye la inmersión. Necesitaba reducirlo a menos de 2 segundos manteniendo la calidad de la conversación.",
      "architecture": "Arquitectura del Sistema",
      "arch-step1": "Web Speech API<br><span class=\"text-xs text-slate-500\"> (Entrada de Voz)</span>",
      "arch-step2": "Backend Flask<br><span class=\"text-xs text-slate-500\"> (Orquestador)</span>",
      "arch-step3": "Claude 3.5<br><span class=\"text-xs text-slate-500\"> (Razonamiento)</span>",
      "arch-step4": "Minimax TTS<br><span class=\"text-xs text-slate-500\"> (Salida de Voz)</span>",
      "arch-caption": "Ciclo de conversación completo en menos de 2 segundos",
      "tech-impl": "Implementación Técnica Clave",
      "tech-impl-p1": "Gestionar el historial de contexto fue crucial. Implementé un gestor de contexto de ventana rodante en Python para asegurar que la IA recuerde la conversación sin exceder los límites de tokens ni aumentar los costos.",
      "grammar-engine": "Motor de Corrección Gramatical",
      "grammar-engine-p1": "La aplicación no solo corrige errores, sino que explica <em>por qué</em> algo está mal. Diseñé prompts especializados que aprovechan mi conocimiento de alemán a nivel C2 para proporcionar correcciones pedagógicamente sólidas.",
      "screenshots": "Capturas de Pantalla de la App",
      "screenshot1-caption": "Práctica de Conversación con IA",
      "screenshot2-caption": "Corrección Gramatical",
      "screenshot3-caption": "Selección de Personaje",
      "screenshot4-caption": "Panel Principal",
      "key-features": "Características Principales",
      "feature1": "Síntesis de Voz en Tiempo Real (TTS)",
      "feature2": "Motor de Corrección Gramatical",
      "feature3": "Soporte Multilingüe (ES, DE, PT, EN)",
      "feature4": "Conversaciones con Personajes de IA",
      "feature5": "Niveles de Dificultad Adaptativos",
      "feature6": "Persistencia del Historial de Conversación",
      "lessons-learned": "Lecciones Aprendidas",
      "lesson1-title": "Ingeniería de Prompts",
      "lesson1-desc": "La \"persona\" de la IA necesita barandillas específicas para evitar romper el personaje. Aprendí a agregar restricciones explícitas en los prompts del sistema.",
      "lesson2-title": "Optimización de Latencia",
      "lesson2-desc": "Las respuestas en streaming y las llamadas a API en paralelo redujeron la latencia percibida en un 60%. Cada milisegundo cuenta en una conversación.",
      "lesson3-title": "Diseño de Base de Datos",
      "lesson3-desc": "PostgreSQL con SQLAlchemy ORM fue la elección correcta para almacenar el historial de conversaciones y el progreso del usuario de manera eficiente.",
      "technologies": "Tecnologías",
      "live-site": "Sitio en Vivo",
      "source-code": "Código Fuente",
      "back-home": "\u2190 Volver al Inicio del Portafolio"
    },
    
    // Construction Banner
    "construction-message": "Sitio web en desarrollo activo - ¡Se agregan nuevas características regularmente!",
    
    // Navigation
    "nav-home": "Inicio",
    "nav-portfolio": "Portafolio",
    "nav-experience": "Experiencia",
    
    // Hero section
    "hero-greeting": "Hola, soy",
    "hero-ai-credit": "Este sitio web fue creado con la ayuda de IA ✨",
    "hero-title": "Talent Partner & Ingeniero de Aplicaciones de IA",
    "hero-subtitle": "Construyendo Apps LLM & Potenciando Talent Acquisition con IA",
    "hero-description": "Especializado en desarrollar soluciones prácticas de IA con LangChain, LangGraph, Python y llamadas LLM tanto API como locales. Diseño sistemas multi-agente y aplicaciones de voz IA que resuelven problemas empresariales reales. Mi experiencia en reclutamiento me da una perspectiva única para construir herramientas que la gente realmente quiere usar.",
    "hero-tech-badge": "Python \u2022 LangChain \u2022 LangGraph",
    "hero-cta-portfolio": "Ver mi trabajo",
    "hero-cta-contact": "Contactarme",
    "hero-status": "Disponible para trabajar",

    // Bento grid stats
    "stats-background": "Experiencia",
    "stats-years-ta": "Años en Adquisición de Talento",
    "stats-education": "Educación",
    "stats-certifications": "Certificaciones",

    // Project status
    "project-status-live": "Producto en vivo",
    "try-demo": "Probar demo",
    "coming-soon": "Próximamente",
    "status-building": "En desarrollo",
    "more-certs-coming": "Más próximamente",
    "more-certs-desc": "Actualmente obteniendo certificaciones adicionales de IA",

    // Project preview section
    "preview-heading": "Proyectos recientes de IA",
    "ai-recruiting-title": "Asistente de Reclutamiento con IA",
    "ai-recruiting-desc": "Un LLM personalizado que ayuda a automatizar partes del proceso de reclutamiento, desde la selección inicial hasta la preparación de entrevistas.",
    "comfyui-title": "Flujos de trabajo personalizados en ComfyUI",
    "comfyui-desc": "Desarrollo de pipelines especializados para generación de imágenes con visuales de marca consistentes y producción de contenido creativo.",
    "localllm-title": "Integración Local de LLM",
    "localllm-desc": "Construí un sistema usando Ollama para ejecutar modelos de IA localmente para análisis y resumen de documentos centrado en la privacidad.",
    "view-details": "Ver detalles",
    "portfolio-intro": "Una colección de proyectos de desarrollo de IA que muestran mi trabajo con grandes modelos de lenguaje, generación de imágenes y agentes autónomos.",
    "key-features": "Características Principales",
    "more-projects-desc": "Más proyectos de IA actualmente en desarrollo",
    "spralingua-highlight1": "Aplicación full-stack en vivo en spralingua.com",
    "spralingua-highlight2": "Soporte multilingüe: español, alemán, portugués, inglés",
    "spralingua-highlight3": "Práctica de conversación con personajes IA",
    "spralingua-highlight4": "Entrada/salida de voz con Web Speech API",

    "preview-spralingua-title": "Spralingua - Plataforma de Aprendizaje de Idiomas IA",
    "preview-spralingua-desc": "Plataforma full-stack de aprendizaje de idiomas con IA que soporta español, alemán, portugués e inglés con práctica de conversación, ejercicios de escritura de emails y entrada/salida de voz.",

    // Certifications section
    "certifications-heading": "Certificaciones",
    "cert-mba-title": "M.B.A.",
    "cert-mba-desc": "Administración Internacional de Empresas",
    "cert-mba-institution": "Karlshochschule International University",
    "cert-hf-title": "Curso de Agentes Hugging Face",
    "cert-hf-desc": "Certificado de Excelencia",
    "cert-mcp-title": "El Curso MCP: Unidad 1",
    "cert-mcp-desc": "Fundamentos de MCP",

    // Featured experience cards on home page
    "featured-lucanet-title": "Talent Partner",
    "featured-lucanet-desc": "Reclutador de ciclo completo para equipos de ingresos y finanzas, especializado en roles de ventas SaaS y Fintech en las regiones DACH, Benelux, España, Francia e Italia.",
    "featured-lucanet-location": "Berlín/Remoto",
    "featured-lucanet-period": "2023-Presente",
    "featured-rapid-title": "Talent y Coordination Partner",
    "featured-rapid-desc": "Creación y ejecución de un nuevo proceso de automatización de coordinación para 180+ empleados, mientras actuaba como reclutador de ciclo completo para roles técnicos.",
    "featured-rapid-location": "Berlín/Remoto",
    "featured-rapid-period": "2022-2023",

    // Filter buttons
    "filter-all": "Todos",

    // About section
    "about-heading": "Sobre mí",
    "about-p1": "Soy un Ingeniero de Aplicaciones de IA enfocado en construir aplicaciones LLM listas para producción que resuelven problemas empresariales reales. Enfoque especial en proyectos de IA para Talent Acquisition—sourcing, evaluación, preparación de entrevistas y toma de decisiones con IA, haciendo los procesos 70% más rápidos y menos sesgados. Después de 2 años profundizando en el desarrollo de IA—desde sistemas multi-agente hasta pipelines RAG y voz IA—ahora busco oportunidades para construir aplicaciones de IA impactantes en Europa.",
    "about-p2": "Mi enfoque combina implementación técnica con pensamiento práctico. Antes de hacer la transición a la ingeniería de IA, pasé más de 4 años como Talent Partner, lo que me enseñó a identificar lo que los usuarios realmente necesitan versus lo que suena impresionante en papel. Esta experiencia me ayuda a construir herramientas de IA que la gente quiere usar, no solo demos técnicamente interesantes.",
    "about-p3": "Me especializo en aplicaciones LLM basadas en Python usando LangGraph para orquestación de agentes, Flask para aplicaciones web full-stack, y Claude/GPT-4 para tareas de razonamiento. Mis proyectos se enfocan en aplicaciones prácticas: una plataforma de aprendizaje multilingüe con tutoría de IA en tiempo real, interacciones habilitadas por voz y despliegue listo para producción en Railway.",
    "about-p4": "Busco roles de Ingeniero de Aplicaciones de IA donde pueda contribuir a construir, desplegar e iterar sobre productos impulsados por LLMs\u2014no entrenar modelos, sino hacerlos útiles.",
    
    // Skills section
    "skills-heading": "Habilidades técnicas",
    "skills-languages-frameworks": "Lenguajes y Frameworks",
    "skill-python": "Python (Principal)",
    "skill-flask": "Flask",
    "skill-langchain": "LangChain",
    "skill-web": "JavaScript/HTML/CSS",
    "skills-llm-tools": "Herramientas LLM e IA",
    "skill-openai": "OpenAI API (GPT-4)",
    "skill-claude": "Anthropic Claude",
    "skill-ollama": "Ollama (LLMs Locales)",
    "skill-llama": "Llama 3.1/3.2",
    "skill-langfuse": "Langfuse (Observabilidad)",
    "skills-vector-rag": "Vector DBs y RAG",
    "skill-chromadb": "ChromaDB",
    "skill-pinecone": "Pinecone",
    "skill-rag": "Diseño de Pipelines RAG",
    "skill-semantic": "Búsqueda Semántica",
    "skills-dev-deployment": "Desarrollo y Despliegue",
    "skill-git": "Git y GitHub",
    "skill-rest": "REST APIs",
    "skill-linux": "Linux/Windows",
    "skills-databases": "Bases de Datos",
    "skill-postgresql": "PostgreSQL",
    "skill-sqlalchemy": "SQLAlchemy",
    "skills-ai-specializations": "Especializaciones en IA",
    "skill-multiagent": "Arquitectura Multi-Agente",
    "skill-prompt": "Prompt Engineering",
    "skill-rag-systems": "Sistemas RAG",
    "skill-voice": "IA de Voz (TTS/STT)",
    "skill-agent-design": "Patrones de Diseño de Agentes",
    "skill-railway": "Railway",
    "skill-gunicorn": "Gunicorn",
    "skill-claude-code": "Claude Code",
    "recruitment-tools": "Herramientas de reclutamiento",
    "tech-stack": "Stack tecnológico",
    "languages": "Idiomas",
    
    // Experience section
    "experience-heading": "Experiencia destacada",
    "lucanet-title": "Talent Partner",
    "lucanet-desc": "Reclutador de ciclo completo para equipos de ingresos y finanzas, especializado en roles de ventas de SaaS y Fintech en las regiones DACH, Benelux, España, Francia e Italia.",
    "rapid-title": "Talent y Coordination Partner",
    "rapid-desc": "Creación y ejecución de un nuevo proceso de automatización de coordinación para más de 180 empleados, mientras servía como reclutador de ciclo completo para roles técnicos.",
    "view-all": "Ver toda la experiencia",
    
    // Contact section
    "contact-heading": "Ponte en contacto",
    "contact-text": "No dudes en contactarme para colaboraciones o simplemente para una charla amistosa.",
    "contact-name": "Nombre",
    "contact-name-placeholder": "Tu nombre",
    "contact-email": "Correo electrónico",
    "contact-email-placeholder": "Tu correo electrónico",
    "contact-subject": "Asunto",
    "contact-subject-placeholder": "Asunto",
    "contact-message": "Mensaje",
    "contact-message-placeholder": "Tu mensaje",
    "contact-send": "Enviar mensaje",
    "contact-success": "¡Tu mensaje ha sido enviado con éxito!",
    
    // Footer
    "copyright": "© 2025 Luis Zermeno. Todos los derechos reservados.",
    
    // Portfolio page
    "portfolio-description": "Una colección de mis roles profesionales y logros en adquisición de talento y recursos humanos.",
    "filter-talent": "Adquisición de Talento",
    "filter-hr": "RRHH",
    "filter-education": "Educación",
    
    // Experience page
    "experience-description": "Una visión detallada de mi trayectoria profesional y logros en adquisición de talento y más allá.",
    "download-resume": "Descargar Currículum",
    "professional-skills": "Habilidades Profesionales",
    "soft-skills": "Habilidades Blandas",
    
    // New translations for portfolio page
    "ai-projects-heading": "Proyectos de IA",
    "ai-projects-description": "Una colección de proyectos de desarrollo de IA que muestra mi trabajo con modelos de lenguaje grandes, generación de imágenes y agentes autónomos.",
    "filter-llm": "Proyectos LLM",
    "filter-image-gen": "Generación de Imágenes",
    "filter-ai-agents": "Agentes de IA",

    // Experience overview
    "experience-overview": "M.B.A. con más de 4 años de experiencia en Adquisición de Talento para la región DACH, 2 años también reclutando para EMEA (Francia, Italia, España, Benelux y España, DACH). Experiencia tanto en entornos de startups como en grandes corporaciones. Especializado en reclutamiento tecnológico (Full-stack) y actualmente en reclutamiento de ventas (Account Executives, Sales Engineers, BDRs).",
    
    // LucaNet Experience
    "lucanet-position": "Talent Partner",
    "lucanet-description": "Reclutador de ciclo completo para equipos de ingresos y finanzas en DACH, Benelux, España, Francia e Italia. Reclutando Account Executives, Sales Engineers, Account Managers, especialistas en Cross-sell/Upsell, Sales Operations y BDRs/SDRs para productos complejos de SaaS/Fintech en la nube.",
    "lucanet-achievement1": "110% de KPIs de contratación en los últimos dos trimestres, 85% de tasa de aceptación de ofertas (vs 70% estándar del mercado).",
    "lucanet-achievement2": "Construí el departamento de ventas en España de 3 a 30 empleados en 1.5 años (Team Leads → BDRs → AMs → AEs).",
    "lucanet-achievement3": "Implementé herramientas de IA: asistente Python/LangChain, Claude Desktop, LinkedIn AI Assist, integración de BrightHire con Greenhouse.",

    // Saily Experience
    "saily-position": "Talent and Coordination Partner",
    "saily-description": "Rol dual gestionando adquisición de talento y coordinación de entrevistas para marketplace de APIs durante hipercrecimiento. Afectado por despidos a nivel empresa.",
    "saily-achievement1": "Creé automatización de coordinación de entrevistas para 180+ empleados, 20+ hiring managers, 5+ ejecutivos C-level en Alemania, USA y Tel-Aviv. Automaticé 500+ entrevistas, reduciendo fricción de programación en 90%.",
    "saily-achievement2": "Reclutamiento de ciclo completo para desarrolladores e ingenieros: backend, frontend, DevOps, operaciones de producto, APIs.",

    // Velocopter Experience
    "velocopter-position": "Especialista en Adquisición de Talento",
    "velocopter-description": "Reclutador de ciclo completo para ingeniería, baterías, tecnología y gestión de proyectos con especialidades en construcción de máquinas, sistemas eléctricos, aeroespacial, programación, desarrollo de software, retail automotriz y energía.",
    "velocopter-achievement": "La empresa pasó de aproximadamente 200 a casi 600 empleados durante el año que estuve trabajando allí.",

    // Microsoft Experience
    "microsoft-position": "Generalista de RRHH, Líder de Entrada de Datos",
    "microsoft-description": "Procesamiento de transacciones de datos de RRHH para empleados de EMEA, LATAM y APAC utilizando SAP y PeopleSoft.",
    "microsoft-achievement": "Elevé la calidad de datos al 99% y la entrega al 100% en los primeros 3 meses, mantenido durante toda la permanencia.",
    
    // Honeywell Experience
    "honeywell-position": "Generalista de Recursos Humanos, Líder de Exp. al Cliente",
    "honeywell-description": "Procesamiento de transacciones generales de datos para todos los nuevos empleados de Honeywell en EMEA y LATAM, así como administración de la base de datos de RRHH y coordinación de más de 10 programas de RRHH.",
    "honeywell-achievement": "Manejo de un aumento del 300% en el volumen de transacciones con los recursos existentes a través de mejoras de procesos y soluciones automatizadas.",
    
    // Education
    "purdue-degree": "Especialización en IA Generativa Aplicada",
    "mba-degree": "Maestría en Administración de Empresas",
    "bachelor-degree": "Licenciatura en Administración de Empresas",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Desarrollo Independiente de IA",
    "ai-projects-location": "Remoto",
    "ai-projects-description": "Enfoque de tiempo completo en construir aplicaciones LLM listas para producción y herramientas impulsadas por IA. Mi experiencia en reclutamiento informa directamente mi trabajo de desarrollo de IA\u2014entender las necesidades de los usuarios, identificar puntos débiles en flujos de trabajo y traducir requisitos empresariales en soluciones me da una ventaja única en construir aplicaciones de IA que resuelven problemas reales, no solo demos técnicamente interesantes.",
    "ai-projects-achievement1": "Plataforma de aprendizaje multilingüe con tiempos de respuesta <2s construida usando LangGraph para orquestación de agentes, Flask para aplicación web full-stack, y Claude para razonamiento. Soporta niveles de dominio A1-B2 con corrección gramatical inteligente.",
    "ai-projects-achievement2": "Asistente de voz enfocado en privacidad con 90%+ de precisión de reconocimiento, funcionando completamente offline usando Python, Vosk (reconocimiento de voz), y XTTS-v2 (TTS neuronal). Cero dependencia de la nube, cero costos recurrentes.",
    "ai-projects-achievement3": "Juego en Godot con 50% de assets generados por IA (ComfyUI, flujos de trabajo de difusión estable), completado en game jam de 7 días con 46 calificaciones de jugadores promediando 4.2/5 estrellas.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, Sistemas RAG, IA de Voz (TTS/STT)",
    "career-bridge-text": "Mi experiencia en reclutamiento informa directamente mi trabajo de desarrollo de IA. Cuatro años entendiendo lo que los usuarios necesitan, identificando puntos débiles en flujos de trabajo y traduciendo requisitos empresariales en soluciones me da una ventaja única en construir aplicaciones de IA que resuelven problemas reales\u2014no solo demos técnicamente interesantes.",

    // ========== NEW: Single-page redesign keys ==========

    // Navigation
    "nav-projects": "Proyectos",
    "nav-about": "Sobre m\u00ed",

    // Theme toggle
    "theme-light": "Modo Claro",
    "theme-dark": "Modo Oscuro",

    // Hero
    "hero-label": "Ingeniero de Aplicaciones de IA",
    "hero-headline-prefix": "Construyo productos de IA que ",
    "hero-headline-accent": "resuelven problemas reales",
    "hero-subtitle-new": "Desde plataformas multilingües de aprendizaje de idiomas hasta sistemas inteligentes de agentes \u2014 diseño, construyo y entrego aplicaciones de IA de principio a fin.",
    "hero-cta-projects": "Ver Proyectos",
    "hero-cta-contact": "Contactar",

    // Projects section
    "section-projects-label": "Trabajo Seleccionado",
    "section-projects-title": "Proyectos",
    "section-projects-desc": "Aplicaciones de IA del problema a la producción.",
    "view-case-study": "Ver Caso de Estudio",
    "project-spralingua-outcome": "Plataforma de aprendizaje de idiomas con IA que ofrece lecciones personalizadas, corrección gramatical en tiempo real y práctica de conversación natural en 4 idiomas.",
    "project-voice-agent-title": "Agente de Voz con IA",
    "project-voice-agent-outcome": "Asistente de voz enfocado en privacidad con 90%+ de precisión de reconocimiento, funcionando completamente offline sin dependencia de la nube.",
    "project-recruiting-ai-title": "Asistente de Reclutamiento con IA",
    "project-recruiting-ai-outcome": "Asistente LLM personalizado que automatiza el screening de candidatos, preparación de entrevistas y soporte en decisiones de contratación.",

    // Case study labels
    "cs-label-problem": "El Problema",
    "cs-label-approach": "El Enfoque",
    "cs-label-result": "El Resultado",
    "cs-label-decisions": "Decisiones Clave",
    "cs-try-demo": "Probar Demo en Vivo",
    "cs-view-source": "Ver Código Fuente",
    "cs-full-case-study": "Caso de Estudio Completo",

    // Case study: Spralingua
    "cs-spralingua-problem": "Los estudiantes de idiomas se estancan porque las apps genéricas carecen de retroalimentación personalizada y práctica conversacional real. Las herramientas existentes tratan a todos los estudiantes por igual, ignorando brechas de competencia y patrones de interferencia del idioma nativo.",
    "cs-spralingua-approach": "Construí una plataforma full-stack usando la comprensión lingüística de Claude para generar lecciones adaptativas, proporcionar correcciones gramaticales contextuales y simular conversaciones naturales. Arquitectura multi-agente con agentes especializados para vocabulario, gramática y conversación.",
    "cs-spralingua-result": "Una aplicación en producción sirviendo usuarios en 4 idiomas (español, alemán, portugués, inglés) con voz-a-texto en tiempo real, texto-a-voz y progresión inteligente de lecciones. Ciclo de conversación en menos de 2 segundos. Desplegado en Railway con PostgreSQL.",
    "cs-spralingua-decisions": "Elegí Flask sobre Django para iteración más rápida. Minimax TTS para voz multilingüe natural. Aprendizaje basado en sesiones para seguimiento de progreso sin requerir cuentas. Prioridad en calidad de conversación sobre amplitud de funciones.",

    // Case study: Voice Agent
    "cs-voice-agent-problem": "Los asistentes de voz basados en la nube generan preocupaciones de privacidad y costos recurrentes. Los usuarios que necesitan asistencia de IA con documentos sensibles necesitan una solución offline que nunca envíe datos externamente.",
    "cs-voice-agent-approach": "Construí un asistente de voz completamente offline usando Vosk para reconocimiento de voz y XTTS-v2 para texto-a-voz neuronal. Toda la pipeline funciona localmente sin dependencia de la nube.",
    "cs-voice-agent-result": "Asistente enfocado en privacidad con 90%+ de precisión de reconocimiento sin costos recurrentes. Análisis y resumen de documentos completamente en el dispositivo.",
    "cs-voice-agent-decisions": "Elegí Vosk sobre Whisper por menores requisitos de recursos. XTTS-v2 seleccionado por su salida multilingüe natural. Diseñado para hardware de consumo sin requisitos de GPU.",

    // Case study: Recruiting AI
    "cs-recruiting-ai-problem": "Los reclutadores pasan horas en tareas repetitivas de screening que podrían automatizarse. La evaluación manual de candidatos es inconsistente y propensa a sesgos.",
    "cs-recruiting-ai-approach": "Construyendo un asistente LLM personalizado con pipeline RAG para scoring automatizado de candidatos, preparación de entrevistas y soporte de decisiones de contratación basado en datos.",
    "cs-recruiting-ai-result": "En desarrollo. Objetivo: 70% de reducción en tiempo de screening inicial con criterios de evaluación más consistentes.",
    "cs-recruiting-ai-decisions": "Usando LangChain para pipeline de procesamiento de documentos. Arquitectura RAG para evaluación contextual de candidatos. Diseñado para complementar el juicio del reclutador, no reemplazarlo.",

    // About section
    "about-label": "Sobre m\u00ed",
    "about-name": "Luis Zermeno",
    "about-intro": "Empecé en reclutamiento \u2014 entendiendo personas, roles y qué hace un gran match. Luego descubrí que la IA podía amplificar esa misma intuición a escala. Así que di el salto.",
    "about-detail": "Ahora construyo aplicaciones de IA de principio a fin: desde la definición del problema hasta la arquitectura, desarrollo y despliegue. Me importan los productos que funcionan para usuarios reales, no solo demos impresionantes.",
    "about-meta": "Ubicado en Alemania \u00b7 Fluido en español, alemán, inglés y francés",

    // Contact
    "contact-title": "Contactar",

    // Footer
    "copyright-new": "\u00a9 2026 Luis Zermeno. Todos los derechos reservados.",
  }
};

// Set the default language
let currentLang = 'en';

// Function to update project links based on language
function updateProjectLinks(lang) {
  document.querySelectorAll('.project-link').forEach(link => {
    const project = link.getAttribute('data-project');
    if (project) {
      // For the dynamic system, we always point to the base HTML file.
      // The language switching is handled by the i18n script, not by redirecting to different files.
      const newHref = `projects/${project}.html`;
      link.setAttribute('href', newHref);
    }
  });
}

// Function to update text content based on the selected language
function updateLanguage(lang) {
  currentLang = lang;
  
  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('bg-sky-500', 'text-white', 'font-bold');
    btn.classList.add('text-slate-400');

    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.remove('text-slate-400');
      btn.classList.add('bg-sky-500', 'text-white', 'font-bold');
    }
  });
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Update HTML lang attribute for screen readers
  document.documentElement.setAttribute('lang', lang);
  
  // Update project links to point to the canonical version
  updateProjectLinks(lang);
  
  // Determine if we are on a project page
  const isProjectPage = window.location.pathname.includes('/projects/');
  const translationObject = isProjectPage ? translations[lang]['spralingua-case-study'] : translations[lang];

  if (!translationObject) {
    console.error(`No translations found for language: ${lang}`);
    return;
  }

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const projectPageKey = key.replace(/^spral-/, ''); // Allow project pages to use simplified keys

    let translatedText = '';
    if (isProjectPage && translationObject[projectPageKey]) {
      translatedText = translationObject[projectPageKey];
    } else if (translations[lang][key]) {
      translatedText = translations[lang][key];
    }
    
    if (translatedText) {
      element.innerHTML = translatedText;
    }
  });
  
  // Update placeholder attributes if needed
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Update skip to content link text based on language
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    if (lang === 'de') {
      skipLink.textContent = 'Zum Inhalt springen';
    } else if (lang === 'es') {
      skipLink.textContent = 'Saltar al contenido';
    } else {
      skipLink.textContent = 'Skip to content';
    }
  }
}

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      
      // If we are on a project page that uses the old system, we redirect.
      // This part of the script will be removed once all pages are migrated.
      const currentPath = window.location.pathname;
      if (currentPath.includes('spralingua-de.html') || currentPath.includes('spralingua-es.html')) {
        if (lang === 'en') window.location.href = 'spralingua.html';
        else if (lang === 'de') window.location.href = 'spralingua-de.html';
        else if (lang === 'es') window.location.href = 'spralingua-es.html';
        return;
      }

      updateLanguage(lang);
    });
  });
  
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    updateLanguage(savedLang);
  } else {
    // Default to browser language or English if not supported
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      updateLanguage(browserLang);
    } else {
      updateLanguage('en');
    }
  }
});
