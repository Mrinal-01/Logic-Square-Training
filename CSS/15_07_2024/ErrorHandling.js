// setTimeout(() => {
//   try{
//     noVariable;
//   }
//   catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//   }
// }, 2000);





// let json = '{"firstName":"John", "lastName":"Doe"}';

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log( user.firstName ); // doesn't work

// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );
//   console.log( err.message );
//   // console.log(err);
// }




// ////Throwing error
// let json='{"age":30}'
// try{
//   let user=JSON.parse(json)
//   if(!user.name){
//     throw new SyntaxError("Incompatible data: no Name")
//   }
// }catch(err){
//   console.log("JSON error: "+err.message);
// }




