const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {email, password} = event.target;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены.");
    }

    const userForm = {
        email: email.value,
        password: password.value,
    };

    console.log(userForm)
    event.target.reset();
})