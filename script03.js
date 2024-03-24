// const Dolphins = (+112 + 81) / 3.0;
// const Kolas = (109 + 95 + 16) / 3.0;
// const averageDolphins = Dolphins > 100;
// const averageKolas = Kolas > 100;
// console.log(Dolphins, Kolas);
// if (Dolphins > Kolas && averageDolphins) {
//     console.log("Dolphins win the tropy!");
// } else if (Kolas > Dolphins && averageKolas) {
//     console.log("Koalas win the trophy!");
// } else if (averageDolphins && averageKolas) {
//     console.log("Both win the trophy!");
// } else {
//     console.log("no one win the trophy!");
// }
const calcaverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphin = calcaverage(44, 23, 71);
const scoreKoalas = calcaverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆(${avgDolphins} vs.${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆(${avgKoalas}vs.${avgDolphins} )`);
    } else {
        console.log("No one wins 😢 ");
    }
};
checkWinner(scoreDolphin, scoreKoalas);
checkWinner(300, 10);