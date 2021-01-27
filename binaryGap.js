function binaryGap(number) {
    let maxGaps = [];
    const binary = Array.from(number.toString(2));

    // If  we have two charts return 0
    if (Object.keys(binary).length <= 2) {
        return 0;
    }

    // Get the position for all 1
    const onesPositions = binary.reduce((prev,current, idx) => {
        if (current === '1') {
            prev.push(idx);
        }
        return prev;
    }, []);

    // Search and count Zeros
    onesPositions.map((pos, index) => {
        let portion = (pos === onesPositions[onesPositions.length-1])? binary.slice(pos, onesPositions[index]) : binary.slice(pos, onesPositions[index+1]);
        if (portion.length > 0) {
            portion = portion.reduce((pre, cur, ind) => {
                if (cur === '0') {
                    pre.push(ind);
                }
                return pre;
            }, []);
            maxGaps.push(portion.length);
        }
    });
    return {max: (maxGaps.length > 1) ? Math.max(...maxGaps) : 0, binary: binary.join('')};
}


const number = 32;
const gapBinary = binaryGap(number);
console.log(`MAX: ${gapBinary.max}  --- Binary: ${gapBinary.binary}`);
