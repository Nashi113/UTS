//Toggle Class active//
const navbarNav = document.querySelector(".navbar-nav");
//Ketika humberger di klik//
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//Klik diluar Sidebar//
const hamburger = document.querySelector
('#menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})