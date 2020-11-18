var recentSearch = [];
var recipe;
var storedRecipes = JSON.parse(window.localStorage.getItem("storedRecipes")) || [];

// function recentlySearched() {

// };

function searchRecipes(recipe) {
    // recentlySearched();

    $.ajax({
        url: "https://api.edamam.com/search?q=" + recipe + "&app_id=b208d965&app_key=168bd55cfd40d63ac22f125ce7280e08&from=0&to=10",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    }).then(function (data) {
        console.log(data);
    })

    $("#searchResults").empty();
    //loop through array response to find the forecasts
    for (var i = 1; i <= 10; i++) {

        var newCard = $("<div>").attr("class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin");

        var cardImg = $("<img>").attr("class", "uk-flex-last@s uk-card-media-right uk-cover-container").attr("src", "https://www.edamam.com/web-img/" + recipe.hits[i].recipe.image + "@2x.jpg");
        newCard.append(cardImg);

        var bodyDiv = $("<div>").attr("class", "uk-card-body");


        var cardTitle = $("<div>").attr("class", "uk-card-title").text(recipe.hits[i].recipe.label);
        newCard.append(cardTitle);


        bodyDiv.append($("<p>").attr("class", "card-text").html(recipe.hits[i].recipe.healthLabels));
        bodyDiv.append($("<p>").attr("class", "card-text").text("Calories: " + recipe.hits[i].recipe.totalTime));
        bodyDiv.append($("<p>").attr("class", "card-text").text("Total Time: " + recipe.hits[i].recipe.calories));

        newCard.append(bodyDiv);
        $("#searchResults").append(newCard);

    };
}
// Event handler for user clicking the search forecast button
$("#searchBtn").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    recipe = $("#searchInput").val().trim();
    console.log("You searched for " + recipe)
    if (recipe != "") {
        storedRecipes.push(recipe);
        localStorage.setItem("storedRecipes", JSON.stringify(storedRecipes));
        // recentlySearched():
        searchRecipes(recipe);
    }
});