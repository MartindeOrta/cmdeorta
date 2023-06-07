const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('¿Cual es tu nombre?');
    alert('¡Hola ' + name + ', encantado de verte!');
}
myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();

let myName;