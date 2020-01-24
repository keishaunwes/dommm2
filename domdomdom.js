document.addEventListener("DOMContentLoaded", function() {
  colors = ["pink", "yellow", "red", "blue", "green", "gray"];

  let clicked = 1;

  let button = document.createElement("button");
  btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);
  divCon = document.createElement("div");
  divCon.className = "container";
  document.body.appendChild(divCon);

  button.addEventListener("click", function() {
    let div = document.createElement("div");

    div.className = "divbaby";
    div.id = clicked;
    // div.appendChild(h1)
    divCon.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.color = "white";

    div.addEventListener("click", function() {
      div.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });

    div.addEventListener("mouseover", function() {
      div.innerText = div.id;
    });

    div.addEventListener("mouseout", function() {
      div.innerText = "";
    });

    clicked++;

    div.addEventListener("dblclick", function() {
      let nextDivID = parseInt(div.id, 10);

      if (nextDivID % 2 == 0) {
        let itemToRemove = document.getElementById(nextDivID + 1);

        if (document.body.contains(itemToRemove)) {
          divCon.removeChild(itemToRemove);
        } else {
          alert("element does not exist");
        }
      } else {
        let itemToRemove = document.getElementById(nextDivID - 1);

        if (document.body.contains(itemToRemove)) {
          divCon.removeChild(itemToRemove);
        } else {
          alert("element does not exist");
        }
      }
    });
  });
});
