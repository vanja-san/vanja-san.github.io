document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('toggle-theme');
  const themeStylesheet = document.getElementById('theme-stylesheet');

  // Проверка сохраненной темы в localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    themeStylesheet.setAttribute('href', savedTheme === 'dark' ? './assets/css/dark.css' : './assets/css/light.css');
    document.body.classList.add(savedTheme);
  } else {
    // Устанавливаем тему по умолчанию, если она не сохранена
    themeStylesheet.setAttribute('href', './assets/css/light.css'); // Светлая тема по умолчанию
    document.body.classList.add('light'); // Также можно добавить класс для настройки стилей
  }

  button.addEventListener('click', function () {
    if (themeStylesheet.getAttribute('href') === './assets/css/light.css') {
      themeStylesheet.setAttribute('href', './assets/css/dark.css');
      localStorage.setItem('theme', 'dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      themeStylesheet.setAttribute('href', './assets/css/light.css');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  });
});
