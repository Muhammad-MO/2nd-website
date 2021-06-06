// Finds recipe by id from Spoonacular
function findRecipe(id) {

    const queryUrl = "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=e2366db35fac4b6b9f40319fdc66030d"

    fetch(
        queryUrl,
        { method: 'GET' }
    )
        .then(res => res.json())
        .then(json => displayRecipe(json, id))
        .catch(error => console.error("error:", error))
}


// finds recipes by ingredients from Spoonacular
function findRecipesByIngredients(ingredients) {

    const queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=e2366db35fac4b6b9f40319fdc66030d&number=25&ranking=1&ingredients=" + ingredients

    fetch(
        queryUrl,
        { method: 'GET' }
    )
        .then(res => res.json())
        .then(json => {
            console.log(json)
                mapResults(json)
                displayResults(json)
            })
        .catch(error => console.error("error:", error))

}