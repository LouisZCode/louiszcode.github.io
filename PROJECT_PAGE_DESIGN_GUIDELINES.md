Project Page Design Guidelines & Standard Operating Procedure

Author: Luis Zermeno

Goal: Create high-conversion portfolio pages that appeal to Recruiters, Engineering Managers, and Clients.

1. Core Philosophy: The "Inverted Pyramid"

Every project page must follow this specific flow to satisfy different viewer attention spans:

The Scanner (Recruiter): Needs Title, One-Liner, Tech Stack, and Live Links immediately.

The Skeptic (Hiring Manager): Needs System Architecture and Code Snippets to prove depth.

The User (Client): Needs UI Screenshots and feature breakdowns.

2. Visual Identity & Tech Stack

Framework: Tailwind CSS (CDN or CLI).

Background: bg-[#0f172a] (Slate 950) - Deep Space Theme.

Card Backgrounds: bg-slate-800 or bg-slate-900.

Accent Colors: * Primary: text-sky-400 (Information)

Secondary: text-purple-400 (AI/Logic)

Success: text-emerald-400 (Live/Results)

Typography:

Headings: font-family: 'Space Grotesk', sans-serif;

Body: font-family: 'Inter', sans-serif;

3. Page Structure (Mandatory Sections)

Section A: Navigation

Position: Top left.

Content: Simple "← Back to Portfolio" link.

Style: Minimal, slate-400 hover to white.

Section B: The Hero (Above the Fold)

Layout: 2-Column Grid (Text Left, Visual Right).

Elements:

Status Badge: e.g., "Live Production App" (Emerald) or "Prototype" (Purple).

Headline: Project Name + 2-3 word category (e.g., "Spralingua: AI Language Tutor").

Pitch: Max 2 sentences. Focus on the problem solved.

Buttons: [Visit Live Site] (Primary) and [View Source] (Secondary).

Visual: High-fidelity screenshot, GIF, or Video. Rotate slightly (rotate-1) for style.

Section C: The "Tech Specs" Bar

Layout: Horizontal strip, full width.

Content: 4 Columns.

Stack: (e.g., Python, Flask).

AI/Core Tech: (e.g., Claude 3.5, Vosk).

Database: (e.g., PostgreSQL).

Deployment: (e.g., Railway, Docker).

Section D: The "Engineering Deep Dive" (CRITICAL)

Goal: Prove you are an Engineer, not just a Library user.

Component 1: The Architecture Diagram:

Use HTML/CSS to build a flow diagram (User → API → LLM → DB).

Do not just use text. Visualize the data flow.

Component 2: The Code Highlight:

Display a specific snippet of logic (e.g., a specific algorithm, a prompt engineering trick, or an optimization).

Rule: Never show boilerplate code (imports, setups). Show the hard part.

Section E: The Sidebar (Context)

Key Features: Bullet points of what the user can do.

Lessons Learned: Honest reflection on a challenge (e.g., "Handling latency," "Managing state").

4. HTML Template Structure

Use this skeleton for all new project pages:

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Tailwind & Fonts Setup -->
</head>
<body class="bg-[#0f172a] text-slate-300 font-body">

  <!-- Nav -->
  <nav>...</nav>

  <!-- Hero -->
  <header class="grid md:grid-cols-2">
    <!-- Text -->
    <div>
      <h1>Project Title</h1>
      <p>Problem statement.</p>
      <div class="buttons">...</div>
    </div>
    <!-- Image -->
    <div class="rotate-1">
      <img src="..." alt="Project Preview">
    </div>
  </header>

  <!-- Tech Bar -->
  <section class="border-y border-slate-800">
    <!-- 4 Columns of Tech Details -->
  </section>

  <!-- Main Content -->
  <main class="grid md:grid-cols-3 gap-12">
    
    <!-- Left Col (Narrative + Code) -->
    <div class="md:col-span-2">
      <h2>The Challenge</h2>
      <p>...</p>

      <h2>Architecture</h2>
      <!-- HTML CSS Diagram Here -->

      <h2>Key Implementation</h2>
      <!-- Code Block Here -->
    </div>

    <!-- Right Col (Sidebar) -->
    <aside>
      <h3>Features</h3>
      <ul>...</ul>
      <h3>Lessons Learned</h3>
      <p>...</p>
    </aside>

  </main>

  <footer>...</footer>
</body>
</html>


5. Content Checklist for New Projects

Before publishing a new page, ensure:

[ ] No Lorem Ipsum: All text describes the specific project.

[ ] Mobile Responsive: Stack (Tech Specs) collapses correctly on mobile.

[ ] Links Work: "View Source" points to the specific GitHub repo.

[ ] Business Value: The text mentions why this matters (e.g., "Reduced cost," "Improved speed").

[ ] Images: All images have alt tags and onerror fallbacks.