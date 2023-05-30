fetch('nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuDiv = document.getElementById('menu-div');

    menuIcon.classList.toggle('cross');
    menuDiv.classList.toggle('menu-visible');
}



// Get the button element
const backToTopButton = document.getElementById("top");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Use smooth scrolling behavior
  });
}

// Show or hide the button based on scroll position
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});


