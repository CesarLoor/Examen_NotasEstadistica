const { calcWeightedGrade, percentile } = require('./calc');

// // Prueba para calcular la nota ponderada correctamente
// test('Calcula la nota ponderada correctamente', () => {
//     expect(calcWeightedGrade([
//         {score: 80, weight: 0.4},
//         {score: 90, weight: 0.6}
//     ])).toBeCloseTo(86.0);
// });
test('Calcula la nota ponderada correctamente', () => {
    const scores = [50, 60, 70, 80, 90];
    expect(percentile(75, scores)).toBeCloseTo(80);
    
    expect(percentile(0, [1, 2, 3])).toBeCloseTo(1.00);
    expect(percentile(100, [1, 2, 3])).toBeCloseTo(3.00);
    expect(percentile(50, [1, 2, 3, 4])).toBeCloseTo(2.00);
});

// Prueba para devolver el percentil usando el método más cercano 
test('devuelve una lista utilizando el metodo mas cercano', () => {
    const scores = [50, 60, 70, 80, 90];
    expect(percentile(75, scores)).toBeCloseTo(80);
    
    expect(percentile(0, [1, 2, 3])).toBeCloseTo(1.00);
    expect(percentile(100, [1, 2, 3])).toBeCloseTo(3.00);
    expect(percentile(50, [1, 2, 3, 4])).toBeCloseTo(2.00);
});