// Define translations
const translations = {
  en: {
    // Project pages - AI Agent with Voice
    "ai-voice-title": "AI Agent with Voice",
    "ai-voice-category": "AI Assistant Development",
    "ai-voice-overview": "Project Overview",
    "ai-voice-description1": "The AI Agent with Voice is a Python-based application that extends the functionality of large language models (LLMs) by adding speech input and output capabilities. It creates a natural voice interface that allows users to have spoken conversations with AI models running locally through Ollama.",
    "ai-voice-description2": "This project combines offline speech recognition with high-quality text-to-speech to provide a seamless conversational experience. By implementing a Model-View-Controller (MVC) architecture, the application maintains a clean separation of concerns, making it both maintainable and extensible.",
    "ai-voice-description3": "Unlike cloud-based voice assistants, this application focuses on privacy by processing all speech locally, while still delivering a responsive and natural interaction experience. Users can choose from multiple voice options and connect to different language models based on their needs.",
    "ai-voice-features": "Key Features",
    "ai-voice-feature1": "Voice Input: Offline speech recognition using the Vosk library for private, accurate transcription of user speech.",
    "ai-voice-feature2": "Voice Output: Dual text-to-speech engines with XTTS-v2 for high-quality natural-sounding voices and system TTS as a fallback option.",
    "ai-voice-feature3": "Conversation Display: Color-coded conversation history that shows both user inputs and AI responses for easy reference.",
    "ai-voice-feature4": "Multiple LLM Support: Connect to different language models through Ollama, allowing users to choose the most appropriate model for their needs.",
    "ai-voice-feature5": "Voice Selection: Choice of multiple voices for AI responses, with support for custom voice cloning.",
    "ai-voice-feature6": "MVC Architecture: Clean separation of concerns with model for AI logic, view for UI, and controller for connecting components.",
    "ai-voice-feature7": "Offline Operation: All speech processing happens locally, protecting user privacy and allowing operation without internet connectivity.",
    
    // Project pages - Love Dog Game
    "lovedog-title": "Love Dog - Brackeys Game Jam 2025",
    "lovedog-category": "AI Game Development",
    "lovedog-overview": "Project Overview",
    "lovedog-description1": "\"Love Dog\" is a heart-warming 2D platformer created for the Brackeys Game Jam 2025, where the theme was \"Connections.\" In this game, you play as a loyal dog with a mission: to protect your owner's romantic date from any distractions that might ruin their special evening.",
    "lovedog-description2": "The game features a combination of platforming, puzzle-solving, and mini-games as you race against time to fix various household problems before they disturb your owner's date. With multiple levels of increasing difficulty across three \"nights,\" you'll need quick reflexes and problem-solving skills to ensure the perfect romantic atmosphere.",
    "lovedog-description3": "What makes this game unique is that approximately half of the assets, music, and sound effects were created using AI tools. The animations and pixel art were partially generated with ComfyUI and fine-tuned AI models, showing how AI can accelerate game development without sacrificing visual quality. This innovative approach allowed for rapid development of the game within a 1-week timeframe while maintaining a cohesive visual and audio style.",
    "lovedog-features": "Key Features",
    "lovedog-feature1": "Character-Driven Narrative: Experience the story from the perspective of a loyal dog determined to protect their owner's happiness.",
    "lovedog-feature2": "Progressive Difficulty System: Three nights of increasing challenges with different difficulty settings that adjust the timing and number of problems.",
    "lovedog-feature3": "Multiple Minigames: Engage with various interactive puzzles including wire fixing, password puzzles, and quick cleaning challenges.",
    "lovedog-feature4": "Dynamic Love Meter: A responsive system that tracks how well the date is going based on your performance at managing distractions.",
    "lovedog-feature5": "Expressive 2D Animation: Charming character animations that bring the dog protagonist to life with running, jumping, and barking actions.",
    "lovedog-feature6": "Immersive Sound Design: Ambient music that changes based on the date's status, with sound effects providing feedback on game events.",
    
    // Project Details - AI Agent with Voice
    "aivoice-overview-title": "Project Overview",
    "aivoice-overview-p1": "The AI Agent with Voice is a Python-based application that extends the functionality of large language models (LLMs) by adding speech input and output capabilities. It creates a natural voice interface that allows users to have spoken conversations with AI models running locally through Ollama.",
    "aivoice-overview-p2": "This project combines offline speech recognition with high-quality text-to-speech to provide a seamless conversational experience. By implementing a Model-View-Controller (MVC) architecture, the application maintains a clean separation of concerns, making it both maintainable and extensible.",
    "aivoice-overview-p3": "Unlike cloud-based voice assistants, this application focuses on privacy by processing all speech locally, while still delivering a responsive and natural interaction experience. Users can choose from multiple voice options and connect to different language models based on their needs.",
    "aivoice-features-title": "Key Features",
    "aivoice-feature1": "Voice Input: Offline speech recognition using the Vosk library for private, accurate transcription of user speech.",
    "aivoice-feature2": "Voice Output: Dual text-to-speech engines with XTTS-v2 for high-quality natural-sounding voices and system TTS as a fallback option.",
    "aivoice-feature3": "Conversation Display: Color-coded conversation history that shows both user inputs and AI responses for easy reference.",
    "aivoice-feature4": "Multiple LLM Support: Connect to different language models through Ollama, allowing users to choose the most appropriate model for their needs.",
    "aivoice-feature5": "Voice Selection: Choice of multiple voices for AI responses, with support for custom voice cloning.",
    "aivoice-feature6": "MVC Architecture: Clean separation of concerns with model for AI logic, view for UI, and controller for connecting components.",
    "aivoice-feature7": "Offline Operation: All speech processing happens locally, protecting user privacy and allowing operation without internet connectivity.",
    
    // Project Details - Love Dog Game
    "lovedog-overview-title": "Project Overview",
    "lovedog-overview-p1": "'Love Dog' is a heart-warming 2D platformer created for the Brackeys Game Jam 2025, where the theme was 'Connections.' In this game, you play as a loyal dog with a mission: to protect your owner's romantic date from any distractions that might ruin their special evening.",
    "lovedog-overview-p2": "The game features a combination of platforming, puzzle-solving, and mini-games as you race against time to fix various household problems before they disturb your owner's date. With multiple levels of increasing difficulty across three 'nights,' you'll need quick reflexes and problem-solving skills to ensure the perfect romantic atmosphere.",
    "lovedog-overview-p3": "What makes this game unique is that approximately half of the assets, music, and sound effects were created using AI tools. The animations and pixel art were partially generated with ComfyUI and fine-tuned AI models, showing how AI can accelerate game development without sacrificing visual quality. This innovative approach allowed for rapid development of the game within a 1-week timeframe while maintaining a cohesive visual and audio style.",
    "lovedog-features-title": "Key Features",
    "lovedog-feature1": "Character-Driven Narrative: Experience the story from the perspective of a loyal dog determined to protect their owner's happiness.",
    "lovedog-feature2": "Progressive Difficulty System: Three nights of increasing challenges with different difficulty settings that adjust the timing and number of problems.",
    "lovedog-feature3": "Multiple Minigames: Engage with various interactive puzzles including wire fixing, password puzzles, and quick cleaning challenges.",
    "lovedog-feature4": "Dynamic Love Meter: A responsive system that tracks how well the date is going based on your performance at managing distractions.",
    "lovedog-feature5": "Expressive 2D Animation: Charming character animations that bring the dog protagonist to life with running, jumping, and barking actions.",
    "lovedog-feature6": "Immersive Sound Design: Ambient music that changes based on the date's status, with sound effects providing feedback on game events.",
    
    // Navigation
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-experience": "Experience",
    
    // Hero section
    "hero-greeting": "Hello, I'm",
    "hero-title": "Senior Talent Partner and AI Developer",
    "hero-description": "M.B.A. with 4+ years of experience in Talent Acquisition for DACH and EMEA regions, specializing in tech and sales recruitment. Passionate about AI development and implementation.",
    "hero-cta-portfolio": "View My Work",
    "hero-cta-contact": "Contact Me",
    
    // Project preview section
    "preview-heading": "Recent AI Projects",
    "ai-recruiting-title": "AI Recruiting Assistant",
    "ai-recruiting-desc": "A custom-trained LLM that helps automate parts of the recruiting process, from initial screening to interview preparation.",
    "comfyui-title": "Custom ComfyUI Workflows",
    "comfyui-desc": "Developed specialized image generation pipelines for consistent brand visuals and creative content production.",
    "localllm-title": "Local LLM Integration",
    "localllm-desc": "Built a system using Ollama to run AI models locally for privacy-focused document analysis and summarization.",
    "view-details": "View Details",
    
    // About section
    "about-heading": "About Me",
    "about-p1": "I'm an AI Developer and enthusiast focused on creating innovative solutions through autonomous agents, fine-tuned LLMs, and custom workflows. My passion lies in developing AI applications that enhance productivity and create new opportunities for businesses and individuals.",
    "about-p2": "Alongside my technical AI projects, I bring 4+ years of experience as a Senior Talent Partner for tech companies across the DACH region. This unique combination allows me to bridge technical expertise with people-focused strategic thinking.",
    "about-p3": "I'm currently working on several AI initiatives including custom agents for recruitment automation, personalized learning assistants, and creative tools using ComfyUI and various large language models.",
    
    // Skills section
    "skills-heading": "Technical Skills",
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
    "filter-local-llm": "Local AI",
    "filter-game": "AI Game Dev",
    
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
  },
  
  de: {
    // Project pages - AI Agent with Voice
    "ai-voice-title": "KI-Agent mit Sprache",
    "ai-voice-category": "KI-Assistentenentwicklung",
    "ai-voice-overview": "Projektübersicht",
    "ai-voice-description1": "Der KI-Agent mit Sprache ist eine Python-basierte Anwendung, die die Funktionalität von großen Sprachmodellen (LLMs) durch Hinzufügen von Spracheingabe- und -ausgabefähigkeiten erweitert. Sie schafft eine natürliche Sprachschnittstelle, die es Benutzern ermöglicht, gesprochene Gespräche mit lokal über Ollama laufenden KI-Modellen zu führen.",
    "ai-voice-description2": "Dieses Projekt kombiniert Offline-Spracherkennung mit hochwertiger Text-zu-Sprache-Umwandlung, um ein nahtloses Gesprächserlebnis zu bieten. Durch die Implementierung einer Model-View-Controller (MVC)-Architektur behält die Anwendung eine saubere Trennung der Belange bei, was sie sowohl wartbar als auch erweiterbar macht.",
    "ai-voice-description3": "Im Gegensatz zu Cloud-basierten Sprachassistenten konzentriert sich diese Anwendung auf Datenschutz, indem sie alle Sprachverarbeitung lokal durchführt und dennoch ein reaktionsschnelles und natürliches Interaktionserlebnis bietet. Benutzer können aus mehreren Sprachoptionen wählen und sich mit verschiedenen Sprachmodellen verbinden, je nach ihren Bedürfnissen.",
    "ai-voice-features": "Hauptfunktionen",
    "ai-voice-feature1": "Spracheingabe: Offline-Spracherkennung mit der Vosk-Bibliothek für private, genaue Transkription der Benutzerstimme.",
    "ai-voice-feature2": "Sprachausgabe: Duale Text-zu-Sprache-Engines mit XTTS-v2 für hochwertige, natürlich klingende Stimmen und System-TTS als Fallback-Option.",
    "ai-voice-feature3": "Gesprächsanzeige: Farbkodierte Gesprächshistorie, die sowohl Benutzereingaben als auch KI-Antworten zur einfachen Referenz anzeigt.",
    "ai-voice-feature4": "Unterstützung mehrerer LLMs: Verbindung zu verschiedenen Sprachmodellen über Ollama, sodass Benutzer das am besten geeignete Modell für ihre Bedürfnisse auswählen können.",
    "ai-voice-feature5": "Stimmauswahl: Auswahl mehrerer Stimmen für KI-Antworten, mit Unterstützung für benutzerdefiniertes Stimmklonen.",
    "ai-voice-feature6": "MVC-Architektur: Saubere Trennung der Belange mit Modell für KI-Logik, View für Benutzeroberfläche und Controller für Verbindungskomponenten.",
    "ai-voice-feature7": "Offline-Betrieb: Die gesamte Sprachverarbeitung erfolgt lokal, was die Privatsphäre der Benutzer schützt und den Betrieb ohne Internetverbindung ermöglicht.",
    
    // Project pages - Love Dog Game
    "lovedog-title": "Love Dog - Brackeys Game Jam 2025",
    "lovedog-category": "KI-Spieleentwicklung",
    "lovedog-overview": "Projektübersicht",
    "lovedog-description1": "\"Love Dog\" ist ein herzerwärmendes 2D-Plattformspiel, das für die Brackeys Game Jam 2025 erstellt wurde, bei der das Thema \"Verbindungen\" war. In diesem Spiel spielst du einen treuen Hund mit einer Mission: das romantische Date deines Besitzers vor Ablenkungen zu schützen, die ihren besonderen Abend ruinieren könnten.",
    "lovedog-description2": "Das Spiel kombiniert Plattform-Elemente, Rätsel-Lösen und Minispiele, während du gegen die Zeit anrennst, um verschiedene Haushaltsprobleme zu beheben, bevor sie das Date deines Besitzers stören. Mit mehreren Schwierigkeitsgraden über drei \"Nächte\" hinweg benötigst du schnelle Reflexe und Problemlösungsfähigkeiten, um die perfekte romantische Atmosphäre zu gewährleisten.",
    "lovedog-description3": "Was dieses Spiel einzigartig macht, ist, dass etwa die Hälfte der Assets, Musik und Soundeffekte mit KI-Tools erstellt wurden. Die Animationen und Pixel-Art wurden teilweise mit ComfyUI und feinabgestimmten KI-Modellen generiert, was zeigt, wie KI die Spieleentwicklung beschleunigen kann, ohne die visuelle Qualität zu opfern. Dieser innovative Ansatz ermöglichte die schnelle Entwicklung des Spiels innerhalb einer Woche bei gleichzeitiger Beibehaltung eines kohärenten visuellen und akustischen Stils.",
    "lovedog-features": "Hauptfunktionen",
    "lovedog-feature1": "Charaktergetriebene Erzählung: Erlebe die Geschichte aus der Perspektive eines treuen Hundes, der entschlossen ist, das Glück seines Besitzers zu schützen.",
    "lovedog-feature2": "Progressives Schwierigkeitssystem: Drei Nächte mit zunehmenden Herausforderungen und verschiedenen Schwierigkeitseinstellungen, die das Timing und die Anzahl der Probleme anpassen.",
    "lovedog-feature3": "Mehrere Minispiele: Beschäftige dich mit verschiedenen interaktiven Rätseln, darunter Kabelreparatur, Passwort-Puzzles und schnelle Reinigungsaufgaben.",
    "lovedog-feature4": "Dynamischer Liebesmesser: Ein reaktionsschnelles System, das verfolgt, wie gut das Date läuft, basierend auf deiner Leistung bei der Bewältigung von Ablenkungen.",
    "lovedog-feature5": "Ausdrucksstarke 2D-Animation: Charmante Charakteranimationen, die den Hundeprotagonisten mit Lauf-, Sprung- und Bellaktionen zum Leben erwecken.",
    "lovedog-feature6": "Immersives Sounddesign: Ambiente-Musik, die sich je nach Status des Dates ändert, mit Soundeffekten, die Feedback zu Spielereignissen geben.",
    
    // Project Details - AI Agent with Voice
    "aivoice-overview-title": "Projektübersicht",
    "aivoice-overview-p1": "Der KI-Agent mit Sprachfunktion ist eine Python-basierte Anwendung, die die Funktionalität von großen Sprachmodellen (LLMs) durch Spracheingabe und -ausgabe erweitert. Sie schafft eine natürliche Sprachschnittstelle, die es Benutzern ermöglicht, gesprochene Konversationen mit lokal über Ollama laufenden KI-Modellen zu führen.",
    "aivoice-overview-p2": "Dieses Projekt kombiniert Offline-Spracherkennung mit qualitativ hochwertiger Text-zu-Sprache-Umwandlung für ein nahtloses Gesprächserlebnis. Durch die Implementierung einer Model-View-Controller (MVC)-Architektur sorgt die Anwendung für eine saubere Trennung der Zuständigkeiten, was sie sowohl wartbar als auch erweiterbar macht.",
    "aivoice-overview-p3": "Im Gegensatz zu cloudbasierten Sprachassistenten legt diese Anwendung Wert auf Datenschutz, indem sie alle Sprachverarbeitung lokal durchführt und dennoch ein reaktionsschnelles und natürliches Interaktionserlebnis bietet. Benutzer können aus mehreren Sprachoptionen wählen und sich mit verschiedenen Sprachmodellen je nach Bedarf verbinden.",
    "aivoice-features-title": "Hauptfunktionen",
    "aivoice-feature1": "Spracheingabe: Offline-Spracherkennung mit der Vosk-Bibliothek für private, genaue Transkription der Benutzereingaben.",
    "aivoice-feature2": "Sprachausgabe: Duale Text-zu-Sprache-Engines mit XTTS-v2 für hochwertige, natürlich klingende Stimmen und System-TTS als Fallback-Option.",
    "aivoice-feature3": "Gesprächsanzeige: Farbcodierter Gesprächsverlauf, der sowohl Benutzereingaben als auch KI-Antworten für eine einfache Referenz anzeigt.",
    "aivoice-feature4": "Unterstützung mehrerer LLMs: Verbindung zu verschiedenen Sprachmodellen über Ollama, sodass Benutzer das am besten geeignete Modell für ihre Bedürfnisse auswählen können.",
    "aivoice-feature5": "Stimmauswahl: Auswahl mehrerer Stimmen für KI-Antworten, mit Unterstützung für benutzerdefiniertes Stimmenklonen.",
    "aivoice-feature6": "MVC-Architektur: Saubere Trennung der Zuständigkeiten mit Modell für KI-Logik, Ansicht für Benutzeroberfläche und Controller für die Verbindung der Komponenten.",
    "aivoice-feature7": "Offline-Betrieb: Die gesamte Sprachverarbeitung erfolgt lokal, was die Privatsphäre der Benutzer schützt und den Betrieb ohne Internetverbindung ermöglicht.",
    
    // Project Details - Love Dog Game
    "lovedog-overview-title": "Projektübersicht",
    "lovedog-overview-p1": "'Love Dog' ist ein herzerwärmendes 2D-Plattformspiel, das für die Brackeys Game Jam 2025 erstellt wurde, bei der das Thema 'Verbindungen' war. In diesem Spiel spielst du einen treuen Hund mit einer Mission: das romantische Date deines Besitzers vor Ablenkungen zu schützen, die ihren besonderen Abend ruinieren könnten.",
    "lovedog-overview-p2": "Das Spiel kombiniert Plattform-Elemente, Rätsel-Lösen und Minispiele, während du gegen die Zeit kämpfst, um verschiedene Haushaltsprobleme zu beheben, bevor sie das Date deines Besitzers stören. Mit mehreren Levels steigender Schwierigkeit über drei 'Nächte' hinweg benötigst du schnelle Reflexe und Problemlösungsfähigkeiten, um die perfekte romantische Atmosphäre zu gewährleisten.",
    "lovedog-overview-p3": "Was dieses Spiel einzigartig macht, ist, dass etwa die Hälfte der Assets, Musik und Soundeffekte mit KI-Tools erstellt wurden. Die Animationen und Pixel-Art wurden teilweise mit ComfyUI und fein abgestimmten KI-Modellen generiert, was zeigt, wie KI die Spieleentwicklung beschleunigen kann, ohne visuelle Qualität zu opfern. Dieser innovative Ansatz ermöglichte die schnelle Entwicklung des Spiels innerhalb einer Woche bei gleichzeitiger Beibehaltung eines kohärenten visuellen und akustischen Stils.",
    "lovedog-features-title": "Hauptfunktionen",
    "lovedog-feature1": "Charaktergetriebene Erzählung: Erlebe die Geschichte aus der Perspektive eines treuen Hundes, der entschlossen ist, das Glück seines Besitzers zu schützen.",
    "lovedog-feature2": "Progressives Schwierigkeitssystem: Drei Nächte mit steigenden Herausforderungen und verschiedenen Schwierigkeitseinstellungen, die das Timing und die Anzahl der Probleme anpassen.",
    "lovedog-feature3": "Mehrere Minispiele: Beschäftige dich mit verschiedenen interaktiven Rätseln, darunter Kabelreparatur, Passwort-Rätsel und schnelle Reinigungsaufgaben.",
    "lovedog-feature4": "Dynamisches Liebes-Meter: Ein reaktionsschnelles System, das verfolgt, wie gut das Date läuft, basierend auf deiner Leistung beim Verwalten von Ablenkungen.",
    "lovedog-feature5": "Ausdrucksstarke 2D-Animation: Charmante Charakteranimationen, die den Hund-Protagonisten mit Laufen, Springen und Bellen zum Leben erwecken.",
    "lovedog-feature6": "Immersives Sounddesign: Umgebungsmusik, die sich je nach Status des Dates ändert, mit Soundeffekten, die Feedback zu Spielereignissen geben.",
    
    // Navigation
    "nav-home": "Startseite",
    "nav-portfolio": "Portfolio",
    "nav-experience": "Erfahrung",
    
    // Hero section
    "hero-greeting": "Hallo, ich bin",
    "hero-title": "Senior Talent Partner und KI-Entwickler",
    "hero-description": "M.B.A. mit mehr als 4 Jahren Erfahrung im Talent Acquisition für die DACH- und EMEA-Regionen, spezialisiert auf Tech- und Vertriebsrekrutierung. Leidenschaftlich an KI-Entwicklung und -Implementierung interessiert.",
    "hero-cta-portfolio": "Meine Arbeit ansehen",
    "hero-cta-contact": "Kontakt aufnehmen",
    
    // Project preview section
    "preview-heading": "Aktuelle KI-Projekte",
    "ai-recruiting-title": "KI-Recruiting-Assistent",
    "ai-recruiting-desc": "Ein speziell trainiertes LLM, das Teile des Rekrutierungsprozesses automatisiert, von der ersten Überprüfung bis zur Interviewvorbereitung.",
    "comfyui-title": "Individuelle ComfyUI-Workflows",
    "comfyui-desc": "Entwicklung spezialisierter Bildgenerierungs-Pipelines für konsistente Markenvisualisierung und kreative Content-Produktion.",
    "localllm-title": "Lokale LLM-Integration",
    "localllm-desc": "Ein System mit Ollama, um KI-Modelle lokal für datenschutzorientierte Dokumentenanalyse und -zusammenfassung auszuführen.",
    "view-details": "Details ansehen",
    
    // About section
    "about-heading": "Über mich",
    "about-p1": "Ich bin KI-Entwickler und Enthusiast, der sich auf die Entwicklung innovativer Lösungen durch autonome Agenten, feinabgestimmte LLMs und benutzerdefinierte Workflows konzentriert. Meine Leidenschaft liegt in der Entwicklung von KI-Anwendungen, die die Produktivität steigern und neue Möglichkeiten für Unternehmen und Einzelpersonen schaffen.",
    "about-p2": "Neben meinen technischen KI-Projekten bringe ich mehr als 4 Jahre Erfahrung als Senior Talent Partner für Technologieunternehmen in der DACH-Region mit. Diese einzigartige Kombination ermöglicht es mir, technisches Fachwissen mit personenbezogenem strategischem Denken zu verbinden.",
    "about-p3": "Ich arbeite derzeit an mehreren KI-Initiativen, darunter maßgeschneiderte Agenten für die Rekrutierungsautomatisierung, personalisierte Lernassistenten und kreative Tools mit ComfyUI und verschiedenen großen Sprachmodellen.",
    
    // Skills section
    "skills-heading": "Technische Fähigkeiten",
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
    "filter-local-llm": "Lokale KI",
    "filter-game": "KI-Spieleentwicklung",
    
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
    "honeywell-position": "Human Resources Generalist, Customer Exp. Lead",
    
    // Education
    "mba-degree": "Master in Betriebswirtschaftslehre",
    "bachelor-degree": "Bachelor in Betriebswirtschaft",
  },
  
  es: {
    // Project pages - AI Agent with Voice
    "ai-voice-title": "Agente de IA con Voz",
    "ai-voice-category": "Desarrollo de Asistentes de IA",
    "ai-voice-overview": "Descripción del Proyecto",
    "ai-voice-description1": "El Agente de IA con Voz es una aplicación basada en Python que amplía la funcionalidad de los modelos de lenguaje grandes (LLMs) al añadir capacidades de entrada y salida de voz. Crea una interfaz de voz natural que permite a los usuarios mantener conversaciones habladas con modelos de IA que se ejecutan localmente a través de Ollama.",
    "ai-voice-description2": "Este proyecto combina el reconocimiento de voz offline con texto a voz de alta calidad para proporcionar una experiencia conversacional fluida. Al implementar una arquitectura Modelo-Vista-Controlador (MVC), la aplicación mantiene una clara separación de responsabilidades, haciéndola tanto mantenible como extensible.",
    "ai-voice-description3": "A diferencia de los asistentes de voz basados en la nube, esta aplicación se centra en la privacidad al procesar toda la voz localmente, mientras sigue ofreciendo una experiencia de interacción receptiva y natural. Los usuarios pueden elegir entre múltiples opciones de voz y conectarse a diferentes modelos de lenguaje según sus necesidades.",
    "ai-voice-features": "Características Principales",
    "ai-voice-feature1": "Entrada de Voz: Reconocimiento de voz offline utilizando la biblioteca Vosk para una transcripción privada y precisa del habla del usuario.",
    "ai-voice-feature2": "Salida de Voz: Motores duales de texto a voz con XTTS-v2 para voces naturales de alta calidad y TTS del sistema como opción alternativa.",
    "ai-voice-feature3": "Visualización de Conversación: Historial de conversación con código de colores que muestra tanto las entradas del usuario como las respuestas de la IA para una fácil referencia.",
    "ai-voice-feature4": "Soporte para Múltiples LLM: Conexión a diferentes modelos de lenguaje a través de Ollama, permitiendo a los usuarios elegir el modelo más apropiado para sus necesidades.",
    "ai-voice-feature5": "Selección de Voz: Elección de múltiples voces para las respuestas de la IA, con soporte para clonación de voz personalizada.",
    "ai-voice-feature6": "Arquitectura MVC: Clara separación de responsabilidades con modelo para la lógica de IA, vista para la interfaz de usuario y controlador para conectar componentes.",
    "ai-voice-feature7": "Funcionamiento Offline: Todo el procesamiento de voz ocurre localmente, protegiendo la privacidad del usuario y permitiendo la operación sin conectividad a internet.",
    
    // Project pages - Love Dog Game
    "lovedog-title": "Love Dog - Brackeys Game Jam 2025",
    "lovedog-category": "Desarrollo de Juegos con IA",
    "lovedog-overview": "Descripción del Proyecto",
    "lovedog-description1": "\"Love Dog\" es un conmovedor juego de plataformas 2D creado para la Brackeys Game Jam 2025, donde el tema era \"Conexiones\". En este juego, juegas como un perro leal con una misión: proteger la cita romántica de tu dueño de cualquier distracción que pueda arruinar su velada especial.",
    "lovedog-description2": "El juego combina plataformas, resolución de puzles y minijuegos mientras corres contra el tiempo para arreglar varios problemas domésticos antes de que perturben la cita de tu dueño. Con múltiples niveles de dificultad creciente a lo largo de tres \"noches\", necesitarás reflejos rápidos y habilidades para resolver problemas para asegurar el ambiente romántico perfecto.",
    "lovedog-description3": "Lo que hace único a este juego es que aproximadamente la mitad de los recursos, música y efectos de sonido fueron creados usando herramientas de IA. Las animaciones y pixel art fueron parcialmente generados con ComfyUI y modelos de IA ajustados, mostrando cómo la IA puede acelerar el desarrollo de juegos sin sacrificar la calidad visual. Este enfoque innovador permitió el rápido desarrollo del juego en el plazo de una semana manteniendo un estilo visual y de audio coherente.",
    "lovedog-features": "Características Principales",
    "lovedog-feature1": "Narrativa Centrada en el Personaje: Experimenta la historia desde la perspectiva de un perro leal determinado a proteger la felicidad de su dueño.",
    "lovedog-feature2": "Sistema de Dificultad Progresiva: Tres noches de desafíos crecientes con diferentes ajustes de dificultad que modifican el tiempo y el número de problemas.",
    "lovedog-feature3": "Múltiples Minijuegos: Participa en varios puzles interactivos incluyendo reparación de cables, puzles de contraseñas y desafíos de limpieza rápida.",
    "lovedog-feature4": "Medidor de Amor Dinámico: Un sistema sensible que rastrea cómo va la cita basándose en tu rendimiento al gestionar las distracciones.",
    "lovedog-feature5": "Animación 2D Expresiva: Encantadoras animaciones de personajes que dan vida al protagonista canino con acciones de correr, saltar y ladrar.",
    "lovedog-feature6": "Diseño de Sonido Inmersivo: Música ambiental que cambia según el estado de la cita, con efectos de sonido proporcionando retroalimentación sobre eventos del juego.",
    
    // Project Details - AI Agent with Voice
    "aivoice-overview-title": "Descripción del Proyecto",
    "aivoice-overview-p1": "El Agente de IA con Voz es una aplicación basada en Python que amplía la funcionalidad de los modelos de lenguaje grande (LLMs) añadiendo capacidades de entrada y salida de voz. Crea una interfaz de voz natural que permite a los usuarios tener conversaciones habladas con modelos de IA ejecutándose localmente a través de Ollama.",
    "aivoice-overview-p2": "Este proyecto combina reconocimiento de voz sin conexión con texto a voz de alta calidad para proporcionar una experiencia conversacional fluida. Al implementar una arquitectura Modelo-Vista-Controlador (MVC), la aplicación mantiene una clara separación de responsabilidades, haciéndola tanto mantenible como extensible.",
    "aivoice-overview-p3": "A diferencia de los asistentes de voz basados en la nube, esta aplicación se centra en la privacidad procesando toda la voz localmente, mientras ofrece una experiencia de interacción receptiva y natural. Los usuarios pueden elegir entre múltiples opciones de voz y conectarse a diferentes modelos de lenguaje según sus necesidades.",
    "aivoice-features-title": "Características Principales",
    "aivoice-feature1": "Entrada de Voz: Reconocimiento de voz sin conexión utilizando la biblioteca Vosk para transcripción privada y precisa del habla del usuario.",
    "aivoice-feature2": "Salida de Voz: Motores duales de texto a voz con XTTS-v2 para voces naturales de alta calidad y TTS del sistema como opción alternativa.",
    "aivoice-feature3": "Visualización de Conversación: Historial de conversación con código de colores que muestra tanto las entradas del usuario como las respuestas de la IA para fácil referencia.",
    "aivoice-feature4": "Soporte para Múltiples LLM: Conexión a diferentes modelos de lenguaje a través de Ollama, permitiendo a los usuarios elegir el modelo más apropiado para sus necesidades.",
    "aivoice-feature5": "Selección de Voz: Elección de múltiples voces para respuestas de IA, con soporte para clonación de voz personalizada.",
    "aivoice-feature6": "Arquitectura MVC: Clara separación de responsabilidades con modelo para lógica de IA, vista para IU y controlador para conectar componentes.",
    "aivoice-feature7": "Operación Sin Conexión: Todo el procesamiento de voz ocurre localmente, protegiendo la privacidad del usuario y permitiendo la operación sin conectividad a internet.",
    
    // Project Details - Love Dog Game
    "lovedog-overview-title": "Descripción del Proyecto",
    "lovedog-overview-p1": "'Love Dog' es un juego de plataformas 2D conmovedor creado para la Brackeys Game Jam 2025, donde el tema era 'Conexiones'. En este juego, juegas como un perro leal con una misión: proteger la cita romántica de tu dueño de cualquier distracción que pueda arruinar su velada especial.",
    "lovedog-overview-p2": "El juego presenta una combinación de plataformas, resolución de puzzles y mini-juegos mientras compites contra el tiempo para arreglar varios problemas domésticos antes de que perturben la cita de tu dueño. Con múltiples niveles de dificultad creciente a lo largo de tres 'noches', necesitarás reflejos rápidos y habilidades de resolución de problemas para asegurar la atmósfera romántica perfecta.",
    "lovedog-overview-p3": "Lo que hace único a este juego es que aproximadamente la mitad de los recursos, música y efectos de sonido fueron creados usando herramientas de IA. Las animaciones y el arte en píxeles fueron parcialmente generados con ComfyUI y modelos de IA ajustados, mostrando cómo la IA puede acelerar el desarrollo de juegos sin sacrificar la calidad visual. Este enfoque innovador permitió un desarrollo rápido del juego en un plazo de 1 semana manteniendo un estilo visual y de audio coherente.",
    "lovedog-features-title": "Características Principales",
    "lovedog-feature1": "Narrativa Centrada en el Personaje: Experimenta la historia desde la perspectiva de un perro leal determinado a proteger la felicidad de su dueño.",
    "lovedog-feature2": "Sistema de Dificultad Progresiva: Tres noches de desafíos crecientes con diferentes configuraciones de dificultad que ajustan el tiempo y número de problemas.",
    "lovedog-feature3": "Múltiples Minijuegos: Participa en varios puzzles interactivos incluyendo reparación de cables, puzzles de contraseñas y desafíos de limpieza rápida.",
    "lovedog-feature4": "Medidor de Amor Dinámico: Un sistema sensible que rastrea qué tan bien va la cita basado en tu rendimiento al gestionar distracciones.",
    "lovedog-feature5": "Animación 2D Expresiva: Encantadoras animaciones de personajes que dan vida al protagonista canino con acciones de correr, saltar y ladrar.",
    "lovedog-feature6": "Diseño de Sonido Inmersivo: Música ambiental que cambia según el estado de la cita, con efectos de sonido que proporcionan retroalimentación sobre eventos del juego.",
    
    // Navigation
    "nav-home": "Inicio",
    "nav-portfolio": "Portafolio",
    "nav-experience": "Experiencia",
    
    // Hero section
    "hero-greeting": "Hola, soy",
    "hero-title": "Senior Talent Partner y Desarrollador de IA",
    "hero-description": "M.B.A. con más de 4 años de experiencia en Adquisición de Talento para las regiones DACH y EMEA, especializado en reclutamiento de tecnología y ventas. Apasionado por el desarrollo e implementación de IA.",
    "hero-cta-portfolio": "Ver mi trabajo",
    "hero-cta-contact": "Contactarme",
    
    // Project preview section
    "preview-heading": "Proyectos recientes de IA",
    "ai-recruiting-title": "Asistente de Reclutamiento con IA",
    "ai-recruiting-desc": "Un LLM personalizado que ayuda a automatizar partes del proceso de reclutamiento, desde la selección inicial hasta la preparación de entrevistas.",
    "comfyui-title": "Flujos de trabajo personalizados en ComfyUI",
    "comfyui-desc": "Desarrollo de pipelines especializados para generación de imágenes con visuales de marca consistentes y producción de contenido creativo.",
    "localllm-title": "Integración Local de LLM",
    "localllm-desc": "Construí un sistema usando Ollama para ejecutar modelos de IA localmente para análisis y resumen de documentos centrado en la privacidad.",
    "view-details": "Ver detalles",
    
    // About section
    "about-heading": "Sobre mí",
    "about-p1": "Soy desarrollador y entusiasta de la IA, enfocado en crear soluciones innovadoras a través de agentes autónomos, LLMs personalizados y flujos de trabajo a medida. Mi pasión radica en desarrollar aplicaciones de IA que mejoren la productividad y creen nuevas oportunidades para empresas e individuos.",
    "about-p2": "Junto a mis proyectos técnicos de IA, aporto más de 4 años de experiencia como Senior Talent Partner para empresas tecnológicas en la región DACH. Esta combinación única me permite unir la experiencia técnica con el pensamiento estratégico centrado en las personas.",
    "about-p3": "Actualmente trabajo en varias iniciativas de IA, incluyendo agentes personalizados para automatización de reclutamiento, asistentes de aprendizaje personalizados y herramientas creativas utilizando ComfyUI y varios modelos de lenguaje de gran escala.",
    
    // Skills section
    "skills-heading": "Habilidades técnicas",
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
    "filter-local-llm": "IA Local",
    "filter-game": "Desarrollo de Juegos con IA",
    
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
    
    // Education
    "mba-degree": "Maestría en Administración de Empresas",
    "bachelor-degree": "Licenciatura en Negocios",
  }
};

// Set the default language
let currentLang = 'en';

// Function to update text content based on the selected language
function updateLanguage(lang) {
  currentLang = lang;
  
  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Update HTML lang attribute for screen readers
  document.documentElement.setAttribute('lang', lang);
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
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