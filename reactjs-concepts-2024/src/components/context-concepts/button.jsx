import {useContext}from"react";
import { GlobalContext } from "../../context";
function ContextButtonComponent(){

    const {handleChangeThemeOnButtonClick }=useContext(GlobalContext);

    {/*return <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change Theme</button>;*/}
    return(
        <buuton onClick={handleChangeThemeOnButtonClick}>Change Theme</buuton>
    )
}

export default ContextButtonComponent;