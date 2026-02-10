
function calcWeightedGrade(items) {
    if (!Array.isArray(items)){
        throw new TypeError('los items deben ser un arreglo')
    }
     
     if (items.length === 0){
        throw new RangeError('items no puede estar vacio')
     }

     let totalWeight = 0;
     let weightedSum = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (typeof item !== 'object' || item === null) {
            throw new TypeError('Cada item debe ser un objeto');
        }

        // Validar que score y weight existan
        if (typeof item.score !== 'number') {
            throw new TypeError('el score debe ser un numero');
        }
        if (typeof item.weight !== 'number') {
            throw new TypeError('el weight debe ser un numero');
        }

        // Validar rangos de score (0-100)
        if (item.score < 0 || item.score > 100) {
            throw new RangeError('score debe estar entre 0 y 100');
        }

        // Validar rangos de weight (0-1)
        if (item.weight < 0 || item.weight > 1) {
            throw new RangeError('weight debe estar entre 0 y 1');
        }

        // suma ponderada
        totalWeight += item.weight;
        weightedSum += item.score * item.weight;
    }

    // Validar que la suma de pesos sea 1 y con la tolerancia de 0.001
    if (Math.abs(totalWeight - 1) > 0.001) {
        throw new RangeError('La suma de los pesos debe ser 1');
    }

    const finalGrade = weightedSum;
    return Math.round(finalGrade * 100) / 100;
}

module.exports = calcWeightedGrade;
