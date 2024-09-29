const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const body = document.body;

let isDarkTheme = false;

themeToggleBtn.addEventListener("click", () => {
  if (isDarkTheme) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggleBtn.querySelector(".ti-moon").style.display = "inline-block";
    themeToggleBtn.querySelector(".ti-sun").style.display = "none";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggleBtn.querySelector(".ti-moon").style.display = "none";
    themeToggleBtn.querySelector(".ti-sun").style.display = "inline-block";
    localStorage.setItem("theme", "dark");
  }
  isDarkTheme = !isDarkTheme;
});

// Set initial theme based on localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggleBtn.querySelector(".ti-moon").style.display = "none";
  themeToggleBtn.querySelector(".ti-sun").style.display = "inline-block";
  isDarkTheme = true;
} else {
  body.classList.add("light-theme");
  themeToggleBtn.querySelector(".ti-moon").style.display = "inline-block";
  themeToggleBtn.querySelector(".ti-sun").style.display = "none";
}
