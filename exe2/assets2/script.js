// Création de l'élément select et ajout au corps du document
const select = document.createElement("select");
document.body.appendChild(select);

// Déclaration de la variable index
let index = 0; 

// Fonction pour créer une carte à partir d'une chanson
function creerCarte(chanson) {
    let carte = document.createElement("div"); 
    carte.classList.add("carte"); 

    for (const prop in chanson) {
        let detail = document.createElement("p"); 
        detail.textContent = `${prop}: ${chanson[prop]}`; 
        carte.appendChild(detail); 
    }

    return carte; 
}

// Fonction asynchrone pour récupérer et afficher des chansons depuis une API
async function afficherChansons() {
    try {
        const reponse = await fetch("../assets2/script.json");
        const chansons = await reponse.json();
        console.log(chansons);

        chansons.forEach(chanson => {
          // Création d'une carte pour chaque chanson
          const carte = creerCarte(chanson);
          // Ajout de la carte au conteneur
          conteneur.appendChild(carte);
      });


    } catch (erreur) {
        console.error("Une erreur s'est produite lors de la récupération des chansons :", erreur);
    }
}

// Appel de la fonction pour récupérer et afficher les chansons
afficherChansons();

// Récupération de l'élément conteneur-cartes
let conteneur = document.getElementById("conteneur-cartes");

// Création de la table
let table = document.createElement("table");
table.classList.add("collection-table");

// Création de l'en-tête de la table
let thead = document.createElement("thead");
let tr = document.createElement("tr");

// Création des colonnes de l'en-tête de la table
let props = Object.keys(collection.reduce((acc, obj) => Object.assign(acc, obj), {}));
props.forEach(prop => {
    let th = document.createElement("th");
    th.textContent = prop;
    tr.appendChild(th);
});

// Ajout de l'en-tête à la table
thead.appendChild(tr);
table.appendChild(thead);

// Création du corps de la table
let tbody = document.createElement("tbody");

// Remplissage du corps de la table avec les données de la collection
collection.forEach(chanson => {
    let tr = document.createElement("tr");
    props.forEach(prop => {
        let td = document.createElement("td");
        td.textContent = chanson[prop] || "N/A"; 
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});

// Ajout du corps à la table
table.appendChild(tbody);

// Ajout de la table au conteneur
conteneur.appendChild(table);
