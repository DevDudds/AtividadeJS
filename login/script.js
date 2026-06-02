const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const user = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    if (user == "admin" && password == "admin"){
        alert("Senha correta!");
    } else {
        alert("Senha errada!");
    }
});

sessionStorage.setItem("token", "jwt123");