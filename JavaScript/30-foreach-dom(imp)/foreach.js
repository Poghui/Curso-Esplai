const calculateCost = () => {
    let cost = 300
    document.querySelectorAll('[type = radio]:checked').forEach(radio => {
        cost += parseInt(radio.value);
    })
    document.querySelector('.result').textContent = cost;
}

calculateCost();

document.querySelectorAll('[type=radio]').forEach((radio2) => addEventListener('click', () => {
    calculateCost();
}))

