function check() {
    var mensagem = "Informações de usuário inválidas"
    if (document.getElementById('email').value == '' || document.getElementById('senha').value == '') {
        alert(mensagem)

    } else {
        alert("A tela de usuário será implementada futuramente :)")
        window.location.replace("../index.html");
    }
}