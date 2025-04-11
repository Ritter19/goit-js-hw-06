const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const requiredLength = Number(input.dataset.length);
  const currentLength = input.value.trim().length;

  if (currentLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
