/* "selected car", "selected package", "Total SRP", "Picture of car" */
var carSelectionElement = document.getElementById("car-selection");
var packageSelectionElement = document.getElementById("package-selection");
var totalMSRPElement = document.getElementById("total-msrp");
var carImageElement = document.getElementById("car-image");

/* user input boxes */
var selectedCreditScoreElement = document.getElementById("selected-credit-score");
var selectedCashDownElement = document.getElementById("selected-cash-down");
var selectedTermLength = document.getElementById("selected-term-length");
var estimatedAPRElement = document.getElementById("estimated-apr-display1");
var tradeInValueElement = document.getElementById("trade-in-value");

/* display boxes */
var monthResultElement = document.getElementById("month-result");
var aprResultElement = document.getElementById("apr-result");
var downPaymentResultElement = document.getElementById("down-payment-result");
var financeResultElement = document.getElementById("finance-result");


// car prices
let carPrices = {
    'McLaren P1': 350000,
    'Pagani Huayra': 150000,
    'Audi R8': 100000,
}


// package prices
let packagePrices = {
    'Tech Package': 12000,
    'Sport Package': 12000,
    'Racing Package': 15000,
    'Basic Service Package': 5000,
    'Premium Service Package': 9000,
}


let carImages = {
    'McLaren P1': '../Images/2014-mclaren-p1-1111-charlie-magee-1531410060.jpg',
    'Pagani Huayra': '../Images/Pagani-Huayra-BC-Roadster-02-1.webp',
    'Audi R8': '../Images/2023-audi-r8-v10-gt-rwd.webp',
}


let creditScoreFactor = {
    'Excellent': 0.5,
    'Good': 0.75,
    'Fair': 1,
    'Poor': 1.25,
}


// initial state
states = {
    selectedCar: 'McLaren P1',
    selectedPackage: 'Tech Package',
    msrp: 362000,
    creditScore: 'Excellent',
    cashDown: 2000,
    termLength: 72,
    estimatedAPR: 5,
    tradeInValue: 0
}


// update car selection

const updateCarSelection = (event) => {
    states.selectedCar = event.target.value;
    console.log(states.selectedCar);
    states.msrp = carPrices[states.selectedCar] + packagePrices[states.selectedPackage];
    totalMSRPElement.innerHTML = '$' + states.msrp;
    carImageElement.src = carImages[states.selectedCar];
}


// update package selection

const updatePackageSelection = (event) => {
    states.selectedPackage = event.target.value;
    console.log(states.selectedPackage);
    states.msrp = carPrices[states.selectedCar] + packagePrices[states.selectedPackage];
    totalMSRPElement.innerHTML = '$' + states.msrp;
}

// finance calculations
const calculateMonthlyPayment = () => {
    
    let totalMSRP = states.msrp - states.cashDown;
    totalMSRP = totalMSRP - states.tradeInValue;

    let years = states.termLength / 12;
    let totalInterest = totalMSRP * (states.estimatedAPR / 100) * years;
    let monthlyPayment = (totalMSRP + totalInterest) / states.termLength;

    return monthlyPayment
}


const handleCreditScoreChange = (value) => {

    states.creditScore = value;
    states.estimatedAPR = 10 * creditScoreFactor[states.creditScore];
    estimatedAPRElement.value = states.estimatedAPR + '%';
    aprResultElement.value = states.estimatedAPR + '%';
    let monthlyPayment = Math.round((calculateMonthlyPayment() + Number.EPSILON) * 100) / 100;
    financeResultElement.value = '$' + monthlyPayment;

}

const handleCashDownChange = (value) => {

    states.cashDown = value;
    states.cashDown = states.cashDown.replace('$', '');
    states.cashDown = parseInt(states.cashDown);
    selectedCashDownElement.value = '$' + states.cashDown;
    downPaymentResultElement.value = '$' + states.cashDown;
    let monthlyPayment = Math.round((calculateMonthlyPayment() + Number.EPSILON) * 100) / 100;
    financeResultElement.value = '$' + monthlyPayment;
}

const selectChangeFunctions = {
    'selected-credit-score': handleCreditScoreChange,
    'selected-cash-down': handleCashDownChange,
}

const updateInputs = (event) => {

    eventId = event.target.id;
    eventValue = event.target.value;

    selectChangeFunctions[eventId](eventValue);

}


// add event to select boxes
carSelectionElement.addEventListener('change', updateCarSelection);
packageSelectionElement.addEventListener('change', updatePackageSelection);
selectedCreditScoreElement.addEventListener('change', updateInputs);
selectedCashDownElement.addEventListener('change', updateInputs);


// caculations
