let HOST_URL = ".."; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.request = async function (age) {
  let answer = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMovies&age=" + age
  );
  let data = await answer.json();
  return data;
};

// Itération 3

DataMovie.requestMovieDetails = async function (id) {
  let answer = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMovie&id=" + id
  );
  let data = await answer.json();
  console.log("Données reçues :", data);
  return data;
};

DataMovie.requestCat = async function (cat, age) {
  let answer2 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesCat&category=" + cat + "&age=" + age
  );
  let data2 = await answer2.json();
  return data2;
};

DataMovie.requestFav = async function (idp) {
  let answer3 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesfav&idp=" + idp
  );
  let data3 = await answer3.json();
  return data3;
}

DataMovie.requestMovieWname = async function (name) {
  let answer4 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesWname&name=" + name
  );
  let data4 = await answer4.json();
  return data4;
}


DataMovie.requestMAV = async function (age) {
  let answer2 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesMAV&age=" + age
  );
  let data2 = await answer2.json();
  console.log("Données reçues :", data2);
  return data2;
};

DataMovie.requestSearch = async function (age) {
  let answer2 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesMAV&age=" + age
  );
  let data2 = await answer2.json();
  return data2;
};


//---------------------------------------------------------------------------------------------//

DataMovie.addFav = async function (idp, idf) {
  // Créer l'objet FormData à envoyer
  let fdata = new FormData();
  fdata.append("profil_id", idp);
  fdata.append("movie_id", idf);

  // Vérification des données ajoutées par copilot :)
  for (let pair of fdata.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  // Configuration de la requête POST
  let config = {
    method: "POST",
    body: fdata,
  };

  try {
    // Envoi de la requête
    let answer = await fetch(HOST_URL + "../../../server/script.php?todo=updateFavMovie", config);

    // Vérification du succès de la requête
    if (!answer.ok) {
      throw new Error("Échec de la requête : " + answer.statusText);
    }

    // Récupération des données JSON
    let data = await answer.json();
    return data;

  } catch (err) {
    console.error("Erreur lors de l'ajout en favori :", err);
    throw err; // pour que le code appelant puisse gérer l’erreur aussi
  }
};

DataMovie.requestSearch = async function (search, age) {
  let answer8 = await fetch(
    HOST_URL + "../../../server/script.php?todo=readMoviesSearch&input=" + search + "&age=" + age
  );
  let data8 = await answer8.json();
  return data8;
};

export { DataMovie };

