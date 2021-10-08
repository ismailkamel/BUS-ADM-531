const host = "ba531-javascriptapp-appserver.azurewebsites.net";
const https = require('https');
const ingredientsEndpoint = '/api/ingredients'
const recipeEndpoint = '/api/recipes'
const recipeName = '/api/recipes:name'

//getData(endpoint)
function getData(endpoint){
	return new Promise((resolve, reject) => {
        let options ={
            host: host
            path: endpoint
        } 
        https.get(options, (res) => {

            let responseString = ''; 
        
            res.on('data', (data) => { 
                responseString += data;
            });
        
            res.on('end', () => { 
                resolve(JSON.parse(responseString)); 
            });
        }).on('error', (err) => { 
            reject(err);
            console.log(err.message);
        }) 
    })
}



//calcMaxPPG(recipeName, recipeEndPoint, ingredientsEndpoint)
function calcMaxPPG(recipeName){
    return new Promise((resolve,reject) => {
        getData(recipeEndpoint)
        .then(result => {
            getData(recipeName), 
            getData(ingredientsEndpoint)
            .then(ingredients => {
                let total = 0;
                recipe.ingredients.forEach(item => {
                    ingredients.forEach(ingredient => {
                        if(item.name === ingredient.name){
                            total += item.quantity * ingredient.maxPPG;
                        }
                    })
                })
                resolve(total);
            })
            .catch(error =>{
                console.log(error);
            })
        })
    })
}



//Recipe() and Ingredients()
function Recipe(name, ingredients){
    this.name = name;
    this.ingredients = [];
}

function Ingredients(name, maxPPG){
    this.name = name;
    this.maxPPG = maxPPG
}

module.exports{
    getData()
}

module.exports{
    calcMaxPPG()
}