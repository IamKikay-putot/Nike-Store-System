
document.addEventListener("DOMContentLoaded", () => {
    const login_form = document.getElementById("login-form");

    login_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
    
        console.log("from controller username: " + username)
        console.log("from controller password: " + password)
        // alert('status');
        fetch("/login_config/", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password' : password
            })
        })
        .then(response => response.json())
        .then(data => {
            try {
                if (data.status === 'Please fill in all fields') {
                    alert('Please fill in all fields');
                }
    
                if (data.status === 'success') {
                    // alert('login successful in view')
                    if (data.role === 'admin') {
                        // console.log(data.credentials);
                        // alert('wait');
                        // localStorage.setItem("credentials", JSON.stringify(data.credentials));
                        window.location.href = '/admin_homepage/'
                    } else if (data.role === 'user') {
                        // alert('login successful')
                        // localStorage.setItem("credentials", JSON.stringify(data.credentials));
                        window.location.href = '/';
                    }
                }
                if (data.status === 'User not found') {
                    // alert('Invalid username pr password, please try again!')
                    alert('User does not exist, please try again!');
                }
                if (data.status === 'Incorrect password') {
                    alert('Incorrect password, please try again!')
                }
            } catch (error) {
                console.error(`from controller: Something went wrong while logging in ${error.message}`)
            }
        })
    })

    const Sign_in_form = document.getElementById('Sign-Up-form');
    document.getElementById('SignUp').addEventListener('click', () => {
        if (Sign_in_form.style.display === 'none') {
            login_form.style.display = 'none';
            Sign_in_form.style.display = 'block';
        }
        return Sign_in_form.style.display === 'none'
    })

})
