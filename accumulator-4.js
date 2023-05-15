let massiv =  ['расул', 'мухьаммад', 'али', 'альви', 'расул', 'мухьаммад', 'али', 'альви', 'али', 'иброхим'];
accumulator = [];
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i][0] === 'а') {
        accumulator.push(massiv[i]);
    }
}
console.log(accumulator);
