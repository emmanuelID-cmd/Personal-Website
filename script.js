const skillGroups = {
  core: [
    'Operations Management',
    'Project Coordination',
    'Program Support',
    'Stakeholder Engagement',
    'Compliance Oversight',
    'Process Improvement',
    'Administrative Operations',
    'AI-Assisted Development'
  ],
  technical: [
    'Artificial Intelligence Tools',
    'Prompt Engineering',
    'Process Automation',
    'Research & Analysis',
    'Technical Documentation',
    'Digital Product Development',
    'Workflow Design',
    'Project Coordination',
    'Data Organization',
    'Software Adaptation & Learning',
    'Salesforce',
    'Microsoft Office Suite',
    'Workday',
    'Deputy',
    'Workflow Tracking',
    'Data Entry & Recordkeeping'
  ],
  interpersonal: [
    'Communication',
    'Relationship Building',
    'Active Listening',
    'Conflict Resolution',
    'Stakeholder Engagement',
    'Customer Service',
    'Team Collaboration',
    'Adaptability',
    'Mentorship',
    'Public Interaction',
    'Consultation Management',
    'Vendor Relations'
  ],
  business: [
    'Operations Management',
    'Process Improvement',
    'Project Management',
    'Strategic Planning',
    'Problem Solving',
    'Administrative Oversight',
    'Compliance Awareness',
    'Decision Making',
    'Resource Coordination',
    'Leadership & Supervision',
    'Scheduling & Dispatch',
    'Inventory Management',
    'Compliance & Confidentiality',
    'Strategic Leadership',
    'Training & Delegation'
  ]
};

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const skillContainers = document.querySelectorAll('[data-group]');
skillContainers.forEach((container) => {
  const group = container.getAttribute('data-group');
  const items = skillGroups[group] || [];
  container.innerHTML = '';

  items.forEach((item) => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = item;
    container.appendChild(tag);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
