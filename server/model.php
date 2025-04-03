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
* Récupère le menu pour un jour spécifique dans la base de données.
* @param string $c Limage du film qu'on recup.
* @param string $t Le titre du film qu'on recup.
* @return array Un tableau d'objets contenant l'image et le titre du film.
 */
function getMenu($j, $w)
{
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select entree, plat, dessert from Repas where jour=:jour and semaine=:semaine";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Lie le paramètre à la valeur
    $stmt->bindParam(':semaine', $w);
    $stmt->bindParam(':jour', $j);

    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}