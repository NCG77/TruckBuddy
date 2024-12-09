const menubtn = document.getElementById("nav-menu");
const navlinks = document.getElementById("nav-links");
const menubtnicon = menubtn.querySelector("i");
menubtn.addEventListener("click",(e)=>{
    navlinks.classList.toggle("open")
    const isopen=navlinks.classList.contains("open")
    menubtnicon.setAttribute("class",isopen?"ri-close-line":"ri-menu-3-line")
});
const scrollreveal={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header__content h1",{
    ...scrollreveal,
});
ScrollReveal().reveal(".header__btn",{
    ...scrollreveal,
    delay: 500,
});
// Service Container
ScrollReveal().reveal(".service__card",{
    ...scrollreveal,
    interval: 500,
});
// price container
ScrollReveal().reveal(".price__card",{
    ...scrollreveal,
    interval: 500,
});

const swiper=new Swiper(".swiper",{
    loop:true,
    pagination:{
        el: ".swiper-pagination",
    },
});
