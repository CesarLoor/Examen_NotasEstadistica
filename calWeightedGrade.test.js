const calcWeightedGrade = require('./src/utils/calcWeightedGrade');
const percentile = require('./src/utils/percentile');



console.log('Pruebas de calcWeightedGrade');
try {
    const result1 = calcWeightedGrade([
        { score: 80, weight: 0.4 },
        { score: 90, weight: 0.6 }
    ]);
    console.log('calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) =', result1);
    console.log('Esperado: 86.00, Obtenido:', result1, result1 === 86.00 ? 'paso' : 'no paso');
} catch (error) {
    console.log('Error:', error.message);
}


console.log('\nPruebas de validación');
try {
    calcWeightedGrade([{ score: 80, weight: 0.5 }]);
    console.log('Debería lanzar error por suma de pesos incorrecta');
} catch (error) {
    console.log('Error esperado:', error.message);
}

try {
    percentile(50, []);
    console.log('Debería lanzar error por arreglo vacío');
} catch (error) {
    console.log('Error esperado:', error.message);
}
