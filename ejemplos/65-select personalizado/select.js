window.addEventListener("load",()=> {
    document.body.classList.remove("no-widget");
    document.body.classList.add("widget");
})
function deactivateSelect(select){
    if(!select.classList.contains('active')) return;
    const optList=select.querySelector('.optList');
    optList.classList.add('hidden');
    select.classList.remove('active');
}
function activeSelect(select, selectList){
    if(select.classList.contains('active')) return;
    selectList.forEach(deactivateSelect);
    select.classList.add('active');
}
function toggleOptList(select){
    const optList = select.querySelector('.optList');
    optList.classList.toggle('hidden');
}
function highlightOption(select, option){
    const optionList= select.querySelectorAll('.option');
    optionList.forEach((other) =>{
        other.classList.remove('highlight');
    });
    option.classList.add('highlight');
}



window.addEventListener('load',() =>{

    const selectList =document.querySelectorAll('.select');
    selectList.forEach((select) =>{
        const optList = select.querySelector('.optList');
        optList.classList.toggle('hidden');
        const optionList = select.querySelectorAll('.option');
        optionList.forEach((option) => {
            option.addEventListener('mouseover', () => {
                highlightOption(select,option);
            });
        });

        select.addEventListener('click', (envent)=>{
            toggleOptList(select);
            console.log("click")
        })
        select.addEventListener('focus',(event)=>{
            activeSelect(select, selectList);
        })
        select.addEventListener('blur',(event)=>{
            deactivateSelect(select);
        });
        select.addEventListener('keyup',(event)=>{
            if(event.key==="Escape"){
                deactivateSelect(select);
            }
        })

    })
})
function updateValue(select,index){
    const nativeWidget= select.previousElementSibling
    const value = select.querySelector('.value');
    const optionList = select.querySelectorAll('.option')
    nativeWidget.selectedIndex= index;
    value.innerHTML= optionList[index].innerHTML;
    highlightOption(select, optionList[index]);
}
function getIndex(select){
const nativeWidget= select.previousElementSibling;
return nativeWidget.selectedIndex;


}

window.addEventListener('load',()=>{
    const selectList= document.querySelectorAll('.select');
    selectList.forEach((select)=>{
        const optionList = select.querySelectorAll('.option');
        const selectIndex= getIndex(select);
        select.tabIndex= 0;
   
    select.previousElementSibling.tabIndex = -1;
    updateValue(select,selectIndex);
    optionList.forEach((option, index)=>{
        option.addEventListener('click',(event) =>{
            updateValue(select, index);
        })
    })
    select.addEventListener('keyup',(event) =>{
        let index= getIndex(select);

        if (event.key === "ArrowDown" && index < optionList.length - 1) {
            index++;
          }

        if (event.key === "ArrowUp" && index > 0) {
            index--;
          }


        updateValue(select, index);
    })

})
})


function updateValue(select, index){
    const nativeWidget = select.previousElementSibling;
    const value = select.querySelector('.value');
    const optionList = select.querySelectorAll('[role="option"]');

    optionList.forEach((other) =>{
        other.setAttribute('aria-selected','false');
    
    optionList[index].setAttribute('aria-selected','true');
    nativeWidget.SelectedIndex= index;
    value.innerHTML = optionList[index].innerHTML;
    highlightOptio(select, optionList[index]);
});
}