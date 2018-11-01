let NombreJoueur = 0;
let NombreCPU = 0;
let vie = 10;
let win = false;
function zero(){
    NombreJoueur = 0;
    NombreCPU = 0;
    vie = 10;
    win = false;
    document.getElementById('champs').disabled = false;
    document.getElementById('champs').value = '';
    document.getElementById('statut').innerHTML = vie;
}
function CPUNumber() {
    if (NombreCPU === 0) {
        NombreCPU = Math.round(Math.random() * 100 + 1);
    }
}
function Jeu() {
    CPUNumber();
    NombreJoueur = document.getElementById('champs').value;
    if (win === false) {
        if (NombreJoueur > 0 && NombreJoueur < 101) {
            if (vie === 0) {
                document.getElementById('champs').disabled = true;
                document.getElementById('resultat').innerHTML = "Vous n'avez plus de vie<br><br>";
            } else {
                console.log(NombreCPU + " / " + NombreJoueur);
                if (NombreJoueur > NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = "Veuillez choisir un nombre plus petit.";
                    document.getElementById('statut').innerHTML = vie;
                }
                if (NombreJoueur < NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = "Veuillez choisir un nombre plus grand.";
                    document.getElementById('statut').innerHTML = vie;
                }
                if (NombreJoueur == NombreCPU) {
                    vie--;
                    document.getElementById('statut').innerHTML = vie;
                    document.getElementById('resultat').innerHTML = "Vous avez gagné !";
                    win = true;
                }
            }
        } else {
            document.getElementById('resultat').innerHTML = "Gros teubé, on a dit entre 1 et 100 :";
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
        document.getElementById('champs').value ='';
    }
});