
document.addEventListener("DOMContentLoaded", function() {
    const loadDataButton = document.createElement('button'); // Crée un bouton
    loadDataButton.textContent = 'click ici'; // Définit le texte du bouton

    const dataList = document.createElement('ul'); // Crée une liste pour afficher les données

    loadDataButton.addEventListener('click', async function() {
        try {
            const response = await fetch('data.json'); // Charge les données depuis le fichier JSON
            const data = await response.json();
            displayData(data); // Affiche les données
        } catch (error) {
            console.error('Error loading data:', error);
        }
    });

    function displayData(data) {
        dataList.innerHTML = ''; // Nettoie la liste précédente

        // Parcourt les données et les ajoute à la liste
        Object.keys(data).forEach(key => {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${data[key]}`;
            dataList.appendChild(listItem);
        });
    }

    // Ajoute le bouton et la liste à la page
    document.body.appendChild(loadDataButton);
    document.body.appendChild(dataList);
});


document.body.appendChild(body);



