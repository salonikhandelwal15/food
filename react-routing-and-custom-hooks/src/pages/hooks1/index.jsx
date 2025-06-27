import { useRef,useEffect } from "react";


function Hooks(){
    const countValue = useRef(0)
    const divElementRef=useRef()
    const inputRefElement=useRef()

    function handleClick(){
        countValue.current++
        console.log(countValue.current);
    }

    useEffect(()=>{
        const getDivReference=divElementRef.current;
        inputRefElement.current.focus();
        
        getDivReference.style.color="blue";
        setTimeout(()=>{
            getDivReference.style.color="green";

            setTimeout(()=>{
                getDivReference.style.color="red";
            },1000);
        },2000);
        console.log(getDivReference);;



    },[])

    return (
        <div>
            <h1>Use ref,use callback and use memo Hook</h1>
            <button onClick={handleClick}>Click Me</button>
            <div ref={divElementRef}>Some random text</div>
            <input name="name" placeholder="Enter your name" ref={inputRefElement}/>

        </div>
    );
}
export default Hooks;