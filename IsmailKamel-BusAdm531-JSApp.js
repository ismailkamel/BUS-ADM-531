const jsmodule = require('./IsmailKamel-BusAdm531-JSModule')
let recipeList = [];
let ingredientLIst = [];
const ingredientsEndpoint = '/api/ingredients'
const recipeEndpoint = '/api/recipes'
const recipeName = '/api/recipes:name'


function getRecipes(){
    jsmodule.getData(recipeEndpoint)
    .then(response => {
        response.forEach(name => {
            recipeList.push(jsmodule.Recipe(item.name))
        });
        console.log(recipes);
        }).catch(function(error){
        console.log(error);
        })
    }

    function getIngredients(){
        jsmodule.getData(ingredientEndpoint)
        .then(response => {
            response.forEach(name => {
                ingredientList.push(jsmodule.Recipe(item.name))
            });
            console.log(recipes);
            }).catch(function(error){
            console.log(error);
            })
        }

    function getRecipe(){
    jsmodule.calcMaxPPG('Drifter')
        .then(response => {
            console.log('Max PPG of ', recipeName, ' is ', calcMaxPPG);
        }).catch(function(error){
            console.log(error);
            })
        }



getRecipes();
getIngredients();
calcMaxPPG('Drifter')
 