const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSumbitForm);

function onSumbitForm({ target }) {
  event.preventDefault();
  const email = target.elements.email.value;
  const password = target.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  loginForm.reset();
}
