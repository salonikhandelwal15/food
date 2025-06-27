import {useState} from "react";

function FormComponent(){
    const[nameValue,setNameValue]=useState('');
    const[emailValue,setEmailValue]=useState('');
    const[FormData,setFormData]=useState({name:'',email:''})

    function handleInputChange(event){
        console.log(event);
        const {value}=event.target;
        //setNameValue(event.target.value)
        setNameValue(value);

    }
    function handleEmailChange(event){
        const {value}=event.target;
        setEmailValue(value);

    }

    function handleOnChange(event){
        console.log(event.target.name);

        const {name,value}=event.target
        setFormData({
            ...FormData,
            [name]:value
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        //call the API and pass the name value
        console.log(nameValue,emailValue ,"nameValue");

    }
    console.log(FormData);
    
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                 value={FormData.name}
                 name="name"
                 id="name"
                 placeholder="Enter your name"
            //onChange={handleOnChange}

            onChange={(event)=>setFormData({
                ...FormData,
                [event.target.name]:event.target.value
            })}
        />
         <input 
            value={FormData.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            //onChange={handleOnChange}
             onChange={(event)=>setFormData({
                ...FormData,
                [event.target.name]:event.target.value
            })}
            
        />
        <button type="submit">Submit</button>
            </form>
           
        </div>
    );
}
export default FormComponent;