"use strict";

class Moon {
    constructor(name, tier, price, danger) {
        this.name = name;
        this.tier = tier;
        this.price = price;
        this.danger = danger;
    }
}

const experimentation = new Moon("Experimentation", 0, 0, )

const easyMoons = [" Experimentation (0)", "Assurance (0)", "Vow (0)", "Aquatis (0)", "Etern (0)"];
const intermediateMoons = ["March (???)", "Offense (???)", "Ganimedes (???)", "Atlantica (???)", "Polarus (???)", "Amplify (???)", "Celest (???)"];
const hardMoons = ["Rend (???)", "Dine (???)", "Atlas Abyss (???)", "Acidir (???)", "Auralis (???)", "EGypt (???)", "Gratar (???)"];
const insurmountableMoons = ["Infernis (???)", "Titan (???)", "Budapest (???)", "Asteroid-13 (???)", "Kast (???)", "Triskelion (???)"];

const easyMoonResults = document.getElementById('easyMoons');
const intermediateMoonResults = document.getElementById('intermediateMoons');
const hardMoonResults = document.getElementById('hardMoons');
const insurmountableMoonResults = document.getElementById('insurmountableMoons');

const randomEvent = document.getElementById('randomEvent');

const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    let eventRng = getRandomInt(100);
    let moonsPerCategory = 3;
    if (eventRng >= 0 && eventRng < 10) {
        randomEvent.innerHTML = `good event`;
    }
    else if (eventRng >= 10 && eventRng < 19) {
        randomEvent.innerHTML = `bad event`;
    }
    else if (eventRng === 99) {
        randomEvent.innerHTML = `insane event`;
    }
    else {
        randomEvent.innerHTML = ``;
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}