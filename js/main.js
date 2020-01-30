console.log("👀")

document.addEventListener("DOMContentLoaded", function(){
    requestKanyeQuote();
    document.getElementById("kanye-btn").addEventListener("click", requestKanyeQuote);
    document.getElementById("code-btn").addEventListener("click", requestCodingQuote);
});

const requestKanyeQuote = function() {

    fetch("https://api.kanye.rest")
        .then(function(apiData){
            return apiData.json();
        })
        .then(function(jsonData) {
            displayKnowledge(jsonData.quote);
        });
};

const requestCodingQuote = function() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then(function(apiData){
            return apiData.json();
        })
        .then(function(jsonData) {
            displayKnowledge(`${jsonData.en}\n-${jsonData.author}`);
        })
}

const displayKnowledge = function(quote) {
    document.getElementById("kanye-quote").textContent = quote;
}