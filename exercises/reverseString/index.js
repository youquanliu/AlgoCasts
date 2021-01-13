// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //solution one
    //return [...str].reverse().join('');

    //solution two 
    // let reversed = '';
    // for (const i of str) {
    //     reversed = i + reversed
    // }
    // return reversed;

    //solution three
    //reduce has initial variable at the end
    return str.split('').reduce((reversed, character) => {
       return character + reversed
    }, '')
}

module.exports = reverse;

