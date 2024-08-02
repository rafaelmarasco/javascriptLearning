// horas; extruturas condicionais aninhadas (compostas)
var agora = new Date() // Pega a informção do usuario, seja ela client, servidor, ou da maquina que estiver rodando o console
var hrs = agora.getHours()
console.log(`Agora são exatamente ${hrs} horas`)
if (hrs > 4){
    console.log('Bom dia!')
} else if (hrs > 11){
    console.log('Boa tarde!')
} else if (hrs > 17){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}