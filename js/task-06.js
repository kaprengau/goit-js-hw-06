const ValidatorInput = document.querySelector("#validation-input");

const onInputCheck = ({ target: { value, classList, dataset } }) => {
  const findLength = parseInt(dataset.length);
  const inputLength = value.length;

  console.log(findLength);
  console.log(inputLength);

  if (findLength === inputLength) {
    classList.remove("invalid");
    classList.add("valid");
  } else {
    classList.add("invalid");
    classList.remove("valid");
  }
};

ValidatorInput.addEventListener("blur", onInputCheck);
