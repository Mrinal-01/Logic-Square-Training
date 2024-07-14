// let items=[[1,2,3],[3,4],[5,6,7,8],[9,10]]
// let res=items.reduce((acc,cur)=>{
//     acc.push(...cur)
//     return acc
// },[])
// console.log(res);


// function flatAnArray(items){
//     let res=items.reduce((acc,cur)=>{
//         if(Array.isArray(cur)){
//             acc.push(...cur)
//         }
        
//         return acc
//     },[])
//     return res
// }


let items=[[1,2,3],[3,[4]],[5,6,[7,8]],[9,10,[11,12,13]]]


// result=flatAnArray(items)
// console.log(result);

// function makeFlatArray(item){
//     return item.reduce((acc,cur)=>{
//         if(Array.isArray(cur)){
//             acc.push(...makeFlatArray(cur))
            
//         }
//         else{
//             acc.push(cur)
//         }
//         return acc
//     },[])
// }

function makeFlatArray(item){
    return item.reduce((acc,cur)=>{
        return Array.isArray(cur)?acc.concat(makeFlatArray(cur)):acc.concat(cur)
    },[])
}

output=makeFlatArray(items)
console.log(output);