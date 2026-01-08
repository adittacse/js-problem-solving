// Capitalize First Letter of Each Word
function capitalizeWords(text) {
    let words = text.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(" ");
}

console.log(capitalizeWords("hello world"));
