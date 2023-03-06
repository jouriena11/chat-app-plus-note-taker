const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log("Response is");
    console.log(response);
  
    if (response.ok) {
      // If successfully logged out, redirect to the home page
      console.log("Logout successful");
      document.location.replace('/');
    } else {
      console.log("Logout failed");
      document.location.replace('/main');
      alert(response.statusText);
    }
  };

  console.log("The logout script has been executed");