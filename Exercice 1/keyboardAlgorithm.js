function entryTime(s, keypad) {
    const positions = {};

    for (let i = 0; i < keypad.length; i++) {
        positions[keypad[i]] = [Math.floor(i / 3), i % 3];
    }

    function distance(a, b) {
        return Math.abs(positions[a][0] - positions[b][0]) + Math.abs(positions[a][1] - positions[b][1]);
    }

    let totalTime = 0;
    for (let i = 1; i < s.length; i++) {
        totalTime += distance(s[i - 1], s[i]);
    }

    return totalTime;
}

const s = "423692";
const keypad = "923857614";
const result = entryTime(s, keypad);
console.log("Total time:", result);

