import { Notify } from "notiflix/build/notiflix-notify-aio";
const formRef = document.querySelector('.form');

  const handleSubmit = event => {
    event.preventDefault();
    const saveData = {
      elements: { delay, step, amount },
    } = event.currentTarget;
    delay = Number(delay.value);
    step = Number(step.value);
    amount = Number(amount.value);
    event.currentTarget.reset();

    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            resolve({position, delay});
          }
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            reject({position, delay})
        }, delay)
      });
    };

    for (let i = 0; i < amount; i++) {
      createPromise(i + 1, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delay += step;
    }

  };
  formRef.addEventListener('submit', handleSubmit);



