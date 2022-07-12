const mobileMenu = document.querySelector('.mobile-menu');
const navlinks = document.querySelector('.navlinks');
const closeMenu = document.querySelector('.close-menu');
const sublinks = document.querySelectorAll('.sublinks');


mobileMenu.addEventListener('click', () => {
    navlinks.classList.add('show-navlinks')
})

closeMenu.addEventListener('click', () => {
    navlinks.classList.remove('show-navlinks')
})

sublinks.forEach((sublink) => {
    sublink.addEventListener("click", (e) => {
        if(e.currentTarget.classList.contains('toggle-arrow')){
            e.currentTarget.classList.remove('toggle-arrow')
        } else {
            e.currentTarget.classList.add('toggle-arrow')
        }
        e.currentTarget.nextElementSibling.classList.toggle('show-submenu')
    })
})

