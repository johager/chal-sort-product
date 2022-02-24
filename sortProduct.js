/*
Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

For sorting the index starts at 1, NOT at 0!

The sorting has to be ascending.

The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5

Product of value and index:

23 => 23 * 1 = 23 -> Output-Pos 4

2 => 2 * 2 = 4 -> Output-Pos 1

3 => 3 * 3 = 9 -> Output-Pos 2

4 => 4 * 4 = 16 -> Output-Pos 3

5 => 5 * 5 = 25 -> Output-Pos 5

Output: 2, 3, 4, 23, 5
*/



function sortProduct(arr) {
    const prod = []
    // item in prod
    // {
    //     val: 0,
    //     prod: 25
    // }
    for(let i = 0; i < arr.length; i++){
        prod.push({"val": arr[i], prod: arr[i] * (i + 1)})
    }

    return prod.sort((a,b) => a.prod - b.prod).map((item) => item.val)
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
}

function test(func, inp, exp) {
    const res = func(inp)
    let passed = false
    if (arrayEquals(res, exp)) {
        passed = 'true '
    }
    console.log("passed:", passed, ` func: ${func.name}  inp: ${inp}  res: ${res}  exp: ${exp}`)
}

test(sortProduct, [23, 2, 3, 4, 5], [2, 3, 4, 23, 5])