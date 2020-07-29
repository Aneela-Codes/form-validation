let form = document.getElementById('form');

// let msg=document.getElementById('error');

form.addEventListener('submit', (e)=>{

    // let messages="You've provided wrong data";
    let name=document.getElementById('name').value;
  
   if(name!=="aneela22" && username!=="aneelareiko@gmail.com"){
       e.preventDefault();
   }
   
   else{
       window.open('welcome.html')
   }


})
// function validation(){

//     let messages=[];
//     let name=document.getElementById('name').value;
  
//    if(name!=="rahul" && username!=="aneelareiko@gmail.com"){
//        e.preventDefault();
//         messages.push("Wrong data input!");
//         msg.innerHTML=messages;
//         return true;
//    }
//    else{
//        window.open('welcome.html')
//    }

// }


