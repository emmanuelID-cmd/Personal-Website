const rewardBackButton = document.querySelector("[data-reward-back]");

function returnToPortfolio() {
  if (window.opener && !window.opener.closed) {
    window.opener.focus();
    window.close();

    window.setTimeout(() => {
      if (!window.closed) {
        window.location.href = document.referrer || "index.html";
      }
    }, 150);
    return;
  }

  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}

rewardBackButton?.addEventListener("click", returnToPortfolio);
