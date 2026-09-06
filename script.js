document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const utilityIdInput = document.getElementById("utility-id");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  const loginScreen = document.getElementById("login-screen");
  const dashboardScreen = document.getElementById("dashboard-screen");
  const logoutBtn = document.getElementById("logout-btn");

  // Credentials
  const VALID_ID = "UCID123";
  const VALID_PASSWORD = "12345";

  // Login handler
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputId = utilityIdInput.value.trim();
    const inputPass = passwordInput.value.trim();

    if (inputId === VALID_ID && inputPass === VALID_PASSWORD) {
      errorMsg.textContent = "";
      loginForm.reset();
      loginScreen.classList.remove("active");
      dashboardScreen.classList.add("active");
    } else {
      errorMsg.textContent = "Invalid Utility Control ID or Password";
    }
  });

  // Logout handler
  logoutBtn.addEventListener("click", () => {
    dashboardScreen.classList.remove("active");
    loginScreen.classList.add("active");
    errorMsg.textContent = "";
  });
});

// Card action handler
function handleCardClick(moduleName) {
  alert(`Navigating to ${moduleName}`);
}