let HOST_URL = "https://mmi.unilim.fr/~lochis1/"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.request = async function (age) {
  let answer = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMovies&age=" + age
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

DataMovie.requestCat = async function (cat, age) {
  let answer2 = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMoviesCat&category=" + cat + "&age=" + age
  );
  let data2 = await answer2.json();
  return data2;
};

//---------------------------------------------------------------------------------------------//

export { DataMovie };

