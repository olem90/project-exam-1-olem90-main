const menuBtn = document.querySelector (".menu-btn");
const menuContent = document.querySelector(".menu-content");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuContent.style.display="flex";
        menuBtn.classList.add("open");
        menuBtn.style.background = "white";
        menuOpen = true;
    }
    else {
        menuContent.style.display="none";
        menuBtn.classList.remove("open");
        menuBtn.style.background = "beige";
        menuOpen = false;
    }
    console.log('connection');
});