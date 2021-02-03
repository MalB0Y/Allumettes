const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let nbrAllumettes = 16;
let increment = 0;
let count = 0 ;
const map = [
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*'],
    ['*', ' ', '|', '|', '|', '|', '|', ' ', '*'],
    ['*', '|', '|', '|', '|', '|', '|', '|', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*']
];
jeu()

// une function asynchrone pour le jeu
    async function jeu() {
        
   
    // Afficher la map (display)
    display(map)
    try {
        
    // apeller la fonction joueur
    await sleep(500);
    return await joueur()
    } catch (error){
    // console log de l'erreur
    console.error(error);
    }
    }

function display(values) {
    const rows = values.length
    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
}


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   



// la function joueur {
async function joueur() {
    // Poser la question (pour choisir une ligne) avec rl {
    rl.question('Choisissez une ligne ', (answer) => {
        // Récupérer le chiffre
        const ligne = answer 
        // Faire une condition si le chiffre est supérieur ou égal à 1 et inférieur ou égal à 4 {
        if (ligne >= 1 && ligne <= 4){
            // Poser la question (pour choisir un chifre avec rl {
            rl.question('Choisissez un chiffre ', (answer) => {
                // Récupérer le chiffre
                const Nb = answer
                // Faire une condition si le chiffre est supérieur ou égal à 1 et inférieur ou égal à 3{ 
                if (Nb >= 1 && Nb <= 3){
                    // définir l'élement de recherche ( | )
                    let stringsearch = "|"
                    // Faire une boucle pour compter le nombre de | en fonction de la ligne choisis
                    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[ligne][i++]))
                    count = count 
                    // Faire une condition si le nombre de | est supérieur ou égal au chiffre choisis { 
                    if (count >= Nb){
                        // Dire que le nombre d'allumettes = nombre d'allumettes - le chiffre
                        nbrAllumettes = nbrAllumettes - Nb;

                        for (let i = 0; i < map[ligne].length; i++) {
                            if (map[ligne][i].indexOf('|') != -1) {
                               if (map[ligne][i] == '|') {
                                  map[ligne][i] = map[ligne][i].replace('|', ' ');
                                    function Number() {
                                        increment++;
                                    }
                                    
                                    Number();

                                    if (increment == Nb) {
                                      increment = 0;
                                      break;
                                    }
                               }
                            }
                        }
                        // Faire une condition si le nombre d'allumettes = 0 {
                        if (nbrAllumettes == 0){
                            // la game est fin
                            console.log('la partie est terminée');
                            display(map)
                            rl.close();
                            return;

                        } else {
                            // au tour du bot
                            display(map)
                            Bot();
                            return;
                        }
                    } else{
                        // console log de l'erreur
                        console.log("il n'y a pas assez d'allumennetes");
                        // retourner la function
                        joueur();
                    }
                } else {
                    // console log de l'erreur
                    console.log("choissisez un nombre entre 1 et 3")
                    // retourner la function
                    joueur()
                    
                }
            });
        } else {
            // console log de l'erreur
            console.log("la ligne doit être comprise entre 1 et 4")
            // retourner la function
            joueur();
        }
    });   
}








//LE BOT
async function Bot() {

    const ligne = Math.floor(Math.random() * 4) + 1;
    let Nb = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[ligne][i++]));
    
    count = count;

    switch (count) {
        case 7: case 6: case 5: case 4: case 3:
            Nb = Math.floor(Math.random() * 3) + 1;
            break;
        case 2: case 1:
            Nb = Math.floor(Math.random() * count) + 1;
            break;
        case 0:
            Bot();
            break;
    }

    if (count >= Nb) {

        if (Nb >= 1 && Nb <= 3) {
            console.log('votre adversaire joue')

            await sleep(3000);

            nbrAllumettes = nbrAllumettes - Nb

            for (let i = 0; i < map[ligne].length; i++) {

                if (map[ligne][i].indexOf('|') != -1) {
                
                    map[ligne][i] = map[ligne][i].replace('|', ' ');
        
                    function Co() {
                        increment++;
                    }
        
                    Number();  
        
                    if (increment === Nb) {
                        increment = 0;
                        break;
                    }
                }
            }

            if (nbrAllumettes <= 0) {

                console.log(`L'IA a retirée ${Nb} allumettes`);
                console.log(`Il reste ${nbrAllumettes} allumette(s)`);
                console.log("Vous avez gagné !");
                display(map);
                rl.close(); 
                return;
                
            } else {
                
                console.log(`L'IA a retirée ${Nb} allumettes`);
                console.log(`Il reste ${nbrAllumettes} allumette(s)`);
                await jeu();
            }

        } else {
            Bot();
        }

    } else {
        Bot();
    }
};
