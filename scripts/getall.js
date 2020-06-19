function get() {
    var xhttp = new XMLHttpRequest()
    var url = "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/employees"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var retorno = JSON.parse(this.responseText)
            myfunction(retorno)
        }
    }

    xhttp.open("GET", url, true)
    xhttp.send()

    function myfunction(arr) {
        var id = 0
        var out = '<tr class = "table"><th>Id</th><th>Nome</th><th>Salario</th><th>Idade</th><th>Imagem</th><th>Ações</th></tr>'
        for (let i = 0; i < arr.data.length; i++) {
            id = arr.data[i]['id'];

            if (arr.data[i]['profile_image'] == null) {
                out += '<tr class = "table"><td>' + arr.data[i]['id'] + '</td>' + '<td>' + arr.data[i]['employee_name'] + '</td>' + '<td>' + arr.data[i]['employee_salary'] + '</td>' + '<td>' + arr.data[i]['employee_age'] + '</td>' +
                    '<td></td>' +
                    '<td><button onclick="alertaa(\'' + id + '\')">Excluir</button>' + '<a href="cadastrar.html?id=' + id + '">Editar</a></td>' + '</tr>'
            } else {
                out += '<tr class = "table"><td>' + arr.data[i]['id'] + '</td>' + '<td>' + arr.data[i]['employee_name'] + '</td>' + '<td>' + arr.data[i]['employee_salary'] + '</td>' + '<td>' + arr.data[i]['employee_age'] + '</td>' +
                    '<td><img src="' + arr.data[i]['profile_image'] + '"></td>' +
                    '<td><button onclick="alertaa(\'' + id + '\')">Excluir</button>' + '<a href="cadastrar.html?id=' + id + '">Editar</a></td>' + '</tr>'
            }

        }

        document.getElementById('lista').innerHTML = out
    }
}


function alertaa(codigo) {
    var xhttp = new XMLHttpRequest()
    var r = confirm("Voce quer mesmo deletar?");
    if (r == true) {
        var url = "https://us-central1-rest-api-employees.cloudfunctions.net/api/v1/delete/"
        var cod = codigo;
        var novaurl = url + cod;
        xhttp.open("DELETE", novaurl, true)
        xhttp.send()
        alert("Sucesso")
        document.location.reload(true)
    }
}