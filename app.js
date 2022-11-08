const fullName = document.querySelector(".name");
const inputName = document.querySelector(".input-name");

inputName.addEventListener("keyup", function () {
  fullName.innerHTML = inputName.value;
});

const ccNum = document.querySelectorAll(".box span");
const inputNum = document.querySelector(".input-number");

let totalNum = [...ccNum];

inputNum.addEventListener("keyup", function () {
  let numArr = [inputNum.value].toString();
  let pattern = " ";
  let none = "";
  let trimmedVersion = numArr.replaceAll(pattern, none);
  let array = [trimmedVersion];

  for (let num = 0; num < array.length; num++) {
    let forNum = [...array[num]];

    for (let i = 0; i < forNum.length; i++) {
      totalNum[i].innerHTML = forNum[i];
    }
  }
});

const month = document.querySelector(".month");
const inputMonth = document.querySelector(".input-month");

inputMonth.addEventListener("keyup", function () {
  month.innerHTML = inputMonth.value;
});

const year = document.querySelector(".year");
const inputYear = document.querySelector(".input-year");

inputYear.addEventListener("keyup", function () {
  year.innerHTML = inputYear.value;
});

const cvv = document.querySelector(".cvv");
const inputCvv = document.querySelector(".input-cvv");

inputCvv.addEventListener("keyup", function () {
  cvv.innerHTML = inputCvv.value;
});

const btnForm = document.querySelector(".btn-form");
const btnCont = document.querySelector(".btn-cont");
const form = document.querySelector(".form");
const thankYou = document.querySelector(".thank-you");
const thankHeading = document.querySelector(".thank-heading");
const desc = document.querySelector(".desc");

btnForm.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "none";
  thankYou.style.display = "block";
  if (inputNum.value === "") {
    thankHeading.innerHTML = "oops";
    desc.innerHTML = "Please Enter valid number";
  }
  if (inputNum.value != "") {
    form.style.display = "none";
    thankYou.style.display = "block";
  }
});

thankYou.addEventListener("click", function () {
  thankYou.style.display = "none";
  form.style.display = "block";
  let noValue = "";
  inputName.value = noValue;
  inputNum.value = noValue;
  inputMonth.value = noValue;
  inputYear.value = noValue;
  inputCvv.value = noValue;
});
