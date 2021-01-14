// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


function levelWidth(root) {
    let counter = [0];
    let buffer = [root, 's'];

    while (buffer.length > 1) {
        const node = buffer.shift();
        if (node === 's') {
            counter.push(0);
            buffer.push('s');
        } else {
            buffer.push(...node.children);
            counter[counter.length - 1]++;
        }
    }
    return counter;
}

module.exports = levelWidth;

