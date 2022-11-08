const handleClick = (event) => {
  // const title = document.querySelector("main h2");
  // title.style.background = "#B0B";
  // title.style.color = "#BADA55";

  // if (event.target.value === "best") {
  //   title.innerText = "Bravo you selected the best po ta to.";
  // } else {
  //   title.innerText = "UNACCEPTABLEEEE";
  // }

  let title = "";
  if (event.target.value === "best") {
    title = "Bravo you selected the best po ta to.";
  } else {
    title = "UNACCEPTABLEEEE";
  }
  const result = document.createElement("h1");
  const content = document.createTextNode(title);
  result.appendChild(content);
  result.style.background = "#B0B";
  result.style.color = "#BADA55";

  document.querySelector(".result").appendChild(result);
  // let fontSize = 16;
  // setInterval(() => {
  //   title.style.fontSize = `${fontSize}px`;
  //   fontSize += 2;
  // }, 1000);

  setTimeout(() => {
    document.querySelector(".result").innerHTML = "";
  }, 2000);
};

document.addEventListener("DOMContentLoaded", function (event) {
  // const bestButton = document.getElementById("best");
  // bestButton.addEventListener("click", handleClick);

  const buttons = document.querySelectorAll(".quiz ul li button");

  for (const button of buttons) {
    button.addEventListener("click", handleClick);
  }
});

// app.get("/bob", (req,res) => {

// })
