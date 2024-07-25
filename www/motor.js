var RM
var nome
armazenamento = localStorage


function cadastrar() {
    RM = document.getElementById('rmAluno').value
    nome = document.getElementById('nmAluno').value

    alert(RM)
    alert(nome)

    localStorage.setItem(RM, nome)
}

function pesquisar() {
    RM = document.getElementById('pesquisarRM').value
    var valorPesquisado
    
    valorPesquisado = localStorage.getItem(RM)

    document.getElementById('visor').innerHTML = valorPesquisado
}