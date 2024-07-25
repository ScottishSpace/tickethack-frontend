document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const errorContainer = document.getElementById('error-container');
    const trainResults = document.getElementById('train-results');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        
        const departure = document.getElementById('departure').value.trim();
        const arrival = document.getElementById('arrival').value.trim();
        const date = document.getElementById('date').value;

        if (!departure || !arrival || !date) {
            // Affiche une erreur si les champs sont vides
            errorContainer.style.display = 'flex';
            trainResults.style.display = 'none';
            return;
        }

        // Simuler une recherche - retourner un tableau vide pour l'exemple
        const searchResults = performSearch(departure, arrival, date);

        if (searchResults.length === 0) {
            // Aucune recherche trouvée
            trainResults.style.display = 'none';
            errorContainer.style.display = 'flex';
        } else {
            // Résultats trouvés
            trainResults.style.display = 'flex';
            errorContainer.style.display = 'none';
            displayResults(searchResults);
        }
    });

    function performSearch(departure, arrival, date) {
        // Simuler une recherche - retourne un tableau vide pour l'exemple
        return [];
    }

    function displayResults(results) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Vide les résultats précédents

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = result;
            resultsContainer.appendChild(resultItem);
        });
    }
});
