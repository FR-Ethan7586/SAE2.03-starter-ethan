let templateFile = await fetch("./component/Movies_list/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (obj) {
  let html = template;
  html = html.replace("{id}", obj.id);
  html = html.replace("{{cover}}", obj.image);
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  return html;
};

Movie.formatMany = function (Movies) {
  let html = "";
  for (const film of Movies) {
    html += Movie.format(film);
  }
  return html;
};

export { Movie };
