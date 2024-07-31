// navbar scrolling
let header=document.querySelector('.nav_head')
console.log(header)
window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
        header.classList.add('header-scrolled')
    }else if(window.scrollY<=100){
        header.classList.remove('header-scrolled')

    }
})
let navbartoggler = document.querySelector('.navbar-toggler')
console.log(navbartoggler)
navbartoggler.addEventListener('click',()=>{
    header.classList.add('navbar-click')
})