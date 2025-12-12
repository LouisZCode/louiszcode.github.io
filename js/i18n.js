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
    "hero-description": "Specialized in developing practical AI solutions with LangGraph, Flask, and Claude. I design multi-agent systems, full-stack web applications, and voice AI applications that solve real business problems. Background in recruitment gives me unique insight into building tools people actually want to use.",
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
    "lucanet-description": "Full-cycle recruiter for the revenue and financial teams, especially related to Account Executives, Sales Engineers, Account Managers, Consultants and Sales Operations and business development representatives (BDRs) on SaaS and Fintech related products.",
    "lucanet-achievement1": "Sourcing, interviewing and evaluating candidates online for the DACH, Benelux, Spanish and French regions, recently opened the Italian team.",
    "lucanet-achievement2": "Reached 150% of my KPIs in the last two quarters.",
    
    // Saily Experience
    "saily-position": "Talent and Coordination Partner",
    "saily-description": "Sadly, I was part of massive recent layoffs. More in this TechCrunch article: https://tcrn.ch/3He7Jdnb",
    "saily-achievement1": "As coordination lead: Creation and execution of a completely new coordination automation process for the whole team, specifically for 180+ employees. 20+ hiring managers to C-level and leadership. Around 500+ interviews were successfully coordinated automatically.",
    "saily-achievement2": "As a Talent Partner: Full-cycle recruiter for developers, data and engineers, especially related to backend development, frontend development, DevOps, product operations, APIs, AI, Rails, and API/Big Data.",
    
    // Velocopter Experience
    "velocopter-position": "Talent Acquisition Specialist",
    "velocopter-description": "Full-cycle recruiter for engineering, battery, tech, and project management with specialties in machine building, electrics, aerospace, programming, software development, automotive retail and energy.",
    "velocopter-achievement": "The company went from around 200 to almost 600 employees the year I was working there.",
    
    // Microsoft Experience
    "microsoft-position": "Human Resources Generalist, Data Entry Lead",
    "microsoft-description": "Processed general data transactions for the EMEA, LATAM and North Microsoft employees using SAP and PeopleSoft.",
    "microsoft-achievement": "Raised the incidents and SAF clearance of data (Quality) to 99% and the delivery handling time by 30% in the first 3 months and was maintained in the consequent months.",
    
    // Honeywell Experience
    "honeywell-position": "Human Resources Generalist, Customer Exp. Lead",
    
    // Education
    "mba-degree": "Master in Business Administration",
    "bachelor-degree": "Bachelor of Business",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Independent AI Development",
    "ai-projects-location": "Remote",
    "ai-projects-description": "Full-time focus on building production-ready LLM applications and AI-powered tools. My recruitment background directly informs my AI development work\u2014understanding user needs, identifying workflow pain points, and translating business requirements into solutions gives me a unique advantage in building AI applications that solve real problems, not just interesting technical demos.",
    "ai-projects-achievement1": "Multi-language learning platform with <2s response times built using LangGraph for agent orchestration, Flask for full-stack web application, and Claude for reasoning. Supports A1-B2 proficiency levels with intelligent grammar correction.",
    "ai-projects-achievement2": "Privacy-first voice assistant with 90%+ recognition accuracy, running entirely offline using Python, Vosk (speech recognition), and XTTS-v2 (neural TTS). Zero cloud dependency, zero recurring costs.",
    "ai-projects-achievement3": "Godot game with 50% AI-generated assets (ComfyUI, stable diffusion workflows), completed in 7-day game jam with 46 player ratings averaging 4.2/5 stars.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, RAG Systems, Voice AI (TTS/STT)",
    "career-bridge-text": "My recruitment background directly informs my AI development work. Four years of understanding what users need, identifying pain points in workflows, and translating business requirements into solutions gives me a unique advantage in building AI applications that solve real problems\u2014not just interesting technical demos.",
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
    "hero-description": "Spezialisiert auf die Entwicklung praktischer KI-Lösungen mit LangGraph, Flask und Claude. Ich entwerfe Multi-Agenten-Systeme, Full-Stack-Webanwendungen und Sprach-KI-Anwendungen, die echte Geschäftsprobleme lösen. Mein Hintergrund im Recruitment gibt mir einzigartige Einblicke in den Bau von Tools, die Menschen tatsächlich nutzen möchten.",
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
    "lucanet-description": "Full-Cycle-Recruiter für Revenue- und Finanzteams, speziell für Account Executives, Sales Engineers, Account Manager, Consultants sowie Sales Operations und Business Development Representatives (BDRs) im SaaS- und Fintech-Bereich.",
    "lucanet-achievement1": "Sourcing, Interviews und Bewertung von Kandidaten online für die DACH-, Benelux-, spanischen und französischen Regionen, kürzlich auch für das italienische Team.",
    "lucanet-achievement2": "150% meiner KPIs in den letzten zwei Quartalen erreicht.",
    
    // Saily Experience
    "saily-position": "Talent- und Koordinationspartner",
    "saily-description": "Leider war ich von massiven Entlassungen betroffen. Mehr in diesem TechCrunch-Artikel: https://tcrn.ch/3He7Jdnb",
    "saily-achievement1": "Als Koordinationsleiter: Erstellung und Umsetzung eines völlig neuen Koordinationsautomatisierungsprozesses für das gesamte Team, speziell für 180+ Mitarbeiter. 20+ Hiring Manager bis zur C-Ebene und Führungskräfte. Etwa 500+ Interviews wurden erfolgreich automatisch koordiniert.",
    "saily-achievement2": "Als Talent Partner: Full-Cycle-Recruiter für Entwickler, Daten und Ingenieure, besonders im Bereich Backend-Entwicklung, Frontend-Entwicklung, DevOps, Produktoperationen, APIs, KI, Rails und API/Big Data.",
    
    // Velocopter Experience
    "velocopter-position": "Talent Acquisition Specialist",
    "velocopter-description": "Full-Cycle-Recruiter für Engineering, Batterie, Technik und Projektmanagement mit Schwerpunkten im Maschinenbau, Elektrotechnik, Luft- und Raumfahrt, Programmierung, Softwareentwicklung, Automobileinzelhandel und Energie.",
    "velocopter-achievement": "Das Unternehmen wuchs während meiner einjährigen Tätigkeit von etwa 200 auf fast 600 Mitarbeiter.",
    
    // Microsoft Experience
    "microsoft-position": "Human Resources Generalist, Data Entry Lead",
    "microsoft-description": "Bearbeitung allgemeiner Datentransaktionen für die EMEA-, LATAM- und nordamerikanischen Microsoft-Mitarbeiter mit SAP und PeopleSoft.",
    "microsoft-achievement": "Steigerung der Datenqualität (Incidents und SAF-Bereinigung) auf 99% und Reduzierung der Bearbeitungszeit um 30% in den ersten 3 Monaten, was in den folgenden Monaten beibehalten wurde.",
    
    // Honeywell Experience
    "honeywell-position": "Human Resources Generalist, Leiter Kundenerfahrung",
    "honeywell-description": "Verarbeitung von allgemeinen Datentransaktionen für alle neuen EMEA- und LATAM-Honeywell-Mitarbeiter sowie Verwaltung der HR-Datenbank und Koordination von über 10 HR-Programmen.",
    "honeywell-achievement": "Bewältigung eines 300%-Anstiegs des Transaktionsvolumens mit bestehenden Ressourcen durch Prozessverbesserungen und automatisierte Lösungen.",
    
    // Education
    "mba-degree": "Master in Betriebswirtschaftslehre",
    "bachelor-degree": "Bachelor in Betriebswirtschaft",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Unabhängige KI-Entwicklung",
    "ai-projects-location": "Remote",
    "ai-projects-description": "Vollzeit-Fokus auf den Aufbau produktionsreifer LLM-Anwendungen und KI-gestützter Tools. Mein Recruitment-Hintergrund beeinflusst direkt meine KI-Entwicklungsarbeit\u2014das Verstehen von Benutzerbedürfnissen, die Identifizierung von Schwachstellen in Workflows und die Übersetzung von Geschäftsanforderungen in Lösungen gibt mir einen einzigartigen Vorteil beim Bau von KI-Anwendungen, die echte Probleme lösen, nicht nur technisch interessante Demos.",
    "ai-projects-achievement1": "Mehrsprachige Lernplattform mit <2s Antwortzeiten, entwickelt mit LangGraph für Agenten-Orchestrierung, Flask für Full-Stack-Webanwendung und Claude für Reasoning. Unterstützt A1-B2-Kompetenzstufen mit intelligenter Grammatikkorrektur.",
    "ai-projects-achievement2": "Datenschutzorientierter Sprachassistent mit 90%+ Erkennungsgenauigkeit, vollständig offline mit Python, Vosk (Spracherkennung) und XTTS-v2 (neurales TTS). Null Cloud-Abhängigkeit, null laufende Kosten.",
    "ai-projects-achievement3": "Godot-Spiel mit 50% KI-generierten Assets (ComfyUI, Stable Diffusion Workflows), fertiggestellt in 7-Tage-Game-Jam mit 46 Spielerbewertungen im Durchschnitt 4,2/5 Sternen.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, RAG-Systeme, Sprach-KI (TTS/STT)",
    "career-bridge-text": "Mein Recruitment-Hintergrund beeinflusst direkt meine KI-Entwicklungsarbeit. Vier Jahre des Verstehens, was Benutzer brauchen, der Identifizierung von Schwachstellen in Workflows und der Übersetzung von Geschäftsanforderungen in Lösungen gibt mir einen einzigartigen Vorteil beim Bau von KI-Anwendungen, die echte Probleme lösen\u2014nicht nur technisch interessante Demos.",
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
    "hero-description": "Especializado en desarrollar soluciones prácticas de IA con LangGraph, Flask y Claude. Diseño sistemas multi-agente, aplicaciones web full-stack y aplicaciones de voz IA que resuelven problemas empresariales reales. Mi experiencia en reclutamiento me da una perspectiva única para construir herramientas que la gente realmente quiere usar.",
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
    "lucanet-description": "Reclutador de ciclo completo para equipos de ingresos y finanzas, especialmente relacionado con Account Executives, Sales Engineers, Account Managers, Consultants y Sales Operations y representantes de desarrollo de negocios (BDRs) en productos SaaS y Fintech.",
    "lucanet-achievement1": "Sourcing, entrevistas y evaluación de candidatos en línea para las regiones DACH, Benelux, española y francesa, recientemente abrí el equipo italiano.",
    "lucanet-achievement2": "Alcancé el 150% de mis KPIs en los últimos dos trimestres.",
    
    // Saily Experience
    "saily-position": "Talent and Coordination Partner",
    "saily-description": "Lamentablemente, fui parte de despidos masivos recientes. Más información en este artículo de TechCrunch: https://tcrn.ch/3He7Jdnb",
    "saily-achievement1": "Como líder de coordinación: Creación y ejecución de un proceso de automatización de coordinación completamente nuevo para todo el equipo, específicamente para más de 180 empleados. Más de 20 gerentes de contratación hasta nivel C y liderazgo. Alrededor de 500+ entrevistas fueron coordinadas automáticamente con éxito.",
    "saily-achievement2": "Como Talent Partner: Reclutador de ciclo completo para desarrolladores, datos e ingenieros, especialmente relacionados con desarrollo backend, desarrollo frontend, DevOps, operaciones de producto, APIs, IA, Rails y API/Big Data.",
    
    // Velocopter Experience
    "velocopter-position": "Especialista en Adquisición de Talento",
    "velocopter-description": "Reclutador de ciclo completo para ingeniería, baterías, tecnología y gestión de proyectos con especialidades en construcción de máquinas, sistemas eléctricos, aeroespacial, programación, desarrollo de software, retail automotriz y energía.",
    "velocopter-achievement": "La empresa pasó de aproximadamente 200 a casi 600 empleados durante el año que estuve trabajando allí.",
    
    // Microsoft Experience
    "microsoft-position": "Generalista de Recursos Humanos, Líder de Entrada de Datos",
    "microsoft-description": "Procesamiento de transacciones generales de datos para los empleados de Microsoft en EMEA, LATAM y Norte utilizando SAP y PeopleSoft.",
    "microsoft-achievement": "Aumenté la calidad de datos de incidentes y SAF al 99% y reduje el tiempo de gestión en un 30% en los primeros 3 meses, manteniéndose en los meses consecuentes.",
    
    // Honeywell Experience
    "honeywell-position": "Generalista de Recursos Humanos, Líder de Exp. al Cliente",
    "honeywell-description": "Procesamiento de transacciones generales de datos para todos los nuevos empleados de Honeywell en EMEA y LATAM, así como administración de la base de datos de RRHH y coordinación de más de 10 programas de RRHH.",
    "honeywell-achievement": "Manejo de un aumento del 300% en el volumen de transacciones con los recursos existentes a través de mejoras de procesos y soluciones automatizadas.",
    
    // Education
    "mba-degree": "Maestría en Administración de Empresas",
    "bachelor-degree": "Licenciatura en Negocios",

    // AI Engineering Projects (Experience page)
    "ai-projects-position": "Desarrollo Independiente de IA",
    "ai-projects-location": "Remoto",
    "ai-projects-description": "Enfoque de tiempo completo en construir aplicaciones LLM listas para producción y herramientas impulsadas por IA. Mi experiencia en reclutamiento informa directamente mi trabajo de desarrollo de IA\u2014entender las necesidades de los usuarios, identificar puntos débiles en flujos de trabajo y traducir requisitos empresariales en soluciones me da una ventaja única en construir aplicaciones de IA que resuelven problemas reales, no solo demos técnicamente interesantes.",
    "ai-projects-achievement1": "Plataforma de aprendizaje multilingüe con tiempos de respuesta <2s construida usando LangGraph para orquestación de agentes, Flask para aplicación web full-stack, y Claude para razonamiento. Soporta niveles de dominio A1-B2 con corrección gramatical inteligente.",
    "ai-projects-achievement2": "Asistente de voz enfocado en privacidad con 90%+ de precisión de reconocimiento, funcionando completamente offline usando Python, Vosk (reconocimiento de voz), y XTTS-v2 (TTS neuronal). Cero dependencia de la nube, cero costos recurrentes.",
    "ai-projects-achievement3": "Juego en Godot con 50% de assets generados por IA (ComfyUI, flujos de trabajo de difusión estable), completado en game jam de 7 días con 46 calificaciones de jugadores promediando 4.2/5 estrellas.",
    "ai-projects-tech": "Python, LangGraph, LangChain, Flask, Docker, Claude API, Ollama, ChromaDB, Sistemas RAG, IA de Voz (TTS/STT)",
    "career-bridge-text": "Mi experiencia en reclutamiento informa directamente mi trabajo de desarrollo de IA. Cuatro años entendiendo lo que los usuarios necesitan, identificando puntos débiles en flujos de trabajo y traduciendo requisitos empresariales en soluciones me da una ventaja única en construir aplicaciones de IA que resuelven problemas reales\u2014no solo demos técnicamente interesantes.",
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
