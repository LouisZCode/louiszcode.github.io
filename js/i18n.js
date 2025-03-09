// Define translations
const translations = {
  en: {
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