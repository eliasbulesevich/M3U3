const distancia = parseInt(prompt('Ingrese la distancia: '));

if (distancia >= 0 && distancia <= 1000) {
    document.write('recorrer la distancia a pie');
} else if (distancia > 1000 && distancia <= 10000) {
    document.write('recorrer la distancia en bicicleta');
} else if (distancia > 10000 && distancia <= 30000) {
    document.write('recorrer la distancia en colectivo');
} else if (distancia > 30000 && distancia <= 100000) {
    document.write('recorrer la distancia en auto');
} else {
    document.write('recorrer la distancia en avión');
}