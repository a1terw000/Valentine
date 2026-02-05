const noPhrases = [
  "Ты точно уверена?",
  "Харе мискликать!",
  "Кстати кнопка сломана)",
  "Разработчик ждёт пока ты нажмёшь «Да»",
  "Ну же ❤️",
  "Ты же моя валентинка",
  "Не сопротивляйся любви",
  "Я люблю тебя, солнышко(",
  "Как тогда мы влюбились?"
];

const btnNo = document.querySelector('.btn_no');
const yesBtn = document.querySelector('.btn_ye');
let scale = 1;
btnNo.addEventListener('click', () => {
  randomPhrase = Math.random() * noPhrases.length;
  btnNo.textContent = noPhrases[Math.floor(randomPhrase)];
  scale *= 1.2;
  yesBtn.style.transform = `scale(${scale})`;
})

yesBtn.addEventListener('click', () => {
  document.body.innerHTML = '';
  const newImg = document.createElement('img');
  newImg.setAttribute('src', './gifs/fireworks-heart-glasses.gif');
  newImg.setAttribute('class', 'newImgGif');
  const newText = document.createElement('p');
  newText.setAttribute('class', 'newText');
  newText.textContent = "УРААААА! Спасибо что ты есть в моей жизни, солнышко❤️❤️❤️";
  document.body.append(newImg, newText);
})
