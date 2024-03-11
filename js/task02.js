'use strict'

let n;
function isPrime(n) {
    for (let b = 1; b < n; b++) {
        if (b <= n) {
            b = n;
        } else {
            return false
        }
        return true
    }
}
console.log(isPrime(5));