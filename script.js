let NombreJoueur = 0;
let NombreCPU = 0;
let vie = 10;

function zero(){
    NombreJoueur = 0;
    NombreCPU = 0;
    vie = 10;
    document.getElementById('champs').value = '';
}

function CPUNumber() {
    if (NombreCPU === 0) {
        NombreCPU = Math.round(Math.random() * 100 + 1);
    }
}



function Jeu() {
    CPUNumber();
    NombreJoueur = document.getElementById('champs').value;
    if (NombreJoueur < 1){
        document.getElementById('resultat').innerHTML = "Gros teubé, on a dit entre 1 et 100 :";
    }
    if (NombreJoueur > 100){
        document.getElementById('resultat').innerHTML = "Gros teubé, on a dit entre 1 et 100 :";
    }
    if (vie === 0) {
        document.getElementById('resultat').innerHTML = "Vous n'avez plus de vie<br><br>";
        return "Vous n'avez plus de vie<br><br>";
    } else {
        console.log(NombreCPU + " / " + NombreJoueur);
        if (NombreJoueur > NombreCPU) {
            vie--;
            document.getElementById('resultat').innerHTML = "Veuillez choisir un nombre plus petit.";
            return "Veuillez choisir un nombre plus petit.";
        }
        if (NombreJoueur < NombreCPU) {
            vie--;
            document.getElementById('resultat').innerHTML = "Veuillez choisir un nombre plus grand.";
            return "Veuillez choisir un nombre plus grand.";
        }
        if (NombreJoueur == NombreCPU) {
            document.getElementById('resultat').innerHTML = "Vous avez gagné !";
            return "Vous avez gagné !";
        }
    }
}

document.getElementById('btn').addEventListener('click', function() {
    Jeu();
});


document.getElementById('champs').addEventListener('keydown', (event) => {
    const keyName = event.key;
    /*console.log('Touche : ' + keyName);*/
    if (keyName == 'Enter') {
        Jeu();
    }
});