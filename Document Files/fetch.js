// Find's recipe by id from Spoonacular
function findRecipe(id) {

    const queryUrl = "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=155529f0b3fa47fa85162ba5c4581250"

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

    const queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=155529f0b3fa47fa85162ba5c4581250&number=25&ranking=1&ingredients=" + ingredients

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
