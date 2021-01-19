"use strict";
let doc = document;
let dino = doc.querySelector(".dino");
let cactus = doc.querySelector(".cactus");
let int = 0;


doc.addEventListener('keydown', function (event) {
    jump();
})

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 120) {
        dino.classList.add('damage');
    } else {
        dino.classList.remove('damage');
    }
}, 100);

function countScore() {
    setInterval(() => {
        if (dino.classList.contains('damage')) {
            int--;
            if (int < 0) {
                int = 0;
            }
        } else {
            int++;
        }
        doc.querySelector(".result").innerHTML = int;
    }, 1000);
}
countScore();