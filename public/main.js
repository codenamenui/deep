// Elements
let diamondNav = document.querySelector("#diamond-nav");
let filledDiamond = document.querySelector("#filledDiamond")
let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");
let navH6 = document.querySelectorAll("header div h4");

// Condition
let openNav = false;

diamondNav.addEventListener('click', () => {
    if (openNav) {
        diamondNav.style.gap = "0";
        filledDiamond.style.opacity = "0";
        leftArrow.style.opacity = "0";
        rightArrow.style.opacity = "0";
        navH6[0].style.transform = "translateX(0%)";
        navH6[1].style.transform = "translateX(0%)";
        navH6[2].style.transform = "translateX(0%)";
        navH6[3].style.transform = "translateX(0%)";
        for (let nav of navH6) {
            nav.style.opacity = "0";
        }
        openNav = !openNav;
    }
    else {
        diamondNav.style.gap = "clamp(0.5vw, 2vw, 3vw)";
        filledDiamond.style.opacity = "1";
        leftArrow.style.opacity = "1";
        rightArrow.style.opacity = "1";
        navH6[0].style.transform = "translateX(-300%)";
        navH6[1].style.transform = "translateX(-150%)";
        navH6[2].style.transform = "translateX(150%)";
        navH6[3].style.transform = "translateX(300%)";
        for (let nav of navH6) {
            nav.style.opacity = "1";
        }
        openNav = !openNav;
    }
});

diamondNav.addEventListener('mouseenter', () => {
    if (!openNav)
        filledDiamond.style.opacity = "1";
});

diamondNav.addEventListener('mouseleave', () => {
    if (!openNav)
        filledDiamond.style.opacity = "0";
});