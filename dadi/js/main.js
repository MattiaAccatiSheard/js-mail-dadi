const generateN = document.getElementById('generateN');

generateN.addEventListener(
    'click',

    function () {
        let pcN = Math.floor(Math.random() * 6) + 1;
        const userN = Math.floor(Math.random() * 6) + 1;
    
        if (pcN > userN) {
            //output
            document.getElementById('risultato').innerHTML = `Hai perso! Il pc ha fatto ${pcN} e tu ${userN}`;
        } else if (pcN == userN) {
            //output
            document.getElementById('risultato').innerHTML = `Hai vinto! Il pc ha fatto ${pcN} e tu ${userN}`;
        } else {
            //output
            document.getElementById('risultato').innerHTML = `Pareggio. Il numero uscito a te ed al pc sono ${pcN}`;
        }        
    }
)