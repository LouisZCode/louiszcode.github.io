// Define translations
const translations = {
  en: {
    // Portfolio overview projects
    "ai-voice-overview-title": "AI Agent with Voice",
    "ai-voice-overview-desc": "A Python application that enables natural voice interaction with language models through offline speech recognition and high-quality text-to-speech capabilities.",
    "lovedog-overview-title": "Love Dog, AI Videogame Assets",
    "lovedog-overview-desc": "A charming 2D platformer built in Godot where you play as a loyal dog determined to protect your owner's romantic date. Manage multiple minigames and prevent distractions that could ruin their special evening.",
    
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
    
    // Love Dog Development Process section
    "lovedog-gameplay-preview": "Gameplay Preview",
    "lovedog-gameplay-caption": "Watch the dog protagonist in action protecting the date",
    "lovedog-development-title": "Development Process",
    "lovedog-development-p1": "The game was developed in one week for the Brackeys Game Jam 2025. Using the Godot Engine (version 4.3) and GDScript, I focused on creating a cohesive gameplay experience that blended platforming with minigames. The development was accelerated by leveraging AI tools to generate assets.",
    "lovedog-development-p2": "The development process included:",
    "lovedog-development-list1": "Conceptualizing the game design around the theme of \"Connections\"",
    "lovedog-development-list2": "Implementing core mechanics including player movement, interactions, and the problem management system",
    "lovedog-development-list3": "Designing and coding three unique minigames with escalating difficulty",
    "lovedog-development-list4": "Creating pixel art assets and animations for the game's characters and environment",
    "lovedog-development-list5": "Balancing gameplay difficulty across three progressive nights",
    "lovedog-development-list6": "Implementing audio design with dynamic music that responds to the game state",
    
    // Love Dog Technical Details
    "lovedog-tech-title": "Technical Highlights",
    "lovedog-tech1-title": "Godot Engine 4.3",
    "lovedog-tech1-desc": "Used for the game's core development, taking advantage of its 2D capabilities and scene system",
    "lovedog-tech2-title": "GDScript",
    "lovedog-tech2-desc": "Custom scripting for game mechanics, character controls, and minigame interactions",
    "lovedog-tech3-title": "AI-Generated Assets",
    "lovedog-tech3-desc": "Approximately 50% of assets, music, and sound effects were created using ComfyUI and other AI tools",
    "lovedog-tech4-title": "Dynamic Audio",
    "lovedog-tech4-desc": "Responsive music system that changes based on the state of the date",
    
    // Love Dog Challenges
    "lovedog-challenges-title": "Challenges & Solutions",
    "lovedog-challenge1-title": "Time Constraint",
    "lovedog-challenge1-problem": "Challenge: Developing a complete game with multiple systems in only 1 week.",
    "lovedog-challenge1-solution": "Solution: Prioritized core gameplay mechanics first, then leveraged AI tools like ComfyUI to generate assets, music, and sound effects efficiently.",
    "lovedog-challenge2-title": "Balancing Difficulty",
    "lovedog-challenge2-problem": "Challenge: Creating a difficulty curve that was challenging but not frustrating.",
    "lovedog-challenge2-solution": "Solution: Implemented a dynamic difficulty system that adjusts based on the night number, with carefully tuned parameters for problem frequency and time limits.",
    "lovedog-challenge3-title": "Minigame Integration",
    "lovedog-challenge3-problem": "Challenge: Seamlessly integrating multiple minigames without disrupting the main gameplay flow.",
    "lovedog-challenge3-solution": "Solution: Developed a flexible minigame manager system that handles transitions and maintains game state across different gameplay modes.",
    
    // Love Dog Results
    "lovedog-results-title": "Results & Takeaways",
    "lovedog-results-p1": "The game was successfully completed within the 1-week time constraint of the Brackeys Game Jam 2025. By leveraging AI tools like ComfyUI for asset generation, I was able to create a more polished experience than would otherwise have been possible in such a short timeframe.",
    "lovedog-results-p2": "Key learnings from this project include:",
    "lovedog-results-list1": "Effective scope management for game jam projects",
    "lovedog-results-list2": "Techniques for rapidly prototyping and implementing gameplay systems",
    "lovedog-results-list3": "Advanced use of Godot's signal system for event-driven gameplay",
    "lovedog-results-list4": "Creating compelling game feel through responsive controls and visual feedback",
    "lovedog-results-list5": "Integration of AI-generated art and animations with traditional game development",
    
    // Love Dog Reviews
    "lovedog-reviews-title": "Player Reviews",
    "lovedog-rating-text": "46 ratings from Brackeys Game Jam 2025.1",
    "lovedog-review1-author": "KelvinHM",
    "lovedog-review1-date": "February 2025",
    "lovedog-review1-content": "\"Originally this doesn't look much, but actually this feels like one of the better 'multi-tasking' games this jam in terms of playability. The gameplay is very smooth and clear. The three different types of minigames are nicely balanced and help the gameplay a lot. The house is quite big but thanks god you add a running feature.\"",
    "lovedog-review2-author": "Josep Valls",
    "lovedog-review2-date": "February 2025",
    "lovedog-review2-content": "\"This is a great entry. Lots of fun and lots to do. The amount of content and mechanics is remarkable and impressive for a single person team. Kudos on your hard work!\"",
    "lovedog-review3-author": "VoltekPlay",
    "lovedog-review3-date": "February 2025",
    "lovedog-review3-content": "\"Nice jam entry, I enjoyed playing it. Very pretty art style and smooth dog animations. Variety of minigames to get rid of distractions. Big house to explore with simple platforming mechanics. Overall, you did a nice job and made a solid entry!\"",
    
    // Love Dog Links
    "lovedog-links-title": "Links & Resources",
    "lovedog-link1-text": "GitHub Repository",
    "lovedog-link2-text": "Gameplay Video",
    "lovedog-link3-text": "Play the Game",
    "lovedog-link4-text": "Devlog",
    
    // AI Voice Development Process
    "ai-voice-development-title": "Development Process",
    "ai-voice-development-p1": "The development of this project focused on creating a modular, extensible system that could provide a natural voice interface to AI models while maintaining user privacy and control. The project was built using Python and several specialized libraries.",
    "ai-voice-development-p2": "The development process included:",
    "ai-voice-development-list1": "Designing a flexible MVC architecture to separate the AI logic, user interface, and control flow",
    "ai-voice-development-list2": "Implementing offline speech recognition using Vosk for privacy-focused voice input",
    "ai-voice-development-list3": "Building a hybrid text-to-speech system with XTTS-v2 for high-quality voices and system TTS as a reliable fallback",
    "ai-voice-development-list4": "Creating a responsive TKinter interface with intuitive controls and conversation history",
    "ai-voice-development-list5": "Developing an Ollama integration for connecting to locally running language models",
    "ai-voice-development-list6": "Implementing voice selection and custom voice options",
    "ai-voice-development-list7": "Thorough testing and optimization for responsiveness and performance",
    
    // AI Voice Technical Details
    "ai-voice-tech-title": "Technical Highlights",
    "ai-voice-tech1-title": "Python",
    "ai-voice-tech1-desc": "Core language used for application development with various specialized libraries",
    "ai-voice-tech2-title": "Vosk",
    "ai-voice-tech2-desc": "Offline speech recognition engine for private, accurate voice input processing",
    "ai-voice-tech3-title": "XTTS-v2",
    "ai-voice-tech3-desc": "Advanced deep learning text-to-speech for natural-sounding AI responses",
    "ai-voice-tech4-title": "TKinter",
    "ai-voice-tech4-desc": "Python's built-in GUI toolkit used to create the user interface",
    "ai-voice-tech5-title": "Ollama",
    "ai-voice-tech5-desc": "Local LLM server for running AI models without cloud dependencies",
    "ai-voice-tech6-title": "MVC Architecture",
    "ai-voice-tech6-desc": "Software design pattern used for clean separation of concerns",
    
    // AI Voice Challenges
    "ai-voice-challenges-title": "Challenges & Solutions",
    "ai-voice-challenge1-title": "Voice Recognition Accuracy",
    "ai-voice-challenge1-problem": "Challenge: Achieving reliable speech recognition without relying on cloud-based services.",
    "ai-voice-challenge1-solution": "Solution: Implemented Vosk, an offline speech recognition system with customizable models, and added silence detection with adaptive thresholds to improve accuracy in different environments.",
    "ai-voice-challenge2-title": "Natural-Sounding Speech",
    "ai-voice-challenge2-problem": "Challenge: Creating natural-sounding AI voices that don't break immersion during conversation.",
    "ai-voice-challenge2-solution": "Solution: Integrated XTTS-v2, a state-of-the-art neural text-to-speech system, while maintaining system TTS as a fallback. Added sentence splitting for better prosody and custom voice support.",
    "ai-voice-challenge3-title": "System Performance",
    "ai-voice-challenge3-problem": "Challenge: Ensuring responsive performance despite running speech recognition, LLM inference, and TTS simultaneously.",
    "ai-voice-challenge3-solution": "Solution: Implemented a multi-threaded architecture with background processing for speech recognition and TTS, along with asynchronous processing of audio to maintain UI responsiveness.",
    "ai-voice-challenge4-title": "Cross-Platform Compatibility",
    "ai-voice-challenge4-problem": "Challenge: Creating a consistent experience across different operating systems.",
    "ai-voice-challenge4-solution": "Solution: Designed fallback mechanisms for both speech recognition and TTS that automatically adapt to available system resources and capabilities.",
    
    // AI Voice Results
    "ai-voice-results-title": "Results & Implementation Details",
    "ai-voice-results-p1": "The AI Agent with Voice project successfully creates a seamless voice interface for interacting with AI models. The application demonstrates how advanced speech technologies can be combined with local LLMs to create privacy-focused voice assistants.",
    "ai-voice-results-p2": "The implementation follows the MVC pattern:",
    "ai-voice-results-list1": "Model (model.py): Handles communication with Ollama, maintains conversation history, and processes AI responses",
    "ai-voice-results-list2": "View (view.py): Implements the TKinter GUI with user controls and conversation display",
    "ai-voice-results-list3": "Controller (controller.py): Connects the model and view, manages speech recognition and TTS components",
    "ai-voice-results-p3": "Specialized components include:",
    "ai-voice-results-list4": "Speech Recognition (speech.py): Implements real-time voice input with Vosk, supporting word-by-word feedback and adaptive silence detection",
    "ai-voice-results-list5": "Text-to-Speech (tts.py): Provides high-quality voice output with XTTS-v2, with system TTS fallback and custom voice support",
    "ai-voice-results-p4": "Key learning outcomes from this project include:",
    "ai-voice-results-list6": "Building MVC-structured applications for complex AI projects",
    "ai-voice-results-list7": "Working with offline speech recognition and neural TTS systems",
    "ai-voice-results-list8": "Creating responsive, multi-threaded applications that handle resource-intensive AI tasks",
    "ai-voice-results-list9": "Designing user interfaces that provide natural conversation experiences",
    "ai-voice-results-list10": "Integrating with local LLM servers for privacy-focused AI applications",
    
    // AI Voice Links
    "ai-voice-links-title": "Links & Resources",
    "ai-voice-link1-text": "GitHub Repository",
    "ai-voice-link2-text": "Documentation",
    "ai-voice-link3-text": "Download Release", 
    "ai-voice-link4-text": "Demo Video",
    
    // Construction Banner
    "construction-message": "Website under active development - New features being added regularly!",
    
    // Navigation
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-experience": "Experience",
    
    // Hero section
    "hero-greeting": "Hello, I'm",
    "hero-ai-credit": "This website was created with the help of AI ✨",
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
    // Portfolio overview projects
    "ai-voice-overview-title": "KI-Agent mit Sprache",
    "ai-voice-overview-desc": "Eine Python-Anwendung, die natürliche Sprachinteraktion mit Sprachmodellen durch Offline-Spracherkennung und hochwertige Text-zu-Sprache-Fähigkeiten ermöglicht.",
    "lovedog-overview-title": "Love Dog, KI-Videospiel-Assets",
    "lovedog-overview-desc": "Ein charmantes 2D-Plattformspiel, entwickelt in Godot, in dem du als treuer Hund spielst, der entschlossen ist, das romantische Date seines Besitzers zu schützen. Verwalte mehrere Minispiele und verhindere Ablenkungen, die den besonderen Abend ruinieren könnten.",
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
    
    // Love Dog Development Process section
    "lovedog-gameplay-preview": "Gameplay-Vorschau",
    "lovedog-gameplay-caption": "Sehen Sie den Hund-Protagonisten in Aktion beim Schutz des Dates",
    "lovedog-development-title": "Entwicklungsprozess",
    "lovedog-development-p1": "Das Spiel wurde innerhalb einer Woche für die Brackeys Game Jam 2025 entwickelt. Mit der Godot Engine (Version 4.3) und GDScript konzentrierte ich mich darauf, ein zusammenhängendes Spielerlebnis zu schaffen, das Plattform-Elemente mit Minispielen verbindet. Die Entwicklung wurde durch den Einsatz von KI-Tools zur Generierung von Assets beschleunigt.",
    "lovedog-development-p2": "Der Entwicklungsprozess umfasste:",
    "lovedog-development-list1": "Konzeptualisierung des Spieldesigns rund um das Thema \"Verbindungen\"",
    "lovedog-development-list2": "Implementierung von Kernmechaniken wie Spielerbewegung, Interaktionen und dem Problem-Management-System",
    "lovedog-development-list3": "Design und Programmierung von drei einzigartigen Minispielen mit steigendem Schwierigkeitsgrad",
    "lovedog-development-list4": "Erstellung von Pixel-Art-Assets und Animationen für die Charaktere und Umgebung des Spiels",
    "lovedog-development-list5": "Ausbalancierung des Schwierigkeitsgrads über drei fortschreitende Nächte",
    "lovedog-development-list6": "Implementierung eines Audiodesigns mit dynamischer Musik, die auf den Spielzustand reagiert",
    
    // Love Dog Technical Details
    "lovedog-tech-title": "Technische Highlights",
    "lovedog-tech1-title": "Godot Engine 4.3",
    "lovedog-tech1-desc": "Verwendet für die Kernentwicklung des Spiels, unter Ausnutzung der 2D-Fähigkeiten und des Szenensystems",
    "lovedog-tech2-title": "GDScript",
    "lovedog-tech2-desc": "Benutzerdefinierte Skripte für Spielmechaniken, Charaktersteuerung und Minispiel-Interaktionen",
    "lovedog-tech3-title": "KI-generierte Assets",
    "lovedog-tech3-desc": "Etwa 50% der Assets, Musik und Soundeffekte wurden mit ComfyUI und anderen KI-Tools erstellt",
    "lovedog-tech4-title": "Dynamisches Audio",
    "lovedog-tech4-desc": "Reaktives Musiksystem, das sich je nach Status des Dates ändert",
    
    // Love Dog Challenges
    "lovedog-challenges-title": "Herausforderungen & Lösungen",
    "lovedog-challenge1-title": "Zeitbeschränkung",
    "lovedog-challenge1-problem": "Herausforderung: Entwicklung eines vollständigen Spiels mit mehreren Systemen in nur einer Woche.",
    "lovedog-challenge1-solution": "Lösung: Priorisierung der Kern-Spielmechaniken, dann Nutzung von KI-Tools wie ComfyUI zur effizienten Generierung von Assets, Musik und Soundeffekten.",
    "lovedog-challenge2-title": "Ausbalancierung der Schwierigkeit",
    "lovedog-challenge2-problem": "Herausforderung: Erstellung einer Schwierigkeitskurve, die herausfordernd, aber nicht frustrierend ist.",
    "lovedog-challenge2-solution": "Lösung: Implementierung eines dynamischen Schwierigkeitssystems, das sich basierend auf der Nachtnummer anpasst, mit sorgfältig abgestimmten Parametern für Problemhäufigkeit und Zeitlimits.",
    "lovedog-challenge3-title": "Minispiel-Integration",
    "lovedog-challenge3-problem": "Herausforderung: Nahtlose Integration mehrerer Minispiele ohne den Hauptspielfluss zu stören.",
    "lovedog-challenge3-solution": "Lösung: Entwicklung eines flexiblen Minispiel-Manager-Systems, das Übergänge handhabt und den Spielzustand über verschiedene Spielmodi hinweg beibehält.",
    
    // Love Dog Results
    "lovedog-results-title": "Ergebnisse & Erkenntnisse",
    "lovedog-results-p1": "Das Spiel wurde erfolgreich innerhalb der einwöchigen Zeitbeschränkung der Brackeys Game Jam 2025, abgeschlossen. Durch den Einsatz von KI-Tools wie ComfyUI zur Asset-Generierung konnte ich ein poliertes Erlebnis schaffen, das in so kurzer Zeit sonst nicht möglich gewesen wäre.",
    "lovedog-results-p2": "Wichtige Erkenntnisse aus diesem Projekt umfassen:",
    "lovedog-results-list1": "Effektives Umfangsmanagement für Game-Jam-Projekte",
    "lovedog-results-list2": "Techniken für schnelles Prototyping und Implementierung von Spielsystemen",
    "lovedog-results-list3": "Fortgeschrittene Nutzung von Godots Signal-System für ereignisgesteuertes Gameplay",
    "lovedog-results-list4": "Erschaffung eines überzeugenden Spielgefühls durch reaktionsschnelle Steuerung und visuelles Feedback",
    "lovedog-results-list5": "Integration von KI-generierter Kunst und Animationen mit traditioneller Spieleentwicklung",
    
    // Love Dog Reviews
    "lovedog-reviews-title": "Spielerbewertungen",
    "lovedog-rating-text": "46 Bewertungen von der Brackeys Game Jam 2025.1",
    "lovedog-review1-author": "KelvinHM",
    "lovedog-review1-date": "Februar 2025",
    "lovedog-review1-content": "\"Ursprünglich sieht es nicht nach viel aus, aber tatsächlich fühlt es sich wie eines der besseren 'Multitasking'-Spiele dieses Jams in Bezug auf die Spielbarkeit an. Das Gameplay ist sehr flüssig und klar. Die drei verschiedenen Arten von Minispielen sind gut ausbalanciert und unterstützen das Gameplay erheblich. Das Haus ist ziemlich groß, aber Gott sei Dank haben Sie eine Lauffunktion hinzugefügt.\"",
    "lovedog-review2-author": "Josep Valls",
    "lovedog-review2-date": "Februar 2025",
    "lovedog-review2-content": "\"Dies ist ein großartiger Beitrag. Viel Spaß und viel zu tun. Die Menge an Inhalten und Mechaniken ist bemerkenswert und beeindruckend für ein Ein-Personen-Team. Respekt für deine harte Arbeit!\"",
    "lovedog-review3-author": "VoltekPlay",
    "lovedog-review3-date": "Februar 2025",
    "lovedog-review3-content": "\"Schöner Jam-Beitrag, ich habe es gerne gespielt. Sehr hübscher Kunststil und flüssige Hundeanimationen. Vielfalt an Minispielen, um Ablenkungen loszuwerden. Großes Haus zum Erkunden mit einfachen Plattform-Mechaniken. Insgesamt hast du gute Arbeit geleistet und einen soliden Beitrag geliefert!\"",
    
    // Love Dog Links
    "lovedog-links-title": "Links & Ressourcen",
    "lovedog-link1-text": "GitHub-Repository",
    "lovedog-link2-text": "Gameplay-Video",
    "lovedog-link3-text": "Spiel spielen",
    "lovedog-link4-text": "Entwicklungslog",
    
    // AI Voice Development Process
    "ai-voice-development-title": "Entwicklungsprozess",
    "ai-voice-development-p1": "Die Entwicklung dieses Projekts konzentrierte sich darauf, ein modulares, erweiterbares System zu schaffen, das eine natürliche Sprachschnittstelle zu KI-Modellen bieten konnte, während gleichzeitig Benutzerprivatsphäre und -kontrolle gewährleistet wurden. Das Projekt wurde mit Python und mehreren spezialisierten Bibliotheken entwickelt.",
    "ai-voice-development-p2": "Der Entwicklungsprozess umfasste:",
    "ai-voice-development-list1": "Design einer flexiblen MVC-Architektur zur Trennung von KI-Logik, Benutzeroberfläche und Kontrollfluss",
    "ai-voice-development-list2": "Implementierung von Offline-Spracherkennung mit Vosk für datenschutzorientierte Spracheingabe",
    "ai-voice-development-list3": "Aufbau eines hybriden Text-zu-Sprache-Systems mit XTTS-v2 für hochwertige Stimmen und System-TTS als zuverlässige Fallback-Option",
    "ai-voice-development-list4": "Erstellung einer responsiven TKinter-Schnittstelle mit intuitiven Bedienungselementen und Gesprächsverlauf",
    "ai-voice-development-list5": "Entwicklung einer Ollama-Integration für die Verbindung zu lokal laufenden Sprachmodellen",
    "ai-voice-development-list6": "Implementierung von Stimmauswahl und benutzerdefinierten Stimmoptionen",
    "ai-voice-development-list7": "Gründliche Tests und Optimierung für Reaktionsfähigkeit und Leistung",
    
    // AI Voice Technical Details
    "ai-voice-tech-title": "Technische Highlights",
    "ai-voice-tech1-title": "Python",
    "ai-voice-tech1-desc": "Kernsprache für die Anwendungsentwicklung mit verschiedenen spezialisierten Bibliotheken",
    "ai-voice-tech2-title": "Vosk",
    "ai-voice-tech2-desc": "Offline-Spracherkennungs-Engine für private, genaue Spracheingabeverarbeitung",
    "ai-voice-tech3-title": "XTTS-v2",
    "ai-voice-tech3-desc": "Fortgeschrittenes Deep-Learning-Text-zu-Sprache für natürlich klingende KI-Antworten",
    "ai-voice-tech4-title": "TKinter",
    "ai-voice-tech4-desc": "Pythons eingebautes GUI-Toolkit zur Erstellung der Benutzeroberfläche",
    "ai-voice-tech5-title": "Ollama",
    "ai-voice-tech5-desc": "Lokaler LLM-Server zum Ausführen von KI-Modellen ohne Cloud-Abhängigkeiten",
    "ai-voice-tech6-title": "MVC-Architektur",
    "ai-voice-tech6-desc": "Software-Design-Muster für saubere Trennung der Zuständigkeiten",
    
    // AI Voice Challenges
    "ai-voice-challenges-title": "Herausforderungen & Lösungen",
    "ai-voice-challenge1-title": "Spracherkennungsgenauigkeit",
    "ai-voice-challenge1-problem": "Herausforderung: Zuverlässige Spracherkennung ohne Abhängigkeit von cloudbasierten Services erreichen.",
    "ai-voice-challenge1-solution": "Lösung: Implementierung von Vosk, einem Offline-Spracherkennungssystem mit anpassbaren Modellen, und Hinzufügung von Stilleerkennnung mit adaptiven Schwellenwerten zur Verbesserung der Genauigkeit in verschiedenen Umgebungen.",
    "ai-voice-challenge2-title": "Natürlich klingende Sprache",
    "ai-voice-challenge2-problem": "Herausforderung: Natürlich klingende KI-Stimmen schaffen, die die Immersion während der Konversation nicht unterbrechen.",
    "ai-voice-challenge2-solution": "Lösung: Integration von XTTS-v2, einem hochmodernen neuralen Text-zu-Sprache-System, bei gleichzeitiger Beibehaltung von System-TTS als Fallback. Hinzufügung von Satzteilung für bessere Prosodie und Unterstützung benutzerdefinierter Stimmen.",
    "ai-voice-challenge3-title": "Systemleistung",
    "ai-voice-challenge3-problem": "Herausforderung: Reaktionsfähige Leistung trotz gleichzeitigem Ausführen von Spracherkennung, LLM-Inferenz und TTS gewährleisten.",
    "ai-voice-challenge3-solution": "Lösung: Implementierung einer multi-threaded Architektur mit Hintergrundverarbeitung für Spracherkennung und TTS, zusammen mit asynchroner Audioverarbeitung zur Aufrechterhaltung der UI-Reaktionsfähigkeit.",
    "ai-voice-challenge4-title": "Plattformübergreifende Kompatibilität",
    "ai-voice-challenge4-problem": "Herausforderung: Konsistente Erfahrung über verschiedene Betriebssysteme hinweg schaffen.",
    "ai-voice-challenge4-solution": "Lösung: Design von Fallback-Mechanismen sowohl für Spracherkennung als auch TTS, die sich automatisch an verfügbare Systemressourcen und -fähigkeiten anpassen.",
    
    // AI Voice Results
    "ai-voice-results-title": "Ergebnisse & Implementierungsdetails",
    "ai-voice-results-p1": "Das KI-Agent mit Sprachfunktion-Projekt schafft erfolgreich eine nahtlose Sprachschnittstelle für die Interaktion mit KI-Modellen. Die Anwendung demonstriert, wie fortgeschrittene Sprachtechnologien mit lokalen LLMs kombiniert werden können, um datenschutzorientierte Sprachassistenten zu erstellen.",
    "ai-voice-results-p2": "Die Implementierung folgt dem MVC-Muster:",
    "ai-voice-results-list1": "Modell (model.py): Verwaltet die Kommunikation mit Ollama, behält den Gesprächsverlauf bei und verarbeitet KI-Antworten",
    "ai-voice-results-list2": "Ansicht (view.py): Implementiert die TKinter-GUI mit Benutzersteuerungen und Gesprächsanzeige",
    "ai-voice-results-list3": "Controller (controller.py): Verbindet Modell und Ansicht, verwaltet Spracherkennungs- und TTS-Komponenten",
    "ai-voice-results-p3": "Spezialisierte Komponenten umfassen:",
    "ai-voice-results-list4": "Spracherkennung (speech.py): Implementiert Echtzeit-Spracheingabe mit Vosk, unterstützt Wort-für-Wort-Feedback und adaptive Stilleerkennung",
    "ai-voice-results-list5": "Text-zu-Sprache (tts.py): Bietet hochwertige Sprachausgabe mit XTTS-v2, mit System-TTS-Fallback und Unterstützung benutzerdefinierter Stimmen",
    "ai-voice-results-p4": "Wichtige Lernergebnisse aus diesem Projekt umfassen:",
    "ai-voice-results-list6": "Aufbau von MVC-strukturierten Anwendungen für komplexe KI-Projekte",
    "ai-voice-results-list7": "Arbeit mit Offline-Spracherkennung und neuralen TTS-Systemen",
    "ai-voice-results-list8": "Erstellung reaktionsfähiger, multi-threaded Anwendungen, die ressourcenintensive KI-Aufgaben bewältigen",
    "ai-voice-results-list9": "Design von Benutzeroberflächen, die natürliche Gesprächserfahrungen bieten",
    "ai-voice-results-list10": "Integration mit lokalen LLM-Servern für datenschutzorientierte KI-Anwendungen",
    
    // AI Voice Links
    "ai-voice-links-title": "Links & Ressourcen",
    "ai-voice-link1-text": "GitHub Repository",
    "ai-voice-link2-text": "Dokumentation",
    "ai-voice-link3-text": "Release herunterladen",
    "ai-voice-link4-text": "Demo-Video",
    
    // Construction Banner
    "construction-message": "Website in aktiver Entwicklung - Neue Features werden regelmäßig hinzugefügt!",
    
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
    "hero-ai-credit": "Diese Website wurde mit Hilfe von KI erstellt ✨",
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
    "honeywell-position": "Human Resources Generalist, Leiter Kundenerfahrung",
    "honeywell-description": "Verarbeitung von allgemeinen Datentransaktionen für alle neuen EMEA- und LATAM-Honeywell-Mitarbeiter sowie Verwaltung der HR-Datenbank und Koordination von über 10 HR-Programmen.",
    "honeywell-achievement": "Bewältigung eines 300%-Anstiegs des Transaktionsvolumens mit bestehenden Ressourcen durch Prozessverbesserungen und automatisierte Lösungen.",
    
    // Education
    "mba-degree": "Master in Betriebswirtschaftslehre",
    "bachelor-degree": "Bachelor in Betriebswirtschaft",
  },
  
  es: {
    // Portfolio overview projects
    "ai-voice-overview-title": "Agente de IA con Voz",
    "ai-voice-overview-desc": "Una aplicación Python que permite la interacción natural por voz con modelos de lenguaje mediante reconocimiento de voz sin conexión y capacidades de texto a voz de alta calidad.",
    "lovedog-overview-title": "Love Dog, Recursos de Videojuego con IA",
    "lovedog-overview-desc": "Un encantador juego de plataformas 2D construido en Godot donde juegas como un perro leal decidido a proteger la cita romántica de tu dueño. Gestiona múltiples minijuegos y evita distracciones que podrían arruinar su noche especial.",
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
    
    // Love Dog Development Process section
    "lovedog-gameplay-preview": "Vista previa del Gameplay",
    "lovedog-gameplay-caption": "Mira al protagonista canino en acción protegiendo la cita",
    "lovedog-development-title": "Proceso de Desarrollo",
    "lovedog-development-p1": "El juego fue desarrollado en una semana para el Brackeys Game Jam 2025. Usando el Motor Godot (versión 4.3) y GDScript, me enfoqué en crear una experiencia de juego cohesiva que combinara plataformas con minijuegos. El desarrollo se aceleró aprovechando herramientas de IA para generar recursos.",
    "lovedog-development-p2": "El proceso de desarrollo incluyó:",
    "lovedog-development-list1": "Conceptualización del diseño del juego en torno al tema de \"Conexiones\"",
    "lovedog-development-list2": "Implementación de mecánicas principales incluyendo movimiento del jugador, interacciones y el sistema de gestión de problemas",
    "lovedog-development-list3": "Diseño y programación de tres minijuegos únicos con dificultad creciente",
    "lovedog-development-list4": "Creación de recursos de pixel art y animaciones para los personajes y el entorno del juego",
    "lovedog-development-list5": "Equilibrio de la dificultad del juego a lo largo de tres noches progresivas",
    "lovedog-development-list6": "Implementación de diseño de audio con música dinámica que responde al estado del juego",
    
    // Love Dog Technical Details
    "lovedog-tech-title": "Aspectos Técnicos Destacados",
    "lovedog-tech1-title": "Motor Godot 4.3",
    "lovedog-tech1-desc": "Utilizado para el desarrollo principal del juego, aprovechando sus capacidades 2D y sistema de escenas",
    "lovedog-tech2-title": "GDScript",
    "lovedog-tech2-desc": "Programación personalizada para mecánicas de juego, controles de personajes e interacciones de minijuegos",
    "lovedog-tech3-title": "Recursos Generados por IA",
    "lovedog-tech3-desc": "Aproximadamente el 50% de los recursos, música y efectos de sonido fueron creados usando ComfyUI y otras herramientas de IA",
    "lovedog-tech4-title": "Audio Dinámico",
    "lovedog-tech4-desc": "Sistema de música responsivo que cambia según el estado de la cita",
    
    // Love Dog Challenges
    "lovedog-challenges-title": "Desafíos y Soluciones",
    "lovedog-challenge1-title": "Restricción de Tiempo",
    "lovedog-challenge1-problem": "Desafío: Desarrollar un juego completo con múltiples sistemas en solo 1 semana.",
    "lovedog-challenge1-solution": "Solución: Prioricé primero las mecánicas principales del juego, luego aproveché herramientas de IA como ComfyUI para generar recursos, música y efectos de sonido de manera eficiente.",
    "lovedog-challenge2-title": "Equilibrio de Dificultad",
    "lovedog-challenge2-problem": "Desafío: Crear una curva de dificultad que fuera desafiante pero no frustrante.",
    "lovedog-challenge2-solution": "Solución: Implementé un sistema de dificultad dinámica que se ajusta según el número de noche, con parámetros cuidadosamente ajustados para la frecuencia de problemas y límites de tiempo.",
    "lovedog-challenge3-title": "Integración de Minijuegos",
    "lovedog-challenge3-problem": "Desafío: Integrar perfectamente múltiples minijuegos sin interrumpir el flujo principal del juego.",
    "lovedog-challenge3-solution": "Solución: Desarrollé un sistema flexible de gestión de minijuegos que maneja las transiciones y mantiene el estado del juego a través de diferentes modos de juego.",
    
    // Love Dog Results
    "lovedog-results-title": "Resultados y Aprendizajes",
    "lovedog-results-p1": "El juego se completó exitosamente dentro de la restricción de tiempo de 1 semana del Brackeys Game Jam 2025. Al aprovechar herramientas de IA como ComfyUI para la generación de recursos, pude crear una experiencia más pulida de lo que hubiera sido posible en un plazo tan corto.",
    "lovedog-results-p2": "Aprendizajes clave de este proyecto incluyen:",
    "lovedog-results-list1": "Gestión efectiva del alcance para proyectos de game jam",
    "lovedog-results-list2": "Técnicas para prototipado rápido e implementación de sistemas de juego",
    "lovedog-results-list3": "Uso avanzado del sistema de señales de Godot para gameplay orientado a eventos",
    "lovedog-results-list4": "Creación de sensaciones de juego convincentes mediante controles responsivos y retroalimentación visual",
    "lovedog-results-list5": "Integración de arte y animaciones generados por IA con desarrollo de juegos tradicional",
    
    // Love Dog Reviews
    "lovedog-reviews-title": "Reseñas de Jugadores",
    "lovedog-rating-text": "46 calificaciones del Brackeys Game Jam 2025.1",
    "lovedog-review1-author": "KelvinHM",
    "lovedog-review1-date": "Febrero 2025",
    "lovedog-review1-content": "\"Originalmente no parece mucho, pero en realidad se siente como uno de los mejores juegos de 'multitarea' de este jam en términos de jugabilidad. El gameplay es muy fluido y claro. Los tres diferentes tipos de minijuegos están bien equilibrados y ayudan mucho a la jugabilidad. La casa es bastante grande pero gracias a Dios añadiste una función para correr.\"",
    "lovedog-review2-author": "Josep Valls",
    "lovedog-review2-date": "Febrero 2025",
    "lovedog-review2-content": "\"Esta es una gran participación. Mucha diversión y muchas cosas que hacer. La cantidad de contenido y mecánicas es notable e impresionante para un equipo de una sola persona. ¡Felicitaciones por tu arduo trabajo!\"",
    "lovedog-review3-author": "VoltekPlay",
    "lovedog-review3-date": "Febrero 2025",
    "lovedog-review3-content": "\"Buena participación en el jam, disfruté jugándolo. Estilo artístico muy bonito y animaciones fluidas del perro. Variedad de minijuegos para deshacerse de las distracciones. Gran casa para explorar con mecánicas de plataformas simples. En general, hiciste un buen trabajo y creaste una participación sólida!\"",
    
    // Love Dog Links
    "lovedog-links-title": "Enlaces y Recursos",
    "lovedog-link1-text": "Repositorio GitHub",
    "lovedog-link2-text": "Video de Gameplay",
    "lovedog-link3-text": "Jugar el Juego",
    "lovedog-link4-text": "Devlog",
    
    // AI Voice Development Process
    "ai-voice-development-title": "Proceso de Desarrollo",
    "ai-voice-development-p1": "El desarrollo de este proyecto se centró en crear un sistema modular y extensible que pudiera proporcionar una interfaz de voz natural para modelos de IA mientras mantenía la privacidad y el control del usuario. El proyecto fue construido usando Python y varias bibliotecas especializadas.",
    "ai-voice-development-p2": "El proceso de desarrollo incluyó:",
    "ai-voice-development-list1": "Diseño de una arquitectura MVC flexible para separar la lógica de IA, la interfaz de usuario y el flujo de control",
    "ai-voice-development-list2": "Implementación del reconocimiento de voz offline usando Vosk para entrada de voz centrada en la privacidad",
    "ai-voice-development-list3": "Construcción de un sistema híbrido de texto a voz con XTTS-v2 para voces de alta calidad y TTS del sistema como respaldo confiable",
    "ai-voice-development-list4": "Creación de una interfaz TKinter responsiva con controles intuitivos e historial de conversación",
    "ai-voice-development-list5": "Desarrollo de una integración con Ollama para conectar con modelos de lenguaje ejecutándose localmente",
    "ai-voice-development-list6": "Implementación de selección de voz y opciones de voz personalizadas",
    "ai-voice-development-list7": "Pruebas exhaustivas y optimización para capacidad de respuesta y rendimiento",
    
    // AI Voice Technical Details
    "ai-voice-tech-title": "Aspectos Técnicos Destacados",
    "ai-voice-tech1-title": "Python",
    "ai-voice-tech1-desc": "Lenguaje principal utilizado para el desarrollo de aplicaciones con varias bibliotecas especializadas",
    "ai-voice-tech2-title": "Vosk",
    "ai-voice-tech2-desc": "Motor de reconocimiento de voz offline para procesamiento privado y preciso de entrada de voz",
    "ai-voice-tech3-title": "XTTS-v2",
    "ai-voice-tech3-desc": "Sistema avanzado de texto a voz con deep learning para respuestas de IA que suenan naturales",
    "ai-voice-tech4-title": "TKinter",
    "ai-voice-tech4-desc": "Toolkit GUI integrado de Python utilizado para crear la interfaz de usuario",
    "ai-voice-tech5-title": "Ollama",
    "ai-voice-tech5-desc": "Servidor LLM local para ejecutar modelos de IA sin dependencias de la nube",
    "ai-voice-tech6-title": "Arquitectura MVC",
    "ai-voice-tech6-desc": "Patrón de diseño de software utilizado para separación limpia de responsabilidades",
    
    // AI Voice Challenges
    "ai-voice-challenges-title": "Desafíos y Soluciones",
    "ai-voice-challenge1-title": "Precisión del Reconocimiento de Voz",
    "ai-voice-challenge1-problem": "Desafío: Lograr un reconocimiento de voz confiable sin depender de servicios basados en la nube.",
    "ai-voice-challenge1-solution": "Solución: Implementé Vosk, un sistema de reconocimiento de voz offline con modelos personalizables, y agregué detección de silencio con umbrales adaptativos para mejorar la precisión en diferentes entornos.",
    "ai-voice-challenge2-title": "Habla que Suena Natural",
    "ai-voice-challenge2-problem": "Desafío: Crear voces de IA que suenen naturales y no rompan la inmersión durante la conversación.",
    "ai-voice-challenge2-solution": "Solución: Integré XTTS-v2, un sistema neuronal de texto a voz de vanguardia, mientras mantenía el TTS del sistema como respaldo. Agregué división de oraciones para mejor prosodia y soporte de voz personalizada.",
    "ai-voice-challenge3-title": "Rendimiento del Sistema",
    "ai-voice-challenge3-problem": "Desafío: Asegurar rendimiento responsivo a pesar de ejecutar reconocimiento de voz, inferencia LLM y TTS simultáneamente.",
    "ai-voice-challenge3-solution": "Solución: Implementé una arquitectura multi-hilo con procesamiento en segundo plano para reconocimiento de voz y TTS, junto con procesamiento asíncrono de audio para mantener la capacidad de respuesta de la UI.",
    "ai-voice-challenge4-title": "Compatibilidad Multiplataforma",
    "ai-voice-challenge4-problem": "Desafío: Crear una experiencia consistente a través de diferentes sistemas operativos.",
    "ai-voice-challenge4-solution": "Solución: Diseñé mecanismos de respaldo tanto para reconocimiento de voz como para TTS que se adaptan automáticamente a los recursos y capacidades del sistema disponibles.",
    
    // AI Voice Results
    "ai-voice-results-title": "Resultados y Detalles de Implementación",
    "ai-voice-results-p1": "El proyecto Agente de IA con Voz crea exitosamente una interfaz de voz fluida para interactuar con modelos de IA. La aplicación demuestra cómo las tecnologías avanzadas de habla pueden combinarse con LLMs locales para crear asistentes de voz centrados en la privacidad.",
    "ai-voice-results-p2": "La implementación sigue el patrón MVC:",
    "ai-voice-results-list1": "Modelo (model.py): Maneja la comunicación con Ollama, mantiene el historial de conversación y procesa respuestas de IA",
    "ai-voice-results-list2": "Vista (view.py): Implementa la GUI de TKinter con controles de usuario y visualización de conversación",
    "ai-voice-results-list3": "Controlador (controller.py): Conecta el modelo y la vista, gestiona los componentes de reconocimiento de voz y TTS",
    "ai-voice-results-p3": "Los componentes especializados incluyen:",
    "ai-voice-results-list4": "Reconocimiento de Voz (speech.py): Implementa entrada de voz en tiempo real con Vosk, soportando retroalimentación palabra por palabra y detección adaptativa de silencio",
    "ai-voice-results-list5": "Texto a Voz (tts.py): Proporciona salida de voz de alta calidad con XTTS-v2, con respaldo de TTS del sistema y soporte de voz personalizada",
    "ai-voice-results-p4": "Los principales resultados de aprendizaje de este proyecto incluyen:",
    "ai-voice-results-list6": "Construcción de aplicaciones estructuradas con MVC para proyectos complejos de IA",
    "ai-voice-results-list7": "Trabajo con reconocimiento de voz offline y sistemas neuronales de TTS",
    "ai-voice-results-list8": "Creación de aplicaciones responsivas y multi-hilo que manejan tareas intensivas de IA",
    "ai-voice-results-list9": "Diseño de interfaces de usuario que proporcionan experiencias de conversación naturales",
    "ai-voice-results-list10": "Integración con servidores LLM locales para aplicaciones de IA centradas en la privacidad",
    
    // AI Voice Links
    "ai-voice-links-title": "Enlaces y Recursos",
    "ai-voice-link1-text": "Repositorio GitHub",
    "ai-voice-link2-text": "Documentación",
    "ai-voice-link3-text": "Descargar Release",
    "ai-voice-link4-text": "Video Demo",
    
    // Construction Banner
    "construction-message": "Sitio web en desarrollo activo - ¡Se agregan nuevas características regularmente!",
    
    // Navigation
    "nav-home": "Inicio",
    "nav-portfolio": "Portafolio",
    "nav-experience": "Experiencia",
    
    // Hero section
    "hero-greeting": "Hola, soy",
    "hero-ai-credit": "Este sitio web fue creado con la ayuda de IA ✨",
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
    "honeywell-description": "Procesamiento de transacciones generales de datos para todos los nuevos empleados de Honeywell en EMEA y LATAM, así como administración de la base de datos de RRHH y coordinación de más de 10 programas de RRHH.",
    "honeywell-achievement": "Manejo de un aumento del 300% en el volumen de transacciones con los recursos existentes a través de mejoras de procesos y soluciones automatizadas.",
    
    // Education
    "mba-degree": "Maestría en Administración de Empresas",
    "bachelor-degree": "Licenciatura en Negocios",
  }
};

// Set the default language
let currentLang = 'en';

// Function to update project links based on language
function updateProjectLinks(lang) {
  document.querySelectorAll('.project-link').forEach(link => {
    const project = link.getAttribute('data-project');
    if (project) {
      let newHref;
      if (lang === 'de') {
        newHref = `${project}-de.html`;
      } else if (lang === 'es') {
        newHref = `${project}-es.html`;
      } else {
        newHref = `projects/${project}.html`;
      }
      link.setAttribute('href', newHref);
    }
  });
}

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
  
  // Update project links based on language
  updateProjectLinks(lang);
  
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