const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    let remainingSeconds = seconds;

    timerEl.textContent = remainingSeconds;

    intervalId = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds >= 0) {
        timerEl.textContent = remainingSeconds;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
