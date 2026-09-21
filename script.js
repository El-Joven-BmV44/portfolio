//Récupére les éléments
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

//Quand on clique sur le bouton de menu
toggle.addEventListener('click', () => {
    //On ajoute ou on enlève la classe 'active' au menu
    menu.classList.toggle('active');
});