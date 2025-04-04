let HOST_URL = "https://mmi.unilim.fr/~lochis1/"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};
/** 
* @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
* @returns la réponse du serveur.
*/

DataMovie.add = async function(fdata){
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=updateMovie", config);
    let data = await answer.json();
    return data;
}

export { DataMovie };