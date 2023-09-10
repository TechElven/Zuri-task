// const showDay = document.quer
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const day = weekday[date.getDay()];
const time = date.getTime();
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = day;
document.getElementById('showTime').innerHTML = time;

