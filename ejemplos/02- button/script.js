// document.addEventListener("DOMContentLoaded", function(){
    function createParagraph() {

        //crea un elemento nuevo con etiqueta p y lo coloca en una variable
        let para = document.createElement('p');
        // le cambia el contenido de ese elemento 
        para.textContent = 'you clicked the button!';
        //coloca ese nuevo elemento al final de la pagina 
        document.body.appendChild(para);
        //los elementos con etiqueta p que estan en el array les cambia el contetido por 'cesar'
        for(let i  =0 ; i < parrafo.length; i++){
            parrafo[i].innerText=('cesar');
        }
        
    }
    //toma todos los elemento con etiqueta t y los pone en un array
    const parrafo= document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

   
// });