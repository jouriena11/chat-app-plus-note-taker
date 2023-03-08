const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  console.log("\n\nLog in event handler called\n\n");
  event.preventDefault();

  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  console.log("email = " + email);
  console.log("password = " + password);

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/main");
    } else {
      alert("Failed to log in");
    }
  }
};

console.log("The login script has been executed");
