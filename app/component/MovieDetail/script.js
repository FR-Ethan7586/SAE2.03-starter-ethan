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

// document.getElementById('div1').addEventListener('click', function() {
//   var div2 = document.getElementById('div2');
//   // Vérification de l'état actuel de div2
//   if (div2.style.display === 'none' || div2.style.display === '') {
//       div2.style.display = 'block'; // Afficher div2
//   } else {
//       div2.style.display = 'none'; // Masquer div2
//   }
// });


export { MovieDetail };