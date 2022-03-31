<?php
try{
    $_pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    $_bdd = new PDO('mysql:host=localhost;
    dbname=formulaire_de_contact', 
    'root', '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',$_pdo_options));
   
}catch(Exception $e)
{
    die('Erreur  s\'est produite : '.$e->getMessage());
}
//tester nos variables
if(isset($_POST["prenom"]) || isset($_POST['nom']) || isset($_POST['email']) || isset($_POST['pays']) || isset($_POST['ville'])){
    if(!$_POST["prenom"] || !$_POST["nom"] || !$_POST["email"] || !$_POST["pays"] || !$_POST["ville"]){
        print '<p class="warning"> champs vides veuillez les remplir</p>';

    }else{
        $prenom = $_POST["prenom"];
        $nom = $_POST["nom"];
        $email = $_POST["email"];
        $ville = $_POST["pays"];
        $pays = $_POST["ville"];
        $requete = "INSERT INTO formulaire(prenom, nom, email, pays, ville) VALUES ('$prenom', '$nom', '$email', '$ville', '$pays')";
        $resultat = $_bdd->query($requete);
        print '<p class="success">Votre message a bien été envoyé</p>';
    }
} 
?>