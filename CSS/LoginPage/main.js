// const users=localStorage.getItem('user')
const storedUserData = localStorage.getItem("currentUser");

const users = JSON.parse(storedUserData);

// // Populate the data
document.getElementById("username").innerText = `Username: ${users.Name}`;
document.getElementById("email").innerText = `Email: ${users.username}`;
document.getElementById("loginDate").innerText = `Login Date: ${new Date().toLocaleDateString()} `;
document.getElementById("loginTime").innerText = `Login Time: ${new Date().toLocaleTimeString()} `;
document.getElementById("profileImage").src = users.profileImage;



//This code for navigation bar and header(coin, date)
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const dateElement = document.getElementById("date");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });

  rewardCoin() ///////Be aware this is added for testing plz remove it when

  const updateDate = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    dateElement.textContent = `Login Date: ${dateString}`;
  };

  updateDate();
});

function logOut(){
    window.location.href="./index.html"
}

//-------------------------------------------------------------------------------
//Function will count Counting the date difference
function dayDifference(date1, date2) {
    // Get the difference in milliseconds
    const differenceInTime = date2.getTime() - date1.getTime();
    // Convert the difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
}

//-----------------------------------------------------------------------------------

//GLobally declared so that we can use for date difference calculation
let currentDate=new Date();
let previousDate=localStorage.getItem(previousDate)
console.log(previousDate);
function rewardCoin(){
    
    const coin=document.getElementById('coin')

    //To store the current and previous date in the memory
    if(!localStorage.getItem(currentDate)){
        localStorage.setItem('currentDate',currentDate)
        // localStorage.setItem('previousDate',previousDate)
    }
    let dateDiff=dayDifference(previousDate,currentDate)
    let color='skyblue';
    let point=100;
    let count=1;
    let skinColor=false;

    if(dayDifference===1 || previousDate===undefined){
        if(count%6==1){
            point+=100;
        }
        if(count%6==2){
            point+=100;
        }
        if(count%6==3){
            point+=100;
        }
        if(count%6==4){
            point+=100;
        }
        if(count%6==5){
            point+=100;
        }
        if(count%6==0 || skinColor==flase){
            point+=0;
            skinColor=true;
            color='Crimson'
        }
        
    }
    else if(currentDate-previousDate===0){
        return
    }
    else{
        point=0
    }

    localStorage.setItem('count',count)
    coin.textContent=ponit;
}
previousDate=currentDate ; 
localStorage.setItem('previousDate',previousDate)
