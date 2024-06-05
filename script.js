function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, n);
}

function sortArray(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function findMinMax(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

function checkOddEven(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function capitalizeLastLetter(str) {
    return str.replace(/\b\w+\b/g, word => word.slice(0, -1) + word.slice(-1).toUpperCase());
}

function capitalizeMiddleLetter(str) {
    return str.replace(/\b\w+\b/g, word => {
        const midIndex = Math.floor(word.length / 2);
        return word.slice(0, midIndex) + word.charAt(midIndex).toUpperCase() + word.slice(midIndex + 1);
    });
}

function countLetters(str) {
    const frequency = {};
    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function swap(a, b) {
    return [b, a];
}

function checkVowelConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase()) ? 'Vowel' : 'Consonant';
}

function solveProblem() {
    const problemSelect = document.getElementById("problem");
    const selectedProblem = problemSelect.value;
    const input = document.getElementById('input').value;
    let output = "";

    switch (selectedProblem) {
        case '1':
            output = isPrime(parseInt(input)).toString();
            break;
        case '2':
            output = factorial(parseInt(input)).toString();
            break;
        case '3':
            output = fibonacci(parseInt(input)).toString();
            break;
        case '4':
            output = sortArray(input.split(",").map(Number)).toString();
            break;
        case '5':
            output = JSON.stringify(findMinMax(input.split(",").map(Number)));
            break;
        case '6':
            output = checkOddEven(parseInt(input));
            break;
        case '7':
            output = isPalindrome(input).toString();
            break;
        case '8':
            output = capitalizeFirstLetter(input);
            break;
        case '9':
            output = capitalizeLastLetter(input);
            break;
        case '10':
            output = capitalizeMiddleLetter(input);
            break;
        case '11':
            output = JSON.stringify(countLetters(input));
            break;
        case '12':
            output = isLeapYear(parseInt(input)).toString();
            break;
        case '13':
            const [a, b] = input.split(",").map(Number);
            output = swap(a, b).toString();
            break;
        case '14':
            output = checkVowelConsonant(input);
            break;
        default:
            output = "Invalid choice.";
            break;
    }

    document.getElementById("output").innerText = output;
}
