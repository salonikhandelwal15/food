import { registerFormElements } from "../../config";
import CommonForm from "../common-form";
import { useState } from "react";
const initialRegisterFormData={
    name:'',
    email:'',
    password:'',
}

function RegisterComponent(){

    const[registerFormData,setRegisterFormData]=useState(initialRegisterFormData);

    function handleRegisterOnSubmit(event){
        event.preventDefault();
        console.log(registerFormData);

        setRegisterFormData(initialRegisterFormData);

    }
    return(
        <div>
            <h1>Register Page Component</h1>
            <CommonForm formControls={registerFormElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText={"Register"}
            onHandleSubmit={handleRegisterOnSubmit}
            
            
            />

        </div>
    );
}
export default RegisterComponent;