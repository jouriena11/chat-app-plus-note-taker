const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  console.log("pass");
  event.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //document.location.replace('/');
    } else {
      alert("Failed to log in");
    }
  }
};