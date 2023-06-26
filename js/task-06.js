const ValidatorInput = document.querySelector("#validation-input");

const onInputCheck = ({ target }) => {
  const findLength = parseInt(target.dataset.length);
  const inputLength = target.value.length;

  console.log(findLength);
  console.log(inputLength);

  if (findLength === inputLength) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
};

ValidatorInput.addEventListener("blur", onInputCheck);
