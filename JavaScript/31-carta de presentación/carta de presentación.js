const txtsum = () => {
    let txt = ' '
    document.querySelectorAll('[type = radio]:checked').forEach(radio => {
        txt += radio.closest('p').textContent;
    })
    document.querySelector('.result').textContent = txt;
}

txtsum();

document.querySelectorAll('[type=radio]').forEach((radio2) => addEventListener('click', () => {
    txtsum();
}))