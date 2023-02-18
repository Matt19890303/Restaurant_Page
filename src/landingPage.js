import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";




// Header
function createHeader() {
    const nav = document.createElement("nav");
    nav.classList.add("links");


    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Restaurant Name';


    const homeButton = document.createElement("button");
    homeButton.classList.add("loadPageButtonbutton");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", function () {
      setActiveButton(homeButton);
      loadHome();
      });

    
    const menuButton = document.createElement("button");
    menuButton.classList.add("loadPageButtonbutton");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", function () {
      setActiveButton(menuButton);
      loadMenu();
      });


    const contactButton = document.createElement("button");
    contactButton.classList.add("loadPageButtonbutton");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", function () {
      setActiveButton(contactButton);
      loadContact();
      });


    nav.appendChild(heading);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

// Body

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".loadPageButtonbutton");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });

    button.classList.add("active");
  }

 
  
function createMain() {
    const main = document.createElement("main");
    main.classList.add("mainBody");
    // replaces the body that is created in a main element with the button clickedand loads the 'loadHome'/'loadMeu'
    main.setAttribute("id", "main");
    return main;
  }


// Footer
function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer-container");
  
    const footerText = document.createElement("a");
    footerText.textContent = "Copyright © 2023 MattFourie ";
    footerText.classList.add("footer");
  
    // Github image as a link to Github
    const footerLink = document.createElement('a');
    // footerLink.href = "https://github.com/Matt19890303/Restaurant_Page";
    footerLink.setAttribute('href', 'https://github.com/Matt19890303/Restaurant_Page');
  
    const footerImage = document.createElement('img');
    footerImage.src = "images/social_github_icon.png";
    footerImage.classList.add("github-pic");
  
    footerLink.appendChild(footerImage);
  
    footer.appendChild(footerLink);
    footer.appendChild(footerText);
    footer.appendChild(footerImage);
  
    return footer;
  }



export function loadLandingPage() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
  }


  // export default loadLandingPage;