const footer_year_span = document.querySelector("footer span.year");
const date = new Date();

footer_year_span.innerHTML = date.getFullYear();