let valores = []
let resolução = document.querySelector('div#res')
let lista = document.querySelector('select#selres')
const sys = document.querySelector('div#sistema')
var x = 0
let option = document.getElementById('option')


function isNumber(f){
    if (f > 0 && f <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, v){
    if (v.includes (n) == true){
        return true
    } else {
        return false
    }

}

function addLista(n, v){
    v.push(n.value)
    let opt = document.createElement ('option')
    opt.innerHTML += `Você adicionou ${n.value} a lista!`
    lista.appendChild(opt)

}


function enviar(){ 
    let input = document.querySelector('input#txtinput')
    if (isNumber(input.value) && !inLista(input.value, valores)){
        addLista (input, valores)
        resolução.innerHTML = ' '
        input.value = ''
        input.focus()
        lista.removeChild (option)

    } else {
        window.alert('Seu burro')
        resolução.innerHTML = ' '
        input.value = ''
        input.focus()
    }
    
    while ((lista != [] && x == 0)){
        const btnAnalise = document.createElement ('input')
        btnAnalise.setAttribute('Value', 'Analisar')
        btnAnalise.setAttribute('type', 'button')
        btnAnalise.addEventListener('click', analisar)
        sys.appendChild(btnAnalise)
        x++
    }
        //sys.innerHTML += '<p><input type="button" value= "teste"></input></p>'

}

function analisar() {
    resolução.innerHTML = ' '
    let analise = document.createElement ('p')
    analise.innerHTML =`Você adicionou ${valores.length} numeros!`
    valores.sort((function(a, b){return a-b}))
    analise.innerHTML +=`</br> O maior numero adicionado foi ${valores[valores.length-1]}`
    analise.innerHTML +=`</br> O menor numero adicionado foi ${valores[0]}`
    let soma = 0
    for (let i in valores){
        soma += Number (valores[i])
    }
    analise.innerHTML +=`</br> A soma de todos os numeros adicionados é ${soma}`
    analise.innerHTML +=`</br> A média de todos os numeros adicionados é ${soma/valores.length}`
    resolução.appendChild(analise)

}