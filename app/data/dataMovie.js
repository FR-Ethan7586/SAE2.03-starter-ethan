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

DataMovie.requestFav = async function (idp) {
  let answer3 = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMoviesfav&idp=" + idp
  );
  let data3 = await answer3.json();
  return data3;
}

DataMovie.requestMovieWname = async function (name) {
  let answer4 = await fetch(
    HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMoviesWname&name=" + name
  );
  let data4 = await answer4.json();
  return data4;
}
//---------------------------------------------------------------------------------------------//

export { DataMovie };

