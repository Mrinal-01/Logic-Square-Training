//call() is an js predefined methos is used to call method of an owner object as an argument(parameter)
// const person={
//     fullName:function(city,country){
//         return this.fName+" "+this.lName+' '+city+' '+country;
//     }
// }

// const person1={
//     fName:'Mrinal',
//     lName:'Bera'
// }
// const person2={
//     fName:'Kiran',
//     lName:'Debnath'
// }
// console.log(person.fullName.call(person1,'Midnapore','India'));
// console.log(person.fullName.call(person2));


//apply():- Its work like same as call()
//Only difference is call() take arguments as seprately
//apply() takes arguments as an array

const person={
    fullName:function(city,country){
        return this.fName+" "+this.lName+' '+city+' '+country;
    }
}

const person1={
    fName:'Mrinal',
    lName:'Bera'
}
const person2={
    fName:'Kiran',
    lName:'Debnath'
}
console.log(person.fullName.apply(person1,['Midnapor','India']));


//Math.max()
console.log(Math.max(1,2,3));

//Array dont have any max method so we will use Math.max() which is method of Math class, for that we will use apply concept.
//First argument must be included whatever value u want like, Math,0,""
console.log(Math.max.apply(Math,[1,2,3]))
console.log(Math.max.apply('',[1,2,3]))


//bind():- It is use to borrow a method of another object.
//When we use method of an objecct 'this' will lost, for that bind() used
const people={
    fName:'Mrinal',
    lName:'Bera',
    fullName:function(){
        console.log(this.fName+' '+this.lName);
    }
}

setTimeout(people.fullName.bind(person2),3000)

//Methods like call(), apply(), and bind() can refer this to any object.
//Means when we send an object to another object's method that time it refer the properties of the object which we pass.


//closure():- Global variable can be used as local using closure()
