function verify(){
    var nasc = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()    
    if (nasc.value.length == 0 || Number (nasc.value) > ano) {
        alert('[ERRO] -- Verifique os dados e tente novamente')
    }else {
            var gen = document.getElementsByName('radsex')
            var idade = ano - nasc.value
            var img = document.createElement('img')
            img.setAttribute ('id', 'foto')
            res.style.textAlign = 'center'

            if (gen[0].checked && idade < 5) {
                //Bebe
                res.innerHTML = `Você é um bebe de ${idade} anos de idade`                
                img.setAttribute ('src', 'bebe.svg')
            } else if (gen[0].checked && idade < 15) {
                //menino
                res.innerHTML = `Você é um menino de ${idade} anos de idade`                
                img.setAttribute ('src', 'crianca-menino.svg')
            }  else if (gen[0].checked && idade < 26) {
                //jovem menino
                res.innerHTML = `Você é um adolescente de ${idade} anos de idade`                
                img.setAttribute ('src', 'adolecente-menino.svg')
            } else if (gen[0].checked && idade < 60) {
                //adulto homem
                res.innerHTML = `Você é um homem de ${idade} anos de idade` 
                img.setAttribute ('src', 'adulto-menino.svg')               
            } else if (gen[0].checked && idade >= 60 ) {
                //velho homem
                res.innerHTML = `Você é um idoso de ${idade} anos de idade`
                img.setAttribute ('src', 'idoso-menino.svg')                
            } else if (gen[1].checked && idade < 5) {
                // bebe
                res.innerHTML = `Você é um bebe de ${idade} anos de idade`
                img.setAttribute ('src', 'bebe.svg')                
            } else if (gen[1].checked && idade < 15) {
                // menina
                res.innerHTML = `Você é uma menina de ${idade} anos de idade`
                img.setAttribute ('src', 'crianca-menina.svg')                
            } else if (gen[1].checked && idade < 26) {
                // jovem menina
                res.innerHTML = `Você é uma adolescente de ${idade} anos de idade`
                img.setAttribute ('src', 'adolecente-menina.svg')                
            } else if (gen[1].checked && idade < 60) {
                // adulta mulher
                res.innerHTML = `Você é uma mulher de ${idade} anos de idade`
                img.setAttribute ('src', 'adulto-menina.svg')              
            } else if (gen[1].checked && idade >= 60 ) {
                // velha mulher
                res.innerHTML = `Você é uma idosa de ${idade} anos de idade`
                img.setAttribute ('src', 'idoso-menina.svg')                
            } 
            res.appendChild (img)
            var btn = document.querySelector('input#btn')
            btn.style = 'hidden' 
        }
        
}