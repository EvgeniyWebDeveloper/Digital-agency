
const iconMenu=document.querySelector('.icon-menu');
if(iconMenu){
    
    iconMenu.addEventListener("click",function(e){
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active')
 
    })
}
