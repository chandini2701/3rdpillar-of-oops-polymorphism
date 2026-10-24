function showSound(animal) {
  let message = "";

  if (animal === "dog") {
    message = "Dog object → sound() → Dog barks 🐕";
  } else if (animal === "cat") {
    message = "Cat object → sound() → Cat meows 🐈";
  } else if (animal === "cow") {
    message = "Cow object → sound() → Cow moos 🐄";
  }

  document.getElementById("result").textContent = message;
}
