const bouton = document.querySelector("button");
const paragraphe = document.querySelector("p");

const random = (number) =>  {
    return Math.floor(Math.random() * (number + 1));
}

bouton.addEventListener("click", () => {
    const liste = [
        "Marouane",
        "Teysha",
        "Alix",
        "Sofyane",
        "Liam",
        "Alice",
        "Jeanne",
        "Lucia",
        "Maïa",
        "Amine",
        "Céleste",
        "Jaime",
        "Ange-Maëlys",
        "Bamba",
        "Kenzi",
        "Azir",
        "Corinne",
        "Ferdinand",
        "Ramatoulaye",
        "Parina",
        "Ilian",
        "Raphaëlle",
        "Simon",
        "Eddy",
        "Jules",
        "Aimee",
        "Andrea",
        "Norma",
        "Mael",
        "Téa",
        "Charles",
        "Deniz",
        "Raphael",
        "Andrija",
        "Maor",
        "Anaïs",
        "Meena"
    ]

    let texte = "Bonjour à tous, <br/> Les élèves convoqués à l'heure d'AP du jeudi prochain de 16h à 17h seront : "

    const eleves = [];

    for(let i = 0; i<= (random(2) + 7); i++) {
        const number = random(liste.length - 1);
        eleves.push(liste.splice(number, 1));
    }

    eleves.forEach(el => {
        texte = texte + `<br/> - ${el}`;
    })

    paragraphe.innerHTML = texte;
})