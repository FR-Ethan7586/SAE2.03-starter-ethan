let HOST_URL = ".."; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfil = {};

DataProfil.request = async function () {
  let answer = await fetch(
    HOST_URL + "../../../server/script.php?todo=readProfil"
  );
  let data = await answer.json();
  return data;
};

export { DataProfil }