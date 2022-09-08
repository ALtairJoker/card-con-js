function compraTotal () {

    // Seleccionando variables de cantidad y precio

    let precio = document.querySelector('#precio');
    let cantidad = document.querySelector('#cantidad');
    let cantidadFinal = document.querySelector('#cantidadFinal');
    let total = document.querySelector('#total');

    // operacion para el total y cantidad

    resultado = Number(precio.textContent) * Number(cantidad.value);
    total.innerHTML = resultado;
    cantidadFinal.innerHTML = cantidad.value

    // seleccionando variable color y agregandolo
    
    let color = document.querySelector('#color');
    let card = document.querySelector('#card');
    let circulo = document.querySelector('#circulo');
    card.style.backgroundColor = color.value;
    circulo.style.backgroundColor = color.value;

}