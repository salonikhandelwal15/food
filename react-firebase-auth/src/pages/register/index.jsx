import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControl } from "../../config";
import {updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import auth  from "../..firebaseConfig";

function RegisterPage(){

    const{registerFormData,setRegisterFormData,registerWithFirebase,setLoading}=
    useContext(AuthContext);

    const navigate=useNavigate();

    console.log(registerFormData);

    function handleRegisterFormSubmit(event){
        event.preventDefault();

        registerWithFirebase()
        .then((result)=>{
                updateProfile(result.user,{
                    displayName:registerFormData.name,
                }).then(()=>{
                    console.log(auth.currentUser.displayName,"auth.currentUser.displayName");

                    if(auth.currentUser.displayName) {
                        setLoading(false);
                        navigate('/profile');
                    }

                });

               // navigate('/profile');

            })

        .catch((error)=> console.log(error));
    }
    //if(loading)return <h1>Loading please wait!</h1>;
   
    return(
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome back</h3>
                <p>Register Page</p>
                <CommonForm

                formControls={registerFormControl}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                onSubmit={handleRegisterFormSubmit}
                buttonText={'Save'}
                
                />
            </div>

        </div>
    );
}
export default RegisterPage;