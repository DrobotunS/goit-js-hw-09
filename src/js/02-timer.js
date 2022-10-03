import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const selector = document.querySelector('input#datetime-picker')
const btn = document.querySelector("button");
btn.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       deadLine = selectedDates[0].getTime();
      if (deadLine <= Date.now() ) {
        Notify.failure('Вибраний час в минулому, виберіть дату в майбутньому!', {
      position: "center-center",
      backOverlay: true,
      clickToClose: true
        });
        return
      }
      btn.removeAttribute('disabled');
    },
  };
  
  flatpickr(selector, options);
  
const timer = {
  intervalId: null,
    start() {
      btn.setAttribute('disabled', true),
      Notify.success('Відлік почався', {
        position: "center-center",
        backOverlay: true,
        clickToClose: true
          });      
this.intervalId = setInterval(() => {
 let ms = deadLine - Date.now()
convertMs(ms); 
if(ms <= 1000){
  clearInterval(this.intervalId);
  Notify.success('Дедлайн настав', {
    position: "center-center",
    backOverlay: true,
    clickToClose: true
      });      
};
}, 1000);

    },
};

btn.addEventListener('click', timer.start);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    const  refs = {
      daysRef: document.querySelector('[data-days]'),
      hoursRef: document.querySelector('[data-hours]'),
      minutesRef: document.querySelector('[data-minutes]'),
      secondsRef: document.querySelector('[data-seconds]'),
    };
    refs.daysRef.textContent = String(days).padStart(2, '0');
    refs.hoursRef.textContent = String(hours).padStart(2, '0');
    refs.minutesRef.textContent = String(minutes).padStart(2, '0');
    refs.secondsRef.textContent = String(seconds).padStart(2, '0');
  };
  