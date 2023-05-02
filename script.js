function checkSpeed(){
    var velocidade = window.document.getElementById('ivelocidade');
    var resultado = window.document.getElementById('resultado');

    vel = Number(velocidade.value)

    if (vel >= 70){
        resultado.innerHTML = `Velocidade registrada: ${vel} Km/h <br>`
        resultado.innerHTML += `<strong>Você foi multado por execesso de velocidade</strong>`

    } else {
        resultado.innerHTML = `Velocidade registrada: ${vel} Km/h`
    }
}