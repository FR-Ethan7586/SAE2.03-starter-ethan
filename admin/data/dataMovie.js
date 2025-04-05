// let HOST_URL = "https://mmi.unilim.fr/~lochis1"; // CHANGE THIS TO MATCH YOUR CONFIG

// let DataMovie = {};
// /** 
// * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
// * @returns la réponse du serveur.
// */

// DataMovie.add = async function(fdata){
//     let config = {
//         method: "POST", // méthode HTTP à utiliser
//         body: fdata // données à envoyer sous forme d'objet FormData
//     };
//     let answer = await fetch(HOST_URL + "/SAE2.03-starter-ethan/server/script.php?todo=updateMovie", config);
//     let data = await answer.json();
//     return data;
// }

// export { DataMovie };

let HOST_URL = "https://mmi.unilim.fr/~lochis1"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

/** 
* @param {*} fdata un objet contenant les données du formulaire à envoyer au serveur.
* @returns la réponse du serveur.
*/
DataMovie.add = async function(fdata) {
    // Convertir l'objet de données en JSON
    let config = {
        method: "POST", // méthode HTTP à utiliser
        headers: {
            'Content-Type': 'application/json' // Indiquer que les données sont en JSON
        },
        body: JSON.stringify(fdata) // Convertir l'objet en chaîne JSON
    };

    // Effectuer la requête
    let answer = await fetch(HOST_URL + "/SAE2.03-starter-ethan/server/script.php?todo=updateMovie", config);
    
    // Vérifier si la requête a bien fonctionné
    if (!answer.ok) {
        throw new Error('Échec de la requête : ' + answer.statusText);
    }

    // Analyser la réponse JSON
    let data = await answer.json();
    
    // Retourner la réponse du serveur
    return data;
}

export { DataMovie };
