const navigationElement = document.querySelector("#navigation")
const worksElement = document.querySelector("#works")
const jumptotopbtnElement = document.querySelector('#jumptotopbtn')
const aboutElement = document.querySelector('#about')


const scrollHandler = (event) => {
    if (event.target.scrollingElement.scrollTop <= 400) {
        jumptotopbtnElement.style.display = "none"
    } else {
        jumptotopbtnElement.style.display = "block"
    }
}

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

        aboutElement.innerHTML = `
            <h1 class="header">${data.about.title}</h1>
            <p class="paragraph">${data.about.paragraph}</p>
            <img src="/assets/images/about-back.gif" class="aboutimg">
        `

    });