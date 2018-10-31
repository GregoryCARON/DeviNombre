let NombreJoueur = 0;
let NombreCPU = 0;
let vie = 10;

function zero(){
    NombreJoueur = 0;
    NombreCPU = 0;
    vie = 10;
    document.getElementById('Champs').value = '';
}
function CPUNumber() {
    if (NombreCPU === 0) {
        NombreCPU = Math.round(Math.random() * 100 +1);
    }
}




document.getElementById('btn').addEventListener('click', function() {
    NombreCPU = CPUNumber();
    NombreJoueur = document.getElementById('champs').value;
    if (vie === 0) {
        document.getElementById('resultat').innerHTML = "Vous n'avez plus de vie<br><br>";
        return "Vous n'avez plus de vie<br><br>";
    } else {
        console.log(NombreCPU);
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
        if (NombreJoueur === NombreCPU) {
            document.getElementById('resultat').innerHTML = "Vous avez gagné !";
            return "Vous avez gagné !";
        }
    }
});













