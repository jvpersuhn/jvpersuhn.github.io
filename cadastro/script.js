function clear() {
    nome = document.getElementById('nome')
    dataNasc = document.getElementById('dataNasc')
    cpf = document.getElementById('cpf')
    email = document.getElementById('email')
    senha = document.getElementById('senha')

    nome.setText('')
    dataNasc.setText('dd/mm/aaaa')
    cpf.setText('')
    email.setText('')
    senha.setText('')
}

function verifica() {
    if (document.getElementById('nome').value == '') {
        alert('Campo nome deve ser preenchido')
        nome.setFocus()
        console.log(nome.getText())
    }

    if (document.getElementById('dataNasc').value == '') {
        alert('Campo data deve ser preenchido')
        nome.setFocus()
    }

    if (document.getElementById('cpf').value == '') {
        alert('Campo cpf deve ser preenchido')
        cpf.setFocus()
    }

    if (document.getElementById('email').value == '') {
        alert('Campo email deve ser preenchido')
        email.setFocus()
    }

    if (document.getElementById('senha').value == '') {
        alert('Campo senha deve ser preenchido')
        senha.setFocus()
    } else {
        alert('Cadastrado com sucesso')
    }
}