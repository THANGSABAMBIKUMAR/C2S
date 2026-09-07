document.addEventListener('DOMContentLoaded', () => {
  // Views & Navigation
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const homeLink = document.getElementById('home-link');

  // Login Form Controls
  const loginForm = document.getElementById('login-form');
  const utilityIdInput = document.getElementById('utilityId');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');
  const loginMsg = document.getElementById('login-msg');

  // Search & Modal Elements
  const searchForm = document.getElementById('search-form');
  const searchCustomerInput = document.getElementById('search-customer-id');
  const searchMeterInput = document.getElementById('search-meter-no');
  const customerModal = document.getElementById('customer-modal');
  const modalClose = document.getElementById('modal-close');
  const custModalName = document.getElementById('cust-modal-name');
  const logoutBtn = document.getElementById('dashboard-logout-btn');

  // Credentials
  const VALID_UTILITY_ID = 'UC-00123';
  const VALID_PASSWORD = '12345';

  // Toggle Password Visibility
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.classList.toggle('fa-eye', !isPassword);
    eyeIcon.classList.toggle('fa-eye-slash', isPassword);
  });

  // Handle Home Click: Smooth scroll to top
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loginMsg.textContent = '';
  });

  // Handle Login Authentication & Navigate to Dashboard
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredId = utilityIdInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredId === VALID_UTILITY_ID && enteredPassword === VALID_PASSWORD) {
      loginMsg.className = 'login-message success';
      loginMsg.textContent = 'Login successful! Opening dashboard...';

      setTimeout(() => {
        loginForm.reset();
        loginMsg.textContent = '';
        
        loginView.classList.remove('active');
        dashboardView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 350);
    } else {
      loginMsg.className = 'login-message error';
      loginMsg.textContent = 'Invalid Utility Control ID or Password.';
    }
  });

  // Handle Search Submission & Show Customer Popup
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const custId = searchCustomerInput.value.trim();
    const meterNo = searchMeterInput.value.trim();

    // Check for Customer ID: 12345 OR Meter No: MN123
    if (custId === '12345' || meterNo.toUpperCase() === 'MN123') {
      custModalName.textContent = 'XYZ';
      customerModal.classList.add('active');
    } else if (!custId && !meterNo) {
      alert('Please enter Customer ID (e.g. 12345) or Meter No (e.g. MN123).');
    } else {
      alert('Record not found. Try Customer ID: 12345 or Meter No: MN123');
    }
  });

  // Close Customer Popup
  modalClose.addEventListener('click', () => {
    customerModal.classList.remove('active');
  });

  // Close modal on outside click
  customerModal.addEventListener('click', (e) => {
    if (e.target === customerModal) {
      customerModal.classList.remove('active');
    }
  });

  // Handle Dashboard Logout
  logoutBtn.addEventListener('click', () => {
    dashboardView.classList.remove('active');
    loginView.classList.add('active');
    utilityIdInput.value = '';
    passwordInput.value = '';
    searchCustomerInput.value = '';
    searchMeterInput.value = '';
    loginMsg.textContent = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Action Card Handler
function triggerAction(actionName) {
  alert(`Opening module: ${actionName}`);
}
