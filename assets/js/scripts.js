function moveEye() {
  const iris = document.querySelector('.iris');
  const pupil = document.querySelector('.pupil');
  const glassEffect = document.querySelector('.glass-effect');

  const maxMove = 15;
  const x = (Math.random() - 0.5) * maxMove;
  const y = (Math.random() - 0.5) * maxMove;

  const speed = Math.random() * 0.3 + 0.2;

  iris.style.transition = `transform ${speed}s ease-out`;
  pupil.style.transition = `transform ${speed}s ease-out, r 0.3s ease-out`;
  glassEffect.style.transition = `transform ${speed}s ease-out`;

  iris.style.transform = `translate(${x}px, ${y}px)`;
  pupil.style.transform = `translate(${x}px, ${y}px)`;
  glassEffect.style.transform = `translate(${x}px, ${y}px)`;
}

function changePupilSize() {
  const pupil = document.querySelector('.pupil');
  const minSize = 10;
  const maxSize = 14;
  const newSize = Math.random() * (maxSize - minSize) + minSize;

  pupil.style.transition = 'r 0.3s ease-out';
  pupil.setAttribute('r', newSize);
}

function blink() {
  const eyelid = document.querySelector('.eyelid');
  eyelid.style.transform = 'translateY(100%)';
  setTimeout(() => {
    eyelid.style.transform = 'translateY(-100%)';
  }, 150);
}

function randomAction() {
  const actions = [
    { func: moveEye, weight: 0.7 },
    { func: blink, weight: 0.2 },
    { func: changePupilSize, weight: 0.1 }
  ];

  const totalWeight = actions.reduce((sum, action) => sum + action.weight, 0);
  let random = Math.random() * totalWeight;

  for (let action of actions) {
    if (random < action.weight) {
      action.func();
      break;
    }
    random -= action.weight;
  }

  const minInterval = 500;
  const maxInterval = 3000;
  const interval = Math.random() * (maxInterval - minInterval) + minInterval;

  setTimeout(randomAction, interval);
}

// Запускаем случайные действия
randomAction();
