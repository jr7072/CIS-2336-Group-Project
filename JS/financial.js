/* "selected car", "selected package", "Total SRP", "Picture of car" */
var carSelectionElement = document.getElementById("car-selection");
var packageSelectionElement = document.getElementById("package-selection");
var totalMSRPElement = document.getElementById("total-msrp");
var d = document.getElementById("car-image");

/* user input boxes */
var selectedCreditScoreElement = document.getElementById("selected-credit-score");
var selectedCashDowmElement = document.getElementById("selected-cash-down");
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
    'Tech Package': 1000,
    'Sport Package': 1000,
    'Racing Package': 1000,
    'Basic Service Package': 1000,
    'Premium Service Package': 1000,
}