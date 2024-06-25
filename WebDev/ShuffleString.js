// // Step 1: Mapping from digits to corresponding words
// const digitToWord = {
//     '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
//     '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
//   };
  
//   // Step 2: Create a single string of words corresponding to the digits
//   function digitsToWords(number) {
//     const digits = number.toString().split('');
//     const words = digits.map(digit => digitToWord[digit]);
//     return words.join('');
//   }
  
//   // Step 3: Shuffle function
//   function shuffle(s) {
//     var arr = s.split('');
//     var n = arr.length;
    
//     for(var i = 0; i < n - 1; ++i) {
//       var j = Math.floor(Math.random() * n);
      
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
    
//     return arr.join('');
//   }
  
//   // Step 4: Count occurrences of each digit after shuffling
//   function countDigitsInShuffledString(shuffledString) {
//     const digitCount = {};
    
//     const digits = '0123456789'.split(''); // List of digits as strings
    
//     for (let char of shuffledString) {
//       if (digits.includes(char)) {
//         if (digitCount[char]) {
//           digitCount[char]++;
//         } else {
//           digitCount[char] = 1;
//         }
//       }
//     }
    
//     return digitCount;
//   }
  
//   // Example usage
//   const userNumber = 984231657; // Example big number provided by user
  
//   // Step 2: Convert digits to corresponding words
//   const wordsString = digitsToWords(userNumber);
  
//   console.log("Converted digits to words:", wordsString);
  
//   // Step 3: Shuffle the characters
//   const shuffledString = shuffle(wordsString);
  
//   console.log("Shuffled String:", shuffledString);
  
//   // Step 4: Count occurrences of each digit in the shuffled string
//   const digitCounts = countDigitsInShuffledString(shuffledString);
  
//   // Display results
//   console.log("Digit Counts after shuffling:", digitCounts);
  

// input = 1111000045667778888999993

let str = "otnugietnezoeeiennsinzhxnfrvnrieoenehtrtententeneeenneisinzsegoitxeiehhnieetrgenrosveiozeienereonveeeihgvosnnfo"
function countOccurrences(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (charCount[char]) {
          charCount[char]++;
      } else {
          charCount[char] = 1;
      }
  }
  
  return charCount;
}

// Example usage:
const occurrences = countOccurrences(str);

// console.log(occurrences);
let checkLetter = ["z", "w", "u", "x", "g", "o", "h", "f", "s", "i", "e"]

const count ={} 
checkLetter.forEach((el, indx) => {
  if (el === "z") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.zero = occurrences[el]
      occurrences["e"] -= occurrences[el]
      occurrences["r"] -= occurrences[el]
      occurrences["o"] -= occurrences[el]
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.zero = 0
    }
  }
  if (el === "w") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.two = occurrences[el]
      occurrences["t"] -= occurrences[el]
      occurrences["o"] -= occurrences[el]
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.two = 0
    }
  }
  if (el === "u") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.four = occurrences[el]
      occurrences["o"] -= occurrences[el]
      occurrences["f"] -= occurrences[el]
      occurrences["r"] -= occurrences[el]
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.four = 0
    }
  }
  if (el === "x") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.six = occurrences[el]
      occurrences["i"] -= occurrences[el]
      occurrences["s"] -= occurrences[el]
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.six  = 0
    }
  }
  if (el === "g") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.eight= occurrences[el]
      occurrences["i"] -= occurrences[el]
      occurrences["h"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]
      occurrences["t"] -= occurrences[el]
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.eight = 0
    }
  }
  if (el === "o") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.one= occurrences[el]
      occurrences["n"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.one = 0
    }
  }
  if (el === "h") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.three= occurrences[el]
      occurrences["t"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]*2
      occurrences["r"] -= occurrences[el]
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.three = 0
    }
  }
  if (el === "f") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.five= occurrences[el]
      occurrences["i"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]
      occurrences["v"] -= occurrences[el]
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.five = 0
    }
  }
  if (el === "s") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.seven= occurrences[el]
      occurrences["n"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]*2
      occurrences["v"] -= occurrences[el]
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.seven = 0
    }
  }
  if (el === "i") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.nine= occurrences[el]
      occurrences["n"] -= occurrences[el]
      occurrences["e"] -= occurrences[el]
      // occurrences["e"] -= occurrences[el]
      
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.nine = 0
    }

    
  }
  if (el === "e") {
    if (occurrences[el] !== undefined && occurrences[el] !== 0) {
      // console.log("check");
      count.ten= occurrences[el]
      occurrences["t"] -= occurrences[el]
      occurrences["n"] -= occurrences[el]
      
      occurrences[el] = 0
    } else {
      // console.log("check else");
      count.ten = 0
    }
  }

})
// console.log(count)

//Sorting the object
// let result={};
// let arr=['Zero','One', 'Two','Three','Four','Five','Six','Seven', 'Eight','Nine'];
// let arrNo=Object.entries(count)
// for(let i=0; i<10;i++){
//   if(arr[i]===arrNo[i][0]){
//     console.log(arrNo);
//   }

//   // console.log(arr[i]===arrNo[i][0]);
//   // console.log(typeof arr[i]+" "+typeof arrNo[i][0]);
// }

// // console.log(arrNo);




