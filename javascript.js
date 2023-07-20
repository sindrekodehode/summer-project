// Making cards visible by clicking planets

const theSun = document.getElementById("sun-img");
const mercury = document.getElementById("merc-img");
const venus = document.getElementById("ven-img");
const earth = document.getElementById("earth-img");
const moon = document.getElementById("moon-img");
const mars = document.getElementById("mars-img");
const jupiter = document.getElementById("jup-img");
const saturn = document.getElementById("sat-img");
const uranus = document.getElementById("ura-img");
const neptune = document.getElementById("nep-img");
const pluto = document.getElementById("plu-img");

theSun.addEventListener("click", (event) => {
  hideCards();
  cardFocus("sun-card");
});

mercury.addEventListener("click", (event) => {
  hideCards();
  cardFocus("merc-card");
});

venus.addEventListener("click", (event) => {
  hideCards();
  cardFocus("ven-card");
});

earth.addEventListener("click", (event) => {
  hideCards();
  cardFocus("earth-card");
});

moon.addEventListener("click", (event) => {
  hideCards();
  cardFocus("moon-card");
});

mars.addEventListener("click", (event) => {
  hideCards();
  cardFocus("mars-card");
});

jupiter.addEventListener("click", (event) => {
  hideCards();
  cardFocus("jup-card");
});

saturn.addEventListener("click", (event) => {
  hideCards();
  cardFocus("sat-card");
});

uranus.addEventListener("click", (event) => {
  hideCards();
  cardFocus("ura-card");
});

neptune.addEventListener("click", (event) => {
  hideCards();
  cardFocus("nep-card");
});

pluto.addEventListener("click", (event) => {
  hideCards();
  cardFocus("pluto-card");
});

function cardFocus(id) {
  let card = document.getElementById(id);
  if (card.style.opacity == 0) {
    card.style.opacity = 1;
    card.style.zIndex = 1;
  } else card.style.opacity = 0;
}

function hideCards() {
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.opacity = 0;
    cards[i].style.zIndex = 0;
  }
}

// Making input show weight on planet

const sunWeight = 27.01;
const mercWeight = 0.38;
const venWeight = 0.91;
const earthWeight = 1;
const moonWeight = 0.166;
const marsWeight = 0.38;
const jupWeight = 2.34;
const satWeight = 1.06;
const uraWeight = 0.92;
const nepWeight = 1.19;
const plutoWeight = 0.06;

const sunInputBtn = document.getElementById("sun-card-btn");
sunInputBtn.addEventListener("click", (event) => {
  weightCalc("sun-input-value", 27.01, "sun-weight");
});

const mercInputBtn = document.getElementById("merc-card-btn");
mercInputBtn.addEventListener("click", (event) => {
  weightCalc("merc-input-value", 0.38, "merc-weight");
});

const venInputBtn = document.getElementById("ven-card-btn");
venInputBtn.addEventListener("click", (event) => {
  weightCalc("ven-input-value", 0.91, "ven-weight");
});

const earthInputBtn = document.getElementById("earth-card-btn");
earthInputBtn.addEventListener("click", (event) => {
  weightCalc("earth-input-value", 1, "earth-weight");
});

const moonInputBtn = document.getElementById("moon-card-btn");
moonInputBtn.addEventListener("click", (event) => {
  weightCalc("moon-input-value", 0.166, "moon-weight");
});

const marsInputBtn = document.getElementById("mars-card-btn");
marsInputBtn.addEventListener("click", (event) => {
  weightCalc("mars-input-value", 0.38, "mars-weight");
});

const jupInputBtn = document.getElementById("jup-card-btn");
jupInputBtn.addEventListener("click", (event) => {
  weightCalc("jup-input-value", 2.34, "jup-weight");
});

const satInputBtn = document.getElementById("sat-card-btn");
satInputBtn.addEventListener("click", (event) => {
  weightCalc("sat-input-value", 1.06, "sat-weight");
});

const uraInputBtn = document.getElementById("ura-card-btn");
uraInputBtn.addEventListener("click", (event) => {
  weightCalc("ura-input-value", 0.92, "ura-weight");
});

const nepInputBtn = document.getElementById("nep-card-btn");
nepInputBtn.addEventListener("click", (event) => {
  weightCalc("nep-input-value", 1.19, "nep-weight");
});

const plutoInputBtn = document.getElementById("pluto-card-btn");
plutoInputBtn.addEventListener("click", (event) => {
  weightCalc("pluto-input-value", 0.06, "pluto-weight");
});

function weightCalc(id, modifier, span) {
  let inputValue = parseInt(document.getElementById(id).value);
  let weightModifier = modifier;
  let output = document.getElementById(span);
  output.innerText = (inputValue * weightModifier).toFixed(2);
}
