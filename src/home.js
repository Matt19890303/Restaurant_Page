// export function homePage() {
//     const DivContent = document.querySelector('#content')

//     // // background
//     // const background = document.querySelector('div')
//     // background.classList.add('background');

//     // // heading
//     // const heading = document.createElement('h1');
//     // heading.classList.add('header');
//     // heading.textContent = 'Restaurant Name';

    
//     // Button
//     // const homeLinks = document.createElement('button');
//     // homeLinks.textContent = 'Home';
//     // homeLinks.classList.add('header');

//     // const menuLinks = document.createElement('button');
//     // menuLinks.textContent = 'Menu';
//     // menuLinks.classList.add('links');

//     // Footer
//     // const footer = document.createElement('div');


//     // DivContent.appendChild(heading);
//     // DivContent.appendChild(nav);
//     // DivContent.appendChild(homeLinks);
//     // DivContent.appendChild(menuLinks);
//     // DivContent.appendChild(background);

// }



 function createHeader() {
    const nav = document.createElement("nav");
    // const nav = document.querySelector('#content')
    nav.classList.add("links");


    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Restaurant Name';


    const homeButton = document.createElement("button");
    homeButton.classList.add("button");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.classList.add("button");
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("button");
    contactButton.textContent = "Contact";


    nav.appendChild(heading);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}




export function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    // content.appendChild(createMain());
    // content.appendChild(createFooter());
  
  }