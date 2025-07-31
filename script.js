function login() {
  const name = document.getElementById("username").value;
  if (!name) return alert("Bitte Namen eingeben!");
  localStorage.setItem("playerName", name);
  localStorage.setItem("money", "100");
  localStorage.setItem("health", "100");
  localStorage.setItem("time", "100");
  showGame();
}

function showGame() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("playerName").innerText = localStorage.getItem("playerName");
  document.getElementById("money").innerText = localStorage.getItem("money");
  document.getElementById("health").innerText = localStorage.getItem("health");
  document.getElementById("time").innerText = localStorage.getItem("time");
}

function logout() {
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
}

function showSection(section) {
  const text = {
    beruf: "Du bist zurzeit arbeitslos. Du kannst später einen Beruf auswählen.",
    freunde: "Du hast 0 Freunde. Das ist okay.",
    freizeit: "Du kannst spazieren gehen, lesen oder zocken.",
    familie: "Deine Familie lebt in Köln. Kontakt: selten.",
    postfach: "Keine neuen Nachrichten."
  };
  document.getElementById("overviewText").innerHTML = `<p>${text[section]}</p>`;
}

window.onload = () => {
  if (localStorage.getItem("playerName")) {
    showGame();
  }
};
