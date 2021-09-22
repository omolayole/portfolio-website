/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        console.log('you clicked me')
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


window.addEventListener( 'scroll', function(e) {
    if(window.pageYOffset > 100) {
        document.querySelector("header").classList.add('is-scrolling');
    } else {
        document.querySelector("header").classList.remove('is-scrolling');
    }
})
