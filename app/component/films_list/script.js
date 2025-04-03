let templateFile = await fetch("./component/Films_list/template.html");
let template = await templateFile.text();

let film = {};

film.format = function (obj) {
  let html = template;
  html = html.replace("{{film_title}}", "placeholder");
  html = html.replace("{{film_title}}", "placeholder");
  return html;
};

export { film };
