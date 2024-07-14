// const students = [
//     { name: 'Alice', scores: [95, 85, 90] },
//     { name: 'Bob', scores: [70, 75, 80] },
//     { name: 'Charlie', scores: [88, 92, 85] },
//     { name: 'David', scores: [60, 65, 70] },
//     { name: 'Eve', scores: [98, 100, 95] }
//   ];
  
//   1. Calculate the average score for each student
//   2. Find the student with the highest average score
//   3. Filter out the students who have an average score below 80

const students = [
        { name: 'Alice', scores: [95, 85, 90] },
        { name: 'Bob', scores: [70, 75, 80] },
        { name: 'Charlie', scores: [88, 92, 85] },
        { name: 'David', scores: [60, 65, 70] },
        { name: 'Eve', scores: [98, 100, 95] }
      ];

let eachAvg=students.map(ele=>{
    total=0
    ele.scores.forEach(e=>{
        total+=e
    })
    let newArr={
        name:ele.name,
        avg:(total/3).toFixed(2)
    }
    return newArr
})

//Student with max avg
let maxStu;
maxStu=eachAvg[0]
for(i=1;i<eachAvg.length;i++){
    
    if(maxStu.avg<eachAvg[i].avg)
    {
        maxStu=eachAvg[i]
    }
}

//Student have avg more than 80
let avgArr=eachAvg.filter(ele=>{
    return ele.avg<80
})
console.log("List of student with average scores:");
console.log(eachAvg);
console.log("\nStudent with maimum average:");
console.log(maxStu);
console.log("\nList of student with average>80:");
console.log(avgArr);

