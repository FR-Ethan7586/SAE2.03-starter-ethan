let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (obj1) {
  let html = template;
  html = html.replace("{{nom_film}}", obj1.name || "Titre inconnu");
  html = html.replace("{{date}}", obj1.year);
  html = html.replace("{{realisateur}}", obj1.director);
  html = html.replace("{{age}}", obj1.min_age);
  html = html.replace("{{category}}", obj1.category);
  html = html.replace("{{cover}}", obj1.image);
  html = html.replace("{{nom_film}}", obj1.name);
  html = html.replace("{{description}}", obj1.description);
  html = html.replace("{{trailer}}", obj1.trailer);
  return html;
};

MovieDetail.formatMany = function (MovieDetails) {
  let html = "";
  for (const film of MovieDetails) {
    html += MovieDetail.format(film);
  }
  return html;
};

export { MovieDetail };