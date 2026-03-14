let rows = 4;
for (let r = rows; r >= 0; r--) {
    let line = ' '.repeat(rows - r);
    let value = 1;
    for (let k = 0; k <= r; k++) {
        line += value;
        if (k < r) {
            line += ' ';
        }
        value = value * (r - k) / (k + 1);
    }
    console.log(line);
}