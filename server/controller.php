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



/** readControler
 * 
 * Cette fonction est en charge du traitement des requêtes HTTP pour lesquelles le paramètre 'todo' vaut 'read'.
 * Elle vérifie si le paramètre 'jour' est défini et non vide dans la requête et s'il est valide (un jour de la semaine).
 * Si le paramètre 'jour' est présent, elle appelle la fonction getMovie avec le jour spécifié
 * et retourne le Movie. Si le paramètre 'jour' n'est pas présent, vide ou invalide, elle retourne false.
 * 
 * @return mixed Le Movie pour le jour spécifié si 'jour' est défini, valide et non vide, sinon false.
 */
function readController(){
    
    // si on arrive ici c'est que les paramètres existent et sont valides, on peut interroger la BDD
    // Appel de la fonction getMovie déclarée dans model.php pour extraire de la BDD le Movie du jour spécifié
    $Movie = getMovie($name, $image);
    return $Movie;
}

