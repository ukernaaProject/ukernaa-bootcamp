function changeMode() 
{
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Scroll To Top

const btnScrollToTop = document.querySelectorAll('#btn-scroll-to-top');


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        btnScrollToTop.classList.add("active")
    } else {
        btnScrollToTop.classList.remove("active")
    }
})