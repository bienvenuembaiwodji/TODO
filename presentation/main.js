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

rl.on('line', (num) => {

    console.log(chalk.blue(`You choose: ${num}`));

    switch (num) {

        case "1":
            task.showTasks();
            rl.question("\nBack to menu? (Y/N)", function(res) {
                if (`${res}` === 'Y') {
                    menu();
                }else{
                    rl.close();
                }
               
            });
            break;

        case "2":
            
            rl.question("\nEnter task Id : ", function(id) {
                rl.question("Enter task name : ", function(label) {
                    task.addTasks(`${id}`,`${label}`);
                   
                    rl.question("\n Back to menu? (Y/N)", function(res) {
                        if (`${res}` === 'Y') {
                            menu();
                        }else{
                            rl.close();
                        }
                       
                    });
                });
            });
            
            break;

        case "3":
            
            rl.question("\nEnter Id of the task you want to delete : ", function(id) {
                task.removeTask(`${id}`);

                rl.question("\nBack to menu? (Y/N)", function(res) {
                    if (`${res}` === 'Y') {
                        menu();
                    }else{
                        rl.close();
                    }
                   
                });
               
            });

            break;
        case "4":

            rl.close();

            break;    

        default:

            console.log('Dont know what you want...')

    }
  

});

//event handle at close

rl.on('close', function() {

    console.log(chalk.yellow("BYE BYE !"));

    process.exit(0);

});