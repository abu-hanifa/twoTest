let massiv = ['js', 'css', 'html', 'react', 'scr', 'lkl', 'js', 'css', 'pon', 'scol'];
let accumulator = [];
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i].length > 3) {
        accumulator.push(massiv[i])
    }
}
console.log(accumulator);
