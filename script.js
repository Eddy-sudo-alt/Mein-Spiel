function login() {
  const username = document.getElementById('username').value;
  if (username.trim() === '') {
    alert("Bitte gib deinen Namen ein.");
    return;
  }

  localStorage.setItem('username', username);

  if (!localStorage.getItem('wasBorn')) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('birth-screen').classList.remove('hidden');
    generateProphecy();
    localStorage.setItem('wasBorn', 'true');
  } else {
    goToStart();
  }
}

function generateProphecy() {
  const prophecies = [
    "Du wirst einst große Weisheit erlangen.",
    "Dir ist ein gefährlicher Weg vorherbestimmt.",
    "Du wirst eine zentrale Figur in deiner Stadt.",
    "Dein Einfluss wird groß, aber einsam sein.",
    "Du wirst Frieden inmitten von Chaos finden."
  ];
  const chosen = prophecies[Math.floor(Math.random() * prophecies.length)];
  document.getElementById('prophecy').textContent = chosen;
  localStorage.setItem('prophecy', chosen);
}

function goToStart() {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('birth-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');

  // Optional: Lad gespeicherte Daten, wenn du willst
  document.getElementById('info-box').textContent = "Willkommen zurück, " + localStorage.getItem('username') + "!";
}

function showInfo(type) {
  const data = {
    Beruf: "Du bist aktuell arbeitslos.",
    Freunde: "Du hast 2 Freunde.",
    Freizeit: "Du gehst gerne spazieren.",
    Postfach: "Keine neuen Nachrichten.",
    Familie: "Du hast 1 Schwester."
  };
  document.getElementById('info-box').textContent = data[type] || "Keine Daten verfügbar.";
}

function logout() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
}
