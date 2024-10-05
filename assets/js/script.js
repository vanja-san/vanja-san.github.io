const themeToggle = document.getElementById('theme-toggle');

// Get the current theme state from localStorage
const currentTheme = localStorage.getItem('theme');

// Set the initial theme state
if (currentTheme === 'dark-mode') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Update the theme state in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
});