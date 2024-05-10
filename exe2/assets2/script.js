
const body = document.createElement("body");
const boutonClick = document.createElement("button");
boutonClick.textContent = 'click ici'; 
// Définit le texte du bouton

body.appendChild(boutonClick);
document.body.appendChild(body); // Vous devez ajouter le corps à la page, pas lui-même

boutonClick.setAttribute("id","classClick");
body.appendChild(boutonClick);
boutonClick.addEventListener('click,function()')
