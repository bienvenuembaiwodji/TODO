'use strict';

import chalk from 'chalk';
import readline from 'readline';

import fs from 'fs';
import view from '../presentation/presentation.js';

import { createRequire } from "module";

const require = createRequire(
    import.meta.url);

//Données fictives pour préremplir le fichier data.json  
const tasks = [
    { "_id": "1", "label": "Programmation web" },
    { "_id": "2", "label": "Methode Numérique" },
    { "_id": "3", "label": "Best Practice Software Development" }
];



const getTasks = JSON.stringify(tasks);


/**
 * ----------------------------------------------------------------------------
 * Créée automatiquement au demarrage le fichier data.json si elle n'existe pas
 * ----------------------------------------------------------------------------
 */
 const setupData = function(){
    const path = './donnees/data.json'

    try {
        if (fs.existsSync(path)) {
            //console.log('data file exists!');
            
        }else{
            console.log('data file not exists, create it!');
            fs.writeFileSync('./donnees/data.json', getTasks);
            
        }
    } catch(err) {
        console.error(err)
    }
}


//Appel pour une création automatique du fichier data.json
setupData();