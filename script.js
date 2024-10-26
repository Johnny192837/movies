const pastebinUrl = "https://pastebin.com/raw/TON_CODE"; // Remplace "TON_CODE" par le code de ton Pastebin

async function fetchLinks() {
    try {
        const response = await fetch(pastebinUrl);
        if (!response.ok) {
            throw new Error("Erreur HTTP " + response.status);
        }

        const data = await response.text();
        console.log("Données récupérées : ", data); // Affiche les données récupérées
        const linkContainer = document.getElementById("link-container");
        linkContainer.innerHTML = ""; // Vider le contenu de chargement

        // Nettoyer et extraire les noms et liens
        const cleanedData = data.replace(/[{}]/g, '').trim(); // Enlève les accolades
        const linksArray = cleanedData.split(',').map(link => link.trim());

        linksArray.forEach(item => {
            const [name, url] = item.split('=').map(part => part.trim());
            const listItem = document.createElement("li");

            const linkElement = document.createElement("a");
            linkElement.href = url;
            linkElement.innerText = name; // Le nom du lien
            linkElement.target = "_blank"; // Ouvrir le lien dans un nouvel onglet
            
            listItem.appendChild(linkElement);
            linkContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("Erreur lors du chargement des liens :", error);
        const linkContainer = document.getElementById("link-container");
        linkContainer.innerHTML = "Erreur de chargement. Vérifiez la console.";
    }
}

fetchLinks();
