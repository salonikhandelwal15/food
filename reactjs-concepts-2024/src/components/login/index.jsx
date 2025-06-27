import { loginFormElements } from "../../config";
import CommonForm from "../common-form";
import { useState } from "react";

const initialFormData={
    email:"",
    password:"",
};
function LoginComponent(){

    const [loginFormData,setLoginFormData]=useState(initialFormData);

   function onHandleSubmit(event){
        event.preventDefault();
         console.log(loginFormData,"loginFormData");

         //api logic & database logic

         setLoginFormData(initialFormData)
    }
    return(
        <div>
            <h1>Login Page Component</h1>
            <CommonForm 
            formData={loginFormElements} 
             setFormData ={setLoginFormData}
             formControls={loginFormElements}
             buttonText={"Login"}
             onHandleSubmit={onHandleSubmit}
             />

        </div>
    );
}
export default LoginComponent;