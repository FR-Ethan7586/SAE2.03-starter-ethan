let templateFile = await fetch("./component/Movies_list/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (obj) {
  let html = template;
  html = html.replace("{{cover}}", "/app/images/" + obj.image);
  html = html.replace("{{Movie_title}}", obj.name);
  html = html.replace("{{Movie_title}}", obj.name);
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
