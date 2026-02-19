function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        document.getElementById("msg").innerHTML = "Login Successful";
    } else {
        document.getElementById("msg").innerHTML = "Invalid Login";
    }
}
