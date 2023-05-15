let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];
let accumulatorEven = [];
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] % 2 === 0) {
        accumulatorEven.push(massiv[i])
    }
}
console.log(accumulatorEven);