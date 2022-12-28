const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result');

// forma 1 de escuchar eventos

// function btnOnClick(){
//     const suma = +input1.value + +input2.value;
//     pResult.innerText = `Resultado: ` +  suma;
// }

// btn.addEventListener('click',btnOnClick)

// forma 2 de escuchar eventos

function sumaOnClick(event){
    event.preventDefault()
    const suma = +input1.value + +input2.value;
    pResult.innerText = `Resultado: ` +  suma;
}

form.addEventListener('submit',sumaOnClick)