let templateFile = await fetch("./component/Movies_list_Cat/template.html");
let template = await templateFile.text();

let MovieCat = {};

MovieCat.format = function (obj) {
  
  if (!obj) {
    let html = template;
  html = html.replace("{{cover}}", "navailable.webp");
  html = html.replace("{{film_title}}", "Aucun Film disponible dans cette catégorie");
  html = html.replace("{{film_title}}", "Aucun Film disponible dans cette catégorie");
  return html;
  }
  let html = template;
  html = html.replace("{id}", obj.id);
  html = html.replace("{{cover}}", obj.image );
  html = html.replace("{{film_title}}", obj.name );
  html = html.replace("{{film_title}}", obj.name );
  return html;
};

MovieCat.formatMany = function (Movies) {
  if (!Movies || Movies.length === 0) {
    return `
      <article class="film__card film__card__cat unavailable">
        <figcaption class="film__caption">
          <h3 class="film__title">Aucun film disponible dans cette catégorie</h3>
        </figcaption>
      </article>
    `;
  }

  let html = "";
  for (const film of Movies) {
    html += MovieCat.format(film);
  }
  return html;
};

export { MovieCat };
