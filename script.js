const pastebinUrl = "https://pastebin.com/raw/TON_CODE"; // Remplace "TON_CODE" par le code de ton Pastebin

async function fetchLinks() {
    try {
        const response = await fetch(pastebinUrl);
        const data = await response.text();
        const linkContainer = document.getElementById("link-container");
        linkContainer.innerHTML = ""; // Vider le contenu de chargement

        // Nettoyer et extraire les noms et liens
        const cleanedData = data.replace(/[{}]/g, '').trim(); // Enlève les accolades
        const linksArray = cleanedData.split(',').map(link => link.trim());

        linksArray.forEach(item => {
            const [name, url] = item.split('=').map(part => part.trim());
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const linkCell = document.createElement("td");

            nameCell.innerText = name;
            const linkElement = document.createElement("a");
            linkElement.href = url;
            linkElement.innerText = "Ouvrir";
            linkElement.target = "_blank"; // Ouvrir le lien dans un nouvel onglet
            linkCell.appendChild(linkElement);

            row.appendChild(nameCell);
            row.appendChild(linkCell);
            linkContainer.appendChild(row);
        });
    } catch (error) {
        console.error("Erreur lors du chargement des liens :", error);
    }
}

fetchLinks();
