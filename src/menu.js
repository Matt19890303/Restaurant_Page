

// Menu

function mainBody() {

  const mainBody = document.createElement("main");
  mainBody.classList.add("mainBody");

  mainBody.appendChild(createMenu());

  return mainBody;
}



// Menu
function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Shakes",
      "Definition about Milkshakes"
    )
  );


  menu.appendChild(
    createMenuItem(
      "Coffees",
      "Definition about Coffees"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Burger",
      "Definition about Burger"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Taco",
      "Definition about Taco"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pizza",
      "Definition about Pizza"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Wrap",
      "Definition about Wrap"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Macarons",
      "Definition about Macarons"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Apple-Pie",
      "Definition about Apple-Pie"
    )
  );

  return menu;
}


function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/food/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}



function loadMenu() {
  const content = document.getElementById("main");
  main.textContent = "";
  content.appendChild(mainBody());
}


export default loadMenu;





