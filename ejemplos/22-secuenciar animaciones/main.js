const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
 const animacion1=()=>
 setTimeout(()=>
 alice1.animate(aliceTumbling, aliceTiming),);
  

 const animacion2=()=>
 setTimeout(()=>
 alice2.animate(aliceTumbling, aliceTiming),2000);

 const animacion3=()=>
 setTimeout(()=>
 alice3.animate(aliceTumbling, aliceTiming),3000);



 animacion1()
 animacion2()
 animacion3()
