'use strict';

/**
 * Write a function (factory) creating a function (device) returning the sum of
 * initialValue and all the arguments of current and all previous calls. By
 * default initial value is 0.
 *
 * For example:
 *
 * const adder1 = createAdder()
 * console.log(adder1()); // 0
 * console.log(adder1(10, 20)); // 30 = 0 + (10 + 20)
 * console.log(adder1(30, 40)); // 100 = 0 + (10 + 20) + (30 + 40)
 *
 * const adder2 = createAdder(100);
 * console.log(adder2(10)); // 110 = 100 + 10
 * console.log(adder2(20, 30, 40)); 200 = 100 + 10 + (20 + 30 + 40)
 * console.log(adder2()); 200 = the same as previous
 *
 * @param {number} initialValue
 */
function createAdder(initialValue = 0) {
  let previous = 0;

  return (...args) => {
    const current = args.length > 0
      ? args.reduce((a, b) => a + b) + previous
      : 0 + previous;

    previous = current;

    return initialValue + current;
  };
}

module.exports = createAdder;
