function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let array = []
    arr.forEach((item,i) => {
        array.push(fn(item, i));
    });
    return array;
};