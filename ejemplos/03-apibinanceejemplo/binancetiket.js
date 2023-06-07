
parrafo= document.querySelectorAll('p');
moneda=""

  
    console.log("ok2A")
for( let i = 0; i< parrafo.length; i++){
    moneda= parrafo[i].innerText
    fetch('https://fapi.binance.com/fapi/v1/klines?symbol='+ moneda +'&limit='+ '30' +'&interval='+ '1m' +'')
    .then(datos => datos.json())
    .then (dato=> console.log(dato))
}
