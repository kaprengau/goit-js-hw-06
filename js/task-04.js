const value = document.querySelector("#value");
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

const changeValue = ({ target }) => {
  const getAttribute = target.getAttribute("data-action");

//   console.log(getAttribute);

  if (getAttribute === "increment") {
    counterValue += 1;
  } else {
    counterValue -= 1;
  }
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", changeValue);

incrementBtn.addEventListener("click", changeValue);
