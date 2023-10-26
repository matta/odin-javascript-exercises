const identity = x => x;

const arrayEqual = function (a, b) {
    return a.every((e, i) => e === b[i]);
}

const isAlphabetic = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
}

const isPalindrome = function (s) {
    const l = s.toLowerCase().split('').filter(isAlphabetic);
    return arrayEqual(l, l.map(identity).reverse());
}

const palindromes = function (s) {
    return isPalindrome(s);
}

// Do not edit below this line
module.exports = palindromes
