function myFunc(){
        let message =document.getElementById("p1");
        message.innerHTML = "";
        let x = document.getElementById("inp-1").value
        try{
            if(x == ""){
                throw "Please enter your Email" 
            }
            if(x == x + "gmail.com"){
                throw "Please enter correct Email"
            }
            if(x.lenght < 2){
                throw "Its too short" 
            }
            
        }catch(error){
            message.innerHTML = "ERROR " +  error
        }
    }