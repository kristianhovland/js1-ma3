// Question 1 

const sum = (a, b) => a-b;


// Question 2 

fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        for (let i = 0; i < json.results.length; i++) {
            console.log(json.results[i].name);
        }
    })

    .catch(() => document.location.href = "error.html");


// Question 3 

const animalText = "These cats are outrageous.";
animalText = animalText.replace("cats", "giraffes");

// Question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");
}

if (userId < 10) {
    document.location.href("first.html");
} else if (userId >= 10) {
    document.location.href = "second.html";
} else {
    document.location.href = "third.html";
}

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6

const parent = document.querySelector(".animals");

let liElement = document.createElement("li");
liElement.className = "parrots";

console.log(parent);

// Question 7

fetch("https://api.rawg.io/api/games/3801")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const rating = document.querySelector(".rating");
        rating.appendChild(document.createTextNode(json.rating));
    })

    .catch(function (error) {
        console.log(error);
    });
