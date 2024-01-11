const modalBtn = document.querySelector('#open-contact');
const modal = document.querySelector('#contact-modal');
const pageContent = document.querySelector('#page-content');
const navbar = document.querySelector('#navbar');

modalBtn.addEventListener('click', e => {
    modal.classList.remove("hidden");
    pageContent.classList.add("blur-lg");
    navbar.classList.add("bg-gray-800")
    navbar.classList.add("text-gray-200")
    e.stopPropagation();
})

window.addEventListener('click', e => {
    if (!modal.contains(e.target) && e.target !== modal) {
        modal.classList.add("hidden");
        pageContent.classList.remove("blur-lg");
        navbar.classList.remove("bg-gray-800")
        navbar.classList.remove("text-gray-200")
    }
})