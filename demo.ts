//Exercice 1
//Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.
function exercice1() {
    const address: string = "Aix"
    const zipCode: number = 73100
    const addressFull: string = address + ' ' + zipCode
    console.log(addressFull)
    console.log(typeof addressFull)
}

//Exercice 2
// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.
function exercice2() {
    const countries: string[] = ["France", "Italie", "Espagne", "Angleterre", "Pays-Bas"]

    for (let i=0; i< countries.length; i++) {
        console.log(i + countries[i])
    }
}

//Exercice 3
// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.
function exercice3() {
    const sentence: string = "developpement"
    const cutedSentence: string[] = sentence.split('')
    console.log(cutedSentence)
}

//Exercice 4
// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.
function exercice4() {
    let fullSentence: string = ""
    const cutSentence = ["d","e","v","e","l","o","p","p","e","m","e","n","t",]

    for (let i = 0; i < cutSentence.length; i++) {
        console.log(fullSentence)
        fullSentence = fullSentence + cutSentence[i]
    }

    console.log(fullSentence)
}