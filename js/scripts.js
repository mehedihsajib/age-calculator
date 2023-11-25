"use strict";

const calculatorForm = document.getElementById("calculatorForm");
const errorMessage = document.querySelector(".error-msg");
const inputs = document.querySelectorAll(".form-item input");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

let isValid = true;

function showError(input, errorMessage) {
  let errorElement = document.querySelector(`[data-input="${input.id}-error"]`);
  if (errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.classList.add("show");
  } else {
    errorElement.classList.remove("show");
  }
}

function validateInputFields() {
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let errorMessage = "";
    let value = input.value.trim();
    let currentYear = new Date().getFullYear();

    if (value === "") {
      errorMessage = "This field is required";
      input.closest(".form-item").classList.add("has-error");
      isValid = false;
    } else {
      input.closest(".form-item").classList.remove("has-error");
      if (input.id === "day" && (value < 1 || value > 31)) {
        errorMessage = "Must be a valid day";
        let test = input.closest(".form-item");
        input.closest(".form-item").classList.add("has-error");
        console.log(test);
        isValid = false;
      } else if (input.id === "month" && (value < 1 || value > 12)) {
        errorMessage = "Must be a valid month";
        input.closest(".form-item").classList.add("has-error");

        isValid = false;
      } else if (input.id === "year" && value > currentYear) {
        errorMessage = "Must be in the future";
        input.closest(".form-item").classList.add("has-error");
        isValid = false;
      }
    }
    showError(input, errorMessage);
  }
}

function calculateAge() {
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const day = parseInt(dayInput.value);
  // Months are zero-indexed in JavaScript
  const month = parseInt(monthInput.value) - 1;
  const year = parseInt(yearInput.value);

  // Create a Date object for the birthdate
  const birthDate = new Date(year, month, day);

  // Get the current date
  const today = new Date();

  // Calculate the age
  let ageInMilliseconds = today - birthDate;
  let ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );

  // Calculate months and days
  let remainingMilliseconds =
    ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
  let ageInMonths = Math.floor(
    remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
  );
  let ageInDays = Math.floor(
    (remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) /
      (24 * 60 * 60 * 1000)
  );

  document.getElementById("setYears").textContent = ageInYears;
  document.getElementById("setMonths").textContent = ageInMonths;
  document.getElementById("setDays").textContent = ageInDays;
}

function handleSubmit(e) {
  e.preventDefault();
  validateInputFields();

  if (isValid) {
    calculateAge();
    calculatorForm.reset();
  }
}

calculatorForm.addEventListener("submit", handleSubmit);
