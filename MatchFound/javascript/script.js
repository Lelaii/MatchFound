const showFormButton = document.getElementById('showFormButton');
const addLostItem = document.getElementById('addLostItem');

showFormButton.addEventListener('click', function() {
    if (addLostItem.style.display === 'none') {
        addLostItem.style.display = 'block';
    } else {
        addLostItem.style.display = 'none';
    }
});