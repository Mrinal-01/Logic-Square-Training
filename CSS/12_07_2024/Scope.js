// function a(){
//   var b=10;
//   function c(){
//     console.log(b);
//   }
//   c()
// }
// a()
// // console.log(b);



function x(){
  for(let i=1;i<=5;i++){
    function close(i){
      setTimeout(function(){
        console.log(i);
    },i*1000)
    
    }
    close(i)
  }
}
x()