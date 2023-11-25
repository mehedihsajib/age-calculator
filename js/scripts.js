"use strict";

let calculatorForm = document.getElementById("calculatorForm");
let errorMessage = document.querySelector(".error-msg");
let inputs = document.querySelectorAll(".form-item input");

function showError(input, errorMessage) {
  let errorElement = document.querySelector(`[data-input="${input.id}-error"]`);
  if (errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.classList.add("show");
  } else {
    errorElement.classList.remove("show");
  }
}

function calculateAge(e) {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let errorMessage = "";

    if (input.value.trim() === "") {
      errorMessage = "This field is required";
    } else {
      if (
        input.id === "day" &&
        (input.value.trim() < 1 || input.value.trim() > 31)
      ) {
        errorMessage = "Day is not valid";
      } else if (
        input.id === "month" &&
        (input.value.trim() < 1 || input.value.trim() > 12)
      ) {
        errorMessage = "Month is not valid";
      } else if (input.id === "year" && input.value.trim() > 2023) {
        errorMessage = "Invalid year";
      }
    }

    showError(input, errorMessage);
  }
}

calculatorForm.addEventListener("submit", calculateAge);
