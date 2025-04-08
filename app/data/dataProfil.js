let HOST_URL = "https://mmi.unilim.fr/~lochis1/"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfil = {};

DataProfil.request = async function () {
  let answer = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readProfil"
  );
  let data = await answer.json();
  return data;
};

export { DataProfil }