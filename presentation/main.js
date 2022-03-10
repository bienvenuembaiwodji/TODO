'use strict';

import chalk from 'chalk';
import readline from 'readline';
import task from '../traitement/traitement.js';


const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


menu();


function menu() {

    console.log("\n\n╔══════════════════════════════════════════════════════════╗\n" +
        "║                                                          ║\n" +
        "║          TP METHODE DE DEVELOPPEMENT LOGICIEL            ║\n" +
        "║                                                          ║\n" +
        "╚══════════════════════════════════════════════════════════╝\n\n");

    console.log("\n\n════════════════════════ MENU ═════════════════════\n\n");
    console.log("\n 1 ║══> Lister les tâches \n");
    console.log("\n 2 ║══> Ajouter une tâche \n");
    console.log("\n 3 ║══> Supprimer une tâche\n");
    console.log("\n 4 ║══> Quitter le programme\n");

}