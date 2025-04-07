let HOST_URL = "https://mmi.unilim.fr/~lochis1/"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.request = async function () {
  let answer = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMovies"
  );
  let data = await answer.json();
  return data;
};

// Itération 3

DataMovie.requestMovieDetails = async function (id) {
  let answer = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMovie&id=" + id
  );
  let data = await answer.json();
  console.log("Données reçues :", data);
  return data;
};

//---------------------------------------------------------------------------------------------//

export { DataMovie };
