<?php

/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "lochis1");
define("DBLOGIN", "lochis1");
define("DBPWD", "lochis1");


// essai de connexion à la base de données pour recup les films
/**
 * Récupère le Movie pour un jour spécifique dans la base de données.
 * @param string $c Limage du film qu'on recup.
 * @param string $t Le titre du film qu'on recup.
 * @return array Un tableau d'objets contenant l'image et le titre du film.
 */
function getMovie($age)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    $sql = "SELECT Movie.name, Movie.image, Movie.id, Movie.min_age
    FROM Movie
    WHERE Movie.min_age <= :age";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function getMovieDetail($id)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    // $sql = "SELECT * FROM Movie WHERE id = :id";

    $sql = "SELECT Movie.id, Movie.name, Movie.year, Movie.length, Movie.description, Movie.director, Movie.image, Movie.trailer, Movie.min_age, Category.name AS category 
    FROM Movie 
    INNER JOIN Category ON Movie.id_category = Category.id
    WHERE Movie.id = :id";

    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':id', $id);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}


/**
 * Met à jour le menu pour un jour spécifique dans la base de données.
 *
 * @param string $n Le nom du film qui est mis à jour.
 * @param string $d Le nom du realisateur pour lequel le film est mis à jour.
 * @param string $y L'année du film qui est mis a jour.
 * @param string $l La durée du film qui est mis à jour.
 * @param string $de La description du film qui est mise à jour.
 * @param string $c La catégorie du film qui est mise à jour.
 * @param string $a La classification du film qui est mise à jour.
 * @param string $i L'image du film qui est mise à jour.
 * @param string $t La bande-annonce du film qui est mise à jour.
 * 
 * @return int Le nombre de lignes affectées par la requête de mise à jour.
 * 
 * A SAVOIR: une requête SQL de type update retourne le nombre de lignes affectées par la requête.
 * Si la requête a réussi, le nombre de lignes affectées sera 1.
 * Si la requête a échoué, le nombre de lignes affectées sera 0.
 */
function updateMovie($n, $d, $y, $l, $de, $c, $a, $i, $t)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL de mise à jour du menu avec des paramètres
    // Requête SQL d'ajout d'un film
    $sql = "INSERT INTO `Movie` (`name`, `director`, `year`, `length`, `description`, `id_category`, `min_age`, `image`, `trailer`)
            VALUES (:name, :director, :year, :length, :description, :id_category, :age, :image, :trailer)";

    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    // Lie les paramètres aux valeurs
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':director', $d);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l);
    $stmt->bindParam(':description', $de);
    $stmt->bindParam(':id_category', $c);
    $stmt->bindParam(':age', $a);
    $stmt->bindParam(':image', $i);
    $stmt->bindParam(':trailer', $t);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère le nombre de lignes affectées par la requête
    $res = $stmt->rowCount();
    return $res; // Retourne les résultats
}


//  ------------------ Itération 4 ------------------  //

function getMoviePerCategorie($cat, $age)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    $sql = "SELECT Movie.name, Movie.image, Movie.id
            FROM Movie
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Category.name = :category_name AND Movie.min_age <= :age";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':category_name', $cat);
    $stmt->bindParam(':age', $age);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}


function updateProfil($nom, $age, $img)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);

    // Requête SQL d'insertion ou de mise à jour
    $sql = "INSERT INTO Profil (name, age, image) 
            VALUES (:name, :age, :image) 
            ON DUPLICATE KEY 
            UPDATE age = VALUES(age), 
            image = VALUES(image);";

    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    // Lie les paramètres aux valeurs
    $stmt->bindParam(':name', $nom);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':image', $img);

    // Exécute la requête SQL
    $stmt->execute();

    // Récupère le nombre de lignes affectées par la requête
    $res = $stmt->rowCount();
    return $res; // Retourne les résultats
}


// --------------------Itération 6 --------------------//

function getProfil()
{

    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    $sql = "SELECT * FROM Profil";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats

}

function getMovieFav($id)
{
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    $sql = "SELECT Movie.name AS movie_name FROM Favorites JOIN Movie ON Favorites.movie_id = Movie.id WHERE Favorites.profil_id = :id";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':id', $id);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function getMovieWithName($name)
{
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le Movie avec des paramètres
    $sql = "SELECT Movie.name, Movie.image, Movie.id, Movie.min_age
    FROM Movie
    WHERE Movie.name = :name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':name', $name);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addFavMovie($profil_id, $movie_id) {
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);

    // Vérifier si la combinaison existe déjà
    $checkSql = "SELECT * FROM Favorites WHERE profil_id = :idp AND movie_id = :idf";
    $stmt = $cnx->prepare($checkSql);
    $stmt->bindParam(':idp', $profil_id);
    $stmt->bindParam(':idf', $movie_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Existe déjà : on supprime
        $deleteSql = "DELETE FROM Favorites WHERE profil_id = :idp AND movie_id = :idf";
        $stmt = $cnx->prepare($deleteSql);
        $stmt->bindParam(':idp', $profil_id);
        $stmt->bindParam(':idf', $movie_id);
        $stmt->execute();

        return ["action" => "removed"];
    } else {
        // N'existe pas : on insère
        $insertSql = "INSERT INTO Favorites (profil_id, movie_id) VALUES (:idp, :idf)";
        $stmt = $cnx->prepare($insertSql);
        $stmt->bindParam(':idp', $profil_id);
        $stmt->bindParam(':idf', $movie_id);
        $stmt->execute();

        return ["action" => "added"];
    }
}
