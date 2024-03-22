const alltr = document.querySelectorAll('tr');
alltr.forEach(tr => {
    tr.addEventListener('click', () => {
        alltr.forEach((tr) => {
            tr.style.backgroundColor = 'transparent';

        })
        tr.style.backgroundColor = 'yellow';
        tr.querySelector('input').checked = false;
    })
})