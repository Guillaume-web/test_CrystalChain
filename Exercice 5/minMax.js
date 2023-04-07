function max_diff(int_array) {
    let maxDiff = 0;
    let minValue = int_array[0];

    for (let num of int_array) {
        if (num < minValue) {
            minValue = num;
        } else {
            maxDiff = Math.max(maxDiff, num - minValue);
        }
    }

    return maxDiff;
}

// Sample Input
const input = [100, 10, 5, 10, 1, 8, 16, 21];
const result = max_diff(input);

console.log("Result: " + result);
