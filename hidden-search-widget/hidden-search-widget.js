const $ = document.querySelector.bind(document);

const search = $('.search');
const searchInput = $('.search-input');
const icon = $('.search-icon');

icon.onclick = () => {
    search.classList.toggle('active');
    searchInput.focus();
}