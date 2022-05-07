function rot13(str) {
    str = str.split("")
    let list = [];
  
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
    str.forEach(letter => {
      let index = alphabet.indexOf(letter)
      console.log(index)
      if (index == -1) {
        list.push(letter)
      } else {
        index = alphabet.indexOf(letter) + 13
      }
      if (index >= alphabet.length) {
        let remainder = index % alphabet.length
        list.push(alphabet[remainder])
      } else {
        list.push(alphabet[index])
      }
    })
  
    return list.join("");
  }
  
console.log(rot13("SERR YBIR?"));