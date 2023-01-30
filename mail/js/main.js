const btnaccess = document.getElementById('btn');
const arr = ["bello@gmail.com", "tenero@gmail.com", "rozzo@gmail.com", "stanco@gmail.com"];


btnaccess.addEventListener(
    'click',
    
    function () {
        //variabili utili
        const mailValue = document.getElementById('usMail').value;
        console.log(mailValue);
        let access = false;
        
        
        for (let i = 0; i < arr.length; i++){

            if (mailValue == arr[i]) {
                access = true
            }
        }

        if (access == true){
            alert("accesso eseguito");
        }else{
            alert("accesso non valido");
        }
        
    }

);