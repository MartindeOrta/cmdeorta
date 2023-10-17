
let ws = new WebSocket('wss://stream.binance.com:443/ws/usdtars@trade');
let stockPriceElement = document.getElementById("stock-price");
let lastPrice= null;
console.log("ok");
ws.onmessage = (event) => {

let stockObject = JSON.parse(event.data);
console.log(stockObject);

let price=parseFloat(stockObject.p).toFixed(2);
stockPriceElement.innerText = "Precio usdt: $"+ price + "AR";
stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : lastPrice < price ? 'green' : 'red';
lastPrice= price;

}