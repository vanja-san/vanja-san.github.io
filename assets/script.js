let theme = "light";
let toggleButton = document.querySelector(".toggle-theme");

function toggleTheme() {
  if (theme === "light") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    toggleButton.querySelector("i").classList.remove("ti-moon");
    toggleButton.querySelector("i").classList.add("ti-sun");
    theme = "dark";
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    toggleButton.querySelector("i").classList.remove("ti-sun");
    toggleButton.querySelector("i").classList.add("ti-moon");
    theme = "light";
  }
}

const translations = {
  ru: {
    quoteText:
      "Сколько бы ошибок вы ни совершали и как бы медленно ни продвигались вперед, вы всё равно намного опережаете всех, кто не пытается.",
    quoteAuthor: "— Тони Роббинс",
  },
  en: {
    quoteText:
      "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.",
    quoteAuthor: "— Tony Robbins",
  },
};

let currentLang = "ru";
let langs = ["ru", "en"];

function updateLanguage() {
  const quoteTextElement = document.querySelector(".quote-text");
  const quoteAuthorElement = document.querySelector(".quote-author");

  quoteTextElement.classList.remove("animate-in");
  quoteAuthorElement.classList.remove("animate-in");

  quoteTextElement.classList.add("animate-out");
  quoteAuthorElement.classList.add("animate-out");

  setTimeout(() => {
    quoteTextElement.textContent = translations[currentLang].quoteText;
    quoteAuthorElement.textContent = translations[currentLang].quoteAuthor;

    quoteTextElement.classList.remove("animate-out");
    quoteAuthorElement.classList.remove("animate-out");

    quoteTextElement.classList.add("animate-in");
    quoteAuthorElement.classList.add("animate-in");
  }, 1500);
}

setInterval(() => {
  currentLang = langs[(langs.indexOf(currentLang) + 1) % langs.length];
  updateLanguage();
}, 8000);
