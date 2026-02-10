const calcWeightedGrade = require('./src/utils/calcWeightedGrade');
const percentile = require('./src/utils/percentile');

test('calcWeightedGrade', () => {
    const result = calcWeightedGrade([
        { score: 80, weight: 0.4 },
        { score: 90, weight: 0.6 }
    ]);
    expect(result).toBe(86);
});

test('percentile', () => {
    const result = percentile(0, [1, 2, 3]);
    expect(result).toBe(1);
});

test('percentile', () => {
    const result = percentile(100, [1, 2, 3]);
    expect(result).toBe(3);
});

test('percentile', () => {
    const result = percentile(50, [1, 2, 3, 4]);
    expect(result).toBe(2);
});
