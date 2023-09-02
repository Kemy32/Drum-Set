// var btns = document.querySelectorAll(".drum");

// btns.forEach(addEventListener("click", function () {
//     console.log(this.innerText);
// }));


var btns = document.querySelectorAll(".drum");
var drumSetLength = btns.length;


// const html = document.body.innerHTML;
// document.body.innerHTML = '<h1>Loading<h1/>'
// function onTomLoaded(callbackFunction) {
//     const task = new Promise((done) => {
//         tom1.onloadeddata = () => {
//             setTimeout(() => done({
//                 message: "Tom 1 is loaded"
//             }), 1000)
//         }
//     }).then(() => callbackFunction("I am kemo"))
// }
// onTomLoaded(function() {

// });
// const task2 = new Promise((done) => {
//     tom2.onloadeddata = () => {
//         done({
//             message: "Tom 2 is loaded"
//         })
//     }
// })
// Promise.all([task, task2]).then((v) => document.body.innerHTML = html);



var heading = document.querySelector("#title");

heading.addEventListener("click", function () {
    alert("I am the callback fucntion.");
    alert("You clicked on the title");
});


for (let i = 0; i < drumSetLength; i++) {
    btns[i].addEventListener("click", function () {
        var clickedBtn = this.innerHTML;
        makeSound(clickedBtn);
        btnGlow(clickedBtn);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    btnGlow(event.key);
});

function makeSound(test) {

    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var snare = new Audio("sounds/snare.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kick_bass = new Audio("sounds/kick-bass.mp3");

    switch (test) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kick_bass.play();
            break;
        default:
    }
}

function btnGlow(pressedKey) {
    var btnPressed = document.querySelector("." + pressedKey);
    btnPressed.classList.add("glow");

    setTimeout(function () {
        btnPressed.classList.remove("glow");
    }, 100);

}