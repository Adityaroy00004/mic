const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListner("click",() => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListner("click", () => menuOpenButton.click());