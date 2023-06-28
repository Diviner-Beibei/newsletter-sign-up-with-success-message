const emailInput = document.querySelector("#email");
const submit = document.querySelector(".submit-btn");
const dismiss = document.querySelector(".dismiss-btn");
const hint = document.querySelector(".error-hint");

const mainContainer = document.querySelector('.main-container');
const successContainer = document.querySelector('.success-container');

const enteredEmail = document.querySelector('#entered-email');

const emailInput_defaultStyle = emailInput.style;

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!validRegex.test(emailInput.value)) {
    emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
    emailInput.style.color = 'hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'hsl(4, 100%, 88%)';
    hint.style.visibility = "visible";
    return;
  }

  mainContainer.style.display = 'none';
  successContainer.style.display = 'flex';

  hint.style.visibility = "hidden";
  emailInput.style = emailInput_defaultStyle;
  // location.reload();
  enteredEmail.textContent = emailInput.value;
  console.log("OK");
});

dismiss.addEventListener('click', function () {
  mainContainer.style.display = 'grid';
  successContainer.style.display = 'none';
  console.log("dismiss");
})

