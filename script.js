let NombreJoueur = 0;
let NombreCPU = 0;
let vie = 10;
let win = false;
let cacheTour = 0;
let cacheTourT = '';
let cacheNombreJoueur = '';
function zero(){
    NombreJoueur = 0;
    NombreCPU = 0;
    vie = 10;
    win = false;
    cacheTour = 0;
    cacheTourT = '';
    cacheNombreJoueur = '';
    document.getElementById('tour').innerHTML = '';
    document.getElementById('numtour').innerHTML = '';
    document.getElementById('champs').disabled = false;
    document.getElementById('champs').value = '';
    document.getElementById('statut').innerHTML = vie + ' vie'+ plusieurs(vie) + ' restante' + plusieurs(vie);
    document.getElementById('champs').focus();
}
function demarrer() {
    document.getElementById('global').style.display = 'Block';
    document.getElementById('start').style.display ='none';
    zero();
}
function plusieurs(quantity) {
    if (quantity > 1) {
        return 's';
    } else {
        return '';
    }
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
                document.getElementById('resultat').innerHTML = 'Vous n\'avez plus de vie';
            } else {
                /* console.log('Choix CPU : ' + NombreCPU + ' / Choix Joueur : ' + NombreJoueur); */
                if (NombreJoueur > NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = 'Veuillez choisir un nombre plus petit.';
                    document.getElementById('statut').innerHTML = vie + ' vie'+ plusieurs(vie) + ' restante' + plusieurs(vie);
                }
                if (NombreJoueur < NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = 'Veuillez choisir un nombre plus grand.';
                    document.getElementById('statut').innerHTML = vie + ' vie'+ plusieurs(vie) + ' restante' + plusieurs(vie);
                }
                if (NombreJoueur == NombreCPU) {
                    vie--;
                    document.getElementById('statut').innerHTML = vie + ' vie'+ plusieurs(vie) + ' restante' + plusieurs(vie);
                    document.getElementById('resultat').innerHTML = 'Vous avez gagné !';
                    win = true;
                }
            }
            cacheTour++;
            cacheTourT = cacheTourT + 'Essai ' + cacheTour + '<br>';
            cacheNombreJoueur = cacheNombreJoueur + NombreJoueur + '<br>';
            document.getElementById('tour').innerHTML = cacheTourT;
            document.getElementById('numtour').innerHTML = cacheNombreJoueur;
        } else {
            document.getElementById('resultat').innerHTML = 'Gros teubé, on a dit entre 1 et 100 :';
        }
    }
    document.getElementById('champs').value ='';
    document.getElementById('champs').focus();
}
document.getElementById('btn').addEventListener('click', function() {
    Jeu();
});
document.getElementById('champs').addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName) {
        case 'Enter':
            Jeu();
            break;
        case 'Delete':
            zero();
            break;
        default:
            console.log('Touche : ' + keyName);
            break;
    }
});