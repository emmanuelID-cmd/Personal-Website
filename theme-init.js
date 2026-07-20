(function initializeSavedTheme() {
  const storageKey = "personal-website-theme";

  try {
    if (localStorage.getItem(storageKey) === "light") {
      document.documentElement.dataset.theme = "light";
    }
  } catch (error) {
    // Dark Mode remains the CSS default when storage is unavailable.
  }
})();
