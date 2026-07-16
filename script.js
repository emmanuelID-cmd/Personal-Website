const skillGroups = [
  {
    title: "Core Competencies",
    skills: [
      "Operations Management",
      "Project Coordination",
      "Program Support",
      "Stakeholder Engagement",
      "Compliance Oversight",
      "Process Improvement",
      "Administrative Operations",
      "AI-Assisted Development"
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      "Artificial Intelligence Tools",
      "Prompt Engineering",
      "Process Automation",
      "Research & Analysis",
      "Technical Documentation",
      "Digital Product Development",
      "Workflow Design",
      "Project Coordination",
      "Data Organization",
      "Software Adaptation & Learning",
      "Salesforce",
      "Microsoft Office Suite",
      "Workday",
      "Deputy",
      "Workflow Tracking",
      "Data Entry & Recordkeeping"
    ]
  },
  {
    title: "Interpersonal Skills",
    skills: [
      "Communication",
      "Relationship Building",
      "Active Listening",
      "Conflict Resolution",
      "Stakeholder Engagement",
      "Customer Service",
      "Team Collaboration",
      "Adaptability",
      "Mentorship",
      "Public Interaction",
      "Consultation Management",
      "Vendor Relations"
    ]
  },
  {
    title: "Business Skills",
    skills: [
      "Operations Management",
      "Process Improvement",
      "Project Management",
      "Strategic Planning",
      "Problem Solving",
      "Administrative Oversight",
      "Compliance Awareness",
      "Decision Making",
      "Resource Coordination",
      "Leadership & Supervision",
      "Scheduling & Dispatch",
      "Inventory Management",
      "Compliance & Confidentiality",
      "Strategic Leadership",
      "Training & Delegation"
    ]
  }
];

const tabButtons = document.querySelectorAll("[data-tab]");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const tabSections = document.querySelectorAll("[data-tab-panel]");
const aboutDropdown = document.querySelector(".nav-dropdown");
const aboutDropdownButton = aboutDropdown?.querySelector('[data-tab="about"]');
const skillsRegion = document.querySelector("#skills-region");
const currentYear = document.querySelector("#current-year");
const journeyStages = document.querySelectorAll("[data-journey-stage]");
const journeyStageContent = document.querySelector("#journey-stage-content");

const journeyContent = {
  "early-development": {
    title: "Early Development",
    paragraphs: [
      "My interest in technology began through early exposure to computers, software, and digital tools. In high school, I worked with Microsoft Office, Oracle, Visual Basic, Perl through the terminal, and Java, which introduced me to both technical systems and the logic behind programming.",
      "Learning across different platforms taught me how to approach unfamiliar technology with curiosity and patience. I became interested not only in using software, but also in understanding how it worked, how information moved through systems, and how technology could make everyday tasks more efficient.",
      "These early experiences established the foundation for my technical growth. They strengthened my problem-solving skills, encouraged continuous learning, and gave me the confidence to explore more advanced areas of technology."
    ]
  },
  "career-expansion": {
    title: "Career Expansion",
    paragraphs: [
      "As my education and professional career developed, technology became increasingly connected to how I approached communication, operations, and problem-solving. In college, I expanded into web development through HTML, CSS, and JavaScript, learning how structure, design, and interaction come together to create functional digital experiences.",
      "Across different professional environments, I continued learning new systems, platforms, and operational processes. Each transition required me to adapt quickly, understand unfamiliar tools, and identify ways technology could improve organization, productivity, and execution.",
      "These experiences broadened my perspective beyond programming alone. I began to see technology as a practical resource for connecting people, improving workflows, and turning complex challenges into more manageable solutions."
    ]
  },
  "discovering-ai": {
    title: "Discovering AI",
    paragraphs: [
      "As I continued building technical skills, I realized that creating effective solutions required more than writing code. It also required communicating ideas clearly, designing intuitive experiences, and understanding how people interact with technology.",
      "Exploring artificial intelligence expanded that perspective. Working with tools such as Grok (xAI) introduced me to new ways of researching, reasoning through complex problems, and accelerating the development process. At the same time, Canva strengthened my appreciation for visual communication, demonstrating that thoughtful design is just as important as technical implementation when presenting ideas and building products.",
      "These experiences reinforced an important lesson: successful technology is not simply functional—it is intuitive, engaging, and designed with the user in mind. Combining technical development with visual design continues to shape how I approach every project as I grow into becoming a Builder."
    ]
  },
  "becoming-a-builder": {
    title: "Becoming a Builder",
    paragraphs: [
      "My progression into technology ultimately changed how I viewed ideas and execution. Instead of seeing technology only as a tool to support existing work, I began using it to create new solutions, test concepts, and transform ideas into functional projects.",
      "Working with web development, artificial intelligence, design tools, and modern development environments allowed me to combine technical problem-solving with creativity and user-focused thinking. I learned that building requires more than writing code. It involves understanding the problem, organizing the process, designing the experience, testing the result, and continuing to improve it.",
      "Becoming a Builder represents the combination of everything I have developed throughout my journey: adaptability, communication, technical curiosity, operational thinking, and a commitment to continuous learning. My goal is to use those strengths to create practical technology that improves experiences and solves real-world problems."
    ]
  }
};

function renderSkills() {
  if (!skillsRegion) return;

  skillsRegion.innerHTML = skillGroups
    .map((group) => {
      const tags = group.skills
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join("");

      return `
        <article class="skill-group">
          <h3>${group.title}</h3>
          <div class="skill-tags">${tags}</div>
        </article>
      `;
    })
    .join("");
}

function showTab(tabId) {
  tabSections.forEach((section) => {
    section.classList.toggle("active", section.dataset.tabPanel === tabId);
  });

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
    button.setAttribute("aria-pressed", button.dataset.tab === tabId ? "true" : "false");
  });
}

function setAboutDropdown(open) {
  if (!aboutDropdown || !aboutDropdownButton) return;

  aboutDropdown.classList.toggle("is-open", open);
  aboutDropdownButton.setAttribute("aria-expanded", open ? "true" : "false");
}

function selectJourneyStage(stageButton) {
  const content = journeyContent[stageButton.dataset.journeyStage];

  if (!content || !journeyStageContent) return;

  journeyStages.forEach((button) => {
    const isActive = button === stageButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
    button.tabIndex = isActive ? 0 : -1;
  });

  const description = journeyStageContent.querySelector(".journey-stage-description");
  const paragraphs = content.paragraphs.map((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  });

  journeyStageContent.querySelector("h3").textContent = content.title;
  description.replaceChildren(...paragraphs);
  journeyStageContent.setAttribute("aria-labelledby", stageButton.id);
}

journeyStages.forEach((button, index) => {
  button.addEventListener("click", () => selectJourneyStage(button));

  button.addEventListener("keydown", (event) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % journeyStages.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + journeyStages.length) % journeyStages.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = journeyStages.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextButton = journeyStages[nextIndex];
    nextButton.focus();
    selectJourneyStage(nextButton);
  });
});

if (aboutDropdown) {
  aboutDropdown.addEventListener("mouseenter", () => setAboutDropdown(true));
  aboutDropdown.addEventListener("mouseleave", () => setAboutDropdown(false));

  aboutDropdown.addEventListener("focusin", () => setAboutDropdown(true));
  aboutDropdown.addEventListener("focusout", (event) => {
    if (!aboutDropdown.contains(event.relatedTarget)) {
      setAboutDropdown(false);
    }
  });

  aboutDropdown.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setAboutDropdown(false);
      aboutDropdownButton?.focus();
    }
  });
}

aboutDropdownButton?.addEventListener("click", () => {
  setAboutDropdown(true);
});

document.addEventListener("pointerdown", (event) => {
  if (aboutDropdown && !aboutDropdown.contains(event.target)) {
    setAboutDropdown(false);
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showTab(link.dataset.tabLink);
  });
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setAboutDropdown(false);
    link.blur();
    showTab("about");

    requestAnimationFrame(() => {
      const target = document.getElementById(link.dataset.sectionLink);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", link.hash);
      }
    });
  });
});

renderSkills();
showTab("home");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
