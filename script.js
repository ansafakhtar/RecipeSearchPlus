let userSearch = document.querySelector('#txt-input');
//let userInput = document.querySelector('#txt-input');
let btnSearch = document.querySelector('#btn-search');
let translatedOutput = document.querySelector('#txt-output');
//let listOutput = document.querySelector('#food-list');
let listOutput = document.getElementById('food-list');
var btnReset = document.querySelector("#btn-reset");

//console.log(translatedOutput1);
//console.log(listOutput);

function errorHandler() {
    alert("No result found! Please try again.");
}	

function getData(){

    var inputText = userSearch.value;
    url = `https://api.edamam.com/api/recipes/v2?type=public&q=` + inputText
    + `&app_id=78012d88&app_key=051c31047aa29aa88f6e6d441c642d21`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let html = "";
            if(json.hits){
            //if(json.hits)
            //console.log(json.hits.length);
                json.hits.forEach(element => {
                html +=  
                `<div class= "meal-card">
                    <img src = "${element.recipe.image}" class = "meal-img" alt = "Food Image">
                    <div class= "meal-name"> 
                        <h3> ${element.recipe.label} </h3>
                        <p> <b> Calories: </b> ${element.recipe.calories.toFixed(2)} <br> 
                            <b> Meal Type: </b> ${element.recipe.mealType[0]}
                        </p> 
                        <a href="${element.recipe.url}" class="recipe-link" target="_blank"> View Recipe </a>
                    </div> 
                </div> 
                <br>`;
                // console.log(element.recipe.label.trim().split(" ").join(""));
                });
            }
            if (json.hits.length === 0 ){
                errorHandler();
            }
            // console.log(html);
            listOutput.innerHTML = html;

        })
        
        //  .catch(errorHandler);

}
		
btnSearch.addEventListener('click', getData);	


// btnReset.addEventListener('click', () => {
//     userSearch.value = " ";
// });	