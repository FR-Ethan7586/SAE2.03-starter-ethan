let templateFile = await fetch("./component/Movies_list/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (obj) {
  let html = template;
  html = html.replace("{{Movie_title}}", "placeholder");
  html = html.replace("{{Movie_title}}", "placeholder");
  return html;
};

export { Movie };
