export function validateLogin(username, password){
    if(username === "admin" && password === "admin123"){
        console.log("Login Successful");
    }else{
        console.log("Invalid Credentials")
    }
};