const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

const mainNav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    hambutton.classList.toggle("open");
});