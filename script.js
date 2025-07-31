window.onload = () => {
  const savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    showGame(savedUser);
  } else {
    showLogin();
  }
};

function login() {
  const username = document.getElementById("username").value.trim();
  if (username !== "") {
    localStorage.setItem("loggedInUser", username);
    showGame(username);
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  showLogin();
}

function showLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("game").style.display = "none";
}

function showGame(username) {
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("usernameDisplay").innerText = username;
}
