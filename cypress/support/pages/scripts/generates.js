function generateNumberRandom(n) {
    var ranNum = Math.round(Math.random() * n);
    return ranNum;
};

export function generatePassword() {
    var n = 9
    var n1 = generateNumberRandom(n);
    var n2 = generateNumberRandom(n);
    return `teste${n1}${n2}!`
};

export function generateEmail() {
    var n = 9
    var n1 = generateNumberRandom(n);
    var n2 = generateNumberRandom(n);
    var n3 = generateNumberRandom(n);
    var n4 = generateNumberRandom(n);
    var n5 = generateNumberRandom(n);
    return `testeteste${n1}${n2}${n3}${n4}${n5}@mail.com`;
};