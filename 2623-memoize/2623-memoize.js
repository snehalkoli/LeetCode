/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function (...args) {
        let n = JSON.stringify(args);
        if (n in cache) {
            return cache[n];
        }
        let Result = fn.apply(this, args);
        cache[n] = Result;
        return Result;

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */