function calculateTotal() {
    let total = 0;
    const options = document.getElementsByName('bundle');
    
    
    options.forEach(option => {
        let selectionDiv = option.parentElement.querySelector('.selection');
        let optionDiv = option.parentElement;
        if (selectionDiv) {
            selectionDiv.style.display = option.checked ? 'block' : 'none';
        }
        if (option.checked) {
            total = parseInt(option.value);
            optionDiv.classList.add("selected");
        }
        else {
            optionDiv.classList.remove("selected"); 
        }
    });
    
    document.getElementById('amount-total').textContent = `DKK ${total}.00`;
}

document.addEventListener('DOMContentLoaded', () => {
    calculateTotal();
});

function cart() {
    alert("Items added to cart successfully!");
}
