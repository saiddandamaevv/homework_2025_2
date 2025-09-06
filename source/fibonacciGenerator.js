'use strict'

/**
 * Генератор ряда Фибоначчи. Принимает число n и возвращает ряд Фибоначчи до n-ого ээлемента.
 * @generator
 * @param {number} number - число
 * 
 * @example
 * // returns [0, 1, 1]
 * fibonacciGenerator(3)
 * 
 * @yields {number} - следующее число последовательности Фибоначчи
 */

function* fibonacciGenerator(number){
    if (typeof(number) != "number" || !Number.isInteger(number)) throw new Error("Необходимо ввести целое число.");
    if (number < 1 || typeof(number) != "number") return [];
    
    let a = 0;
    let b = 1;
    let tmp;
    for (let i = 0; i < number; i++){
        yield a;
        tmp = a;
        a = b;
        b = tmp + a;
    }
}
