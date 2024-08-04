document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#loginButton');
    const signupButton = document.querySelector('#signupButton');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'loginPage.html';
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', () => {
            window.location.href = 'signUpPage.html';
        });
    }

    const signUpButton = document.querySelector('#sign-up');

    if (signUpButton) {
        signUpButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'signUpPage.html';
        });
    }

    const loginPageButton = document.querySelector('#loginPage');

    if (loginPageButton) {
        loginPageButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'loginPage.html';
        });
    }
});
