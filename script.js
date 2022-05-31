const daysE1 = document.getElementById('days'); //contagem de dias
const hoursE1 = document.getElementById('hours'); //contagem de horas
const minsE1 = document.getElementById('mins'); //contagem de minutos
const secondsE1 = document.getElementById('seconds'); //contagem de segundos

const newYears = "1 Jan 2022"; //data prevista até que chegue a contagem obs: pode ser negativa

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) /1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, mins, seconds);  //demonstra no console a contagem  também

  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);