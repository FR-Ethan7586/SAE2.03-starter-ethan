let templateFile = await fetch("./component/Movies_list_Cat/template.html");
let template = await templateFile.text();

let MovieCat = {};

MovieCat.format = function (obj) {
  let html = template;
  html = html.replace("{id}", obj.id);
  html = html.replace("{{cover}}", obj.image);
  html = html.replace("{{film_title}}", obj.name);
  html = html.replace("{{film_title}}", obj.name);
  return html;
};

MovieCat.formatMany = function (Movies) {
  let html = "";
  for (const film of Movies) {
    html += MovieCat.format(film);
  }
  return html;
};

// let togg2 = document.getElementByClass("film__cover");
// let d2 = document.getElementById("Movie__detail");

// function togg(){
//   if(getComputedStyle(d2).visibility !== "hidden"){
//     d2.style.visibility = "hidden"; // Cache Movie__detail
//   } else {
//     d2.style.visibility = "visible"; // Affiche Movie__detail
//   }
// };

// togg2.onclick = togg;

export { MovieCat };
