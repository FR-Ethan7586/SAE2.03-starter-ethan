let templateFile = await fetch("./component/Movies_list/template.html");
let template = await templateFile.text();

let Results = {};

Results.format = function (obj) {
  let html = template;
  html = html.replace("{id}", obj.id);
  html = html.replace("{{cover}}", obj.image);
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  return html;
};

Results.formatMany = function (Movies) {
  let html = "";
  for (const film of Movies) {
    html += Results.format(film);
  }
  return html;
};

export { Results };