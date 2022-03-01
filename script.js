const email = document.getElementById("mail");
const emailError = document.getElementById("error");
const searchBox = document.getElementById("search");
const iconError = document.getElementById("icon-error");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    searchBox.className = "search-box";
    iconError.className = "hide";
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please provide a valid email.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
  searchBox.className = "search-box invalid";
  iconError.className = "show-error-icon";
}
