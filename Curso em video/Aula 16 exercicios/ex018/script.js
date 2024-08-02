var amostra = []
var resolução = document.querySelector('div#res')

function enviar(){ //Pegar o numero digitado (tem que ter um n°, n pd repetir nem estar fora do escopo de 1 a 100)
    let input = document.querySelector('input#txtinput')
    if (input.value <= 0 || input.value > 100){
        alert('[ERRO] -- Numero invalido tente novamente!')
        input.value = ' '
        input.focus()
    } else {
        if(amostra.includes(input.value) == true){ //Adicionar ao select (visualmente e dentro de um array) (Qnd adicionar limpar a div#res)
            alert('[ERRO] -- Numero repetido ou invalido Tente novamente!')
        } else {
            resolução.innerHTML = '' // Limpa a caixa de resultdos
            let selec = document.querySelector('select#selres')
            amostra.push(input.value)
            let opt = document.createElement('option')
            opt.innerHTML = `Valor insirido: <strong> ${amostra[amostra.length-1]} </strong>`
            selec.appendChild (opt)
            input.value = ' '
            input.focus()
        }
    }
}

function analisar() {
    if (amostra.length == []){
        alert('[ERRO] --  é necessario insirir pelo menos um numero para continuar!!')
    } else {
        resolução.innerHTML = ' ' // Limpa a caixa de resultdos
        //Mostrar a qntidade de numeros enviados
        let qnt = amostra.length
        let p1 = document.createElement('p')
        p1.innerHTML = `Você digitou um total de ${qnt} numeros`
        resolução.appendChild(p1)
        //Mostrar qal o maior e tbm o menor
        amostra.sort()
        let p2 = document.createElement('p')
        p2.innerHTML =  `O maior numero inserido foi: ${amostra[amostra.length-1]}`
        resolução.appendChild(p2)
        let p3 = document.createElement('p')
        p3.innerHTML = `O menor numero inserido foi: ${amostra[0]}`
        resolução.appendChild (p3)
        //Somar todos os numeros    
        let sum = 0
        for(let i = 0; i < amostra.length; i++){
            sum += Number (amostra[i])
        }
        let p4 = document.createElement('p')
        p4.innerHTML = `A soma de todos os numeros é igual a: ${sum}`
        resolução.appendChild (p4)
        //Tirar a media deles
        let med = sum/ amostra.length
        let p5 = document.createElement('p')
        p5.innerHTML = `A media deles é: ${med}`
        resolução.appendChild(p5)


    }
    
}

