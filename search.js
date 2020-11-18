var recentSearch = [];
var recipe;
var storedRecipes = JSON.parse(window.localStorage.getItem("storedRecipes")) || [];

// function recentlySearched() {

// };

// function searchRecipes(recipe) {
//     // recentlySearched();
// }
$.ajax({
    url: "https://www.api.edamam.com/search?q=chicken&app_id=$b208d965&app_key=$168bd55cfd40d63ac22f125ce7280e08",
    method: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
    }
}).then(function (data) {
    console.log(data);
})

