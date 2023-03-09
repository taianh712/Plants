hamburger = document.querySelector (".menu_mobile");
hamburger.onclick = function(){
    navbar =document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

const accordion_headers = document.querySelectorAll(".accordion_header");
accordion_headers.forEach(accordion_header => {
    accordion_header.addEventListener("click", event => {
        accordion_header.classList.toggle("active");
    })
})

const accordion_contacts = document.querySelectorAll(".accordion_contact");
accordion_contacts.forEach(accordion_contact => {
    accordion_contact.addEventListener("click", event => {
        accordion_contact.classList.toggle("active");
    })
})