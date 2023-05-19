let valores = new Array(parseInt(prompt('Ingrese cantidad de valores:')));

for (let i = 0; i < valores.length; i++) {
    valores[i] = parseInt(prompt(`Ingrese número ${i + 1}`));
}


let primeravezmayor = true;
let mayorvalor;

for (let i = 0; i < valores.length; i++) {
    if (primeravezmayor || mayorvalor < valores[i]) {
        mayorvalor = valores[i];
    }
    primeravezmayor = false;
}
document.write(`El mayor valor es: ${mayorvalor}`);