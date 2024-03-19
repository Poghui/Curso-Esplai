
const lightboxContainer = document.querySelector('#lightboxContainer');
const show = (e) => {
    e.preventDefault();
    lightboxContainer.style.display = 'block';
}
const hide = (e) => {
    e.preventDefault();
    lightboxContainer.style.display = 'none'
}
document.querySelector('.ver').addEventListener('click', show);
document.querySelector('.ocultar').addEventListener('click', hide);