
var resultado = document.querySelector('div#res')
resultado.innerHTML = 'Calculando...'
function calcular(){
    var inicio = Number (document.querySelector('input#iniciotxt').value)
    var fim = Number (document.querySelector('input#fimtxt').value)
    var passos = Number (document.querySelector('input#passostxt').value)
    resultado.innerHTML = ' '
    if (inicio <= 0 || fim <= 0){
        // Primeiro check
        alert ('[ERRO] -- preencha todas as caixas')   
    }else {
        resultado.innerHTML = 'Exibindo resultado: <br>'
        if (passos <= 0){
            // Segundo check
            alert('Valor de passos incorreto, considerando PASSOS = 1')
            passos = 1
        }
        if (inicio < fim ){
            // Contagem crescente
            for (var i = inicio; i <= fim; i += passos){
            resultado.innerHTML += i + '👉'
            }
        }else {
            // Contagem descrescente
            for (var i = inicio; i >= fim; i -= passos){
            resultado.innerHTML += i + '\u{1F449}'
            }
        }    
    }
    resultado.innerHTML += '\u{1FAF7}!!'
}