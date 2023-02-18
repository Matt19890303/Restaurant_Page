
// Body

function mainBody() {

    const mainBody = document.createElement("main");
    mainBody.classList.add("mainBody");
  
    mainBody.appendChild(createContact());
  
    return mainBody;
  }
  
  
  function createContact() {
  
    // Embedded Map
    const contact = document.createElement("div");
    contact.classList.add("map-container");
  
    const emededMap = document.createElement("iframe");
    emededMap.src = "https://www.google.com/maps/d/u/0/embed?mid=1h_7CW_eFqWsFXEcDzev9L2Bi--t7FkM&ehbc=2E312F";
    emededMap.alt = "Embeded Map";
  
    const mapHeading = document.createElement("h2");
    mapHeading.textContent = "Embeded Map Store Locator";
    mapHeading.classList.add("map-container-heading");
  
    // Contact number
    const numbers = document.createElement("div");
    numbers.classList.add("numbers");

    const icon = document.createElement("p");
    icon.textContent = '📞';
    icon.classList.add("icon");

    const contactNumbers = document.createElement("p");
    contactNumbers.textContent = ' 086 000 7728';
    // contactNumbers.classList.add("contact-numbers");

    numbers.appendChild(icon);
    numbers.appendChild(contactNumbers);


    contact.appendChild(mapHeading);
    contact.appendChild(emededMap);
    contact.appendChild(numbers);
  
    return contact;
  }


  
    function loadContact() {
      const content = document.getElementById("main");
      main.textContent = "";
      content.appendChild(mainBody());
    }
  
  
    export default loadContact;