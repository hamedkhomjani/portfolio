const navigationElement = document.querySelector("#navigation")
const worksElement = document.querySelector("#works")

//vvvvvvvvvvvvvvvvvvvv Jump button script vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
//Get the button
var mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


fetch("/assets/data/data.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        data.navigations.map((navigation) => {
            navigationElement.innerHTML = navigationElement.innerHTML + `<a class="nav" href="${navigation.href}">${navigation.name}</a>`

        }).join("")

        data.works.map((work) => {
            worksElement.innerHTML = worksElement.innerHTML + `<div class="work">
                <div class="fore">
                    <img class="image" src="${work.image.src}" alt="${work.image.alt}">
                </div>
                <div class="back">
                    <h2 class="title">${work.title}</h2>
                    <p class="description">${work.description}</p>
                </div>
            </div>`

        }).join("")
    });