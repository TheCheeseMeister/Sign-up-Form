const password = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const confirmError = document.querySelector("#confirm-error");

confirmError.style.display = "none";

confirmPwd.addEventListener('input', (e) => {
    if (confirmPwd.value == '' || confirmPwd.value == password.value) {
        confirmError.style.display = "none";
        return;
    }

    confirmError.style.display = "block";
});

password.addEventListener('input', (e) => {
    if (confirmPwd.value == '' || confirmPwd.value == password.value) {
        confirmError.style.display = "none";
        return;
    }

    confirmError.style.display = "block";
});