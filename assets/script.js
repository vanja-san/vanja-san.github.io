let theme = "light"; // initial theme
let toggleButton = document.querySelector(".toggle-theme"); // define toggleButton

function toggleTheme() {
  if (theme === "light") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    theme = "dark";
    toggleButton.innerHTML = "<i class='fas fa-sun'></i>"; // update icon
    document.body.style.background = "#272727"; // update background color
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    theme = "light";
    toggleButton.innerHTML = "<i class='fas fa-moon'></i>"; // update icon
    document.body.style.background = "#f0f0f0"; // update background color
  }
}

const translations = {
  ru: {
    quoteText:
      "Независимо от количества ошибок, которые вы делаете, или от того, насколько медленно вы прогрессируете, вы всё равно опережаете всех, кто не пытается.",
    quoteAuthor: "— Тони Роббинс",
  },
  en: {
    quoteText:
      "Regardless of the number of mistakes you make, or how slow you progress, you still outperform everyone who doesn't try.",
    quoteAuthor: "— Tony Robbins",
  },
};

let currentLang = "ru";
let langs = ["ru", "en"];

function updateLanguage() {
  const quoteTextElement = document.querySelector(".quote-text");
  const quoteAuthorElement = document.querySelector(".quote-author");

  quoteTextElement.classList.add("animate-out");

  setTimeout(() => {
    quoteTextElement.textContent = translations[currentLang].quoteText;
    quoteAuthorElement.textContent = translations[currentLang].quoteAuthor;

    quoteTextElement.classList.remove("animate-out");
    quoteTextElement.classList.add("animate-in");
  }, 1500); // increased timeout to 750ms
}

// Switch language every 5 seconds
setInterval(() => {
  currentLang = langs[(langs.indexOf(currentLang) + 1) % langs.length];
  updateLanguage();
}, 5000);
