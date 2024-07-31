document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const input = document.getElementById('dataInput')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = input.value;

    if (inputValue){
        localStorage.setItem('dataKey', inputValue);
        input.value = '';

        alert('Datos guardados en LocalStorage');
    }
})

console.log(localStorage.getItem('dataKey'));

})