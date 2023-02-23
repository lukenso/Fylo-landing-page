const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    emailInput.style.borderColor = "#EF4877";
    emailError.style.display = "block";
  } else {
    emailInput.style.borderColor = "";
    emailError.style.display = "none";
  }
});
