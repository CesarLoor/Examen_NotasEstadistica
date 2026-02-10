const percentile = require('./src/utils/percentile');

console.log('\nPruebas de percentile');
try {
    const result2 = percentile(0, [1, 2, 3]);
    console.log('percentile(0, [1,2,3]) =', result2);
    console.log('Esperado: 1.00, Obtenido:', result2, result2 === 1.00 ? 'paso' : 'no paso');
} catch (error) {
    console.log('Error:', error.message);
}

try {
    const result3 = percentile(100, [1, 2, 3]);
    console.log('percentile(100, [1,2,3]) =', result3);
    console.log('Esperado: 3.00, Obtenido:', result3, result3 === 3.00 ? 'paso' : 'no paso');
} catch (error) {
    console.log('Error:', error.message);
}

try {
    const result4 = percentile(50, [1, 2, 3, 4]);
    console.log('percentile(50, [1,2,3,4]) =', result4);
    console.log('Esperado: 2.00, Obtenido:', result4, result4 === 2.00 ? 'paso' : 'no paso');
} catch (error) {
    console.log('Error:', error.message);
}

