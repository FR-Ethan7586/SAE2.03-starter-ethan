let HOST_URL = ".."; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

/**
 * @param {*} fdata un objet contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */
DataMovie.add = async function (fdata) {
  // Convertir l'objet de données en JSON
  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata,
  };

  // Effectuer la requête
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=updateMovie",
    config
  );

  // Vérifier si la requête a bien fonctionné
  if (!answer.ok) {
    throw new Error("Échec de la requête : " + answer.statusText);
  }

  // Analyser la réponse JSON
  let data = await answer.json();

  // Retourner la réponse du serveur
  return data;
};

export { DataMovie };
