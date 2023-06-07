const link='https://fapi.binance.com/fapi/v1/ticker/24hr'
console.log("ok1A")
fetch(link)
.then(datos => datos.json())
.then(dato=> {
   
    text= ""
for(let i = 0 ; i< dato.length ; i++){
    let para = document.createElement('p');
    
text= dato[i].symbol
para.id=text
para.textContent = text;


document.body.appendChild(para);

}
let binancetiket = document.createElement('script'); 
binancetiket.src="binancetiket.js"
document.body.appendChild(binancetiket);
const body = document.querySelector('body');
body.textContent="";
let binancetodo = document.createElement('script'); 
binancetodo.src="binancetiket.js"
document.body.appendChild(binancetodo);

console.log("ok1B")
})