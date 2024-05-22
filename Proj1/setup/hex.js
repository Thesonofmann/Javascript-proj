const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get a random number between 0 and 15(index numbers of hex)
    const randomNumber = getRandomNumber(); //not needed because I need to generate a new randomNumber for each 

    var hexBackground = "#" + hex[getRandomNumber()] + hex[getRandomNumber()] + hex[getRandomNumber()] + hex[getRandomNumber()] + hex[getRandomNumber()] + hex[getRandomNumber()]
    document.body.style.backgroundColor = hexBackground;
    color.innerHTML = hexBackground;
});

function getRandomNumber(){
    var sol = Math.random()* hex.length;
    return Math.floor(sol);
}