// $() <- Targeting part
// .method <- Action
// methods (1 or 2 parameters)

// Empty param => Read the value
// Set param => Set the value

// $(document).ready(() => {
//   // ...
// });
const generateRandomColor = () => {
  // RGB => 8bit space => 0-255 (luminance level)
  // (#FF FF FF)
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const handleClick = (event) => {
  let title = "";
  if (event.target.value === "best") {
    title = "Bravo you selected the best po ta to.";
  } else {
    title = "UNACCEPTABLEEEE";
  }

  const $h1 = $("<h1>"); // Create an h1
  $h1.text(title);
  $h1.css("background", "#BADA55");
  $h1.css("color", "#B0B");
  // $h1.on('click', () => ...)

  $(".result").empty();
  $(".result").append($h1);
};

$(() => {
  $("body").css("background", generateRandomColor());

  $("body").click(() => {
    console.log("Hello??");
    $("body").css("background", generateRandomColor());
  });

  $("h1").text("jQuery is magical!");

  $("button").on("click", handleClick);
  // $("button").click(handleClick)

  $(".result").append("<h1>Please select an answer!</h1>");
  $(".result h1").on("click", () => console.log("clicked!"));
});
