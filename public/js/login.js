const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log("login form submitted");
  console.log("email = " + email);
  console.log("password = " + password);

  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');

    } else {
      alert('Failed to log in.');
    }
  }
};

console.log("The login script has been executed");

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

