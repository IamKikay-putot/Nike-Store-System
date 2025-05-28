
document.addEventListener('DOMContentLoaded', () => {
    const Sign_Up_form = document.querySelector('#Sign-Up-form');
    Sign_Up_form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('/SignUp_config/', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'username' : document.querySelector('input[name="username-signUp"]').value,
                'password' : document.querySelector('input[name="password-signUp"]').value,
                'email' : document.querySelector('input[name="email-signUp"]').value,
                'contact' : document.querySelector('input[name="contact-signUp"]').value,
                'address' : document.querySelector('input[name="address-signUp"]').value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message)
                Sign_Up_form.reset()
            } else if (data.status === false) {
                alert(data.message)
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
    })
})