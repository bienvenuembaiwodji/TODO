import module from 'module';

/**
 * ------------------------------------------------------------------
 * Liste les tâches contenues dans la donnée json passée en paramètre 
 * @param {*} jsonData 
 * ------------------------------------------------------------------
 */
const viewRender = function(jsonData) {

    
    console.log("\n Liste des tâches \n");
    console.log("══════════════════\n");

    for (let index = 0; index < jsonData.length; index++) {
        const element = jsonData[index];
        console.log(element._id + " ═ " + element.label);
    }
}

//Exportation de la fonction viewRender,une utilisation 
//dans d'autres fichiers. Ex: traitement/traitement.js
export default{viewRender}