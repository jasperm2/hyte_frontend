import '../css/style.css';
import '../css/mobile.css';

// Painoindeksitiedot
const lowBmi = `Olet laiha`;

const normalBmi = `Olet normaali painoinen`;

const highBmi = `Olet ylipainoinen`;


// Haetaan DOM-elementit kerran

const bmiForm = document.querySelector('form');
const bmiElem = document.querySelector('.bmi-score');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const analysis = document.querySelector('.analysis');

// Painoindeksilaskuri
bmiForm.addEventListener('submit', (evt) => {
  console.log('Lasketaan painoindeksi');
  // Estä normaali formin lähettäminen
  evt.preventDefault();
  // Hae formin arvot

  console.log(weightInput.value);
  const weight = Number(weightInput.value);

  console.log(heightInput.value);
  const height = Number(heightInput.value);

  const sum = weight + height;
  console.log(sum);

  resetBMIStyles();
  calculateBMI(weight, height);
});

// Tyylien nollaus
const resetBMIStyles = () => {
  // hae elementit ja poista classList remove tyylit
  analysis.innerHTML = '';
  document.querySelector('.bmi0-19').classList.remove('lowBmi');
  document.querySelector('.bmi19-25').classList.remove('normalBmi');
  document.querySelector('.bmi25-30').classList.remove('highBmi');
};

// BMI:n laskenta ja analyysin päivitys
const calculateBMI = (weight, height) => {
  const bmi = (weight / (height / 100) ** 2).toFixed(1);
  console.log('BMI', bmi);
  bmiElem.textContent = bmi;

  // tee pieni if/else jossa bmin mukaan
  if (bmi < 18.9) {
    console.log('Alipaino');
    document.querySelector('.bmi0-19').classList.add('lowBmi');
    analysis.textContent = lowBmi;
  } else if (bmi < 25) {
    console.log('Normi');
    document.querySelector('.bmi19-25').classList.add('normalBmi');
    analysis.textContent = normalBmi;
  } else {
    console.log('Ylipaino');
    document.querySelector('.bmi25-30').classList.add('highBmi');
    analysis.textContent = highBmi;
  }
};
