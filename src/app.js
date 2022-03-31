document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);

    let el, modal, closed, open_modal, closed_all;

    el = document.querySelectorAll(".grid-picture-large li");
    modal = document.querySelector(".parent-modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale img");

    /* property elements */

    open_modal = function () {
        console.log(this.dataset);
        /* les variables */
        let image = this.dataset.image;
        let title = this.dataset.title;
        let desc = this.dataset.description;
        let dates = this.dataset.dates;
        modal.classList.add("modale-active"); /* ajouter la classe active */
        /* sélectionner les sélecteurs html*/
        document.querySelector(".modale img").setAttribute("src", image);
        document.querySelector(".modale .desc h3").innerText = title;
        document.querySelector(".modale .desc p").innerHTML = `<strong>Déscription : </strong>${desc}`;
        document.querySelector(".modale .desc time").innerText = `Annee ${dates}`;
        document.querySelector(".modale .desc time").setAttribute("datetime", dates);
    };
    for (rows of el) {
        rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    /*FORM*/
    let el2 = document.querySelector("form p");
	let btn, nom, prenom, email, pays, ville;
	btn = document.getElementsByTagName("input")[3];
	nom = document.getElementsByTagName("input")[0].value;
	prenom = document.getElementsByTagName("input")[1].value;
	email = document.getElementsByTagName("input")[2].value;
	pays = document.getElementsByTagName("select")[0].value;
	ville = document.getElementsByTagName("select")[1].value;
	btn.addEventListener("click", e => {
		e.preventDefault();
		Formulaire();
	});
	let Formulaire = () => {
		btn = document.getElementsByTagName("input")[3];
		nom = document.getElementsByTagName("input")[0].value;
		prenom = document.getElementsByTagName("input")[1].value;
		email = document.getElementsByTagName("input")[2].value;
		pays = document.getElementsByTagName("select")[0].value;
		ville = document.getElementsByTagName("select")[1].value;
		console.log(nom, prenom, email, pays, ville);
		if (nom === "" || prenom === "" || email === "" || pays === "" || ville === "") {
			el2.innerText = "Veuillez remplir tous les champs ";
			el2.classList.remove("success");
			el2.classList.add("warning");
		} else {
			el2.innerText = "Votre formulaire a bien été envoyé";
			el2.classList.remove("warning");
			el2.classList.add("success");
			localStorage.setItem("user", nom + " | " + prenom + " | " + email + " | " + pays + " | " + ville);
			sessionStorage.setItem("user", "sessionid");

		}
	};
});