// Déclaration des variables globales

let score,player,round,playing;

init()

document.querySelector('.rolldice').addEventListener('click', function() { 
    if (playing) {
        let dom = Math.floor(Math.random() * 6 + 1);
        let domRow = document.querySelector('#dom');

            domRow.style.display = 'inline';
            domRow.src = 'images/dom-'+dom+'.png';

                if (dom !== 1) {
                    round += dom;
                    document.getElementById('current-round-'+player).textContent = round; 
                } else {
                    nextPlayer();
           }
    }
    
});

document.querySelector('.hold').addEventListener('click', function () { 
    if (playing) {
        score[player] += round;
        document.getElementById('score-player-'+player).textContent = score[player];

        if (score[player] >= 100) {
            document.getElementById('name-'+player).textContent = 'WINNER!';
            document.querySelector('#dom').style.display = 'none';
            
            document.querySelector('.player-'+player).classList.add('winner');
            document.querySelector('.player-'+player).classList.remove('active');

                playing = false;

        } else {
            nextPlayer();
        }
    }   
});

function nextPlayer () {
    player === 0 ? player = 1 : player = 0;
        round = 0;

            document.getElementById('current-round-0').textContent = 0;
            document.getElementById('current-round-1').textContent = 0;

            document.querySelector('.player-0').classList.toggle('active');
            document.querySelector('.player-1').classList.toggle('active');
}

document.querySelector('#new-game').addEventListener('click', init);

    function init() {

        score = [0,0]; // le scores des joueurs
        player = 0; // le joueur active
        round = 0; // le score de chaque joueur
        playing = true; //joueur encour..

            document.querySelector('#dom').style.display = 'none';
            document.getElementById('score-player-0').textContent = 0;
            document.getElementById('score-player-1').textContent = 0;
            document.getElementById('current-round-0').textContent = 0;
            document.getElementById('current-round-1').textContent = 0;
            document.getElementById('name-0').textContent = "PLAYER 1";
            document.getElementById('name-1').textContent = "PLAYER 2";

                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.remove('winner');
                document.querySelector('.player-1').classList.remove('winner');
                document.querySelector('.player-1').classList.add('active');

}

