function chechCredentials (username,password){
    const data = {
       david: '123456'
    };
    // 
 
    return data[username] === password ;
}


function login(){

    const username= document.querySelector('#input-username').value;
    const password=document.querySelector('#input-password').value;

    if(username === '' || password ===''){
        alert('please fill all the fields ')
    }else{
        document.querySelector("h1").innerHTML = "no entry";
        document.querySelector("h1").style.border = "1px solid red"
    }
};

     
    
