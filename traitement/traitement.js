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
    var dir = './donnees';
    try {
        if (fs.existsSync(path)) {
            //console.log('data file exists!');
            
        }else{
            
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
                console.log('data file not exists, create it!');
                fs.writeFileSync('./donnees/data.json', getTasks);
            }
        }
    } catch(err) {
        console.error(err)
    }
}

/**
 * ---------------------------------------------------
 * Sauvegarde la donnée json dans le fichier data.json
 * @param {*} tasks 
 * ----------------------------------------------------
 */
 const saveTask = function(tasks) {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync('./donnees/data.json', dataJSON);
}

/**
 * -------------------------------------------------------
 * Récupère les tâches contenues dans le fichier data.js
 * @returns 
 *  -------------------------------------------------------
 */
 const loadTasks = function() {
    try {
        const dataBuffer = fs.readFileSync('./donnees/data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }
}


/**
 * -----------------------------------------------------------
 * Affiche toutes les tâches contenues contenues dans data.json
 *  -----------------------------------------------------------
 */
 const showTasks = function() {

    // const dataBuffer = fs.readFileSync('./donnees/data.json');
    // const getBuffer = dataBuffer.toString();
    // const get = JSON.parse(getBuffer);
    const tasks = loadTasks();
    view.viewRender(tasks);
}

/**
 * ---------------------------
 * Ajoute une nouvelle tâche
 * @param {*} id 
 * @param {*} label 
 * ----------------------------
 */
 const addTasks = function(id, label) {
    
    const tasks = loadTasks();
    const duplicateTasks = tasks.filter(function(checkTask) {
        return checkTask.label === label;
    })
       
    if (duplicateTasks.length === 0) {
        tasks.push({
            _id: id,
            label: label
        })

        saveTask(tasks);
        console.log(chalk.green.inverse('Task add successfully!'));
         //Affichage de la liste des tâche après l'ajout
        const newTasks = loadTasks();
        view.viewRender(newTasks);

    }
    
}


/**
 * -------------------------------------------------------------
 * Supprime une tâche spécifique avec taskId passée en paramètre
 * @param {*} taskId 
 * -------------------------------------------------------------
 */
 const removeTask = function(taskId) {
    
    const tasks = loadTasks();
    const getTasks = tasks.filter(function(checkTaskId) {
        return checkTaskId._id !== taskId;
    })
    if (tasks.length > getTasks.length) {
        saveTask(getTasks);

        console.log(chalk.green.inverse('Task remove successfully!'));
        //Affichage de la liste des tâche après suppression
        const newTasks = loadTasks();
        view.viewRender(newTasks);
    } else {
        console.log(chalk.red.inverse('No task found!'));
    }
}


//Appel pour une création automatique du fichier data.json
setupData();

//Exportation des fonctions  showTasks, addTasks et removeTask pour 
//une utilisation dans d'autres fichiers. Ex: presentation/main.js
export default{showTasks, addTasks,removeTask}