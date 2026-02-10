
function percentile(p, values) {
    if (typeof p !== 'number') {
        throw new TypeError('p debe ser un numero');
    }

    if (p < 0 || p > 100) {
        throw new RangeError('p debe estar entre 0 y 100');
    }

    // Validar que values sea un arreglo
    if (!Array.isArray(values)) {
        throw new TypeError('values debe ser un arreglo');
    }

    // Validar que el arreglo tenga al menos 1 elemento
    if (values.length === 0) {
        throw new RangeError('values debe tener al menos 1 elemento');
    }

    // Validar que todos los elementos sean números
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== 'number') {
            throw new TypeError('Todos los elementos de values deben ser números');
        }
    }

    // Ordenar los valores de forma ascendente
    const sortedValues = values.slice().sort((a, b) => a - b);

    // Casos especiales para los bordes
    if (p === 0) {
        // Percentil 0 devuelve el mínimo
        return Math.round(sortedValues[0] * 100) / 100;
    }

    if (p === 100) {
        // Percentil 100 devuelve el máximo
        return Math.round(sortedValues[sortedValues.length - 1] * 100) / 100;
    }

    // Método nearest-rank
    const N = sortedValues.length;
    const rank = Math.ceil((p / 100) * N);

    // Convertir de indexacion 1..N 
    const index = rank - 1;

    // Obtener el valor y redondear a 2 decimales
    const result = sortedValues[index];
    return Math.round(result * 100) / 100;
}

module.exports = percentile;
