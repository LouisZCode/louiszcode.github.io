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
    "copyright": "© 2026 Luis Zermeno. All Rights Reserved.",
    
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
    "experience-overview": "M.B.A. with 5 years of experience in Talent Acquisition for the DACH region and EMEA (France, Italy, Spain, Benelux). Worked in both startup environments and big corp, tackling Tech recruitment (Full-stack) and Sales recruitment (Account Executives, Sales Engineers, BDRs). Now building production AI applications full-time.",
    
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
    "ai-projects-achievement1": "Multi-language AI teacher with <2s response times built using Claude for reasoning. Supports A1-C2 proficiency levels with intelligent grammar correction.",
    "ai-projects-achievement2": "Async backend orchestrating OpenAI, Deepgram, and Cerebras to extract, summarize, and stream-translate YouTube transcripts via SSE.",
    "ai-projects-achievement3": "Multi-LLM stock evaluator using the Pythagoras Method: 9 models analyze SEC filings in parallel, harmonize ratings, and debate disagreements to consensus.",
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

    // New project cards
    "project-agora-title": "AgoraFinancials",
    "project-agora-outcome": "Multi-LLM stock evaluation engine that orchestrates 9 AI models to analyze SEC filings, debate disagreements, and produce bias-reduced financial ratings.",
    "project-recruitment-ats-title": "AI Powered Recruitment ATS",
    "project-recruitment-ats-outcome": "AI-powered applicant tracking system for automated CV screening and candidate matching.",
    "project-lifecoach-title": "Life Coach AI Assistant",
    "project-lifecoach-outcome": "AI-powered administration assistant for life coaching practices.",
    "project-tubetext-title": "TubeText",
    "project-tubetext-outcome": "AI-powered YouTube transcript extraction with LLM summaries, real-time streaming translation, and audio transcription \u2014 deployed as a production SaaS.",

    // Case study: TubeText
    "cs-tubetext-problem": "YouTube holds massive knowledge but extracting insights from long videos is inefficient. No tool combined transcript extraction, AI summarization, and multilingual translation in one pipeline.",
    "cs-tubetext-approach": "Async FastAPI backend orchestrating multiple AI services: Deepgram Nova-3 for audio-to-text, LangChain + OpenAI GPT-4 mini for structured summaries, Cerebras Llama-3.3-70b for real-time streaming translation via SSE. PostgreSQL with async SQLAlchemy and Alembic migrations. Dockerized and deployed on Railway.",
    "cs-tubetext-result": "Production app at tubetext.app. Transcripts in seconds, AI-generated summaries, streamed translations (Spanish, French, German, Portuguese), and PDF export. Google OAuth + Stripe integration for billing.",
    "cs-tubetext-decisions": "FastAPI for async-first performance. LangChain agents with YAML-driven prompts for maintainable AI pipelines. SSE streaming for real-time translation feedback. Deepgram over Whisper for production reliability. Docker + Railway for reproducible deployment.",

    // TubeText detail page
    "cs-back-to-projects": "Back to Projects",
    "cs-back-home": "\u2190 Back to Portfolio Home",
    "tt-description": "An async backend that orchestrates multiple AI services to extract, summarize, and translate YouTube video content \u2014 turning hours of video into actionable text in seconds.",
    "tt-spec-framework": "Framework",
    "tt-spec-ai": "AI Services",
    "tt-spec-database": "Database",
    "tt-spec-deployment": "Deployment",
    "tt-challenge": "The Challenge",
    "tt-challenge-p1": "YouTube is one of the richest knowledge sources on the internet \u2014 tutorials, lectures, interviews, deep dives on any topic. But most videos are long, full of filler, and hard to skim. Getting to the content that matters means watching everything.",
    "tt-challenge-p2": "The technical challenge was building an <strong>async pipeline</strong> that orchestrates multiple AI services (transcription, summarization, translation) without blocking \u2014 while keeping response times fast enough for a real-time user experience.",
    "tt-pipeline": "AI Pipeline Architecture",
    "tt-pipeline-desc": "The backend orchestrates three distinct AI pipelines, each optimized for its specific task:",
    "tt-summary-agent": "LangChain Summary Agent",
    "tt-summary-agent-desc": "Summaries are generated through a LangChain agent with YAML-driven prompts. This keeps prompt engineering separate from application logic, making it easy to iterate on prompt quality without touching code.",
    "tt-streaming": "Real-Time Streaming Translation",
    "tt-streaming-desc": "Translation uses Server-Sent Events (SSE) to stream results segment by segment. Cerebras Llama-3.3-70b was chosen for its fast inference speed, giving users real-time feedback instead of waiting for the entire transcript to translate.",
    "tt-async-db": "Async Database Layer",
    "tt-async-db-desc": "The entire data layer is async \u2014 PostgreSQL via asyncpg with SQLAlchemy 2.0 async sessions. Alembic handles schema migrations. Usage tracking resets automatically on calendar month boundaries without any background jobs.",
    "tt-features": "Key Features",
    "tt-feature1": "Caption-based transcript extraction",
    "tt-feature2": "Audio transcription via Deepgram Nova-3",
    "tt-feature3": "AI summaries with LangChain + GPT-4 mini",
    "tt-feature4": "Real-time streaming translation (SSE)",
    "tt-feature5": "PDF export with branding",
    "tt-feature6": "Google OAuth + Stripe billing",
    "tt-lessons": "Lessons Learned",
    "tt-lesson1-title": "Async SQLAlchemy Gotchas",
    "tt-lesson1-desc": "SQLAlchemy expires attributes after commit() \u2014 accessing them triggers a sync lazy-load that crashes async sessions (MissingGreenlet). Fixed with explicit db.refresh() after every commit.",
    "tt-lesson2-title": "SSE Error Handling",
    "tt-lesson2-desc": "Once an SSE stream sends HTTP 200, you can\u2019t return error status codes mid-stream. Had to implement SSE error events so the frontend can detect and handle failures gracefully.",
    "tt-lesson3-title": "OAuth Behind Reverse Proxies",
    "tt-lesson3-desc": "Railway\u2019s proxy strips HTTPS, so FastAPI generated http:// redirect URIs \u2014 causing redirect_uri_mismatch with Google OAuth. Fixed with ProxyHeadersMiddleware to read X-Forwarded-Proto.",
    "tt-lesson4-title": "Build-Time vs Runtime Env Vars",
    "tt-lesson4-desc": "NEXT_PUBLIC_ vars are baked at build time, but Railway injects env vars at runtime only. Docker builds get undefined values unless you hardcode with ENV before the build step.",
    "tt-tradeoffs": "System Design Tradeoffs",
    "tt-tradeoffs-intro": "Every architectural choice has a cost. Here are the key tradeoffs I made and why.",

    // AgoraFinancials detail page
    "af-subtitle": "Multi-LLM Stock Evaluator",
    "af-description": "A stock evaluation engine that orchestrates up to 9 LLMs to independently analyze SEC filings, then forces them to debate their disagreements, producing bias-reduced financial ratings through cross-model consensus.",
    "af-spec-stack": "Stack",
    "af-spec-ai": "AI Models",
    "af-spec-database": "Database",
    "af-spec-deployment": "Deployment",
    "af-challenge": "The Challenge",
    "af-challenge-p1": "Stock analysis is drowning in information. SEC filings are dense, financial statements span dozens of pages, and understanding a company's real health takes hours of reading. LLMs are excellent at condensing this data into narratives, but a single LLM can hallucinate numbers, cherry-pick data points, and bias its own conclusions.",
    "af-challenge-p2": "The core question: <strong>how do you get reliable AI-powered financial analysis when you can't trust any single model?</strong> The answer was to make them check each other. Orchestrate multiple LLMs in parallel, compare their independent evaluations, and resolve disagreements through structured multi-round debate.",
    "af-pythagoras": "The Pythagoras Method",
    "af-pythagoras-desc": "The core innovation. Instead of trusting one LLM, multiple models independently evaluate 8 financial metrics. Their ratings are then harmonized: if models agree, the rating stands. If they conflict, they enter a structured multi-round debate until consensus is reached or the metric is flagged as complex.",
    "af-two-tier": "Two-Tier Model Architecture",
    "af-two-tier-desc": "Models are split into fast and deep tiers. Fast models crunch the numbers from injected financial tables. Deep models use a retrieval tool to pull qualitative context from SEC filings (segment breakdowns, margin drivers, management commentary), producing debate-ready reasoning. The biggest discovery: the quality jump is fast to deep, not deep to premium. Cheap models ignore retrieval instructions regardless of prompt engineering.",
    "af-rag": "SEC Filing RAG Pipeline",
    "af-rag-desc": "SEC 10-Q filings are ingested, cleaned of boilerplate, chunked respecting markdown headers, and embedded into PostgreSQL with pgvector. Deep-tier models use a LangChain retrieval tool to search these chunks by cosine similarity, pulling qualitative context that raw financial tables can't provide.",
    "af-debate": "Multi-Round Debate Engine",
    "af-debate-desc": "When models disagree on a metric, they enter a structured debate. Each LLM defends its position, reviews others' arguments, and can change its rating. Position changes are tracked throughout. A sliding-window compression keeps token costs flat; without it, costs grow exponentially per round.",
    "af-tradeoffs": "System Design Tradeoffs",
    "af-tradeoffs-intro": "Every architectural choice has a cost. Here are the key tradeoffs I made and why.",
    "af-features": "Key Features",
    "af-feature1": "9 LLMs across 5 providers in parallel",
    "af-feature2": "SEC filing RAG with pgvector embeddings",
    "af-feature3": "Pythagoras Method: harmonize + debate",
    "af-feature4": "PDF financial reports with score gauge",
    "af-feature5": "Stripe subscriptions + token economy",
    "af-feature6": "Watchlist with drag-drop + live scores",
    "af-lessons": "Lessons Learned",
    "af-lesson1-title": "Gemini Flash: 308 API Calls",
    "af-lesson1-desc": "gemini-2.5-flash made 308 API calls in a single evaluation, 78% ending in tool calls, peaking at 794K input tokens. Cost: $3.25 vs $0.08 for Mistral. Had to remove the model entirely.",
    "af-lesson2-title": "Debate Token Explosion",
    "af-lesson2-desc": "Without compression, debate history grew exponentially. R5 token costs were 5x higher than R2. Built sliding-window summarization using mistral-fast to flatten costs, saving 30% at 5 rounds.",
    "af-lesson3-title": "Cheap Models Skip the Tool",
    "af-lesson3-desc": "The biggest quality jump is fast to deep, not deep to premium. Cheap models output \"Revenue grew 16% YoY\" while deep models output \"Revenue grew 16% YoY, driven by iPhone +13%, Services +13%, Japan +17%.\" No prompt engineering fixes it.",
    "af-lesson4-title": "Claude Haiku: Star Performer",
    "af-lesson4-desc": "Across all 9 models, Claude Haiku consistently made 5-7 retrieval calls and produced the richest reasoning: segment breakdowns, margin drivers, regional data. The only model that truly followed the analysis prompt at every price tier.",

    // Case study: AgoraFinancials (homepage)
    "cs-agora-problem": "Stock analysis is drowning in information. LLMs can condense SEC filings into narratives, but a single model can hallucinate numbers, cherry-pick data, and bias its conclusions. No existing tool cross-validates AI-generated financial analysis.",
    "cs-agora-approach": "Built the Pythagoras Method: multiple LLMs independently evaluate 8 financial metrics, their ratings are harmonized, and conflicts trigger structured multi-round debates until consensus. Two-tier model architecture (fast for numbers, deep for RAG-powered qualitative reasoning) with OpenRouter as unified gateway.",
    "cs-agora-result": "Production platform at agorafinancials.com. 9 LLMs across 5 providers running in parallel, SEC filing RAG with pgvector, PDF report generation with scoring, Stripe billing with token economy, and watchlist with live scores.",
    "cs-agora-decisions": "OpenRouter for unified multi-provider billing. LangChain create_agent with retrieval tools for deep-tier models. pgvector over Pinecone for simpler single-database infra. Sliding-window debate compression to keep token costs flat across rounds.",

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
    "about-intro": "I started in recruitment - four years sourcing engineers and closing roles across DACH and EMEA for companies like LucaNet and Volocopter. That taught me how software teams work, what problems they actually face, and what \"production-ready\" means beyond the buzzword. Then I made the leap.",
    "about-detail": "Now I build AI applications end to end. I've shipped three production products with real users and real payments - a multi-LLM financial analysis platform, a YouTube AI transcription SaaS, and a voice-powered language learning app. My stack runs from LangChain agents and RAG pipelines to Stripe billing and Docker deployment.",
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
    "copyright": "© 2026 Luis Zermeno. Alle Rechte vorbehalten.",
    
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
    "experience-overview": "M.B.A. mit 5 Jahren Erfahrung im Talent Acquisition f\u00fcr die DACH-Region und EMEA (Frankreich, Italien, Spanien, Benelux). Erfahrung sowohl in Startup-Umgebungen als auch in gro\u00dfen Unternehmen, mit Schwerpunkt auf Tech-Rekrutierung (Full-Stack) und Vertriebsrekrutierung (Account Executives, Sales Engineers, BDRs). Jetzt Vollzeit in der Entwicklung von KI-Produktionsanwendungen.",
    
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
    "ai-projects-achievement1": "Mehrsprachiger KI-Lehrer mit <2s Antwortzeiten, entwickelt mit Claude f\u00fcr Reasoning. Unterst\u00fctzt A1-C2-Kompetenzstufen mit intelligenter Grammatikkorrektur.",
    "ai-projects-achievement2": "Asynchrones Backend, das OpenAI, Deepgram und Cerebras orchestriert, um YouTube-Transkripte zu extrahieren, zusammenzufassen und per SSE in Echtzeit zu \u00fcbersetzen.",
    "ai-projects-achievement3": "Multi-LLM-Aktienbewertung mit der Pythagoras-Methode: 9 Modelle analysieren SEC-Berichte parallel, harmonisieren Bewertungen und debattieren Meinungsverschiedenheiten bis zum Konsens.",
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

    // New project cards
    "project-agora-title": "AgoraFinancials",
    "project-agora-outcome": "Multi-LLM-Aktienbewertungsmaschine, die 9 KI-Modelle orchestriert, um SEC-Berichte zu analysieren, Meinungsverschiedenheiten zu debattieren und verzerrungsreduzierte Finanzbewertungen zu erstellen.",
    "project-recruitment-ats-title": "KI-gest\u00fctztes Recruitment ATS",
    "project-recruitment-ats-outcome": "KI-gest\u00fctztes Bewerbermanagementsystem f\u00fcr automatisiertes CV-Screening und Kandidatenabgleich.",
    "project-lifecoach-title": "Life Coach KI-Assistent",
    "project-lifecoach-outcome": "KI-gest\u00fctzter Verwaltungsassistent f\u00fcr Life-Coaching-Praxen.",
    "project-tubetext-title": "TubeText",
    "project-tubetext-outcome": "KI-gest\u00fctzte YouTube-Transkriptextraktion mit LLM-Zusammenfassungen, Echtzeit-Streaming-\u00dcbersetzung und Audio-Transkription \u2014 als Produktions-SaaS bereitgestellt.",

    // Case study: TubeText
    "cs-tubetext-problem": "YouTube enth\u00e4lt enormes Wissen, aber Erkenntnisse aus langen Videos zu extrahieren ist ineffizient. Kein Tool kombinierte Transkriptextraktion, KI-Zusammenfassung und mehrsprachige \u00dcbersetzung in einer Pipeline.",
    "cs-tubetext-approach": "Asynchrones FastAPI-Backend, das mehrere KI-Dienste orchestriert: Deepgram Nova-3 f\u00fcr Audio-zu-Text, LangChain + OpenAI GPT-4 mini f\u00fcr strukturierte Zusammenfassungen, Cerebras Llama-3.3-70b f\u00fcr Echtzeit-Streaming-\u00dcbersetzung via SSE. PostgreSQL mit async SQLAlchemy und Alembic-Migrationen. Dockerisiert und auf Railway bereitgestellt.",
    "cs-tubetext-result": "Produktions-App auf tubetext.app. Transkripte in Sekunden, KI-generierte Zusammenfassungen, gestreamte \u00dcbersetzungen (Spanisch, Franz\u00f6sisch, Deutsch, Portugiesisch) und PDF-Export. Google OAuth + Stripe-Integration f\u00fcr Abrechnung.",
    "cs-tubetext-decisions": "FastAPI f\u00fcr Async-First-Performance. LangChain-Agenten mit YAML-gesteuerten Prompts f\u00fcr wartbare KI-Pipelines. SSE-Streaming f\u00fcr Echtzeit-\u00dcbersetzungsfeedback. Deepgram statt Whisper f\u00fcr Produktionszuverl\u00e4ssigkeit. Docker + Railway f\u00fcr reproduzierbare Bereitstellung.",

    // TubeText detail page
    "cs-back-to-projects": "Zur\u00fcck zu Projekten",
    "cs-back-home": "\u2190 Zur\u00fcck zur Portfolio-Startseite",
    "tt-description": "Ein asynchrones Backend, das mehrere KI-Dienste orchestriert, um YouTube-Videoinhalte zu extrahieren, zusammenzufassen und zu \u00fcbersetzen \u2014 stundenlange Videos werden in Sekunden zu umsetzbarem Text.",
    "tt-spec-framework": "Framework",
    "tt-spec-ai": "KI-Dienste",
    "tt-spec-database": "Datenbank",
    "tt-spec-deployment": "Deployment",
    "tt-challenge": "Die Herausforderung",
    "tt-challenge-p1": "YouTube ist eine der reichsten Wissensquellen im Internet \u2014 Tutorials, Vorlesungen, Interviews, Vertiefungen zu jedem Thema. Aber die meisten Videos sind lang, voller F\u00fcllmaterial und schwer zu \u00fcberfliegen. An die relevanten Inhalte zu kommen bedeutet, alles anzusehen.",
    "tt-challenge-p2": "Die technische Herausforderung bestand darin, eine <strong>asynchrone Pipeline</strong> aufzubauen, die mehrere KI-Dienste (Transkription, Zusammenfassung, \u00dcbersetzung) orchestriert, ohne zu blockieren \u2014 bei ausreichend schnellen Antwortzeiten f\u00fcr eine Echtzeit-Benutzererfahrung.",
    "tt-pipeline": "KI-Pipeline-Architektur",
    "tt-pipeline-desc": "Das Backend orchestriert drei verschiedene KI-Pipelines, jede f\u00fcr ihre spezifische Aufgabe optimiert:",
    "tt-summary-agent": "LangChain Summary Agent",
    "tt-summary-agent-desc": "Zusammenfassungen werden \u00fcber einen LangChain-Agenten mit YAML-gesteuerten Prompts generiert. Dies trennt Prompt-Engineering von der Anwendungslogik und erm\u00f6glicht schnelle Prompt-Iteration ohne Code-\u00c4nderungen.",
    "tt-streaming": "Echtzeit-Streaming-\u00dcbersetzung",
    "tt-streaming-desc": "\u00dcbersetzung nutzt Server-Sent Events (SSE), um Ergebnisse Segment f\u00fcr Segment zu streamen. Cerebras Llama-3.3-70b wurde wegen seiner schnellen Inferenzgeschwindigkeit gew\u00e4hlt und gibt Benutzern Echtzeit-Feedback statt auf das gesamte Transkript zu warten.",
    "tt-async-db": "Asynchrone Datenbankschicht",
    "tt-async-db-desc": "Die gesamte Datenschicht ist asynchron \u2014 PostgreSQL via asyncpg mit SQLAlchemy 2.0 Async-Sessions. Alembic verwaltet Schema-Migrationen. Nutzungsverfolgung setzt sich automatisch an Monatsgrenzen zur\u00fcck, ohne Hintergrundjobs.",
    "tt-features": "Hauptfunktionen",
    "tt-feature1": "Untertitel-basierte Transkriptextraktion",
    "tt-feature2": "Audio-Transkription via Deepgram Nova-3",
    "tt-feature3": "KI-Zusammenfassungen mit LangChain + GPT-4 mini",
    "tt-feature4": "Echtzeit-Streaming-\u00dcbersetzung (SSE)",
    "tt-feature5": "PDF-Export mit Branding",
    "tt-feature6": "Google OAuth + Stripe-Abrechnung",
    "tt-lessons": "Gelernte Lektionen",
    "tt-lesson1-title": "Async SQLAlchemy Fallstricke",
    "tt-lesson1-desc": "SQLAlchemy l\u00e4sst Attribute nach commit() ablaufen \u2014 der Zugriff l\u00f6st ein synchrones Lazy-Load aus, das async Sessions zum Absturz bringt (MissingGreenlet). Gel\u00f6st mit explizitem db.refresh() nach jedem Commit.",
    "tt-lesson2-title": "SSE-Fehlerbehandlung",
    "tt-lesson2-desc": "Sobald ein SSE-Stream HTTP 200 sendet, kann man keine Fehler-Statuscodes mehr zur\u00fcckgeben. SSE-Fehler-Events implementiert, damit das Frontend Fehler erkennen und behandeln kann.",
    "tt-lesson3-title": "OAuth hinter Reverse Proxies",
    "tt-lesson3-desc": "Railways Proxy entfernt HTTPS, wodurch FastAPI http://-Redirect-URIs generierte \u2014 redirect_uri_mismatch bei Google OAuth. Gel\u00f6st mit ProxyHeadersMiddleware f\u00fcr X-Forwarded-Proto.",
    "tt-lesson4-title": "Build-Time vs Runtime Env Vars",
    "tt-lesson4-desc": "NEXT_PUBLIC_-Variablen werden beim Build eingebacken, aber Railway injiziert Env Vars nur zur Laufzeit. Docker-Builds erhalten undefined, wenn man nicht mit ENV vor dem Build-Schritt hardcoded.",
    "tt-tradeoffs": "Systemdesign-Abw\u00e4gungen",
    "tt-tradeoffs-intro": "Jede Architekturentscheidung hat ihren Preis. Hier sind die wichtigsten Abw\u00e4gungen und warum ich sie getroffen habe.",

    // AgoraFinancials detail page
    "af-subtitle": "Multi-LLM-Aktienbewertung",
    "af-description": "Eine Aktienbewertungsmaschine, die bis zu 9 LLMs orchestriert, um SEC-Berichte unabh\u00e4ngig zu analysieren und dann ihre Meinungsverschiedenheiten in strukturierten Debatten zu kl\u00e4ren, um verzerrungsreduzierte Finanzbewertungen durch modell\u00fcbergreifenden Konsens zu erstellen.",
    "af-spec-stack": "Stack",
    "af-spec-ai": "KI-Modelle",
    "af-spec-database": "Datenbank",
    "af-spec-deployment": "Deployment",
    "af-challenge": "Die Herausforderung",
    "af-challenge-p1": "Aktienanalyse ertrinkt in Informationen. SEC-Berichte sind dicht, Finanzberichte umfassen Dutzende von Seiten, und die tats\u00e4chliche Gesundheit eines Unternehmens zu verstehen dauert Stunden. LLMs sind hervorragend darin, diese Daten zu Narrativen zu verdichten, aber ein einzelnes LLM kann Zahlen halluzinieren, Datenpunkte selektiv ausw\u00e4hlen und eigene Schlussfolgerungen verzerren.",
    "af-challenge-p2": "Die Kernfrage: <strong>Wie erh\u00e4lt man zuverl\u00e4ssige KI-gest\u00fctzte Finanzanalysen, wenn man keinem einzelnen Modell vertrauen kann?</strong> Die Antwort war, sie gegenseitig \u00fcberpr\u00fcfen zu lassen. Mehrere LLMs parallel orchestrieren, ihre unabh\u00e4ngigen Bewertungen vergleichen und Meinungsverschiedenheiten durch strukturierte Mehrrunden-Debatten l\u00f6sen.",
    "af-pythagoras": "Die Pythagoras-Methode",
    "af-pythagoras-desc": "Die Kerninnovation. Anstatt einem LLM zu vertrauen, bewerten mehrere Modelle unabh\u00e4ngig 8 Finanzkennzahlen. Ihre Bewertungen werden dann harmonisiert: Stimmen die Modelle \u00fcberein, bleibt die Bewertung. Bei Konflikten treten sie in eine strukturierte Mehrrunden-Debatte ein, bis Konsens erreicht wird oder die Kennzahl als komplex markiert wird.",
    "af-two-tier": "Zweistufige Modellarchitektur",
    "af-two-tier-desc": "Modelle sind in schnelle und tiefe Stufen aufgeteilt. Schnelle Modelle verarbeiten die Zahlen aus eingespeisten Finanztabellen. Tiefe Modelle nutzen ein Retrieval-Tool, um qualitativen Kontext aus SEC-Berichten zu ziehen (Segmentaufschl\u00fcsselungen, Margentreiber, Management-Kommentare) und debattenf\u00e4hige Begr\u00fcndungen zu liefern. Die gr\u00f6\u00dfte Entdeckung: Der Qualit\u00e4tssprung liegt zwischen schnell und tief, nicht zwischen tief und premium. G\u00fcnstige Modelle ignorieren Retrieval-Anweisungen unabh\u00e4ngig vom Prompt-Engineering.",
    "af-rag": "SEC-Filing RAG-Pipeline",
    "af-rag-desc": "SEC 10-Q-Berichte werden eingelesen, von Standardtexten bereinigt, unter Ber\u00fccksichtigung von Markdown-\u00dcberschriften in Chunks aufgeteilt und mit pgvector in PostgreSQL eingebettet. Tiefstufige Modelle nutzen ein LangChain-Retrieval-Tool, um diese Chunks per Kosinus\u00e4hnlichkeit zu durchsuchen und qualitativen Kontext zu extrahieren, den reine Finanztabellen nicht bieten k\u00f6nnen.",
    "af-debate": "Mehrrunden-Debattenmaschine",
    "af-debate-desc": "Wenn Modelle bei einer Kennzahl uneins sind, treten sie in eine strukturierte Debatte ein. Jedes LLM verteidigt seine Position, pr\u00fcft die Argumente anderer und kann seine Bewertung \u00e4ndern. Positionswechsel werden durchgehend verfolgt. Eine Sliding-Window-Kompression h\u00e4lt die Token-Kosten flach; ohne sie w\u00fcrden die Kosten pro Runde exponentiell wachsen.",
    "af-tradeoffs": "Systemdesign-Abw\u00e4gungen",
    "af-tradeoffs-intro": "Jede Architekturentscheidung hat ihren Preis. Hier sind die wichtigsten Abw\u00e4gungen und warum ich sie getroffen habe.",
    "af-features": "Hauptfunktionen",
    "af-feature1": "9 LLMs von 5 Anbietern parallel",
    "af-feature2": "SEC-Filing RAG mit pgvector-Embeddings",
    "af-feature3": "Pythagoras-Methode: Harmonisierung + Debatte",
    "af-feature4": "PDF-Finanzberichte mit Score-Anzeige",
    "af-feature5": "Stripe-Abonnements + Token-\u00d6konomie",
    "af-feature6": "Watchlist mit Drag-and-Drop + Live-Scores",
    "af-lessons": "Gelernte Lektionen",
    "af-lesson1-title": "Gemini Flash: 308 API-Aufrufe",
    "af-lesson1-desc": "gemini-2.5-flash machte 308 API-Aufrufe in einer einzigen Bewertung, 78% endeten in Tool-Aufrufen, mit Spitzenwerten von 794K Input-Tokens. Kosten: $3,25 vs $0,08 f\u00fcr Mistral. Das Modell musste komplett entfernt werden.",
    "af-lesson2-title": "Debatte-Token-Explosion",
    "af-lesson2-desc": "Ohne Kompression wuchs der Debattenverlauf exponentiell. R5-Token-Kosten waren 5x h\u00f6her als R2. Sliding-Window-Zusammenfassung mit mistral-fast gebaut, um Kosten zu senken \u2014 30% Ersparnis bei 5 Runden.",
    "af-lesson3-title": "G\u00fcnstige Modelle ignorieren das Tool",
    "af-lesson3-desc": "Der gr\u00f6\u00dfte Qualit\u00e4tssprung liegt zwischen schnell und tief, nicht zwischen tief und premium. G\u00fcnstige Modelle liefern \"Umsatz stieg 16% YoY\", w\u00e4hrend tiefe Modelle \"Umsatz stieg 16% YoY, getrieben durch iPhone +13%, Services +13%, Japan +17%\" ausgeben. Kein Prompt-Engineering behebt das.",
    "af-lesson4-title": "Claude Haiku: Star-Performer",
    "af-lesson4-desc": "\u00dcber alle 9 Modelle hinweg machte Claude Haiku konstant 5-7 Retrieval-Aufrufe und lieferte die reichhaltigsten Begr\u00fcndungen: Segmentaufschl\u00fcsselungen, Margentreiber, regionale Daten. Das einzige Modell, das den Analyse-Prompt in jeder Preisstufe wirklich befolgte.",

    // Case study: AgoraFinancials (homepage)
    "cs-agora-problem": "Aktienanalyse ertrinkt in Informationen. LLMs k\u00f6nnen SEC-Berichte zu Narrativen verdichten, aber ein einzelnes Modell kann Zahlen halluzinieren, Daten selektiv ausw\u00e4hlen und Schlussfolgerungen verzerren. Kein bestehendes Tool validiert KI-generierte Finanzanalysen gegen\u00fcber.",
    "cs-agora-approach": "Die Pythagoras-Methode entwickelt: Mehrere LLMs bewerten unabh\u00e4ngig 8 Finanzkennzahlen, ihre Bewertungen werden harmonisiert, und Konflikte l\u00f6sen strukturierte Mehrrunden-Debatten bis zum Konsens. Zweistufige Modellarchitektur (schnell f\u00fcr Zahlen, tief f\u00fcr RAG-gest\u00fctzte qualitative Analyse) mit OpenRouter als einheitlichem Gateway.",
    "cs-agora-result": "Produktionsplattform auf agorafinancials.com. 9 LLMs von 5 Anbietern parallel, SEC-Filing RAG mit pgvector, PDF-Berichterstellung mit Scoring, Stripe-Abrechnung mit Token-\u00d6konomie und Watchlist mit Live-Scores.",
    "cs-agora-decisions": "OpenRouter f\u00fcr einheitliche Multi-Provider-Abrechnung. LangChain create_agent mit Retrieval-Tools f\u00fcr tiefstufige Modelle. pgvector statt Pinecone f\u00fcr einfachere Single-Database-Infrastruktur. Sliding-Window-Debattenkompression f\u00fcr gleichbleibende Token-Kosten \u00fcber Runden.",

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
    "copyright": "© 2026 Luis Zermeno. Todos los derechos reservados.",
    
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
    "experience-overview": "M.B.A. con 5 a\u00f1os de experiencia en Adquisici\u00f3n de Talento para la regi\u00f3n DACH y EMEA (Francia, Italia, Espa\u00f1a, Benelux). Experiencia tanto en entornos de startups como en grandes corporaciones, con enfoque en reclutamiento tecnol\u00f3gico (Full-stack) y reclutamiento de ventas (Account Executives, Sales Engineers, BDRs). Ahora desarrollando aplicaciones de IA en producci\u00f3n a tiempo completo.",
    
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
    "ai-projects-achievement1": "Profesor de idiomas con IA con tiempos de respuesta <2s construido usando Claude para razonamiento. Soporta niveles A1-C2 con correcci\u00f3n gramatical inteligente.",
    "ai-projects-achievement2": "Backend as\u00edncrono que orquesta OpenAI, Deepgram y Cerebras para extraer, resumir y traducir en streaming transcripciones de YouTube v\u00eda SSE.",
    "ai-projects-achievement3": "Evaluador de acciones multi-LLM usando el M\u00e9todo Pit\u00e1goras: 9 modelos analizan reportes SEC en paralelo, armonizan calificaciones y debaten desacuerdos hasta el consenso.",
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

    // New project cards
    "project-agora-title": "AgoraFinancials",
    "project-agora-outcome": "Motor de evaluaci\u00f3n de acciones multi-LLM que orquesta 9 modelos de IA para analizar reportes SEC, debatir desacuerdos y producir calificaciones financieras con sesgo reducido.",
    "project-recruitment-ats-title": "ATS de Reclutamiento con IA",
    "project-recruitment-ats-outcome": "Sistema de seguimiento de candidatos con IA para screening automatizado de CVs y matching de candidatos.",
    "project-lifecoach-title": "Asistente de IA para Life Coach",
    "project-lifecoach-outcome": "Asistente de administración con IA para prácticas de coaching de vida.",
    "project-tubetext-title": "TubeText",
    "project-tubetext-outcome": "Extracci\u00f3n de transcripciones de YouTube con IA, res\u00famenes con LLM, traducci\u00f3n en streaming en tiempo real y transcripci\u00f3n de audio \u2014 desplegado como SaaS en producci\u00f3n.",

    // Case study: TubeText
    "cs-tubetext-problem": "YouTube contiene conocimiento masivo pero extraer ideas de videos largos es ineficiente. Ninguna herramienta combinaba extracci\u00f3n de transcripciones, resumen con IA y traducci\u00f3n multiling\u00fce en un solo pipeline.",
    "cs-tubetext-approach": "Backend as\u00edncrono con FastAPI orquestando m\u00faltiples servicios de IA: Deepgram Nova-3 para audio-a-texto, LangChain + OpenAI GPT-4 mini para res\u00famenes estructurados, Cerebras Llama-3.3-70b para traducci\u00f3n en streaming en tiempo real v\u00eda SSE. PostgreSQL con async SQLAlchemy y migraciones Alembic. Dockerizado y desplegado en Railway.",
    "cs-tubetext-result": "App en producci\u00f3n en tubetext.app. Transcripciones en segundos, res\u00famenes generados por IA, traducciones en streaming (espa\u00f1ol, franc\u00e9s, alem\u00e1n, portugu\u00e9s) y exportaci\u00f3n PDF. Google OAuth + integraci\u00f3n Stripe para facturaci\u00f3n.",
    "cs-tubetext-decisions": "FastAPI para rendimiento async-first. Agentes LangChain con prompts YAML para pipelines de IA mantenibles. Streaming SSE para feedback de traducci\u00f3n en tiempo real. Deepgram sobre Whisper para fiabilidad en producci\u00f3n. Docker + Railway para despliegue reproducible.",

    // TubeText detail page
    "cs-back-to-projects": "Volver a Proyectos",
    "cs-back-home": "\u2190 Volver al Inicio del Portafolio",
    "tt-description": "Un backend as\u00edncrono que orquesta m\u00faltiples servicios de IA para extraer, resumir y traducir contenido de videos de YouTube \u2014 convirtiendo horas de video en texto accionable en segundos.",
    "tt-spec-framework": "Framework",
    "tt-spec-ai": "Servicios de IA",
    "tt-spec-database": "Base de Datos",
    "tt-spec-deployment": "Despliegue",
    "tt-challenge": "El Desaf\u00edo",
    "tt-challenge-p1": "YouTube es una de las fuentes de conocimiento m\u00e1s ricas en internet \u2014 tutoriales, conferencias, entrevistas, profundizaciones en cualquier tema. Pero la mayor\u00eda de los videos son largos, llenos de relleno y dif\u00edciles de escanear. Llegar al contenido importante significa verlo todo.",
    "tt-challenge-p2": "El desaf\u00edo t\u00e9cnico fue construir un <strong>pipeline as\u00edncrono</strong> que orqueste m\u00faltiples servicios de IA (transcripci\u00f3n, resumen, traducci\u00f3n) sin bloquear \u2014 manteniendo tiempos de respuesta r\u00e1pidos para una experiencia de usuario en tiempo real.",
    "tt-pipeline": "Arquitectura del Pipeline de IA",
    "tt-pipeline-desc": "El backend orquesta tres pipelines de IA distintos, cada uno optimizado para su tarea espec\u00edfica:",
    "tt-summary-agent": "Agente de Resumen LangChain",
    "tt-summary-agent-desc": "Los res\u00famenes se generan a trav\u00e9s de un agente LangChain con prompts YAML. Esto separa la ingenier\u00eda de prompts de la l\u00f3gica de la aplicaci\u00f3n, facilitando iterar en la calidad del prompt sin tocar c\u00f3digo.",
    "tt-streaming": "Traducci\u00f3n en Streaming en Tiempo Real",
    "tt-streaming-desc": "La traducci\u00f3n usa Server-Sent Events (SSE) para transmitir resultados segmento por segmento. Se eligi\u00f3 Cerebras Llama-3.3-70b por su velocidad de inferencia r\u00e1pida, dando a los usuarios feedback en tiempo real en lugar de esperar la traducci\u00f3n completa.",
    "tt-async-db": "Capa de Base de Datos As\u00edncrona",
    "tt-async-db-desc": "Toda la capa de datos es as\u00edncrona \u2014 PostgreSQL via asyncpg con sesiones async de SQLAlchemy 2.0. Alembic gestiona las migraciones de esquema. El seguimiento de uso se reinicia autom\u00e1ticamente en l\u00edmites de mes sin jobs en segundo plano.",
    "tt-features": "Caracter\u00edsticas Principales",
    "tt-feature1": "Extracci\u00f3n de transcripciones basada en subt\u00edtulos",
    "tt-feature2": "Transcripci\u00f3n de audio via Deepgram Nova-3",
    "tt-feature3": "Res\u00famenes con IA usando LangChain + GPT-4 mini",
    "tt-feature4": "Traducci\u00f3n en streaming en tiempo real (SSE)",
    "tt-feature5": "Exportaci\u00f3n PDF con marca",
    "tt-feature6": "Google OAuth + facturaci\u00f3n Stripe",
    "tt-lessons": "Lecciones Aprendidas",
    "tt-lesson1-title": "Trampas de SQLAlchemy Async",
    "tt-lesson1-desc": "SQLAlchemy expira atributos despu\u00e9s de commit() \u2014 acceder a ellos dispara un lazy-load s\u00edncrono que crashea sesiones async (MissingGreenlet). Solucionado con db.refresh() expl\u00edcito despu\u00e9s de cada commit.",
    "tt-lesson2-title": "Manejo de Errores SSE",
    "tt-lesson2-desc": "Una vez que un stream SSE env\u00eda HTTP 200, no se pueden devolver c\u00f3digos de error. Implementamos eventos de error SSE para que el frontend detecte y maneje fallos correctamente.",
    "tt-lesson3-title": "OAuth detr\u00e1s de Reverse Proxies",
    "tt-lesson3-desc": "El proxy de Railway elimina HTTPS, haciendo que FastAPI generara URIs de redirecci\u00f3n http:// \u2014 causando redirect_uri_mismatch con Google OAuth. Solucionado con ProxyHeadersMiddleware para leer X-Forwarded-Proto.",
    "tt-lesson4-title": "Env Vars: Build-Time vs Runtime",
    "tt-lesson4-desc": "Las variables NEXT_PUBLIC_ se graban en tiempo de build, pero Railway inyecta env vars solo en runtime. Los builds Docker obtienen valores undefined a menos que se hardcodeen con ENV antes del paso de build.",
    "tt-tradeoffs": "Decisiones de Dise\u00f1o del Sistema",
    "tt-tradeoffs-intro": "Cada decisi\u00f3n arquitect\u00f3nica tiene un costo. Estas son las principales decisiones que tom\u00e9 y por qu\u00e9.",

    // AgoraFinancials detail page
    "af-subtitle": "Evaluador de Acciones Multi-LLM",
    "af-description": "Un motor de evaluaci\u00f3n de acciones que orquesta hasta 9 LLMs para analizar reportes SEC de forma independiente, luego los fuerza a debatir sus desacuerdos, produciendo calificaciones financieras con sesgo reducido a trav\u00e9s del consenso entre modelos.",
    "af-spec-stack": "Stack",
    "af-spec-ai": "Modelos de IA",
    "af-spec-database": "Base de Datos",
    "af-spec-deployment": "Despliegue",
    "af-challenge": "El Desaf\u00edo",
    "af-challenge-p1": "El an\u00e1lisis de acciones se ahoga en informaci\u00f3n. Los reportes SEC son densos, los estados financieros abarcan docenas de p\u00e1ginas, y entender la salud real de una empresa toma horas de lectura. Los LLMs son excelentes condensando estos datos en narrativas, pero un solo LLM puede alucinar n\u00fameros, seleccionar datos parcialmente y sesgar sus propias conclusiones.",
    "af-challenge-p2": "La pregunta central: <strong>\u00bfc\u00f3mo obtener an\u00e1lisis financiero confiable con IA cuando no puedes confiar en ning\u00fan modelo individual?</strong> La respuesta fue hacerlos verificarse mutuamente. Orquestar m\u00faltiples LLMs en paralelo, comparar sus evaluaciones independientes y resolver desacuerdos a trav\u00e9s de debates estructurados de m\u00faltiples rondas.",
    "af-pythagoras": "El M\u00e9todo Pit\u00e1goras",
    "af-pythagoras-desc": "La innovaci\u00f3n central. En lugar de confiar en un solo LLM, m\u00faltiples modelos eval\u00faan independientemente 8 m\u00e9tricas financieras. Sus calificaciones se armonizan: si los modelos coinciden, la calificaci\u00f3n se mantiene. Si hay conflicto, entran en un debate estructurado de m\u00faltiples rondas hasta alcanzar consenso o marcar la m\u00e9trica como compleja.",
    "af-two-tier": "Arquitectura de Modelos de Dos Niveles",
    "af-two-tier-desc": "Los modelos se dividen en niveles r\u00e1pido y profundo. Los modelos r\u00e1pidos procesan los n\u00fameros de las tablas financieras inyectadas. Los modelos profundos usan una herramienta de recuperaci\u00f3n para extraer contexto cualitativo de los reportes SEC (desgloses por segmento, impulsores de margen, comentarios de gerencia), produciendo razonamientos listos para debate. El mayor descubrimiento: el salto de calidad est\u00e1 entre r\u00e1pido y profundo, no entre profundo y premium. Los modelos baratos ignoran instrucciones de recuperaci\u00f3n sin importar la ingenier\u00eda de prompts.",
    "af-rag": "Pipeline RAG de Reportes SEC",
    "af-rag-desc": "Los reportes SEC 10-Q se ingestan, se limpian de texto est\u00e1ndar, se dividen en chunks respetando encabezados markdown y se embeben en PostgreSQL con pgvector. Los modelos de nivel profundo usan una herramienta de recuperaci\u00f3n LangChain para buscar estos chunks por similitud coseno, extrayendo contexto cualitativo que las tablas financieras puras no pueden proporcionar.",
    "af-debate": "Motor de Debate Multi-Ronda",
    "af-debate-desc": "Cuando los modelos no coinciden en una m\u00e9trica, entran en un debate estructurado. Cada LLM defiende su posici\u00f3n, revisa los argumentos de otros y puede cambiar su calificaci\u00f3n. Los cambios de posici\u00f3n se rastrean a lo largo del proceso. Una compresi\u00f3n de ventana deslizante mantiene los costos de tokens estables; sin ella, los costos crecer\u00edan exponencialmente por ronda.",
    "af-tradeoffs": "Decisiones de Dise\u00f1o del Sistema",
    "af-tradeoffs-intro": "Cada decisi\u00f3n arquitect\u00f3nica tiene un costo. Estas son las principales decisiones que tom\u00e9 y por qu\u00e9.",
    "af-features": "Caracter\u00edsticas Principales",
    "af-feature1": "9 LLMs de 5 proveedores en paralelo",
    "af-feature2": "RAG de reportes SEC con embeddings pgvector",
    "af-feature3": "M\u00e9todo Pit\u00e1goras: armonizar + debatir",
    "af-feature4": "Reportes financieros PDF con indicador de puntaje",
    "af-feature5": "Suscripciones Stripe + econom\u00eda de tokens",
    "af-feature6": "Watchlist con drag-and-drop + puntajes en vivo",
    "af-lessons": "Lecciones Aprendidas",
    "af-lesson1-title": "Gemini Flash: 308 llamadas API",
    "af-lesson1-desc": "gemini-2.5-flash hizo 308 llamadas API en una sola evaluaci\u00f3n, 78% terminando en llamadas a herramientas, con picos de 794K tokens de entrada. Costo: $3.25 vs $0.08 para Mistral. Se tuvo que eliminar el modelo por completo.",
    "af-lesson2-title": "Explosi\u00f3n de Tokens en Debate",
    "af-lesson2-desc": "Sin compresi\u00f3n, el historial de debate crec\u00eda exponencialmente. Los costos de tokens en R5 eran 5x mayores que en R2. Se construy\u00f3 una sumarizaci\u00f3n de ventana deslizante usando mistral-fast para aplanar costos, ahorrando 30% en 5 rondas.",
    "af-lesson3-title": "Modelos Baratos Ignoran la Herramienta",
    "af-lesson3-desc": "El mayor salto de calidad est\u00e1 entre r\u00e1pido y profundo, no entre profundo y premium. Modelos baratos producen \"Ingresos crecieron 16% YoY\" mientras modelos profundos producen \"Ingresos crecieron 16% YoY, impulsados por iPhone +13%, Services +13%, Jap\u00f3n +17%.\" Ninguna ingenier\u00eda de prompts lo soluciona.",
    "af-lesson4-title": "Claude Haiku: Estrella del Equipo",
    "af-lesson4-desc": "De los 9 modelos, Claude Haiku consistentemente hizo 5-7 llamadas de recuperaci\u00f3n y produjo los razonamientos m\u00e1s ricos: desgloses por segmento, impulsores de margen, datos regionales. El \u00fanico modelo que verdaderamente sigui\u00f3 el prompt de an\u00e1lisis en cada nivel de precio.",

    // Case study: AgoraFinancials (homepage)
    "cs-agora-problem": "El an\u00e1lisis de acciones se ahoga en informaci\u00f3n. Los LLMs pueden condensar reportes SEC en narrativas, pero un solo modelo puede alucinar n\u00fameros, seleccionar datos parcialmente y sesgar sus conclusiones. Ninguna herramienta existente valida cruzadamente el an\u00e1lisis financiero generado por IA.",
    "cs-agora-approach": "Se construy\u00f3 el M\u00e9todo Pit\u00e1goras: m\u00faltiples LLMs eval\u00faan independientemente 8 m\u00e9tricas financieras, sus calificaciones se armonizan, y los conflictos disparan debates estructurados de m\u00faltiples rondas hasta el consenso. Arquitectura de modelos de dos niveles (r\u00e1pido para n\u00fameros, profundo para razonamiento cualitativo con RAG) con OpenRouter como gateway unificado.",
    "cs-agora-result": "Plataforma en producci\u00f3n en agorafinancials.com. 9 LLMs de 5 proveedores ejecut\u00e1ndose en paralelo, RAG de reportes SEC con pgvector, generaci\u00f3n de reportes PDF con scoring, facturaci\u00f3n Stripe con econom\u00eda de tokens y watchlist con puntajes en vivo.",
    "cs-agora-decisions": "OpenRouter para facturaci\u00f3n unificada multi-proveedor. LangChain create_agent con herramientas de recuperaci\u00f3n para modelos de nivel profundo. pgvector sobre Pinecone para infraestructura de base de datos \u00fanica m\u00e1s simple. Compresi\u00f3n de debate con ventana deslizante para mantener costos de tokens estables entre rondas.",

    // Case study labels
    "cs-label-problem": "El Problema",
    "cs-label-approach": "El Enfoque",
    "cs-label-result": "El Resultado",
    "cs-label-decisions": "Decisiones Clave",
    "cs-try-demo": "Probar Demo en Vivo",
    "cs-view-source": "Ver C\u00f3digo Fuente",
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
