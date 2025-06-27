import { useForm } from "react-hook-form";


function ReactHookFormExample(){

    //zod

    const{
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm();

    function onSubmitForm(formData){
        console.log(formData);

        reset();

    }


    return(
        <div>
            <h1>React Hook form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email',{
                        required:true
                        })}
                         name="email"
                          type="email"
                          />
                          {
                            errors.email && errors.email.type==='required'?(
                            <p style={{color:'red',fontWeight:'border',margin:'20px'}}>
                                Email is required
                                </p>
                             ) :null
                          }
                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password',{
                        required:true,
                        minLength:8,
                        })} 
                        name="password" 
                        type="password"
                        />
                        {
                            errors.password && errors.password.type==='required'?(
                            <p style={{color:'red',fontWeight:'border',margin:'20px'}}>
                                Password is required
                                </p>
                             ) :null}
                             {
                                errors.password && errors.password.type==='minLength'?(
                            <p style={{color:'red',fontWeight:'border',margin:'20px'}}>
                                Password should be atleast 8 characters! plaese verify the password that you entered
                                </p>
                                ):null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReactHookFormExample;