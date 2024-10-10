const mainTitleElement = document.getElementById('mainTitle');
const todayIsElement = document.getElementById('todayIs');
const dayOfWeekElement = document.getElementById('dayOfWeek');
const monthElement = document.getElementById('month');
const dayElement = document.getElementById('day');
const yearElement = document.getElementById('year');
const atElement = document.getElementById('at');
const timeElement = document.getElementById('time');

const language = navigator.language.slice(0, 2);

const phrases = {
  en: {
    mainTitle: 'I don\'t have anything to say.',
    todayIs: 'Today is',
    at: 'at',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  ru: {
    mainTitle: 'Мне нечего сказать.',
    todayIs: 'Сегодня',
    at: '-',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  },
};

function updateDateTime() {
  const currentDate = new Date();
  const monthName = phrases[language].months[currentDate.getMonth()];
  const dayOfWeek = phrases[language].weekdays[currentDate.getDay()];
  let day = currentDate.getDate();

  // Auto-detect the time format
  const timeFormat = new Intl.DateTimeFormat(language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  mainTitleElement.textContent = phrases[language].mainTitle;
  todayIsElement.textContent = phrases[language].todayIs;
  dayOfWeekElement.textContent = dayOfWeek;
  monthElement.textContent = monthName;
  dayElement.textContent = day;
  yearElement.textContent = currentDate.getFullYear();
  atElement.textContent = phrases[language].at;
  timeElement.textContent = timeFormat.format(currentDate);
}

updateDateTime();
setInterval(updateDateTime, 1000);