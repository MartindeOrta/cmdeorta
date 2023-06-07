const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayPic=['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']
/* Declaring the alternative text for each image file */
const arryName = ['ojos azules','piedra rara','flores violetas','pictografia egipcia','mariposa comun']
/* Looping through images */
for (let index = 0; index < arryName.length; index++) {
   
    const newImage = document.createElement('img');
newImage.setAttribute('src', arrayPic[index]);
newImage.setAttribute('alt',  arryName[index]);
thumbBar.appendChild(newImage);
}
document.addEventListener('click', e=>{
    if (e.target.localName==="img"){
   
    displayedImage.setAttribute('src',e.target.src);
    displayedImage.setAttribute('alt',e.target.alt);}
})
btn.addEventListener('click',()=>{
    if(btn.getAttribute("class")==="dark"){
        btn.setAttribute("class", "light");
        btn.textContent =  "light";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent =  "dark";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
   // btn.setAttribute("class", xxx);
})

/* Wiring up the Darken/Lighten button */
