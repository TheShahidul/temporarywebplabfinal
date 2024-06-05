// 1. Prime number or not
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

// 2. Factorial 
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 3. Fibonacci 
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 4. Sorting
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 5. Maximum - minimum 
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// 6. Odd Even 
function isOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// 7. Palindrome (Digit + String) 
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// 8. Make uppercase of each first letter of each word (FIRST) 
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
// 9. Make uppercase of each letter of each word (LAST) 
function capitalizeLastLetter(str) {
    return str.replace(/\b\w+\b/g, word => word.slice(0, -1) + word.slice(-1).toUpperCase());
}
// 10. Make uppercase of each letter of each word (MIDDLE)
function capitalizeMiddleLetter(str) {
    return str.replace(/\b\w+\b/g, word => word.slice(0, Math.floor(word.length / 2)) +
        word.slice(Math.floor(word.length / 2)).toUpperCase());
}

// 11. Frequency of letter in a word or sentence. (letter & count)
function letterFrequency(str) {
    const frequency = {};
    for (const char of str) {
        if (char.match(/[a-zA-Z]/)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    return frequency;
}

// 12. Leap year 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 13. Series 
function generateSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}

// 14. Swapping 
function swapNumbers(a, b) {
    [a, b] = [b, a];
    return { a, b };
}

// 15. Vowel Consonant 
function isVowelOrConsonant(char) {
    return /^[aeiou]$/i.test(char) ? "Vowel" : "Consonant";
}

// Function to solve the selected problem
function solveProblem() {
    const problemSelect = document.getElementById('problemSelect');
    const selectedProblem = problemSelect.value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    switch (selectedProblem) {
        case 'prime':
            const primeNumber = parseInt(prompt("Enter a number to check if it's prime or not:"));
            outputDiv.textContent = `Is ${primeNumber} prime? ${isPrime(primeNumber)}`;
            break;
        case 'factorial':
            const factorialNumber = parseInt(prompt("Enter a number to find its factorial:"));
            outputDiv.textContent = `Factorial of ${factorialNumber} is ${factorial(factorialNumber)}`;
            break;
        case 'fibonacci':
            const fibonacciNumber = parseInt(prompt("Enter a number to find its Fibonacci value:"));
            outputDiv.textContent = `Fibonacci value at position ${fibonacciNumber} is ${fibonacci(fibonacciNumber)}`;
            break;
        case 'sort':
            const arrToSort = prompt("Enter numbers separated by comma to sort:");
            const sortedArr = sortArray(arrToSort.split(',').map(Number));
            outputDiv.textContent = `Sorted Array: ${sortedArr}`;
            break;
        case 'minMax':
            const arrToFindMinMax = prompt("Enter numbers separated by comma to find min and max:");
            const minMax = findMinMax(arrToFindMinMax.split(',').map(Number));
            outputDiv.textContent = `Minimum: ${minMax.min}, Maximum: ${minMax.max}`;
            break;
        case 'oddEven':
            const oddEvenNumber = parseInt(prompt("Enter a number to check if it's Odd or Even:"));
            outputDiv.textContent = `${oddEvenNumber} is ${isOddOrEven(oddEvenNumber)}`;
            break;
        case 'palindrome':
            const inputString = prompt("Enter a string to check if it's a palindrome:");
            outputDiv.textContent = `Is ${inputString} a palindrome? ${isPalindrome(inputString)}`;
            break;
        case 'capitalizeFirst':
            const firstCapitalizeString = prompt("Enter a string to capitalize the first letter of each word:");
            outputDiv.textContent = `Capitalized String: ${capitalizeFirstLetter(firstCapitalizeString)}`;
            break;
        case 'capitalizeLast':
            const lastCapitalizeString = prompt("Enter a string to capitalize the last letter of each word:");
            outputDiv.textContent = `Capitalized String: ${capitalizeLastLetter(lastCapitalizeString)}`;
            break;
        case 'capitalizeMiddle':
            const middleCapitalizeString = prompt("Enter a string to capitalize the middle letter of each word:");
            outputDiv.textContent = `Capitalized String: ${capitalizeMiddleLetter(middleCapitalizeString)}`;
            break;
        case 'letterFrequency':
            const inputStr = prompt("Enter a string to find the frequency of letters:");
            const frequencyObj = letterFrequency(inputStr);
            let frequencyOutput = '';
            for (const char in frequencyObj) {
                frequencyOutput += `${char}: ${frequencyObj[char]}, `;
            }
            outputDiv.textContent = `Frequency of letters: ${frequencyOutput}`;
            break;
        case 'leapYear':
            const yearToCheck = parseInt(prompt("Enter a year to check if it's a leap year:"));
            outputDiv.textContent = `${yearToCheck} is ${isLeapYear(yearToCheck) ? 'a leap' : 'not a leap'} year`;
            break;
        case 'series':
            const seriesNumber = parseInt(prompt("Enter a number to generate the series:"));
            outputDiv.textContent = `Generated Series: ${generateSeries(seriesNumber)}`;
            break;
        case 'swap':
            const numbersToSwap = prompt("Enter two numbers separated by comma to swap:");
            const [num1, num2] = numbersToSwap.split(',').map(Number);
            const swappedNumbers = swapNumbers(num1, num2);
            outputDiv.textContent = `Swapped numbers: ${swappedNumbers.a}, ${swappedNumbers.b}`;
            break;
        case 'vowelConsonant':
            const charToCheck = prompt("Enter a character to check if it's a vowel or consonant:");
            outputDiv.textContent = `The character ${charToCheck} is ${isVowelOrConsonant(charToCheck)}`;
            break;
        default:
            outputDiv.textContent = 'Invalid selection.';
            break;
    }
}
