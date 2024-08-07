function calcular(){
    let numtab = Number (document.querySelector('input#numtxt').value)
    let sel = document.querySelector('select#sel')
    if (numtab <= 0) {
        alert('[Erro] --  Preencha com um número')

    } else {
        sel.innerHTML = ' '
        for (i = 0; i <= 10; i++){
            let select = document.createElement ('option')
            select.value = `tab ${i}`// Em caso de integração backend (funcional para outras linguagens mas qse nada para JS)
            sel.appendChild (select)
            select.innerHTML = `${numtab} X ${i} = ${numtab * i}`
            
        }
    }

}


















//<Selec>
//creatElement
//appendChild