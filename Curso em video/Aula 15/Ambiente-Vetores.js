var vetor = [0, 'a1' ,'a2' ,3]
vetor[4] = 'bom dia'
vetor.push ('tarrr')
// console.log (vetor)
// console.log (vetor.length) //em JS length não é um metodo e sim um atributo

// percurso para exibição no vetor VV
let num = [0, 2, 1, 3]
console.log (num)
// num.push(5,4)
num.sort () // sort () é um metodo** interno de todo elemento que é um vetor
console.log (num)

for (let i = 0; i <= num.length; i++) {
    console.log (`A posição ${i} possui o valor: ${num[i]}`) // os "[]" depois do vetor dizem qual posição dele vai ser puxado, nesse caso como dentro do bloco "i" recebe um novo valor a cada loop, ele imprimi a posição em relação ao valor de "i" a cada novo loop

} 


/* for (let pos in num)[
    console.log (`Bogão gostoso numero ${pos}` )
] */
