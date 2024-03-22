const filterThings = (e) => {
    const link = e.target;
    let thingToFilter = '';
    if (link.classList.contains('yellow')) {
        thingToFilter = 'yellow';
    }
    else if (link.classList.contains('orange')) {
        thingToFilter = 'orange';
    }
    else if (link.classList.contains('red')) {
        thingToFilter = 'red';
    }
    else {
        thingToFilter = 'all';
    }
}
document.querySelectorAll('.box').forEach(box => {
    if (box.classList.contains(thingToFilter) || thingToFilter === 'all') {
        box.classList.remove('.disabled')
    }
    else {
        box.classList.add('.disabled')
    }
})
document.querySelectorAll('.link a').forEach(a => {
    a.addEventListener('click', filterThings);
})