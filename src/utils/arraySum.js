/*const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];


const arraySum = (n1, n2) => {
    let n1Index = array.indexOf(n1);
    let n2Index = array.indexOf(n2);
    let case1 = n1 < 0 && n2 < 0;
    let case2 = n1Index === -1 && n2Index === -1;
    let case3 = n1 >= n2;
    let case4 = n2 > 100;
    
    let result;
    if (case1) {
      result = -1;
    } else if (case2 || case3) {
      result = 0;
    } else if (case4) {
    	result = array[array.indexOf(n1)] + 100;
    } else {
    	result = n1 + n2;
    }
    
    return result;
};*/


const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const arraySum = (n1, n2) => {
    if (n1 < 0 || n2 < 0) {
        return -1;
    }

    if (n1 >= n2 || (n1 > 100 && n2 > 100)) {
        return 0;
    }

    if (n2 > 100) {
      let sum = 0;
      for (let j = array.indexOf(n1); j < array.length; j++) {
        sum += array[j];
      }
      return sum;
    }

    let sum = 0;
    for (let i = array.indexOf(n1); i <= array.indexOf(n2); i++) {
        sum += array[i];
    }

    return sum;
};

console.log(arraySum(30, 60)); // Output corretto: 180
console.log(arraySum(90, 120)); // Output corretto: 190
console.log(arraySum(110, 120)); // Output corretto: 0
console.log(arraySum(-10, -20)); // Output corretto: -1