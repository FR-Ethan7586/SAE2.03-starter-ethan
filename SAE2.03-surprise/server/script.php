<?php

require("controller.php");

if (isset($_REQUEST['todo'])) {

  header('Content-Type: application/json');

  // Récupère la valeur du paramètre 'todo' dans le tableau $_REQUEST
  // $_REQUEST est une superglobale qui contient les paramètres de la requête HTTP.
  $todo = $_REQUEST['todo'];

  switch ($todo) {

    case 'readMovies':
      $data = readMoviesController();
      break;

    case 'updateMovie':
      $data = updateController();
      break;

    case 'readMovie':
      $data = readMovieDetailController();
      break;

    case 'readMoviesCat':
      $data = readMoviesPerCategorieController();
      break;

    case 'readMoviesMAV':  // Mis En Avant 
      $data = readMoviesMAVController();
      break;

    case 'readMoviesfav':
      $data = readMoviesFavController();
      break;

    case 'readMoviesWname':
      $data = readMoviesWithNameController();
      break;

    case 'updateProfil':
      $data = updateProfilController();
      break;

    case 'readProfil':
      $data = readProfilController();
      break;

    case 'updateFavMovie':
      $data = updateFavMovieController();
      break;

    case 'readMoviesSearch':
      $data = readMoviesSearchController();
      break;

    default: // il y a un paramètre todo mais sa valeur n'est pas reconnue/supportée
      echo json_encode('[error] Unknown todo value');
      http_response_code(400); // 400 == "Bad request"
      exit();
  }

  if ($data === false) {
    echo json_encode('[error] Controller returns false');
    http_response_code(500); // 500 == "Internal error"

    exit();
  }

  echo json_encode($data);
  http_response_code(200); // 200 == "OK"
  exit();
} // fin de if ( isset($_REQUEST['todo']) )


http_response_code(404); // 404 == "Not found"
