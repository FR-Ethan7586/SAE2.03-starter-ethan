let HOST_URL = ".."; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfil = {};

DataProfil.add = async function (fdata) {
  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata,
  };

  // Effectuer la requête
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=updateProfil", config );

  // Vérifier si la requête a bien fonctionné
  if (!answer.ok) {
    throw new Error("Échec de la requête : " + answer.statusText);
  }

  // Analyser la réponse JSON
  let data = await answer.json();

  // Retourner la réponse du serveur
  return data;
};

DataProfil.get = async function () {
  let config = {
    method: "GET", // méthode HTTP à utiliser
  };

  // Effectuer la requête
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=readProfil", config );

  // Vérifier si la requête a bien fonctionné
  if (!answer.ok) {
    throw new Error("Échec de la requête : " + answer.statusText);
  }

  // Analyser la réponse JSON
  let data = await answer.json();

  // Retourner la réponse du serveur
  return data;
}

DataProfil.modify = async function (fdata) {

  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata,
  };

  // Effectuer la requête
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=ModifyProfil&id=" + id, config );

  // Vérifier si la requête a bien fonctionné
  if (!answer.ok) {
    throw new Error("Échec de la requête : " + answer.statusText);
  }

  // Analyser la réponse JSON
  let data = await answer.json();

  // Retourner la réponse du serveur
  return data;}

export { DataProfil };