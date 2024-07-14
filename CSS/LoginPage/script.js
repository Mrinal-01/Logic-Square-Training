//This two line to moving the Login and Registration Page
let card=document.getElementById('card')
function openRegister(){
    card.style.transform="rotateY(-180deg)"
}
function openLogin(){
    card.style.transform="rotateY(0deg)"
}





// This code is for login

// const users=[
//     {Name:"Mrinal Bera", username:"mrinal@logic-square.com", password:"Mrinal@123",profileImage:"./Images/ProfilePic.jpeg"},
//     {Name:"Kiran Debnath",username:"Kiran@logic-square.com",password:'Kiran@123',profileImage:"./Images/Kiran.jpg"},
//     {Name:"Abhijit Jana",username:"Abhijit@logic-square.com",password:'Abhijit@123',profileImage:"./Images/Abhijit.jpg"}
// ]
// localStorage.setItem('user', JSON.stringify(users))

users=JSON.parse(localStorage.getItem('user'))
let currentDate=new Date().toString()
localStorage.setItem('currentDate', currentDate)
currentDate = new Date(localStorage.getItem('currentDate'))
// console.log(typeof currentDate);

function loginValidation(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // var passw=  /^[A-Za-z]\w{7,14}$/;
    // // if()
    
    // Check if the email and password match any user in the array
    const user = users.find(u => u.username === email && u.password === password);
    
    //Store the currentUser in local storage then in LandingPage(main.html)
    //I will access the currentUser and his properties
    let currentDate=new Date('2024/05/07')
    
    
    
    //This will store the current login time will fetch from main.js
    //As we are not using any token so we store it in localStorage

    if(user){
        localStorage.setItem('currentUser', JSON.stringify(user))
        window.location.href='./main.html'
        
        return false;
    }
    else{
        const errMsg=document.getElementById('loginError')
        errMsg.textContent='Invalid email or password. Please try again'
        return false;
    }

}





//This code for loggle between show and hide password button
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('password-hidden');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        // toggleIcon.classList.add('show-password');
        toggleIcon.src='./Images/OpenEye.png'
    } else {
        passwordField.type = 'password';
        // toggleIcon.classList.remove('show-password');
        
        toggleIcon.src='./Images/CloseEye.png'
    }
}
