function validateForm() {
    const username = document.getElementById('username').value;

    if (username === "") {
        alert("El nombre de usuario/correo electrónico debe estar completo");
        return false;
    }else{
        return true;
    }
}
