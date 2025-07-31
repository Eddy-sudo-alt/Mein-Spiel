const loginScreen = document.getElementById('loginScreen');
const birthScene = document.getElementById('birthScene');
const mainGame = document.getElementById('mainGame');
const prophecyText = document.getElementById('prophezeiungText');

const prophezeiungen = [
  "Du wirst Anwalt.",
  "Du wirst Verbrecher.",
  "Du wirst Arzt.",
  "Du wirst Taxifahrer.",
  "Du wirst König.",
  "Du wirst Niemand."
];

function login() {
  const username = document.getElementById('username').value;
  if (!username) return;

  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('user', username);

  const isFirstTime = !localStorage.getItem('wasBorn');
  if (isFirstTime) {
    const random = prophezeiungen[Math.floor(Math.random() * prophezeiungen.length)];
    prophecyText.innerText = random;
    birthScene.classList.remove('hidden');
    loginScreen.classList.add('hidden');
    localStorage.setItem('wasBorn', 'true');
  } else {
    showMain();
  }
}

function showMain() {
  loginScreen.classList.add('hidden');
  birthScene.classList.add('hidden');
  mainGame.classList.remove('hidden');
}

function logout() {
  localStorage.clear();
  location.reload();
}

// Auto-login
if (localStorage.getItem('loggedIn') === 'true') {
  if (!localStorage.getItem('wasBorn')) {
    const random = prophezeiungen[Math.floor(Math.random() * prophezeiungen.length)];
    prophecyText.innerText = random;
    birthScene.classList.remove('hidden');
    loginScreen.classList.add('hidden');
    localStorage.setItem('wasBorn', 'true');
  } else {
    showMain();
  }
}
