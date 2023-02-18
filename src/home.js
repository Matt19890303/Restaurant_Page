
// Body

function mainBody() {

  const mainBody = document.createElement("main");
  mainBody.classList.add("mainBody");

  mainBody.appendChild(homeBody());

  return mainBody;
}


function homeBody() {

  const home = document.createElement("div");
  home.classList.add("text-container");

  const foodImage = document.createElement("img");
  foodImage.src = "images/foodphoto.jpg";
  foodImage.alt = "Food on a plate";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = "Come and enjoy and amazing meal.";
  paragraph1.classList.add("text");

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "And share it with friends.";
  paragraph2.classList.add("text");


  home.appendChild(paragraph1);
  home.appendChild(foodImage);
  home.appendChild(paragraph2);

  return home;
}



  function loadHome() {
    const content = document.getElementById("main");
    main.textContent = "";
    content.appendChild(mainBody());
  }


  export default loadHome;