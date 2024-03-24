// const values = [125, 555, 44];
// for (let i = 0; i < 3; i++) {
//     const tip =
//         values[i] > 50 ?
//         values[i] < 300 ?
//         values[i] * 1.15 :
//         values[i] * 1.2 :
//         values[i] * 1.2;
//     console.log(tip);
// }
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
for (let i = 0; i < 10; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}
console.log(bills, tips, totals);

const avg = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

avgtotals = avg(totals);
console.log(avgtotals);
console.log(avg([7, 2, 6]));