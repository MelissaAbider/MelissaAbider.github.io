//pour montre le menu 
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');
//on montre le menu
if (navToggle) {
    navToggle.addEventListener('click', affichemenu)//ajoute une classe 'show-menu' à l'élément représenté par navMenu
}

//les style de la classe navMenu devient le meme que 'show-menu'
function affichemenu() {
    navMenu.classList.add('show-menu');
}

if (navClose) {
    navClose.addEventListener('click', cachemenu)
}

//supprime la classe 'show-menu' de l'élément navMenu
function cachemenu() {
    navMenu.classList.remove('show-menu');
}


//supprimer le menu apres choix:
const navLinks = document.querySelectorAll('.nav_link');

if (navLinks) {//pour chaque element ayant la classe nav_link
    navLinks.forEach(navLink => {//navLink=argument de la fonction, =>(remplace de mot function)
        navLink.addEventListener('click', cachemenu);
    });
}
//shadow du header:
function shadowheader() {
    const header = document.getElementById("header");
    //si on descend plus de 50 on recupere les propriéte css de shadow-header 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header');
}
// la page web a l'ecouteur
window.addEventListener('scroll', shadowheader)