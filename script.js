
// esercizio 1

let crazySum = function (num1, num2) {
    let sum = num1 + num2
    if(num1 === num2) {
        return sum * 3;
    } else {
        return sum;
    }
}

console.log(crazySum(5,5));

// esercizio 2

let boundary = function (numInt) {
    if (numInt >= 20 && numInt <= 100) {
        return true;
    } else if (numInt === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(200));

// esercizio 3

let reverseString = function(stringToReverse) {
   let stringSplitArr = stringToReverse.split("");
//    let reversedArr = stringSplitArr.reverse();
//    let reversedString = reversedArr.join("");
//    return reversedString;
    let reversedArr = []
   for (let i = stringSplitArr.length; i >= 0; i--) {
    reversedArr.push(stringSplitArr[i])
    }
    let reversedString = reversedArr.join("")
    return reversedString;
}

console.log(reverseString("ciao"));

// esercizio 4

let upperFirst = function (string) {
    let intoArray = string.split(" ");
    for (let i = 0; i < intoArray.length; i++) {
        intoArray[i] = intoArray[i].charAt(0).toUpperCase() + intoArray[i].slice(1);
    }
    let stringUpperFirst = intoArray.join(" ");
    return stringUpperFirst;
}

console.log(upperFirst("Oggi è una bella giornata"));

// esercizio 5

let giveMeRandom = function(n) {
    let randomArray = []
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        randomArray.push(randomNumber)
    }
    return randomArray;
}

console.log(giveMeRandom(5));

// extra 1

let areaRett = function(l1, l2) {
    let area = l1 * l2
    return area;
}

console.log(areaRett(3, 4));

// extra 2

let crazyDiff = function(num) {
    let absDiff = Math.round(Math.abs(num / 19))
    if (absDiff > 19) {
        return absDiff * 3;
    } else {
        return absDiff;
    }
}

console.log(crazyDiff(500));

// extra 3

let codify = function(string3) {
    let str3Arr = string3.split(" ");
    let codedString = ""
    if (str3Arr[0] === "code") {
        codedString = str3Arr.join(" ")
    } else {
        str3Arr.splice(0, 0, "code")
        codedString = str3Arr.join(" ")
    }
    return codedString;
}

/* let codify = function (stringa) {
    if (stringa.startsWith("code")) {
        return stringa;
    } else {
        return "code" + stringa;
    }
} */

console.log(codify("these nuts"));

// extra 4

let check3and7 = function(numInt2) {
    if (numInt2 < 0) {
        return false;
    }
    if (numInt2 % 3 === 0) {
        return true;
    } else if (numInt2 % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(-45));

// extra 5

let cutString = function(string2) {
    let cuttedString = string2.slice(1, string2.length - 1)
    return cuttedString;
}

console.log(cutString("These nuts"));