function description() {

    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        const desc1 = "Une de mes créations :<br>• Boite de vitesse à 2 rapports plus une marche arrière<br>• 2 moteurs en entrée avec un servo moteur pour le rapport";

        if (nom == "moteur_lego.jpg") {
            document.getElementById("description").innerHTML = desc1;
        }
        else if (nom == "robot.png") {
            document.getElementById("description").innerHTML = "ERROR 404, notre robot";
        }
    })
}