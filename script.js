function add(){
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    document.getElementById('output').innerText = Number(num1.value) + Number(num2.value);
}

function sub(){
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    document.getElementById('output').innerText = Number(num1.value) - Number(num2.value);
}