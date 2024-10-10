const menuHandle =()=>{

    const humburderImg1 = document.getElementById("humburder-img1");
    const humburderImg2 = document.getElementById("humburder-img2");
    const humberButton = document.getElementById("humberger-menu");
    const ariaExpend= humberButton.getAttribute("aria-expanded");
    console.log(ariaExpend)
     if(ariaExpend == 'false'){
        humberButton.setAttribute('aria-expanded', 'true'); 
         humburderImg1.classList.add("d-none")
         humburderImg2.classList.remove("d-none")  
         document.getElementById("nav-group").classList.add("d-block")           
     }else{
         humberButton.setAttribute('aria-expanded','false');
         humburderImg2.classList.add("d-none")
         humburderImg1.classList.remove("d-none") 
         document.getElementById("nav-group").classList.remove("d-block")  
         }
  


}
