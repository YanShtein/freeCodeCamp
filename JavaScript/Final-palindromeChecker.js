function palindrome(str) {
    let checkNew = str
      .toLowerCase()
      .replace(/[^A-Za-z0-9]/g, "")
      .split("")
    let checkRev = [];
  
    for (let i = checkNew.length - 1; i >= 0; i--) {
      checkRev.push(checkNew[i])
    }
  
    for (let i = 0; i < checkNew.length; i++) {
      console.log(...checkNew)
      console.log(...checkRev)
      if (checkNew[i] !== checkRev[i]) {
        return false;
      }
    }
  
    return true;
  }
   
  console.log(palindrome("not a palindrome"));