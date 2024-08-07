function load() {
    var txthora = window.document.querySelector('div#txt')
    var imghora = document.getElementById('imghr')
    var data = new Date()
    var hr = data.getHours()
    txthora.innerHTML = `<p>Olá, agora são ${hr} horas <br></p>`
    if (hr < 13) {
        window.document.body.style.background = '#FAF5E0'
        txthora.innerHTML += '<strong>Bom dia</strong>!!'
        img.src = 'manha.svg' 
    } else if (hr < 18){
        document.body.style.background = '#FEAE81'
        txthora.innerHTML += '<strong>Boa tarde</strong>!'
        img.src = 'tarde.svg'
    } else {
        document.body.style.background = '#181E39'
        txthora.innerHTML += '<strong>Boa noite</strong>!'
        img.src = 'noite.svg'
    }

}