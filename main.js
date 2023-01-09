/* MENU SHOW Y HIDDEN */
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle){
    //function or method
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
    })
}
/* REMOVE MENU MOBILE */


//define const
const navLink=document.querySelector('.nav__link')



function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))