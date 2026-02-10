const calcWeightedGrade = require('./src/utils/calcWeightedGrade');
const percentile = require('./src/utils/percentile');

describe('calcWeightedGrade', () => {
    test('debe calcular correctamente con dos items', () => {
        const result = calcWeightedGrade([
            { score: 80, weight: 0.4 },
            { score: 90, weight: 0.6 }
        ]);
        expect(result).toBe(86);
    });

    test('debe calcular correctamente con tres items', () => {
        const result = calcWeightedGrade([
            { score: 70, weight: 0.3 },
            { score: 85, weight: 0.5 },
            { score: 95, weight: 0.2 }
        ]);
        expect(result).toBe(82.5);
    });

    test('debe redondear a dos decimales', () => {
        const result = calcWeightedGrade([
            { score: 33.333, weight: 0.5 },
            { score: 66.666, weight: 0.5 }
        ]);
        expect(result).toBe(50);
    });

    test('debe manejar un solo item con peso 1', () => {
        const result = calcWeightedGrade([
            { score: 95, weight: 1.0 }
        ]);
        expect(result).toBe(95);
    });
});



describe('percentile', () => {
    test('debe calcular percentil 50 correctamente', () => {
        const result = percentile(50, [1, 2, 3, 4]);
        expect(result).toBe(2);
    });

    test('debe calcular percentil 25 correctamente', () => {
        const result = percentile(25, [10, 20, 30, 40]);
        expect(result).toBe(10);
    });

    test('debe calcular percentil 75 correctamente', () => {
        const result = percentile(75, [10, 20, 30, 40]);
        expect(result).toBe(30);
    });

    test('debe ordenar valores antes de calcular', () => {
        const result = percentile(50, [4, 1, 3, 2]);
        expect(result).toBe(2);
    });

    test('debe redondear a dos decimales', () => {
        const result = percentile(50, [1.111, 2.222, 3.333]);
        expect(result).toBe(2.22);
    });
});

