// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);
// if (markHigherBMI == true) {
//     console.log("Mark's BMI(%s) is higher than John's(%s)!", BMIMark, BMIJohn);
// } else {
//     console.log("John's BMI(%s) is higher than Mark's(%s)!", BMIJohn, BMIMark);
// }
class peopleinfo {
    constructor(fullname, mass, height) {
        this.fullname = fullname;
        this.height = height;
        this.mass = mass;
    }
    calcBMI() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark = new peopleinfo("Mark Miller", 78, 1.69);
john = new peopleinfo("John Smith", 92, 1.95);
markBMI = mark.calcBMI();
johnBMI = john.calcBMI();
console.log(markBMI, johnBMI);
if (johnBMI > markBMI) {
    console.log(`${mark.fullname}'s BMI is higher than ${john.fullname}'s`);
} else {
    console.log(`${john.fullname}'s BMI is higher than ${mark.fullname}'s`);
}