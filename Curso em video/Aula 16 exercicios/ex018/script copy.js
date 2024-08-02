let valores = []
let resolução = document.querySelector('div#res')
let lista = document.querySelector('select#selres')

function validar(n, v){
    if(n.length != 0 && n.value < 100 && n.value > 0 && v.includes (n.value) == false){
        return true
    }else {
        return false
    }  
}

function addLista(n, v){
    v.push(n.value)
    let opt = document.createElement ('option')
    opt.text += `Você adicionou ${n.value}`
    sel.appendChild(opt)

}


function enviar(){ 
    let input = document.querySelector('input#txtinput')
    if (validar(input, valores) == false){
        window.alert('Seu burro')
        input.value = ' '
        input.focus()
    } else {
        addLista(input, valores)
        input.value = ' '
        input.focus()
    }
}

function analisar() {
    if (validar(input, valores) == false){
        window.alert('Burrão')
    }







    // if (amostra.length == []){
    //     alert('[ERRO] --  é necessario insirir pelo menos um numero para continuar!!')
    // } else {
    //     resolução.innerHTML = ' ' // Limpa a caixa de resultdos
    //     //Mostrar a qntidade de numeros enviados
    //     let qnt = amostra.length
    //     let p1 = document.createElement('p')
    //     p1.innerHTML = `Você digitou um total de ${qnt} numeros`
    //     resolução.appendChild(p1)
    //     //Mostrar qal o maior e tbm o menor
    //     amostra.sort()
    //     let p2 = document.createElement('p')
    //     p2.innerHTML =  `O maior numero inserido foi: ${amostra[amostra.length-1]}`
    //     resolução.appendChild(p2)
    //     let p3 = document.createElement('p')
    //     p3.innerHTML = `O menor numero inserido foi: ${amostra[0]}`
    //     resolução.appendChild (p3)
    //     //Somar todos os numeros    
    //     let sum = 0
    //     for(let i = 0; i < amostra.length; i++){
    //         sum += Number (amostra[i])
    //     }
    //     let p4 = document.createElement('p')
    //     p4.innerHTML = `A soma de todos os numeros é igual a: ${sum}`
    //     resolução.appendChild (p4)
    //     //Tirar a media deles
    //     let med = sum/ amostra.length
    //     let p5 = document.createElement('p')
    //     p5.innerHTML = `A media deles é: ${med}`
    //     resolução.appendChild(p5)


    //}
    
}

