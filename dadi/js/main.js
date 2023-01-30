const generateN = document.getElementById('generateN');

generateN.addEventListener(
    'click',

    function () {
        let pcN = Math.floor(Math.random() * 6) + 1;
        let userN = Math.floor(Math.random() * 6) + 1;
        console.log(userN);
        console.log(pcN);
        
    }
)