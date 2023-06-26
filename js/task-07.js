const fontSizeControl = document.querySelector("#font-size-control");

const textSpan = document.querySelector("#text");

const changeOfstyle = ({ target }) => {
  const fontSize = target.value + "px";
  textSpan.style.fontSize = fontSize;
};

fontSizeControl.addEventListener("input", changeOfstyle);
