const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Java",
      "Perl"
    ]
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Development",
      "Large Language Models (LLMs)",
      "AI Research"
    ]
  },
  {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Codex",
      "Claude",
      "ChatGPT"
    ]
  },
  {
    title: "Software & Platforms",
    skills: [
      "Microsoft Office Suite",
      "Salesforce",
      "Workday",
      "Deputy",
      "Canva"
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Technical Documentation",
      "Process Improvement",
      "Project Coordination",
      "Team Collaboration",
      "Adaptability",
      "Leadership & Operations"
    ]
  },
  {
    title: "Operations Management",
    skills: [
      "Workflow Design",
      "Strategic Planning",
      "Stakeholder Engagement",
      "Training & Mentorship"
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
const homeSectionLinks = document.querySelectorAll("[data-home-section]");
const homeSections = document.querySelectorAll(".home-section-target");
const homeSectionNav = document.querySelector(".home-section-nav");
const siteHeader = document.querySelector("[data-header]");
const contactForm = document.querySelector("#contact-message-form");
const contactSenderEmail = document.querySelector("#contact-sender-email");
const contactSubject = document.querySelector("#contact-subject");
const contactMessage = document.querySelector("#contact-message");
const contactClearButton = document.querySelector("[data-contact-clear]");
const contactPreviewButton = document.querySelector("[data-contact-preview]");
const contactPreviewModal = document.querySelector("#contact-preview-modal");
const contactPreviewCloseButton = document.querySelector("[data-contact-preview-close]");
const contactSubmitButtons = document.querySelectorAll("[data-contact-submit]");
const contactPreviewEmail = document.querySelector("[data-contact-preview-email]");
const contactPreviewSubject = document.querySelector("[data-contact-preview-subject]");
const contactPreviewMessage = document.querySelector("[data-contact-preview-message]");
const contactSubmitStatus = document.querySelector("[data-contact-submit-status]");
const contactFormStatus = document.querySelector("[data-contact-form-status]");
const projectDemoButtons = document.querySelectorAll("[data-project-demo]");
const projectDemoModal = document.querySelector("#project-demo-modal");
const projectDemoCloseButton = document.querySelector("[data-project-demo-close]");
const projectDemoTitle = document.querySelector("#project-demo-title");
const projectDemoFrame = document.querySelector("[data-project-demo-frame]");
const bannerAudio = document.querySelector("[data-banner-audio]");
const bannerAudioElement = document.querySelector("[data-audio-element]");
const bannerAudioTrack = document.querySelector("[data-audio-track]");
const bannerAudioPreviousButton = document.querySelector("[data-audio-previous]");
const bannerAudioPlayButton = document.querySelector("[data-audio-play]");
const bannerAudioPlayIcon = document.querySelector("[data-audio-play-icon]");
const bannerAudioNextButton = document.querySelector("[data-audio-next]");
const bannerAudioRewindButton = document.querySelector("[data-audio-rewind]");
const bannerAudioForwardButton = document.querySelector("[data-audio-forward]");
const bannerAudioProgress = document.querySelector("[data-audio-progress]");
const bannerAudioTime = document.querySelector("[data-audio-time]");
const bannerAudioSpeed = document.querySelector("[data-audio-speed]");
const bannerAudioMuteButton = document.querySelector("[data-audio-mute]");
const bannerAudioVolumeIcon = document.querySelector("[data-audio-volume-icon]");
const bannerAudioVolume = document.querySelector("[data-audio-volume]");
const bannerAudioStatus = document.querySelector("[data-audio-status]");
const projectDemos = {
  measurement: {
    title: "Measurement Converter / Dimensional Analysis Engine (Calculator)",
    source: "projects/measurement-converter-2.html"
  },
  "pig-latin": {
    title: "Java Pig Latin Translator",
    source: "projects/pig-latin-translator.html"
  }
};
const heroPreviewElements = {
  hero: document.querySelector("#home-hero"),
  grid: document.querySelector("#home-hero .hero-grid"),
  group: document.querySelector("#home-hero .hero-greeting"),
  greeting: document.querySelector(".hero-greeting-intro"),
  name: document.querySelector(".hero-name"),
  nameInitial: document.querySelector(".hero-name-initial"),
  thankYou: document.querySelector(".hero-greeting-thanks"),
  textInput: document.querySelector("#hero-preview-text"),
  status: document.querySelector("[data-hero-preview-status]"),
  portrait: document.querySelector("#home-hero .portrait-card"),
  stickyNote: document.querySelector("#home-hero .hero-sticky-note")
};
const heroLayerButtons = document.querySelectorAll("[data-hero-layer-action]");
const heroResetButtons = document.querySelectorAll("[data-hero-reset]");
const HERO_PREVIEW_STORAGE_KEY = "personal-website-hero-preview-v3";
const HERO_PREVIEW_LONG_PRESS_MS = 450;
const heroPreviewState = {
  text: {
    greeting: "",
    name: "",
    thankYou: ""
  },
  items: {},
  pointer: null,
  longPressTimer: null
};
let homeSectionObserver;
let homeScrollTicking = false;

const BANNER_AUDIO_SAMPLE_RATE = 22050;
const bannerAudioTracks = [
  { title: "Circuit Dawn", style: "Techno", duration: 32, bpm: 120, bass: [110, 110, 130.81, 98], kick: [0, 4, 8, 12], snare: [4, 12], lead: true },
  { title: "Neon Terminal", style: "Peak Techno", duration: 28, bpm: 132, bass: [82.41, 98, 110, 123.47], kick: [0, 4, 8, 12], snare: [4, 12], lead: false },
  { title: "Binary Skyline", style: "Synthwave", duration: 36, bpm: 108, bass: [65.41, 82.41, 98, 73.42], kick: [0, 6, 8, 14], snare: [4, 12], lead: true },
  { title: "Data Pulse", style: "Minimal Techno", duration: 24, bpm: 126, bass: [98, 98, 116.54, 103.83], kick: [0, 4, 8, 12], snare: [6, 14], lead: false },
  { title: "Cloud Runner", style: "Electro", duration: 30, bpm: 116, bass: [73.42, 87.31, 110, 98], kick: [0, 3, 8, 11], snare: [4, 12], lead: true },
  { title: "Midnight Compiler", style: "Ambient Techno", duration: 42, bpm: 96, bass: [55, 65.41, 73.42, 82.41], kick: [0, 8, 11], snare: [4, 12], lead: true },
  { title: "Quantum Steps", style: "Glitch", duration: 26, bpm: 140, bass: [123.47, 92.5, 138.59, 103.83], kick: [0, 3, 6, 8, 12, 15], snare: [4, 10, 14], lead: true },
  { title: "Signal Harbor", style: "Downtempo", duration: 38, bpm: 88, bass: [65.41, 73.42, 82.41, 55], kick: [0, 7, 10], snare: [4, 12], lead: false },
  { title: "Chrome Circuit", style: "Industrial Techno", duration: 34, bpm: 128, bass: [92.5, 92.5, 110, 103.83], kick: [0, 4, 7, 8, 12], snare: [4, 12, 15], lead: false },
  { title: "Pixel Sprint", style: "Chiptune", duration: 22, bpm: 150, bass: [130.81, 164.81, 196, 146.83], kick: [0, 4, 8, 12], snare: [4, 12], lead: true },
  { title: "Future Workshop", style: "Tech House", duration: 40, bpm: 124, bass: [82.41, 98, 110, 87.31], kick: [0, 4, 8, 12], snare: [4, 12], lead: false },
  { title: "Launch Sequence", style: "Progressive Techno", duration: 45, bpm: 130, bass: [73.42, 82.41, 110, 98], kick: [0, 4, 8, 12], snare: [4, 12], lead: true }
];
let bannerAudioUrl;
let currentBannerAudioTrack = 0;
let continueBannerAudioPlayback = false;

function createAdventureRhythmWave(track) {
  const sampleCount = track.duration * BANNER_AUDIO_SAMPLE_RATE;
  const buffer = new ArrayBuffer(44 + (sampleCount * 2));
  const view = new DataView(buffer);
  let noiseState = 0x12345678 + track.bpm;

  function writeText(offset, text) {
    for (let index = 0; index < text.length; index += 1) {
      view.setUint8(offset + index, text.charCodeAt(index));
    }
  }

  writeText(0, "RIFF");
  view.setUint32(4, 36 + (sampleCount * 2), true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, BANNER_AUDIO_SAMPLE_RATE, true);
  view.setUint32(28, BANNER_AUDIO_SAMPLE_RATE * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, "data");
  view.setUint32(40, sampleCount * 2, true);

  for (let index = 0; index < sampleCount; index += 1) {
    const time = index / BANNER_AUDIO_SAMPLE_RATE;
    const beatDuration = 60 / track.bpm;
    const stepDuration = beatDuration / 2;
    const stepPosition = time % stepDuration;
    const stepIndex = Math.floor(time / stepDuration) % 16;
    const bassPosition = time % beatDuration;
    const bassIndex = Math.floor(time / (beatDuration * 2)) % track.bass.length;
    let sample = 0;

    noiseState ^= noiseState << 13;
    noiseState ^= noiseState >>> 17;
    noiseState ^= noiseState << 5;
    const noise = ((noiseState >>> 0) / 2147483648) - 1;

    if (track.kick.includes(stepIndex) && stepPosition < 0.16) {
      const kickFrequency = 100 - (58 * (stepPosition / 0.16));
      sample += Math.sin(2 * Math.PI * kickFrequency * stepPosition) * Math.exp(-19 * stepPosition) * 0.76;
    }

    if (track.snare.includes(stepIndex) && stepPosition < 0.13) {
      sample += noise * Math.exp(-25 * stepPosition) * 0.38;
    }

    if (stepPosition < 0.04) {
      const hatStrength = stepIndex % 2 === 0 ? 0.13 : 0.08;
      sample += noise * Math.exp(-72 * stepPosition) * hatStrength;
    }

    const bassFrequency = track.bass[bassIndex];
    const bassEnvelope = Math.exp(-3.5 * bassPosition);
    sample += (
      Math.sin(2 * Math.PI * bassFrequency * time) +
      (0.28 * Math.sin(2 * Math.PI * bassFrequency * 2 * time))
    ) * bassEnvelope * 0.075;

    if (track.lead && stepIndex % 4 === 2) {
      sample += Math.sin(2 * Math.PI * bassFrequency * 4 * time) * Math.exp(-9 * stepPosition) * 0.055;
    }

    const clampedSample = Math.max(-1, Math.min(1, sample));
    view.setInt16(44 + (index * 2), clampedSample * 0x7fff, true);
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function formatAudioTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  return `${minutes}:${Math.floor(safeSeconds % 60).toString().padStart(2, "0")}`;
}

function updateBannerAudioTrackLabel() {
  if (!bannerAudioTrack) return;
  const track = bannerAudioTracks[currentBannerAudioTrack];
  const trackNumber = String(currentBannerAudioTrack + 1).padStart(2, "0");
  bannerAudioTrack.textContent = `${trackNumber} / ${bannerAudioTracks.length} — ${track.title}`;
  bannerAudioTrack.title = `${track.title} — ${track.style}`;
}

function updateBannerAudioControls() {
  if (!bannerAudioElement || !bannerAudioProgress || !bannerAudioTime) return;

  const duration = Number.isFinite(bannerAudioElement.duration)
    ? bannerAudioElement.duration
    : bannerAudioTracks[currentBannerAudioTrack].duration;
  bannerAudioProgress.max = duration;
  bannerAudioProgress.value = bannerAudioElement.currentTime;
  bannerAudioTime.textContent = `${formatAudioTime(bannerAudioElement.currentTime)} / ${formatAudioTime(duration)}`;
  bannerAudioPlayIcon.textContent = bannerAudioElement.paused ? "▶" : "❚❚";
  bannerAudioPlayButton.setAttribute("aria-label", bannerAudioElement.paused ? "Play adventure rhythm" : "Pause adventure rhythm");
  bannerAudioVolumeIcon.textContent = bannerAudioElement.muted || bannerAudioElement.volume === 0 ? "×" : "♪";
  bannerAudioMuteButton.setAttribute("aria-label", bannerAudioElement.muted ? "Unmute adventure rhythm" : "Mute adventure rhythm");
}

function setBannerAudioReady(ready) {
  bannerAudio?.querySelectorAll("button, input, select").forEach((control) => {
    control.disabled = !ready;
  });
  if (bannerAudioStatus) {
    bannerAudioStatus.textContent = ready ? "Adventure rhythm ready." : "Adventure rhythm unavailable.";
  }
}

function seekBannerAudio(change) {
  if (!bannerAudioElement) return;
  const duration = Number.isFinite(bannerAudioElement.duration)
    ? bannerAudioElement.duration
    : bannerAudioTracks[currentBannerAudioTrack].duration;
  bannerAudioElement.currentTime = Math.max(0, Math.min(duration, bannerAudioElement.currentTime + change));
  updateBannerAudioControls();
}

function loadBannerAudioTrack(trackIndex, continuePlayback = false) {
  if (!bannerAudioElement || !bannerAudioProgress || !bannerAudioTime) return;

  currentBannerAudioTrack = (trackIndex + bannerAudioTracks.length) % bannerAudioTracks.length;
  const track = bannerAudioTracks[currentBannerAudioTrack];
  continueBannerAudioPlayback = continuePlayback;
  setBannerAudioReady(false);
  bannerAudioStatus.textContent = `Loading ${track.title}.`;
  bannerAudioElement.pause();

  if (bannerAudioUrl) {
    URL.revokeObjectURL(bannerAudioUrl);
  }

  bannerAudioUrl = URL.createObjectURL(createAdventureRhythmWave(track));
  bannerAudioElement.src = bannerAudioUrl;
  bannerAudioProgress.max = track.duration;
  bannerAudioProgress.value = 0;
  updateBannerAudioTrackLabel();
  bannerAudioTime.textContent = `0:00 / ${formatAudioTime(track.duration)}`;
  bannerAudioElement.load();
}

function initBannerAudio() {
  if (!bannerAudioElement || !bannerAudioPlayButton || !bannerAudioProgress) return;

  try {
    bannerAudioElement.loop = true;
    bannerAudioElement.volume = Number(bannerAudioVolume?.value ?? 0.35);
    bannerAudioElement.addEventListener("loadedmetadata", async () => {
      setBannerAudioReady(true);
      updateBannerAudioControls();
      updateHomeNavigationMetrics();
      if (continueBannerAudioPlayback) {
        continueBannerAudioPlayback = false;
        try {
          await bannerAudioElement.play();
        } catch (error) {
          bannerAudioStatus.textContent = "The selected rhythm is ready. Press Play to continue.";
        }
      }
    });
    bannerAudioElement.addEventListener("timeupdate", updateBannerAudioControls);
    bannerAudioElement.addEventListener("play", updateBannerAudioControls);
    bannerAudioElement.addEventListener("pause", updateBannerAudioControls);
    bannerAudioElement.addEventListener("error", () => setBannerAudioReady(false));

    bannerAudioPlayButton.addEventListener("click", async () => {
      if (bannerAudioElement.paused) {
        try {
          await bannerAudioElement.play();
          bannerAudioStatus.textContent = "Adventure rhythm playing.";
        } catch (error) {
          bannerAudioStatus.textContent = "Playback could not start. Try the play button again.";
        }
      } else {
        bannerAudioElement.pause();
        bannerAudioStatus.textContent = "Adventure rhythm paused.";
      }
    });

    bannerAudioPreviousButton?.addEventListener("click", () => {
      loadBannerAudioTrack(currentBannerAudioTrack - 1, !bannerAudioElement.paused);
    });
    bannerAudioNextButton?.addEventListener("click", () => {
      loadBannerAudioTrack(currentBannerAudioTrack + 1, !bannerAudioElement.paused);
    });
    bannerAudioRewindButton?.addEventListener("click", () => seekBannerAudio(-10));
    bannerAudioForwardButton?.addEventListener("click", () => seekBannerAudio(10));
    bannerAudioProgress.addEventListener("input", () => {
      bannerAudioElement.currentTime = Number(bannerAudioProgress.value);
      updateBannerAudioControls();
    });
    bannerAudioSpeed?.addEventListener("change", () => {
      bannerAudioElement.playbackRate = Number(bannerAudioSpeed.value);
      bannerAudioStatus.textContent = `Playback speed ${Number(bannerAudioSpeed.value).toFixed(2)} times.`;
    });
    bannerAudioMuteButton?.addEventListener("click", () => {
      bannerAudioElement.muted = !bannerAudioElement.muted;
      updateBannerAudioControls();
    });
    bannerAudioVolume?.addEventListener("input", () => {
      bannerAudioElement.volume = Number(bannerAudioVolume.value);
      bannerAudioElement.muted = false;
      updateBannerAudioControls();
    });
    window.addEventListener("beforeunload", () => {
      if (bannerAudioUrl) URL.revokeObjectURL(bannerAudioUrl);
    });
    loadBannerAudioTrack(0);
  } catch (error) {
    setBannerAudioReady(false);
  }
}

function validateEmail() {
  if (!contactSenderEmail) return false;

  const email = contactSenderEmail.value.trim();
  contactSenderEmail.setCustomValidity("");

  if (!email || !contactSenderEmail.validity.valid) return false;

  const domain = email.slice(email.lastIndexOf("@") + 1);
  const validDomain = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(domain);

  if (!validDomain) {
    contactSenderEmail.setCustomValidity("Please enter a valid email address.");
    return false;
  }

  return true;
}

function validateContactForm() {
  const emailValid = validateEmail();
  const subjectValid = Boolean(contactSubject?.value.trim());
  const messageValid = Boolean(contactMessage?.value.trim());

  return {
    emailValid,
    subjectValid,
    messageValid,
    isValid: emailValid && subjectValid && messageValid
  };
}

function updateButtonStates() {
  const validation = validateContactForm();

  if (contactClearButton) {
    contactClearButton.disabled = !validation.messageValid;
  }

  if (contactPreviewButton) {
    contactPreviewButton.disabled = !validation.isValid;
  }

  contactSubmitButtons.forEach((button) => {
    button.disabled = !validation.isValid;
  });

  return validation;
}

function focusFirstInvalidContactField() {
  const validation = validateContactForm();

  if (!validation.emailValid) {
    contactSenderEmail?.focus();
    contactSenderEmail?.reportValidity();
  } else if (!validation.subjectValid) {
    contactSubject?.focus();
  } else if (!validation.messageValid) {
    contactMessage?.focus();
  }

  return validation;
}

function clearContactForm() {
  if (contactMessage) {
    contactMessage.value = "";
  }
  if (contactSubmitStatus) {
    contactSubmitStatus.textContent = "";
  }
  if (contactFormStatus) {
    contactFormStatus.textContent = "";
  }
  updateButtonStates();
  contactMessage?.focus();
}

function populatePreview() {
  if (!contactPreviewEmail || !contactPreviewSubject || !contactPreviewMessage) return;

  contactPreviewEmail.textContent = contactSenderEmail?.value ?? "";
  contactPreviewSubject.textContent = contactSubject?.value ?? "";
  contactPreviewMessage.textContent = contactMessage?.value ?? "";
}

function openContactPreview() {
  if (!contactPreviewModal) return;

  if (!updateButtonStates().isValid) {
    focusFirstInvalidContactField();
    return;
  }

  populatePreview();
  if (contactSubmitStatus) {
    contactSubmitStatus.textContent = "";
  }

  if (!contactPreviewModal.open) {
    contactPreviewModal.showModal();
  }
}

function closeContactPreview() {
  if (contactPreviewModal?.open) {
    contactPreviewModal.close();
  }

  contactPreviewButton?.focus();
}

function openProjectDemo(event) {
  const demo = projectDemos[event.currentTarget.dataset.projectDemo];

  if (!demo || !projectDemoModal || !projectDemoTitle || !projectDemoFrame) return;

  projectDemoTitle.textContent = demo.title;
  projectDemoFrame.src = demo.source;
  projectDemoFrame.title = `${demo.title} demo`;

  if (!projectDemoModal.open) {
    projectDemoModal.showModal();
  }
}

function closeProjectDemo() {
  if (projectDemoModal?.open) {
    projectDemoModal.close();
  }
}

function submitContactForm() {
  if (!updateButtonStates().isValid) {
    focusFirstInvalidContactField();
    return;
  }

  const message = "Submission functionality coming soon.";
  if (contactSubmitStatus) {
    contactSubmitStatus.textContent = message;
  }
  if (contactFormStatus) {
    contactFormStatus.textContent = message;
  }
}

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

function pixelsToPoints(value) {
  return Math.round((Number.parseFloat(value) * 72) / 96);
}

function getHeroPreviewText() {
  return {
    greeting: heroPreviewElements.greeting?.textContent.trim() ?? "",
    name: heroPreviewElements.name?.textContent.trim() ?? "",
    thankYou: heroPreviewElements.thankYou?.textContent.trim() ?? ""
  };
}

function getHeroPreviewFontSizes() {
  return {
    greeting: pixelsToPoints(getComputedStyle(heroPreviewElements.greeting).fontSize),
    name: pixelsToPoints(getComputedStyle(heroPreviewElements.name).fontSize),
    thankYou: pixelsToPoints(getComputedStyle(heroPreviewElements.thankYou).fontSize)
  };
}

function announceHeroPreview(message) {
  if (heroPreviewElements.status) {
    heroPreviewElements.status.textContent = message;
  }
}

function updateHeroPreviewText() {
  const lines = heroPreviewElements.textInput.value.replace(/\r/g, "").split("\n").slice(0, 3);

  while (lines.length < 3) {
    lines.push("");
  }

  heroPreviewElements.textInput.value = lines.join("\n");
  heroPreviewElements.greeting.textContent = lines[0];
  heroPreviewElements.nameInitial.textContent = lines[1].charAt(0);
  heroPreviewElements.name.replaceChildren(
    heroPreviewElements.nameInitial,
    document.createTextNode(lines[1].slice(1))
  );
  heroPreviewElements.thankYou.textContent = lines[2];

  heroPreviewState.text = {
    greeting: lines[0],
    name: lines[1],
    thankYou: lines[2]
  };

  requestAnimationFrame(() => {
    resolveHeroPreviewCollision();
    updateHeroPreviewMetrics();
  });
}

function setHeroPreviewText(text) {
  heroPreviewElements.textInput.value = [text.greeting, text.name, text.thankYou].join("\n");
  updateHeroPreviewText();
}

function setHeroPreviewFontSize(target, size) {
  const clampedSize = Math.min(HERO_PREVIEW_MAX_SIZE, Math.max(HERO_PREVIEW_MIN_SIZE, size));
  heroPreviewState.fontSizes[target] = clampedSize;
  heroPreviewElements.group.style.setProperty(`--hero-preview-${target === "thankYou" ? "thank-you" : target}-size`, `${clampedSize}pt`);
  updateHeroPreviewControls();

  requestAnimationFrame(() => {
    resolveHeroPreviewCollision();
    updateHeroPreviewMetrics();
  });
}

function updateHeroPreviewControls() {
  heroPreviewSizeDisplays.forEach((display) => {
    const target = display.dataset.heroSizeDisplay;
    display.textContent = `${heroPreviewState.fontSizes[target]}pt`;
  });

  heroPreviewSizeButtons.forEach((button) => {
    const target = button.dataset.heroSizeTarget;
    const isDecrease = button.dataset.heroSizeAction === "decrease";
    button.disabled = isDecrease
      ? heroPreviewState.fontSizes[target] <= HERO_PREVIEW_MIN_SIZE
      : heroPreviewState.fontSizes[target] >= HERO_PREVIEW_MAX_SIZE;
  });
}

function updateHeroPreviewMetrics() {
  const groupRect = heroPreviewElements.group.getBoundingClientRect();
  heroPreviewElements.position.textContent = `${Math.round(heroPreviewState.position.x)}px, ${Math.round(heroPreviewState.position.y)}px`;
  heroPreviewElements.dimensions.textContent = `${Math.round(groupRect.width)}px × ${Math.round(groupRect.height)}px`;
}

function applyHeroPreviewDimensions() {
  const { group } = heroPreviewElements;

  if (heroPreviewState.dimensions.width) {
    group.style.setProperty("--hero-preview-width", `${heroPreviewState.dimensions.width}px`);
  } else {
    group.style.removeProperty("--hero-preview-width");
  }

  if (heroPreviewState.dimensions.height) {
    group.style.setProperty("--hero-preview-height", `${heroPreviewState.dimensions.height}px`);
  } else {
    group.style.removeProperty("--hero-preview-height");
  }
}

function applyHeroPreviewPosition() {
  heroPreviewElements.group.style.setProperty("--hero-preview-x", `${heroPreviewState.position.x}px`);
  heroPreviewElements.group.style.setProperty("--hero-preview-y", `${heroPreviewState.position.y}px`);
}

function rectsIntersect(first, second, gap = 0) {
  return !(
    first.right + gap <= second.left ||
    first.left - gap >= second.right ||
    first.bottom + gap <= second.top ||
    first.top - gap >= second.bottom
  );
}

function heroPreviewIsInsideHero() {
  const heroRect = heroPreviewElements.hero.getBoundingClientRect();
  const groupRect = heroPreviewElements.group.getBoundingClientRect();

  return (
    groupRect.left >= heroRect.left &&
    groupRect.right <= heroRect.right &&
    groupRect.top >= heroRect.top &&
    groupRect.bottom <= heroRect.bottom
  );
}

function getHeroPreviewCollisions() {
  const groupRect = heroPreviewElements.group.getBoundingClientRect();
  const protectedElements = [
    heroPreviewElements.portrait,
    heroPreviewElements.stickyNote,
    heroPreviewElements.identity,
    heroPreviewElements.description,
    heroPreviewElements.actions
  ];

  return protectedElements.filter((element) => {
    if (!element) return false;
    return rectsIntersect(groupRect, element.getBoundingClientRect(), HERO_PREVIEW_COLLISION_GAP);
  });
}

function resolveHeroPreviewCollision() {
  const sideElements = [heroPreviewElements.portrait, heroPreviewElements.stickyNote];
  heroPreviewElements.grid.classList.remove("hero-preview-reflow", "hero-preview-stack-below");
  let collisions = getHeroPreviewCollisions();
  const hasSideCollision = collisions.some((element) => sideElements.includes(element));

  if (hasSideCollision) {
    heroPreviewElements.grid.classList.add("hero-preview-reflow");
    collisions = getHeroPreviewCollisions();
  }

  if (collisions.some((element) => sideElements.includes(element))) {
    heroPreviewElements.grid.classList.remove("hero-preview-reflow");
    heroPreviewElements.grid.classList.add("hero-preview-stack-below");
    collisions = getHeroPreviewCollisions();
  }

  return collisions;
}

function tryHeroPreviewPosition(x, y) {
  const previousPosition = { ...heroPreviewState.position };
  heroPreviewState.position = { x: Math.round(x), y: Math.round(y) };
  applyHeroPreviewPosition();

  const collisions = resolveHeroPreviewCollision();

  if (!heroPreviewIsInsideHero() || collisions.length) {
    heroPreviewState.position = previousPosition;
    applyHeroPreviewPosition();
    resolveHeroPreviewCollision();
    announceHeroPreview("Movement stopped to keep the Hero text clear of other Hero content.");
    return false;
  }

  updateHeroPreviewMetrics();
  return true;
}

function tryHeroPreviewGeometry(width, height, x, y) {
  const previousDimensions = { ...heroPreviewState.dimensions };
  const previousPosition = { ...heroPreviewState.position };

  heroPreviewState.dimensions = {
    width: Math.round(Math.max(1, width)),
    height: Math.round(Math.max(1, height))
  };
  heroPreviewState.position = { x: Math.round(x), y: Math.round(y) };
  applyHeroPreviewDimensions();
  applyHeroPreviewPosition();

  const collisions = resolveHeroPreviewCollision();

  if (!heroPreviewIsInsideHero() || collisions.length) {
    heroPreviewState.dimensions = previousDimensions;
    heroPreviewState.position = previousPosition;
    applyHeroPreviewDimensions();
    applyHeroPreviewPosition();
    resolveHeroPreviewCollision();
    announceHeroPreview("Resize stopped to keep the Hero text clear of other Hero content.");
    return false;
  }

  updateHeroPreviewMetrics();
  return true;
}

function tryHeroPreviewDimensions(width, height) {
  return tryHeroPreviewGeometry(width, height, heroPreviewState.position.x, heroPreviewState.position.y);
}

function resizeHeroPreviewFromDirection(direction, deltaX, deltaY, startPosition, startDimensions) {
  let width = startDimensions.width;
  let height = startDimensions.height;
  let x = startPosition.x;
  let y = startPosition.y;

  if (direction.includes("e")) {
    width += deltaX;
  }

  if (direction.includes("w")) {
    width -= deltaX;
    x += deltaX;
  }

  if (direction.includes("s")) {
    height += deltaY;
  }

  if (direction.includes("n")) {
    height -= deltaY;
    y += deltaY;
  }

  return tryHeroPreviewGeometry(width, height, x, y);
}

function setHeroPreviewMode(mode) {
  heroPreviewState.mode = mode;
  heroPreviewModeButtons.forEach((button) => {
    const isActive = button.dataset.heroPreviewMode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  heroPreviewElements.group.dataset.heroPreviewMode = mode;
  announceHeroPreview(`${mode === "drag" ? "Drag" : "Resize"} mode selected.`);
}

function resetHeroPreview(resetType) {
  if (resetType === "text" || resetType === "all") {
    setHeroPreviewText(heroPreviewState.original.text);
  }

  if (resetType === "fonts" || resetType === "all") {
    Object.entries(heroPreviewState.original.fontSizes).forEach(([target, size]) => {
      setHeroPreviewFontSize(target, size);
    });
  }

  if (resetType === "position" || resetType === "all") {
    heroPreviewState.position = { x: 0, y: 0 };
    applyHeroPreviewPosition();
  }

  if (resetType === "size" || resetType === "all") {
    heroPreviewState.dimensions = { width: null, height: null };
    applyHeroPreviewDimensions();
  }

  resolveHeroPreviewCollision();
  updateHeroPreviewMetrics();
  announceHeroPreview(`${resetType === "all" ? "All Hero preview settings" : `Hero preview ${resetType}`} reset.`);
}

function beginHeroPreviewPointer(event, interaction, direction = null) {
  if (interaction === "drag" && heroPreviewState.mode !== "drag") return;
  if (interaction === "resize" && heroPreviewState.mode !== "resize") return;

  event.preventDefault();
  const groupRect = heroPreviewElements.group.getBoundingClientRect();
  heroPreviewState.pointer = {
    interaction,
    direction,
    startX: event.clientX,
    startY: event.clientY,
    position: { ...heroPreviewState.position },
    dimensions: {
      width: heroPreviewState.dimensions.width ?? groupRect.width,
      height: heroPreviewState.dimensions.height ?? groupRect.height
    }
  };
  heroPreviewElements.group.setPointerCapture(event.pointerId);
}

function moveHeroPreviewPointer(event) {
  if (!heroPreviewState.pointer) return;

  const { interaction, direction, startX, startY, position, dimensions } = heroPreviewState.pointer;
  const deltaX = event.clientX - startX;
  const deltaY = event.clientY - startY;

  if (interaction === "drag") {
    tryHeroPreviewPosition(position.x + deltaX, position.y + deltaY);
  } else {
    resizeHeroPreviewFromDirection(direction, deltaX, deltaY, position, dimensions);
  }
}

function endHeroPreviewPointer(event) {
  if (!heroPreviewState.pointer) return;

  const interaction = heroPreviewState.pointer.interaction;

  if (heroPreviewElements.group.hasPointerCapture(event.pointerId)) {
    heroPreviewElements.group.releasePointerCapture(event.pointerId);
  }

  heroPreviewState.pointer = null;
  updateHeroPreviewMetrics();
  announceHeroPreview(
    interaction === "drag"
      ? `Hero text group position is ${Math.round(heroPreviewState.position.x)}px, ${Math.round(heroPreviewState.position.y)}px.`
      : `Hero text group size is ${heroPreviewElements.dimensions.textContent}.`
  );
}

function handleHeroPreviewKeyboard(event) {
  if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;

  const step = event.shiftKey ? 20 : 5;
  event.preventDefault();

  const resizeDirection = event.currentTarget.dataset.heroPreviewResizeHandle;

  if (resizeDirection) {
    if (heroPreviewState.mode !== "resize") {
      announceHeroPreview("Select Resize Mode before resizing the Hero text group.");
      return;
    }

    const groupRect = heroPreviewElements.group.getBoundingClientRect();
    const deltaX = event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0;
    const deltaY = event.key === "ArrowDown" ? step : event.key === "ArrowUp" ? -step : 0;
    if (resizeHeroPreviewFromDirection(
      resizeDirection,
      deltaX,
      deltaY,
      heroPreviewState.position,
      {
        width: heroPreviewState.dimensions.width ?? groupRect.width,
        height: heroPreviewState.dimensions.height ?? groupRect.height
      }
    )) {
      announceHeroPreview(`Hero text group size is ${heroPreviewElements.dimensions.textContent}.`);
    }
    return;
  }

  if (heroPreviewState.mode !== "drag") {
    announceHeroPreview("Select Drag Mode before moving the Hero text group.");
    return;
  }

  const xChange = event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0;
  const yChange = event.key === "ArrowDown" ? step : event.key === "ArrowUp" ? -step : 0;
  if (tryHeroPreviewPosition(heroPreviewState.position.x + xChange, heroPreviewState.position.y + yChange)) {
    announceHeroPreview(`Hero text group position is ${Math.round(heroPreviewState.position.x)}px, ${Math.round(heroPreviewState.position.y)}px.`);
  }
}

function initHeroTextPreview() {
  const { group, textInput, resizeHandles } = heroPreviewElements;
  if (!group || !textInput || !resizeHandles.length) return;

  heroPreviewState.text = getHeroPreviewText();
  heroPreviewState.fontSizes = getHeroPreviewFontSizes();
  heroPreviewState.original = {
    text: { ...heroPreviewState.text },
    fontSizes: { ...heroPreviewState.fontSizes }
  };

  group.classList.add("hero-preview-active");
  group.tabIndex = 0;
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", "Moveable Hero text group. Use arrow keys to move it; use any edge or corner resize handle for size changes.");
  setHeroPreviewText(heroPreviewState.text);
  Object.entries(heroPreviewState.fontSizes).forEach(([target, size]) => setHeroPreviewFontSize(target, size));
  setHeroPreviewMode("drag");
  updateHeroPreviewMetrics();

  textInput.addEventListener("input", updateHeroPreviewText);

  heroPreviewSizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.heroSizeAction === "increase" ? 1 : -1;
      const target = button.dataset.heroSizeTarget;
      setHeroPreviewFontSize(target, heroPreviewState.fontSizes[target] + (direction * HERO_PREVIEW_SIZE_STEP));
      announceHeroPreview(`${target === "thankYou" ? "Thank-you" : target} font size is ${heroPreviewState.fontSizes[target]}pt.`);
    });
  });

  heroPreviewModeButtons.forEach((button) => {
    button.addEventListener("click", () => setHeroPreviewMode(button.dataset.heroPreviewMode));
  });

  heroPreviewResetButtons.forEach((button) => {
    button.addEventListener("click", () => resetHeroPreview(button.dataset.heroPreviewReset));
  });

  group.addEventListener("pointerdown", (event) => {
    if (event.target.closest("[data-hero-preview-resize-handle]")) return;
    beginHeroPreviewPointer(event, "drag");
  });
  resizeHandles.forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      beginHeroPreviewPointer(event, "resize", handle.dataset.heroPreviewResizeHandle);
    });
    handle.addEventListener("keydown", handleHeroPreviewKeyboard);
  });
  group.addEventListener("pointermove", moveHeroPreviewPointer);
  group.addEventListener("pointerup", endHeroPreviewPointer);
  group.addEventListener("pointercancel", endHeroPreviewPointer);
  group.addEventListener("keydown", handleHeroPreviewKeyboard);

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateHeroPreviewMetrics).observe(group);
  }

  window.addEventListener("resize", () => {
    resolveHeroPreviewCollision();
    updateHeroPreviewMetrics();
  });
}

function getHeroPreviewTextContent() {
  return {
    greeting: heroPreviewElements.greeting.textContent.trim(),
    name: heroPreviewElements.name.textContent.trim(),
    thankYou: heroPreviewElements.thankYou.textContent.trim()
  };
}

function applyHeroPreviewTextContent(text) {
  heroPreviewElements.textInput.value = [text.greeting, text.name, text.thankYou].join("\n");
  heroPreviewElements.greeting.textContent = text.greeting;
  heroPreviewElements.nameInitial.textContent = text.name.charAt(0);
  heroPreviewElements.name.replaceChildren(
    heroPreviewElements.nameInitial,
    document.createTextNode(text.name.slice(1))
  );
  heroPreviewElements.thankYou.textContent = text.thankYou;
  heroPreviewState.text = { ...text };
}

function saveHeroPreviewLocally() {
  try {
    const savedItems = Object.fromEntries(
      Object.entries(heroPreviewState.items).map(([itemId, item]) => [itemId, {
        x: item.x,
        y: item.y,
        width: item.width,
        height: item.height,
        zIndex: item.zIndex
      }])
    );
    localStorage.setItem(HERO_PREVIEW_STORAGE_KEY, JSON.stringify({
      text: heroPreviewState.text,
      items: savedItems
    }));
    announceHeroPreview("Hero preview saved locally in this browser.");
  } catch {
    announceHeroPreview("This browser could not save the Hero preview locally.");
  }
}

function loadHeroPreviewLocally() {
  try {
    const savedPreview = JSON.parse(localStorage.getItem(HERO_PREVIEW_STORAGE_KEY));
    if (!savedPreview) return;

    if (savedPreview.text) {
      heroPreviewState.text = savedPreview.text;
    }

    if (savedPreview.items) {
      Object.entries(savedPreview.items).forEach(([itemId, savedItem]) => {
        if (heroPreviewState.items[itemId]) {
          const { x, y, width, height, zIndex } = savedItem;
          Object.assign(heroPreviewState.items[itemId], {
            x,
            y,
            width,
            height,
            zIndex: Number.isFinite(zIndex) ? zIndex : heroPreviewState.items[itemId].zIndex
          });
        }
      });
    }
  } catch {
    localStorage.removeItem(HERO_PREVIEW_STORAGE_KEY);
  }
}

function applyHeroPreviewItem(itemId) {
  const item = heroPreviewState.items[itemId];
  if (!item) return;

  item.element.style.setProperty("--hero-preview-x", `${item.x}px`);
  item.element.style.setProperty("--hero-preview-y", `${item.y}px`);
  item.element.style.setProperty("--hero-preview-z", item.zIndex);

  if (item.width) {
    item.element.style.setProperty("--hero-preview-width", `${item.width}px`);
  } else {
    item.element.style.removeProperty("--hero-preview-width");
  }

  if (item.height) {
    item.element.style.setProperty("--hero-preview-height", `${item.height}px`);
  } else {
    item.element.style.removeProperty("--hero-preview-height");
  }
}

function constrainHeroPreviewItem(itemId) {
  const item = heroPreviewState.items[itemId];
  const itemRect = item.element.getBoundingClientRect();
  const heroRect = heroPreviewElements.hero.getBoundingClientRect();
  let xOffset = 0;
  let yOffset = 0;

  if (itemRect.left < heroRect.left) xOffset = heroRect.left - itemRect.left;
  if (itemRect.right > heroRect.right) xOffset = heroRect.right - itemRect.right;
  if (itemRect.top < heroRect.top) yOffset = heroRect.top - itemRect.top;
  if (itemRect.bottom > heroRect.bottom) yOffset = heroRect.bottom - itemRect.bottom;

  if (xOffset || yOffset) {
    item.x += xOffset;
    item.y += yOffset;
    applyHeroPreviewItem(itemId);
  }
}

function heroPreviewItemsOverlap(first, second) {
  const firstRect = first.element.getBoundingClientRect();
  const secondRect = second.element.getBoundingClientRect();

  return !(
    firstRect.right + 24 <= secondRect.left ||
    firstRect.left - 24 >= secondRect.right ||
    firstRect.bottom + 24 <= secondRect.top ||
    firstRect.top - 24 >= secondRect.bottom
  );
}

function reflowObstructedHeroPreviewItems(activeItemId) {
  // Overlap is intentional in this preview. This legacy hook is retained as a no-op.
}

function getHeroPreviewResizeDirection(item, event) {
  const rect = item.element.getBoundingClientRect();
  const horizontal = event.clientX - rect.left < rect.width * 0.25
    ? "w"
    : event.clientX - rect.left > rect.width * 0.75
      ? "e"
      : "";
  const vertical = event.clientY - rect.top < rect.height * 0.25
    ? "n"
    : event.clientY - rect.top > rect.height * 0.75
      ? "s"
      : "";

  if (vertical && horizontal) return `${vertical}${horizontal}`;
  if (vertical || horizontal) return vertical || horizontal;

  const distances = {
    n: event.clientY - rect.top,
    s: rect.bottom - event.clientY,
    w: event.clientX - rect.left,
    e: rect.right - event.clientX
  };

  return Object.entries(distances).sort(([, first], [, second]) => first - second)[0][0];
}

function resizeHeroPreviewItem(itemId, direction, deltaX, deltaY, start) {
  const item = heroPreviewState.items[itemId];
  let { width, height, x, y } = start;

  if (direction.includes("e")) width += deltaX;
  if (direction.includes("w")) {
    width -= deltaX;
    x += deltaX;
  }
  if (direction.includes("s")) height += deltaY;
  if (direction.includes("n")) {
    height -= deltaY;
    y += deltaY;
  }

  item.width = Math.max(1, Math.round(width));
  item.height = Math.max(1, Math.round(height));
  item.x = Math.round(x);
  item.y = Math.round(y);
  applyHeroPreviewItem(itemId);
  constrainHeroPreviewItem(itemId);
  reflowObstructedHeroPreviewItems(itemId);
}

function beginDirectHeroPreviewInteraction(event, itemId) {
  if (event.button !== undefined && event.button !== 0) return;

  const item = heroPreviewState.items[itemId];
  const rect = item.element.getBoundingClientRect();
  Object.values(heroPreviewState.items).forEach((previewItem) => {
    previewItem.element.classList.remove("hero-preview-selected");
  });
  item.element.classList.add("hero-preview-selected");
  heroPreviewState.pointer = {
    itemId,
    startX: event.clientX,
    startY: event.clientY,
    start: { x: item.x, y: item.y, width: item.width ?? rect.width, height: item.height ?? rect.height },
    resizeDirection: getHeroPreviewResizeDirection(item, event),
    resize: false,
    moved: false
  };

  heroPreviewState.longPressTimer = window.setTimeout(() => {
    if (!heroPreviewState.pointer) return;
    heroPreviewState.pointer.resize = true;
    item.element.classList.add("hero-preview-resizing");
    announceHeroPreview("Resize mode active. Drag from the selected edge or corner.");
  }, HERO_PREVIEW_LONG_PRESS_MS);

  item.element.setPointerCapture(event.pointerId);
}

function moveDirectHeroPreviewInteraction(event) {
  const interaction = heroPreviewState.pointer;
  if (!interaction) return;

  const item = heroPreviewState.items[interaction.itemId];
  const deltaX = event.clientX - interaction.startX;
  const deltaY = event.clientY - interaction.startY;

  if (!interaction.resize && (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4)) {
    window.clearTimeout(heroPreviewState.longPressTimer);
    interaction.moved = true;
    item.x = Math.round(interaction.start.x + deltaX);
    item.y = Math.round(interaction.start.y + deltaY);
    applyHeroPreviewItem(interaction.itemId);
    constrainHeroPreviewItem(interaction.itemId);
    reflowObstructedHeroPreviewItems(interaction.itemId);
  }

  if (interaction.resize) {
    interaction.moved = true;
    resizeHeroPreviewItem(interaction.itemId, interaction.resizeDirection, deltaX, deltaY, interaction.start);
  }
}

function endDirectHeroPreviewInteraction(event) {
  const interaction = heroPreviewState.pointer;
  if (!interaction) return;

  const item = heroPreviewState.items[interaction.itemId];
  window.clearTimeout(heroPreviewState.longPressTimer);
  item.element.classList.remove("hero-preview-resizing");

  if (item.element.hasPointerCapture(event.pointerId)) {
    item.element.releasePointerCapture(event.pointerId);
  }

  heroPreviewState.pointer = null;
  saveHeroPreviewLocally();
}

function initHeroTextPreview() {
  const { group, textInput, portrait, stickyNote } = heroPreviewElements;
  if (!group || !textInput || !portrait || !stickyNote) return;

  heroPreviewState.text = getHeroPreviewTextContent();
  heroPreviewState.items = {
    text: { element: group, x: 0, y: 0, width: null, height: null },
    photo: { element: portrait, x: 0, y: 0, width: null, height: null },
    postit: { element: stickyNote, x: 0, y: 0, width: null, height: null }
  };
  loadHeroPreviewLocally();

  applyHeroPreviewTextContent(heroPreviewState.text);
  Object.entries(heroPreviewState.items).forEach(([itemId, item]) => {
    item.element.classList.add("hero-preview-interactive");
    item.element.tabIndex = 0;
    item.element.setAttribute("aria-label", `${itemId === "text" ? "Hero text" : itemId === "photo" ? "Profile photo" : "Post-it note"}. Drag to move; long press and drag near an edge or corner to resize.`);
    applyHeroPreviewItem(itemId);
    item.element.addEventListener("pointerdown", (event) => beginDirectHeroPreviewInteraction(event, itemId));
    item.element.addEventListener("pointermove", moveDirectHeroPreviewInteraction);
    item.element.addEventListener("pointerup", endDirectHeroPreviewInteraction);
    item.element.addEventListener("pointercancel", endDirectHeroPreviewInteraction);
  });

  textInput.addEventListener("input", () => {
    const lines = textInput.value.replace(/\r/g, "").split("\n").slice(0, 3);
    while (lines.length < 3) lines.push("");
    applyHeroPreviewTextContent({ greeting: lines[0], name: lines[1], thankYou: lines[2] });
    saveHeroPreviewLocally();
  });
}

function selectEditableElement(itemId) {
  heroPreviewState.selectedId = itemId;
  const highestZIndex = Math.max(...Object.values(heroPreviewState.items).map((item) => item.zIndex));

  Object.entries(heroPreviewState.items).forEach(([currentItemId, item]) => {
    item.element.classList.toggle("hero-preview-selected", currentItemId === itemId);
  });

  const selectedItem = heroPreviewState.items[itemId];
  selectedItem.zIndex = highestZIndex + 1;
  applyHeroPreviewItem(itemId);
}

function deselectEditableElement() {
  heroPreviewState.selectedId = null;
  Object.values(heroPreviewState.items).forEach((item) => {
    item.element.classList.remove("hero-preview-selected");
  });
}

function constrainEditableElementToHero(itemId) {
  const item = heroPreviewState.items[itemId];
  const itemRect = item.element.getBoundingClientRect();
  const heroRect = heroPreviewElements.hero.getBoundingClientRect();
  let xOffset = 0;
  let yOffset = 0;

  if (itemRect.left < heroRect.left) xOffset = heroRect.left - itemRect.left;
  if (itemRect.right > heroRect.right) xOffset = heroRect.right - itemRect.right;
  if (itemRect.top < heroRect.top) yOffset = heroRect.top - itemRect.top;
  if (itemRect.bottom > heroRect.bottom) yOffset = heroRect.bottom - itemRect.bottom;

  if (xOffset || yOffset) {
    item.x += xOffset;
    item.y += yOffset;
    applyHeroPreviewItem(itemId);
  }
}

function getEditableResizeStart(item) {
  const rect = item.element.getBoundingClientRect();
  return {
    x: item.x,
    y: item.y,
    width: item.width ?? rect.width,
    height: item.height ?? rect.height
  };
}

function updateEditableElementResize(itemId, direction, deltaX, deltaY, start) {
  const item = heroPreviewState.items[itemId];
  let { x, y, width, height } = start;

  if (direction.includes("e")) width += deltaX;
  if (direction.includes("w")) {
    width -= deltaX;
    x += deltaX;
  }
  if (direction.includes("s")) height += deltaY;
  if (direction.includes("n")) {
    height -= deltaY;
    y += deltaY;
  }

  item.x = Math.round(x);
  item.y = Math.round(y);
  item.width = Math.max(0, Math.round(width));
  item.height = Math.max(0, Math.round(height));
  applyHeroPreviewItem(itemId);
}

function beginResize(event, itemId, direction) {
  event.preventDefault();
  event.stopPropagation();
  selectEditableElement(itemId);
  const item = heroPreviewState.items[itemId];
  heroPreviewState.pointer = {
    type: "resize",
    itemId,
    direction,
    startX: event.clientX,
    startY: event.clientY,
    start: getEditableResizeStart(item)
  };
  item.element.setPointerCapture(event.pointerId);
}

function startLongPress(event, itemId) {
  if (event.button !== undefined && event.button !== 0) return;
  const item = heroPreviewState.items[itemId];
  selectEditableElement(itemId);

  heroPreviewState.pointer = {
    type: "pending",
    itemId,
    startX: event.clientX,
    startY: event.clientY,
    start: getEditableResizeStart(item)
  };
  item.element.setPointerCapture(event.pointerId);
  heroPreviewState.longPressTimer = window.setTimeout(() => {
    if (!heroPreviewState.pointer || heroPreviewState.pointer.itemId !== itemId) return;
    heroPreviewState.pointer.type = "drag";
    item.element.classList.add("hero-preview-dragging");
    announceHeroPreview("Drag mode active. Move the selected Hero element freely.");
  }, HERO_PREVIEW_LONG_PRESS_MS);
}

function updateDrag(event) {
  const interaction = heroPreviewState.pointer;
  if (!interaction || interaction.type === "pending") return;
  const item = heroPreviewState.items[interaction.itemId];
  const deltaX = event.clientX - interaction.startX;
  const deltaY = event.clientY - interaction.startY;

  if (interaction.type === "drag") {
    item.x = Math.round(interaction.start.x + deltaX);
    item.y = Math.round(interaction.start.y + deltaY);
    applyHeroPreviewItem(interaction.itemId);
    return;
  }

  if (interaction.type === "resize") {
    updateEditableElementResize(interaction.itemId, interaction.direction, deltaX, deltaY, interaction.start);
  }
}

function endDrag(event) {
  const interaction = heroPreviewState.pointer;
  if (!interaction) return;
  const item = heroPreviewState.items[interaction.itemId];
  window.clearTimeout(heroPreviewState.longPressTimer);
  item.element.classList.remove("hero-preview-dragging");

  if (item.element.hasPointerCapture(event.pointerId)) {
    item.element.releasePointerCapture(event.pointerId);
  }

  heroPreviewState.pointer = null;
  saveHeroPreviewLocally();
}

function setLayerOrder(action) {
  const itemId = heroPreviewState.selectedId;
  if (!itemId) {
    announceHeroPreview("Select a Hero element before changing its layer order.");
    return;
  }

  const layers = Object.values(heroPreviewState.items).map((item) => item.zIndex);
  const item = heroPreviewState.items[itemId];
  const lowest = Math.min(...layers);
  const highest = Math.max(...layers);

  if (action === "front") item.zIndex = highest + 1;
  if (action === "back") item.zIndex = lowest - 1;
  if (action === "forward") item.zIndex += 1;
  if (action === "backward") item.zIndex -= 1;

  applyHeroPreviewItem(itemId);
  saveHeroPreviewLocally();
}

function resetElementLayout(itemId) {
  const original = heroPreviewState.original.items[itemId];
  const item = heroPreviewState.items[itemId];
  Object.assign(item, original);
  applyHeroPreviewItem(itemId);
}

function createResizeHandles(itemId) {
  const handles = document.createElement("div");
  handles.className = "hero-preview-handles";

  ["nw", "n", "ne", "w", "e", "sw", "s", "se"].forEach((direction) => {
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "hero-preview-handle";
    handle.dataset.direction = direction;
    handle.setAttribute("aria-label", `Resize ${itemId} from the ${direction} edge or corner`);
    handle.addEventListener("pointerdown", (event) => beginResize(event, itemId, direction));
    handles.append(handle);
  });

  heroPreviewState.items[itemId].element.append(handles);
}

function initHeroTextPreview() {
  const { group, textInput, portrait, stickyNote } = heroPreviewElements;
  if (!group || !textInput || !portrait || !stickyNote) return;

  heroPreviewState.text = getHeroPreviewTextContent();
  heroPreviewState.items = {
    text: { element: group, x: 74, y: -3, width: 1404, height: 118, zIndex: 64 },
    photo: { element: portrait, x: 54, y: 34, width: null, height: null, zIndex: 54 },
    postit: { element: stickyNote, x: 21, y: 120, width: 293, height: 172, zIndex: 63 }
  };
  heroPreviewState.original = {
    text: { ...heroPreviewState.text },
    items: Object.fromEntries(Object.entries(heroPreviewState.items).map(([itemId, item]) => [itemId, {
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      zIndex: item.zIndex
    }]))
  };
  loadHeroPreviewLocally();

  applyHeroPreviewTextContent(heroPreviewState.text);
  Object.entries(heroPreviewState.items).forEach(([itemId, item]) => {
    item.element.classList.add("hero-preview-interactive");
    item.element.setAttribute("aria-label", `${itemId === "text" ? "Hero text" : itemId === "photo" ? "Profile photo" : "Post-it note"}. Click to select and resize; long press for 450 milliseconds to drag.`);
    applyHeroPreviewItem(itemId);
    createResizeHandles(itemId);
    item.element.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".hero-preview-handle")) return;
      startLongPress(event, itemId);
    });
    item.element.addEventListener("pointermove", updateDrag);
    item.element.addEventListener("pointerup", endDrag);
    item.element.addEventListener("pointercancel", endDrag);
  });

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".hero-preview-interactive")) {
      deselectEditableElement();
    }
  });

  textInput.addEventListener("input", () => {
    const lines = textInput.value.replace(/\r/g, "").split("\n").slice(0, 3);
    while (lines.length < 3) lines.push("");
    applyHeroPreviewTextContent({ greeting: lines[0], name: lines[1], thankYou: lines[2] });
    saveHeroPreviewLocally();
  });

  heroLayerButtons.forEach((button) => {
    button.addEventListener("click", () => setLayerOrder(button.dataset.heroLayerAction));
  });

  heroResetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const resetTarget = button.dataset.heroReset;
      if (resetTarget === "all") {
        applyHeroPreviewTextContent(heroPreviewState.original.text);
        Object.keys(heroPreviewState.items).forEach(resetElementLayout);
      } else {
        resetElementLayout(resetTarget);
        if (resetTarget === "text") applyHeroPreviewTextContent(heroPreviewState.original.text);
      }
      saveHeroPreviewLocally();
    });
  });
}

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

  if (tabId === "home") {
    setActiveHomeSection("home-hero");
    startHomeSectionTracking();
  } else {
    homeSectionObserver?.disconnect();
  }
}

function setActiveHomeSection(sectionId) {
  homeSectionLinks.forEach((link) => {
    const isActive = link.dataset.homeSection === sectionId;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateHomeNavigationMetrics() {
  if (!homeSectionNav?.classList.contains("active") || !siteHeader) return;

  const frozenNavigationHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--frozen-nav-height", `${frozenNavigationHeight}px`);
}

function updateActiveHomeSection() {
  if (!document.querySelector('[data-tab-panel="home"].active')) return;

  const navigationBottom = siteHeader?.getBoundingClientRect().bottom ?? 0;
  const marker = Math.min(window.innerHeight * 0.6, navigationBottom + 32);
  let activeSection = homeSections[0];

  homeSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= marker) {
      activeSection = section;
    }
  });

  if (activeSection) {
    setActiveHomeSection(activeSection.id);
  }
}

function startHomeSectionTracking() {
  homeSectionObserver?.disconnect();
  updateHomeNavigationMetrics();

  if ("IntersectionObserver" in window) {
    homeSectionObserver = new IntersectionObserver(updateActiveHomeSection, {
      rootMargin: "-20% 0px -45% 0px",
      threshold: [0, 0.25, 0.5, 0.75]
    });

    homeSections.forEach((section) => homeSectionObserver.observe(section));
  } else {
    updateActiveHomeSection();
  }
}

window.addEventListener("resize", updateHomeNavigationMetrics);

window.addEventListener("scroll", () => {
  if ("IntersectionObserver" in window || homeScrollTicking) return;

  homeScrollTicking = true;
  requestAnimationFrame(() => {
    updateActiveHomeSection();
    homeScrollTicking = false;
  });
}, { passive: true });

homeSectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById(link.dataset.homeSection);

    if (target) {
      setActiveHomeSection(target.id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", link.hash);
    }
  });
});

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
    paragraph.className = "resizable-section-text";
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

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  focusFirstInvalidContactField();
});

[contactSenderEmail, contactSubject, contactMessage].forEach((field) => {
  field?.addEventListener("input", updateButtonStates);
});

contactClearButton?.addEventListener("click", clearContactForm);
contactPreviewButton?.addEventListener("click", openContactPreview);
contactPreviewCloseButton?.addEventListener("click", closeContactPreview);
contactSubmitButtons.forEach((button) => {
  button.addEventListener("click", submitContactForm);
});
projectDemoButtons.forEach((button) => {
  button.addEventListener("click", openProjectDemo);
});
projectDemoCloseButton?.addEventListener("click", closeProjectDemo);

contactPreviewModal?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeContactPreview();
});

projectDemoModal?.addEventListener("close", () => {
  if (projectDemoFrame) {
    projectDemoFrame.src = "about:blank";
  }
});

updateButtonStates();
renderSkills();
showTab("home");
initBannerAudio();

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
