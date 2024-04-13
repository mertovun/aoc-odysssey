import { readFileSync } from 'fs';

const input = readFileSync('input', 'utf-8');

let count = 0;
let lv2_index = -1;

for (let [i, char] of input.split('').entries()) {
        if (char === '(') count++;
        if (char === ')') count--;
        if (count === -1 && lv2_index === -1) lv2_index = i;
}

console.log(`lv1 ans: ${count}`);
console.log(`lv2 ans: ${lv2_index + 1}`);

