const menuHandle = () => {
    const humburderImg1 = document.getElementById("humburder-img1");
    const humburderImg2 = document.getElementById("humburder-img2");
    const humberButton = document.getElementById("humberger-menu");
    const sidebar = document.getElementById("sidebar");
    const navGroup = document.getElementById("nav-group");


    const ariaExpanded = humberButton.getAttribute("aria-expanded");

    console.log(ariaExpanded);
    if (ariaExpanded === 'false') {
        humberButton.setAttribute('aria-expanded', 'true');
        sidebar.setAttribute('aria-expanded', 'false'); 
        humburderImg1.classList.add("d-none");
        humburderImg2.classList.remove("d-none");
        navGroup.classList.add("d-block");
       
    } else {
        humberButton.setAttribute('aria-expanded', 'false');
        sidebar.setAttribute('aria-expanded', 'true'); 
        humburderImg2.classList.add("d-none");
        humburderImg1.classList.remove("d-none");
        navGroup.classList.remove("d-block");
      
    }
}


function appendButton() {
    const button = document.createElement("button");
    button.setAttribute("onclick", "menuHandle()");
    button.setAttribute("id", "humberger-menu");
    button.setAttribute("aria-expanded", "false");
    button.className = "btn p-2 border mb-2";

    const img = document.createElement("img");
    img.setAttribute("id", "humburder-img2");
    img.className = "d-none";
    img.setAttribute("width", "30px");
    img.setAttribute("src", "assets/img/close-clean.svg");
    img.setAttribute("alt", "");

    button.appendChild(img);

    const overlay = document.getElementById("overlay");
    overlay.appendChild(button);
}

appendButton();



