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

const navLinks = document.querySelectorAll(".site-nav button");
const tabSections = document.querySelectorAll(".tab-content");
const skillsRegion = document.querySelector("#skills-region");
const currentYear = document.querySelector("#current-year");

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
    section.classList.remove("active");
  });

  const activeSection = document.getElementById(tabId);

  if (activeSection) {
    activeSection.classList.add("active");
  }

  navLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });
}

navLinks.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
  });
});

renderSkills();
showTab("home");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

