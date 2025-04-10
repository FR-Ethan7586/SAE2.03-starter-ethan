let templateFile = await fetch("./component/Movies_list/template.html");
let template = await templateFile.text();

let MovieFav = {};

MovieFav.format = function (obj) {
  console.log("voici obj dans moviefav", obj[0]);

  let html = template;
  html = html.replace("{id}", obj[0].id);
  html = html.replace("{{cover}}", obj[0].image);
  html = html.replace("{{film_title}}", obj[0].name || "Aucun Film en Favoris");
  html = html.replace("{{film_title}}", obj[0].name || "Aucun Film en Favoris");
  return html;
};

MovieFav.formatMany = function (Movies) {
  let html = "";
  if (Movies && Array.isArray(Movies) && Movies.length > 0) {
    for (const film of Movies) {
      html += MovieFav.format(film);  // Applique la méthode format à chaque film
    }
  } else {
    let htmlNoMovies = template;
    htmlNoMovies = htmlNoMovies.replace("{{cover}}", "navailable.webp");
    htmlNoMovies = htmlNoMovies.replace("{{film_title}}", "Aucun Film en Favoris");
    htmlNoMovies = htmlNoMovies.replace("{{film_title}}", "Aucun Film en Favoris");
    html += htmlNoMovies;  // Affiche le message par défaut si aucun film n'est disponible
  }
  return html;
};

export { MovieFav };
