module.exports = function toReadable(number) {
    if (0 <= number && number < 20) return getIntFor19(number);

    if (20 <= number && number < 100) return getIntFor99(number);

    if (100 <= number < 1000) return getIntFor999(number);
};

function getIntFor19(numb) {
    if (numb === 0) return "zero";
    if (numb === 1) return "one";
    if (numb === 2) return "two";
    if (numb === 3) return "three";
    if (numb === 4) return "four";
    if (numb === 5) return "five";
    if (numb === 6) return "six";
    if (numb === 7) return "seven";
    if (numb === 8) return "eight";
    if (numb === 9) return "nine";
    if (numb === 10) return "ten";
    if (numb === 11) return "eleven";
    if (numb === 12) return "twelve";
    if (numb === 13) return "thirteen";
    if (numb === 14) return "fourteen";
    if (numb === 15) return "fifteen";
    if (numb === 16) return "sixteen";
    if (numb === 17) return "seventeen";
    if (numb === 18) return "eighteen";
    if (numb === 19) return "nineteen";
}

function getIntFor99(number) {
    if (20 <= number && number < 30) {
        if (number === 20) return "twenty";
        else return "twenty " + getIntFor19(number - 20);
    }

    if (30 <= number && number < 40) {
        if (number === 30) return "thirty";
        else return "thirty " + getIntFor19(number - 30);
    }

    if (40 <= number && number < 50) {
        if (number === 40) return "forty";
        else return "forty " + getIntFor19(number - 40);
    }

    if (50 <= number && number < 60) {
        if (number === 50) return "fifty";
        else return "fifty " + getIntFor19(number - 50);
    }

    if (60 <= number && number < 70) {
        if (number === 60) return "sixty";
        else return "sixty " + getIntFor19(number - 60);
    }

    if (70 <= number && number < 80) {
        if (number === 70) return "seventy";
        else return "seventy " + getIntFor19(number - 70);
    }

    if (80 <= number && number < 90) {
        if (number === 80) return "eighty";
        else return "eighty " + getIntFor19(number - 80);
    }

    if (90 <= number && number < 100) {
        if (number === 90) return "ninety";
        else return "ninety " + getIntFor19(number - 90);
    }
}

function getIntFor999(number) {
    let numb2 = number.toString();
    let numb3 = number % 100;
    if (number % 100 === 0) return getIntFor19(parseInt(numb2[0])) + " hundred";
    else {
        let numb4 = numb3 > 19 ? getIntFor99(numb3) : getIntFor19(numb3);
        return getIntFor19(parseInt(numb2[0])) + " hundred " + numb4;
    }
}


