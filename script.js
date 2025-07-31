window.onload = function () {
  const savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    document.getElementById("login").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("usernameDisplay").innerText = savedUser;
  } else {
    document.getElementById("login").style.display = "block";
    document.getElementById("game").style.display = "none";
  }
};

function login() {
  const username = document.getElementById("username").value.trim();
  if (username !== "") {
    localStorage.setItem("loggedInUser", username);
    document.getElementById("login").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("usernameDisplay").innerText = username;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("game").style.display = "none";
  document.getElementById("login").style.display = "block";
}
