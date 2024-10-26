const pastebinUrl = "https://pastebin.com/raw/QacHwtyw"; // Remplace "TON_CODE" par le code de ton Pastebin

async function fetchLinks() {
    try {
        const response = await fetch(pastebinUrl);
        const data = await response.text();
        const linkContainer = document.getElementById("link-container");
        linkContainer.innerHTML = ""; // Vider le contenu de chargement

        const links = data.trim().split('\n');
        links.forEach(line => {
            const [name, url] = line.split(',');
            const button = document.createElement("button");
            button.innerText = name;
            button.onclick = () => window.open(url.trim(), "_blank");
            linkContainer.appendChild(button);
        });
    } catch (error) {
        console.error("Erreur lors du chargement des liens :", error);
    }
}

fetchLinks();
