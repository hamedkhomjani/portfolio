"use strict";

var navigationElement = document.querySelector("#navigation");
var worksElement = document.querySelector("#works");
fetch("/assets/data/data.json").then(function (response) {
  return response.json();
}).then(function (data) {
  data.navigations.map(function (navigation) {
    navigationElement.innerHTML = navigationElement.innerHTML + "<a class=\"nav\" href=\"".concat(navigation.href, "\">").concat(navigation.name, "</a>");
  }).join("");
  data.works.map(function (work) {
    worksElement.innerHTML = worksElement.innerHTML + "<div class=\"work\">\n                <div class=\"fore\">\n                    <img class=\"image\" src=\"".concat(work.image.src, "\" alt=\"").concat(work.image.alt, "\">\n                </div>\n                <div class=\"back\">\n                    <h2 class=\"title\">").concat(work.title, "</h2>\n                    <p class=\"description\">").concat(work.description, "</p>\n                </div>\n            </div>");
  }).join("");
});