<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController()
{
  $film_list = getMovie($_REQUEST['age']);
  return $film_list;
}

function readMovieDetailController()
{
  $film_detail = getMovieDetail($_REQUEST['id']);
  return $film_detail;
}

function updateController()
{
  /* Lecture des données de formulaire
    On ne vérifie pas si les données sont valides, on suppose (faudra pas toujours...) que le client les a déjà
    vérifiées avant de les envoyer 
  */
  $nom = $_REQUEST['name'];
  $rea = $_REQUEST['director'];
  $annee = $_REQUEST['year'];
  $duree = $_REQUEST['length'];
  $desc = $_REQUEST['description'];
  $cat = $_REQUEST['id_category'];
  $age = $_REQUEST['min_age'];
  $img = $_REQUEST['image'];
  $trailer = $_REQUEST['trailer'];
  // Vérification des données obligatoires


  // Mise à jour du Movie à l'aide de la fonction updateMovie décrite dans model.php
  $ok = updateMovie($nom, $rea, $annee, $duree, $desc, $cat, $age, $img, $trailer);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  if ($ok != 0) {
    return "Le film $nom de $rea a été ajouté avec succès !";
  } else {
    return false;
  }
}


//  ------------------ Itération 4 ------------------

function readMoviesPerCategorieController()
{
  $film_list_cat = getMoviePerCategorie($_REQUEST['category'], $_REQUEST['age']);
  return $film_list_cat;
}


// --------------------Itération 5 --------------------//

function updateProfilController()
{
  /* Lecture des données de formulaire
    On ne vérifie pas si les données sont valides, on suppose (faudra pas toujours...) que le client les a déjà
    vérifiées avant de les envoyer 
  */
  $nom = $_REQUEST['ProfilName'];
  $img = $_REQUEST['ProfilImage'];
  $age = $_REQUEST['ProfilAge'];

  // Vérification des données obligatoires


  // Mise à jour du Movie à l'aide de la fonction updateMovie décrite dans model.php
  $ok = updateProfil($nom, $age, $img);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  if ($ok != 0) {
    return "Le profil $nom a été ajouté avec succès !";
  } else {
    return false;
  }
}
//------------itération 6 ------------------//

function readProfilController()
{
  $profil = getProfil();
  return $profil;
}


function readMoviesFavController()
{
  $film_list_fav = getMovieFav($_REQUEST['idp']);
  return $film_list_fav;
}


function readMoviesWithNameController()
{
  $film_list_fav = getMovieWithName($_REQUEST['name']);
  return $film_list_fav;
}