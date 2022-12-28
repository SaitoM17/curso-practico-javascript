for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log('Ciclo For con un array')

const array = [0,1,2,3,4,5,6,7,8,9,10,11];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
console.log();
console.log('Ciclo For usando Objeto');

const obj = {
    nombre: 'said',
    apellido: 'mariano',
    edad: 21,
    mascotas: 5,
};
const lista = Object.values(obj);
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

const listanueva = [1,2,3,4,5];
const listaNombres = ['said','ximena','sandra','cris','brisa'];
for(let i=0; i <listaNombres.length; i++){
    console.log(listaNombres[i])
}
console.log('Lista recorrida con un forEach')
listanueva.forEach((index, numero) => {
    console.log(`Index: ` + index + ` Valor: ` + numero)
});

// Aprender a más 