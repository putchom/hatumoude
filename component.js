const sceneEl = document.querySelector('a-scene');
const button = document.getElementById('throw-osaisen-button');
const toriiFragment = document.createDocumentFragment();
const music = new Audio();

music.preload = 'auto';
music.src = './sound/garagara2.mp3';
music.load();

for (var i = 0; i < 30; i++) {
  const toriiEntityEl = document.createElement('a-entity');
  toriiEntityEl.setAttribute('static-body', '');
  toriiEntityEl.setAttribute('id', 'torii');
  toriiEntityEl.setAttribute('obj-model', 'obj:#torii-obj; mtl:#torii-mtl;');
  toriiEntityEl.setAttribute('position', `0 0 ${(-1 * 15 * (i + 1))}`);
  toriiEntityEl.setAttribute('scale', '3 3 3');
  toriiEntityEl.setAttribute('rotation', '0 0 0');
  toriiFragment.appendChild(toriiEntityEl);
}

sceneEl.appendChild(toriiFragment);

button.addEventListener('click', event => {
  const goenFragment = document.createDocumentFragment();

  for (var i = 0; i < 200; i++) {
    const goenEntityEl = document.createElement('a-entity');
    goenEntityEl.setAttribute('dynamic-body', '');
    goenEntityEl.setAttribute('id', 'goen');
    goenEntityEl.setAttribute('obj-model', 'obj:#goen-obj; mtl:#goen-mtl;');
    goenEntityEl.setAttribute('position', `${getRandomInt(-5, 5)} 20 ${getRandomInt(-10, -8)}`);
    goenEntityEl.setAttribute('scale', '1 1 1');
    goenEntityEl.setAttribute('rotation', '0 0 0');
    goenFragment.appendChild(goenEntityEl);
  }

  function omikuji(omikujiText) {
    const currentTextEntityEl = document.getElementById('omikuji-text');
    if(currentTextEntityEl) {
      currentTextEntityEl.remove();
    }

    const textEntityEl = document.createElement('a-entity');
    textEntityEl.setAttribute('id', 'omikuji-text');
    textEntityEl.setAttribute('static-body', '');
    textEntityEl.setAttribute('obj-model', `obj:#${omikujiText}-obj; mtl:#${omikujiText}-mtl;`);
    textEntityEl.setAttribute('position', '0 0 -480');
    textEntityEl.setAttribute('animation', 'property: position; to: 0 8 -10; dur: 2000; easing: linear; loop: false');
    textEntityEl.setAttribute('scale', '10 10 10');
    textEntityEl.setAttribute('rotation', '0 0 0');
    sceneEl.appendChild(textEntityEl);
  }

  const rnd = Math.floor(Math.random() * 4);
  var omikujiText;
  if (rnd === 0) omikujiText = 'daikichi';
  if (rnd === 1) omikujiText = 'chukichi';
  if (rnd === 2) omikujiText = 'shokichi';
  if (rnd === 3) omikujiText = 'kyo';
  omikuji(omikujiText);

  sceneEl.appendChild(goenFragment);
  music.play();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}