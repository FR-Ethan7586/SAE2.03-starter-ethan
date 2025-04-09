let templateFile = await fetch("./component/ProfilChoice/template.html");
let template = await templateFile.text();

let Profil = {};

Profil.format = function (obj) {
  let html = template;
  html = html.replace("{id}", obj.id);
  html = html.replace("{{img}}", obj.image);
  html = html.replace("{{nom}}", obj.name);
  html = html.replace("{{nom}}", obj.name);
  return html;
};

Profil.formatMany = function (Profils) {
  let html = "";
  for (const film of Profils) {
    html += Profil.format(film);
  }
  return html;
};

export { Profil };
