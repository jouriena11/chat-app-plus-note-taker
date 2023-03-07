const signUpBtn = document.getElementById('sign-up-form');
signUpBtn.addEventListener('submit', signUp)

async function signUp(event) {
    event.preventDefault();
    
    console.log("sign-up-btn clicked");
    
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const email = document.getElementById('email-input').value;

    const signUpData = {
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email,
            userType: "user"
        };

        try {
            const response = await axios.post("/api/user/signup", signUpData);
            console.log("response.data => ", response.data);
            window.location.replace("/login");
        } catch(err) {
            console.error(err)
        }
}