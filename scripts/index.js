const navigationElement = document.querySelector("#navigation")
const worksElement = document.querySelector("#works")

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