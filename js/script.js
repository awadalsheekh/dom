// Déclaration des variables globales

let score, player, round, playing;

score = [0,0]; // le scores des joueurs
player = 0; // le joueur active
round = 0; // le score de chaque joueur
playing = true; //joueur encour..

document.querySelector('#dom').style.display = 'none';
document.querySelector('.rolldice').addEventListener('click', function() {
    if (playing) {
        let dom = Math.floor(Math.random() * 6 + 1);
        let domRow = document.querySelector('#dom');

        domRow.style.display = 'inline';
        domRow.src = 'images/dom-'+dom+'.png';
    }
})