// constants and varibales declarations
const form = document.querySelector("form");
const inputName = document.getElementById("name");
const errorName = document.querySelector(".error-name");
const nameText = document.querySelector(".card-owner-name");
const inputCard = document.getElementById("card-number");
const errorCard = document.querySelector(".error-card");
const cardText = document.querySelector(".card-number");
const inputMonth = document.getElementById("month");
const errorMonth = document.querySelector(".error-month");
const monthText = document.querySelector(".month-text");
const inputYear = document.getElementById("year");
const errorYear = document.querySelector(".error-year");
const yearText = document.querySelector(".year-text");
const inputCvc = document.getElementById("cvc");
const errorCvc = document.querySelector(".error-cvc");
const cvcText = document.querySelector(".back-cvc");
const thanks = document.querySelector(".thanks")
const btnContinue = document.querySelector('.btn-continue')

var validName = false
var validCard = false
var validMonth = false
var validYear = false
var validCvc = false


// form submit
form.onsubmit = (e) => {
  e.preventDefault();
  // name validation
  var regexName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  var testName = regexName.test(inputName.value);
  if (testName == true) {
    inputName.classList.remove("error-input");
    errorName.style.display = "none";    
    validName = true
  } else {
    inputName.classList.add("error-input");
    errorName.style.display = "block";
  }
  // card number validation
  var regexCard = /(?:\d{4} ){3}\d{4}/;
  var testCard = regexCard.test(inputCard.value);
  if (testCard == true) {
    inputCard.classList.remove("error-input");
    errorCard.style.display = "none";   
    validCard = true
  } else {
    inputCard.classList.add("error-input");
    errorCard.style.display = "block";
  }
  // month validation
  var regexMonth = /^(0[1-9]|1[0-2])$/;
  var testMonth = regexMonth.test(inputMonth.value);
  if (inputMonth.value == "") {
    inputMonth.classList.add("error-input");
    errorMonth.innerHTML = "Can't be blank";
    errorMonth.style.display = "block";
  } else if (testMonth == false) {
    inputMonth.classList.add("error-input");
    errorMonth.innerHTML = "Wrong format";
    errorMonth.style.display = "block";
  } else if (testMonth == true) {
    inputMonth.classList.remove("error-input");
    errorMonth.style.display = "none";    
    validMonth = true
  }
  // year validation
  if (inputYear.value == "") {
    inputYear.classList.add("error-input");
    errorYear.innerHTML = "Can't be blank";
    errorYear.style.display = "block";
  } else if (inputYear.value < 25 || inputYear.value > 28) {
    inputYear.classList.add("error-input");
    errorYear.innerHTML = "Wrong format";
    errorYear.style.display = "block";
  } else if (inputYear.value >= 25 && inputYear.value <= 28) {
    inputYear.classList.remove("error-input");
    errorYear.style.display = "none";  
    validYear = true
  }
  // cvc validation
  var regexCvc = /^[0-9]{3}$/;
  var testCvc = regexCvc.test(inputCvc.value);
  if (inputCvc.value == "") {
    inputCvc.classList.add("error-input");
    errorCvc.innerHTML = "Can't be blank";
    errorCvc.style.display = "block";
  } else if (testCvc == false) {
    inputCvc.classList.add("error-input");
    errorCvc.innerHTML = "Wrong format";
    errorCvc.style.display = "block";
  } else if (testCvc == true) {
    inputCvc.classList.remove("error-input");
    errorCvc.style.display = "none";    
    validCvc = true
  }
  // if all inputs are valid
  if(validName && validCard && validMonth && validYear && validCvc) {
    nameText.innerHTML = inputName.value;
    cardText.innerHTML = inputCard.value;
    monthText.innerHTML = inputMonth.value;
    yearText.innerHTML = inputYear.value;
    cvcText.innerHTML = inputCvc.value;
    setTimeout(() => {
      form.style.display = "none"
      thanks.style.display = "block"
    }, 300)
  }
};

// reset form
btnContinue.onclick = () => {
  inputName.value = ""
  inputCard.value = ""
  inputMonth.value = ""
  inputYear.value = ""
  inputCvc.value = ""
  cardText.innerHTML = "0000 0000 0000 0000"
  nameText.innerHTML = "Jane Appleseed"
  monthText.innerHTML = "00"
  yearText.innerHTML = "00"
  cvcText.innerHTML = "000"
  setTimeout(() => {
    form.style.display = "block"
    thanks.style.display = "none"
  }, 300)
}
