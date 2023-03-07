const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-input').value.trim();
  const first_name = document.getElementById('first-name-input').value.trim();
  const last_name = document.getElementById('last-name-input').value.trim();
  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();
  const userType = "user";

  console.log("Sign up form submitted");
  console.log("username = " + username);
  console.log("first name = " + first_name);
  console.log("last name = " + last_name);
  console.log("email = " + email);
  console.log("password = " + password);

  if (username && first_name && last_name && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, first_name, last_name, email, password, userType }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up.');
    }
  }
};

console.log("The signup script has been executed");