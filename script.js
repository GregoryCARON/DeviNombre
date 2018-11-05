let NombreJoueur = 0;
let NombreCPU = 0;
var vie = 10;
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
    document.getElementById('resultat').innerHTML = '';
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
    if (vie > 0) {
        CPUNumber();
        NombreJoueur = parseInt(document.getElementById('champs').value);
        if (NombreJoueur > 0 && NombreJoueur < 101) {
            if (win === false) {
                //if(Number.isIteger(Nombre))
                /* console.log('Choix CPU : ' + NombreCPU + ' / Choix Joueur : ' + NombreJoueur); */
                if (NombreJoueur > NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = 'Veuillez choisir un nombre plus petit.';
                    document.getElementById('statut').innerHTML = vie + ' vie' + plusieurs(vie) + ' restante' + plusieurs(vie);
                }
                if (NombreJoueur < NombreCPU) {
                    vie--;
                    document.getElementById('resultat').innerHTML = 'Veuillez choisir un nombre plus grand.';
                    document.getElementById('statut').innerHTML = vie + ' vie' + plusieurs(vie) + ' restante' + plusieurs(vie);
                }
                if (NombreJoueur === NombreCPU) {
                    vie--;
                    document.getElementById('statut').innerHTML = vie + ' vie' + plusieurs(vie) + ' restante' + plusieurs(vie);
                    document.getElementById('resultat').innerHTML = 'Vous avez gagné !';
                    win = true;
                }
            } else {
                document.getElementById('champs').disabled = true;
                document.getElementById('resultat').innerHTML = 'Vous avez gagné !';
            }
            cacheTour++;
            cacheTourT = cacheTourT + 'Essai ' + cacheTour + '<br>';
            cacheNombreJoueur = cacheNombreJoueur + NombreJoueur + '<br>';
            document.getElementById('tour').innerHTML = cacheTourT;
            document.getElementById('numtour').innerHTML = cacheNombreJoueur;
        } else {
            document.getElementById('resultat').innerHTML = 'Gros teubé, on a dit entre 1 et 100 :';
        }
    } else {
        document.getElementById('champs').blur();
        document.getElementById('champs').disabled = true;
        document.getElementById('resultat').innerHTML = 'Vous n\'avez plus de vie';
    }
    document.getElementById('champs').value = '';
    document.getElementById('champs').focus();
    console.log(vie);
}
document.getElementById('btn').addEventListener('click', function() {
    Jeu();
});
document.getElementById('start').addEventListener('click', function() {
   demarrer();
});
document.getElementById('RaZ').addEventListener('click', function() {
    zero();
});
document.getElementById('champs').addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName) {
        case 'Enter':
            Jeu();
            break;
        default:
            console.log('Touche : ' + keyName);
            break;
    }
});

document.body.addEventListener('keydown', (event) =>{
    const keyName = event.key;
    switch(keyName) {
        case 'Delete':
            zero();
            break;
        default:
            //uhuh
    }
});