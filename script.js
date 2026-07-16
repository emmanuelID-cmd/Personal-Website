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
    description: "Moving through diverse environments strengthened communication, adaptability, and relationship-building skills."
  },
  "career-expansion": {
    title: "Career Expansion",
    description: "My professional career has spanned multiple industries, responsibilities, and leadership opportunities. Each transition required learning new systems, adapting to different expectations, and finding ways to succeed in unfamiliar environments."
  },
  "discovering-ai": {
    title: "Discovering AI",
    description: "While pursuing personal and professional goals, I encountered barriers that slowed the execution of ideas. Rather than accepting those limitations, I began exploring artificial intelligence as a practical tool for accelerating learning, improving productivity, and transforming concepts into tangible outcomes."
  },
  "becoming-a-builder": {
    title: "Becoming a Builder",
    description: "AI became more than a tool. It became a bridge between ideas and implementation. It allowed me to move beyond identifying opportunities and begin creating solutions."
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

  journeyStageContent.querySelector("h3").textContent = content.title;
  journeyStageContent.querySelector("p").textContent = content.description;
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
