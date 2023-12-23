document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleLogin();
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleRegister();
    });

    // Kiểm tra xem đã đăng nhập trước đó chưa
    // const storedUsername = localStorage.getItem("username");
    // if (storedUsername) {
    //     alert("Đã đăng nhập với tên đăng nhập: " + storedUsername);
    //     // Chuyển hướng đến trang menu.html
    //     window.location.href = "menu_game.html";
    // }
});

function handleLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("username", username);
        alert("Đăng nhập thành công!");
        window.location.href = "menu_game.html";
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
    }
}

function handleRegister() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username && password) {
        const users = getUsers();
        const existingUser = users.find(u => u.username === username);

        if (!existingUser) {
            users.push({ username, password });
            saveUsers(users);

            localStorage.setItem("username", username);
            alert("Đăng ký thành công!");
            window.location.href = "menu_game.html";
        } else {
            alert("Tài khoản đã tồn tại. Vui lòng chọn tên đăng nhập khác.");
        }
    } else {
        alert("Đăng ký thất bại. Vui lòng điền đầy đủ thông tin.");
    }
}

function getUsers() {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
