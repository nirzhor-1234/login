document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "User" && password === "0987") {
        alert("Login Successful");
    } else if (username !== "admin") {
        alert("Incorrect Username");
    } else alert("Invalid Password")
}


