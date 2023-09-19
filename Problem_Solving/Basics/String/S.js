function reverseStringWithLetters(s) {
    let arr = s.split('');
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      while (!isLetter(arr[start])) {
        start++;
      }
      while (!isLetter(arr[end])) {
        end--;
      }
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr.join('');
  }
  
  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  const inputString = "ab-|||cd-ef!!!";
  const result = reverseStringWithLetters(inputString);
  console.log(result);
  