// input = 1111000045667778888999993
let str = "otnugietnezoeeiennsinzhxnfrvnrieoenehtrtententeneeenneisinzsegoitxeiehhnieetrgenrosveiozeienereonveeeihgvosnnfo"
let checkLetter = ["z", "w", "u", "x", "g", "o", "h", "f", "s", "i", "e"]
//This array is created by following the main principle(algorithm)
let noArr=['zero','two','four','six','eight','one','three','five','seven','nine','ten']
//This one is to update the count of each digit
const noCount ={} 
//This loop will pick every char
for(let j=0;j<checkLetter.length;j++){
    let count=0;
    //This loop will check if each char available or not
     while(str.includes(checkLetter[j])===true){
            count+=1;
            let no1=noArr[j].split('')
            //This loop check each char of the noArr array strings and replace from the main string
            for(let x=0;x<no1.length;x++)
           {    
                str=str.replace(no1[x],'') 
            }
     }
     noCount[noArr[j]]=count
}
console.log( noCount);