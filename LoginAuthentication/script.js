const users = {};

function register() {
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!username || !password) {
        showMessage("Please enter both username and password");
        return;
    }

    if (users[username]) {
        showMessage("Username already exists. Please choose a different one.");
        return;
    }

    const hashedPassword = hashPassword(password);
    users[username] = {
        username,
        password: hashedPassword
    };
    showMessage("Registration successful. You can now login.");
}

function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
        showMessage("Please enter both username and password");
        return;
    }

    const user = users[username];
    if (!user) {
        showMessage("User not found. Please register first.");
        return;
    }

    if (user.password === hashPassword(password)) {
        showMessage("Login successful. Welcome, " + username + "!");
    } else {
        showMessage("Incorrect password. Please try again.");
    }
}

function hashPassword(password) {
    return password.split('').reverse().join('');
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.innerText = message;
    setTimeout(() => {
        messageElement.innerText = '';
    }, 3000);
}