const toggle_button = document.querySelector(".navbar-toggler");


const isCollapse = () => {
    toggle_button.classList.toggle('bg-black');
}


/* 
console.log(toggle_button.classList);
toggle_button.classList.toggle('bg-secondary');
console.log(toggle_button.classList);
 */
const tellMe = () => {
    console.log(toggle_button.getAttribute("aria-expanded"));
}
