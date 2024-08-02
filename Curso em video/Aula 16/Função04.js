function fatorial(i){
    let fat = 1
    for (let c = i; c > 1; c--){
        fat *= c
    }
    return fat

}

console.log (fatorial(5))