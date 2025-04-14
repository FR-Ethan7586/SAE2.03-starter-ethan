let templateFile = await fetch("./component/Movies_list_MAV/template.html");
let template = await templateFile.text();

let MAV = {};

MAV.format = function (obj) {
  let html = template;
  html = html.replace("{id}", obj.id || "Aucun ID");
  html = html.replace("{{cover}}", obj.image || "Pas d'image");
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  html = html.replace("{{film_title}}", obj.name || "Aucun Film disponible");
  return html;
};




MAV.formatMany = function (Movies) {
  let html = "";
  for (const film of Movies) {
    html += MAV.format(film);
  }
  return html;
};

export { MAV };
