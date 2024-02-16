"use strict";

class Moon {
    constructor(name, tier, price, danger) {
        this.name = name;
        this.tier = tier;
        this.price = price;
        this.danger = danger;
    }
}

// easy
const experimentation = new Moon("41-Experimentation", 0, 0, 0);
const assurance = new Moon("220-Assurance", 0, 0, 0);
const vow = new Moon("56-Vow", 0, 0, 1);
const aquatis = new Moon("112-Aquatis", 0, 0, 0);
const etern = new Moon("154-Etern", 0, 0, 1);

const easyMoons = [experimentation, assurance, vow, aquatis, etern];

// intermediate
const march = new Moon("61-March", 1, 200, 0);
const offense = new Moon("21-Offense", 1, 330, 1);
const ganimedes = new Moon("2-Ganimedes", 1, 460, 1);
const atlantica = new Moon("43-Atlantica", 1, 300, 0);
const polarus = new Moon("94-Polarus", 1, 410, 1);
const amplify = new Moon("443-Amplify", 1, 260, 0);
const celest = new Moon("28-Celest", 1, 380, 1);

const intermediateMoons = [march, offense, ganimedes, atlantica, amplify, celest];

// hard
const rend = new Moon("85-Rend", 2, 880, 1);
const dine = new Moon("7-Dine", 2, 920, 2);
const atlasAbyss = new Moon("&#9608;&#9608;&#9608;-Atlas Abyss", 2, 730, 1);
const acidir = new Moon("74-Acidir", 2, 800, 1);
const auralis = new Moon("42-Auralis", 2, 950, 2);
const egypt = new Moon("10-EGypt", 2, 750, 1);
const gratar = new Moon("147-Gratar", 2, 700, 1);

const hardMoons = [rend, dine, atlasAbyss, acidir, auralis, egypt, gratar];

// insurmountable
const infernis = new Moon("46-Infernis", 3, 2300, 2);
const titan = new Moon("8-Titan", 3, 1900, 2);
const budapest = new Moon("618-Budapest", 3, 1800, 2);
const asteroid13 = new Moon("57-Asteroid-13", 3, 1750, 2);
const kast = new Moon("13-Kast", 3, 1850, 2);
const triskelion = new Moon("27-Triskelion", 3, 1600, 1);

const insurmountableMoons = [infernis, titan, budapest, asteroid13, kast, triskelion];

const allMoons = [experimentation, assurance, vow, aquatis, etern, march, offense, ganimedes, atlantica, polarus, amplify, celest, rend, dine, atlasAbyss, acidir, auralis, egypt, gratar, infernis, titan, budapest, asteroid13, kast, triskelion];

const easyMoonResults = document.getElementById('easyMoons');
const intermediateMoonResults = document.getElementById('intermediateMoons');
const hardMoonResults = document.getElementById('hardMoons');
const insurmountableMoonResults = document.getElementById('insurmountableMoons');

const calculating = document.getElementById('calculating');
const randomEvent = document.getElementById('randomEvent');

const submit = document.getElementById('submit');

let generateMoonList = true;
let moonsPerCategory = 3;

let alreadyGenerating = false;

easyMoonResults.style.display = "none";
intermediateMoonResults.style.display = "none";
hardMoonResults.style.display = "none";
insurmountableMoonResults.style.display = "none";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateEasyMoons() {
    easyMoonResults.innerHTML = "<h3>EASY MOONS</h3>";

    let selectedMoons = [];
    for (let i = 0; i < moonsPerCategory; i++) {
        let acceptedRNG = false;
        let curNum = 0;
        while (acceptedRNG === false) {
            curNum = getRandomInt(easyMoons.length);
            if (!selectedMoons.includes(curNum)) acceptedRNG = true;
            selectedMoons.push(curNum);
        }
        setTimeout(addMoonToList, (i + 1) * 100, easyMoonResults, easyMoons[curNum])
    }

    easyMoonResults.style.display = "block";
}

function generateIntermediateMoons() {
    intermediateMoonResults.innerHTML = "<h3>INTERMEDIATE MOONS</h3>";

    let selectedMoons = [];
    for (let i = 0; i < moonsPerCategory; i++) {
        let acceptedRNG = false;
        let curNum = 0;
        while (acceptedRNG === false) {
            curNum = getRandomInt(intermediateMoons.length);
            if (!selectedMoons.includes(curNum)) acceptedRNG = true;
            selectedMoons.push(curNum);
        }
        setTimeout(addMoonToList, (i + 1) * 100, intermediateMoonResults, intermediateMoons[curNum])
    }

    intermediateMoonResults.style.display = "block";
}

function generateHardMoons() {
    hardMoonResults.innerHTML = "<h3>HARD MOONS</h3>";

    let selectedMoons = [];
    for (let i = 0; i < moonsPerCategory; i++) {
        let acceptedRNG = false;
        let curNum = 0;
        while (acceptedRNG === false) {
            curNum = getRandomInt(hardMoons.length);
            if (!selectedMoons.includes(curNum)) acceptedRNG = true;
            selectedMoons.push(curNum);
        }
        setTimeout(addMoonToList, (i + 1) * 100, hardMoonResults, hardMoons[curNum])
    }

    hardMoonResults.style.display = "block";
}

function generateInsurmountableMoons() {
    insurmountableMoonResults.innerHTML = "<h3>INSURMOUNTABLE MOONS</h3>";

    let selectedMoons = [];
    for (let i = 0; i < moonsPerCategory; i++) {
        let acceptedRNG = false;
        let curNum = 0;
        while (acceptedRNG === false) {
            curNum = getRandomInt(insurmountableMoons.length);
            if (!selectedMoons.includes(curNum)) acceptedRNG = true;
            selectedMoons.push(curNum);
        }
        setTimeout(addMoonToList, (i + 1) * 100, insurmountableMoonResults, insurmountableMoons[curNum])
    }

    insurmountableMoonResults.style.display = "block";

    calculating.innerHTML = 'STATUS: Routing complete.';

    submit.classList.remove("noInteract");
    alreadyGenerating = false;
}

function addMoonToList(list, moon) {
    let dangerIcon = "";
    if (moon.danger === 0) {
        dangerIcon = "&#9745;";
    }
    else if (moon.danger === 1) {
        dangerIcon = "&#9888;";
    }
    else if (moon.danger === 2) {
        dangerIcon = "&#9760;";
    }

    list.innerHTML += `${moon.name} (${moon.price}) ${dangerIcon} <br/>`;
}

function rollRandomEvent() {
    let eventRng = getRandomInt(100);

    if (eventRng >= 0 && eventRng < 10) {
        let randomMoon = allMoons[getRandomInt(allMoons.length)];
        randomEvent.innerHTML = `<hr class="eventhr">Good news employee!<br/>Ship fuel is on sale due to a newfound deposit located on ${randomMoon.name}!<br/>You may travel to [4] moons of each tier this quota.<hr class="eventhr">`;
        moonsPerCategory = 4;
        generateMoonList = true;
    }
    else if (eventRng >= 10 && eventRng < 19) {
        let randomMoon = allMoons[getRandomInt(allMoons.length)];
        randomEvent.innerHTML = `<hr class="eventhr">Unfortunately, due to a recent policy passed on ${randomMoon.name} regarding the unethical use of bio-fuel The Company will be limiting your transportation budget.<br/>We apologize for any inconvenience.<br/>You may travel to [2] moons of each tier this quota.<hr class="eventhr">`;
        moonsPerCategory = 2;
        generateMoonList = true;
    }
    else if (eventRng === 99) {
        randomEvent.innerHTML = `<hr class="eventhr">Due to your crew's incredible performance in previous quotas, The Company is allowing you to travel between any and all moons this quota.<br/>Your pay will be docked accordingly.<hr class="eventhr">`;
        generateMoonList = false;

        calculating.innerHTML = 'STATUS: Routing complete.';

        submit.classList.remove("noInteract");
        alreadyGenerating = false;
    }
    else {
        randomEvent.innerHTML = ``;
        moonsPerCategory = 3;
        generateMoonList = true;
    }

    if (generateMoonList === true) {
        setTimeout(generateEasyMoons, 1000);
        setTimeout(generateIntermediateMoons, 2000);
        setTimeout(generateHardMoons, 3000);
        setTimeout(generateInsurmountableMoons, 4000);
    }
}

submit.addEventListener('click', function(event) {
    if (alreadyGenerating === true) return;

    alreadyGenerating = true;
    submit.classList.add("noInteract");

    easyMoonResults.style.display = "none";
    intermediateMoonResults.style.display = "none";
    hardMoonResults.style.display = "none";
    insurmountableMoonResults.style.display = "none";
    randomEvent.innerHTML = ``;

    calculating.innerHTML = "STATUS: Awaiting route from Company servers..."

    setTimeout(rollRandomEvent, 1000)
})