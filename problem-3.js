// Check for Palindrome
function isPalindrome(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return text === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
