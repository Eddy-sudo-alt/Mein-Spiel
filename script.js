// DOM-Elemente
const loginSection = document.getElementById("login");
const introSection = document.getElementById("intro");
const gameSection = document.getElementById("game");
const usernameInput = document.getElementById("username");

// Initialisierung
window.onload = () => {
  const user = localStorage.getItem("username");
  const hasSeenIntro = localStorage.getItem("hasSeenIntro");

  if (!user) {
    showLogin();
  } else if (!hasSeenIntro) {
    showIntro();
  } else {
    showGame();
  }
};

function login() {
  const username = usernameInput.value.trim();
  if (username) {
    localStorage.setItem("username", username);
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      showIntro();
    } else {
      showGame();
    }
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("hasSeenIntro");
  showLogin();
}

function showLogin() {
  loginSection.style.display = "block";
  introSection.style.display = "none";
  gameSection.style.display = "none";
}

function showIntro() {
  loginSection.style.display = "none";
  introSection.style.display = "block";
  gameSection.style.display = "none";

  const zufallsProphezeiung = [
    "Du wirst Großes erreichen.",
    "Dein Weg führt ins Unbekannte.",
    "Die Straßen deiner Stadt werden dich prägen.",
    "In deinem Inneren steckt mehr, als du denkst."
  ];

  document.getElementById("prophecy").innerText =
    zufallsProphezeiung[Math.floor(Math.random() * zufallsProphezeiung.length)];
}

function continueToGame() {
  localStorage.setItem("hasSeenIntro", "true");
  showGame();
}

function showGame() {
  loginSection.style.display = "none";
  introSection.style.display = "none";
  gameSection.style.display = "flex";

  const username = localStorage.getItem("username");
  document.getElementById("main-content").innerHTML = `
    Willkommen zurück, <b>${username}</b>!<br><br>
    <p>Wähle eine Aktion links aus, um dein Leben zu gestalten.</p>
  `;
}

function selectAction(action) {
  const info = {
    "Beruf": "Aktueller Beruf: Schüler",
    "Freunde": "Du hast 3 enge Freunde.",
    "Freizeit": "Du gehst gerne spazieren und liest Manga.",
    "Familie": "Du wohnst mit deiner Mutter und deinem Bruder.",
    "Postfach": "Keine neuen Nachrichten."
  };

  document.getElementById("main-content").innerHTML = `
    <h2>${action}</h2>
    <p>${info[action]}</p>
  `;
}
