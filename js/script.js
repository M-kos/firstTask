const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', Add);

function Add() {
    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);

    if (isNaN(val1) || isNaN(val1)) 
        return alert('Введите число!');

    //Fix неточности вычисления
    alert(+(val1 + val2).toFixed(15));
}
