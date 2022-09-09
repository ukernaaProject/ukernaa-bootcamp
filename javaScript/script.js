function changeMode(e) 
{
    var body = document.body;
    if (e.innerHTML === `<i class="fas fa-sun"></i>`){
        e.innerHTML = `<i class="fas fa-moon"></i>`;
    }
    else{
        e.innerHTML = `<i class="fas fa-sun"></i>`;
    }
    body.classList.toggle("dark-mode");
}



// -------- onScroll ----------

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.background = "#130047";
    document.getElementById("brand-logo").innerHTML = `<img id="brand" src="./assets/FusionTechClub.svg" alt="Logo">
    <span id="brand-text">Fusion Tech Club</span>`
  } else {
    document.getElementById("navigation").style.background = "transparent";
    document.getElementById("brand-logo").innerHTML = `<img id="brand" src="./assets/UkernaaLogo.svg" alt="Logo">
    <img id="brand-text" src="./assets/ukernaa_text_logo.svg" alt="Logo">`
  }
}


// -------- Accordion --------

const accordionItemHeaders = document.querySelectorAll(".syllabus-item-header")

accordionItemHeaders.forEach(accordionItemHeaders =>{
  accordionItemHeaders.addEventListener("click", event =>{
    accordionItemHeaders.classList.toggle("active")
    const accordonItemBody = accordionItemHeaders.nextElementSibling
    if(accordionItemHeaders.classList.contains('active'))
    {
      accordonItemBody.style.maxHeight = accordonItemBody.scrollHeight + "px"
    }
    else
    {
      accordonItemBody.style.maxHeight = 0
    }
  })
})