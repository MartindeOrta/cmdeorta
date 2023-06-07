// fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
// .then(dato=> dato.json())
// .then(res => console.log(res))
// .catch(error=> console.log(error))


estado = 0 ;



const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")


console.log(fetchPromise);

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
.then(dato=> {
    if(!dato.ok){
        throw new Error( `HTTP error: ${response.status}`);
    }
    return dato.json();


})
.then ((data)=>{
    console.log(data[0].name);
})
.catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log("ok")
let a, b, c, f;
a= b= c= f = 5;

console.log(a)
console.log(b)
console.log(c)
console.log(f)