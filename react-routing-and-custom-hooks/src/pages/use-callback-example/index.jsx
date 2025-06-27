import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallbackExample(){
    const [countOne,setcountOne]=useState(0);
    const [countTwo,setcountTwo]=useState(0);
    const memoriseSetCountOneFunc=useCallback(()=>setcountOne(countOne+1),[countOne])
    const memoriseSetCountTwoFunc=useCallback(()=>setcountTwo(countTwo+1),[countTwo])



    return(
        <div>
            <h1>Use callback</h1>
            <Counter countValue={countOne}onClick={memoriseSetCountOneFunc}/>
            <Counter countValue={countTwo}onClick={memoriseSetCountTwoFunc}/>
        </div>
    );
}
export default UseCallbackExample;