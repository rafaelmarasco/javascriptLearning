let amigo = {nome: 'zé',
sexo: 'M',
peso: 85,
engordar (p){
    console.log('engordou!!')
    this.peso += p
}}
amigo.engordar (10)
console.log (`${amigo.nome} pesa ${amigo.peso}`)