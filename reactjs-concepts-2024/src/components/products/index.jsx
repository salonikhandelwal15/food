import ProductItem from './components/product-item';
import './style.css';

const initialState=true;


function ProductList({ name,city,listOfProducts}) {

    //const flag=false;

    const[flag, setFlag]=useState(initialState);
    const[count,setCount]=useState(0);
    const[changeStyle,setChangeStyle]=useState(false)


    function handleToggleText(){
        setFlag(!flag);
    }

    function handleIncreaseCount(){
        setCount(count+1);
    }

    useEffect(()=>{
        setFlag(!flag);
        console.log('run only once page load');
        
        return()=>{
            console.log('component is unmounted->some side effects here also');
        };
    },[]) ;//this will only run on page load once

    useEffect(()=>{
        if(count===10)setChangeStyle(true);

    },[count]);
     console.log(changeStyle);
//function renderTextBlock(getFlag){
      //  return getFlag ? (
        //<h4>
          //   Name is {name},he/she is belongs to this city{city}
            // </h4> 
             //) : ( 
             //<h4>Hello World!</h4>
             //);
            //}

            //const renderTextBlock=flag?(
            //<h4>
            //Name is {name},he/she is belongs to this city{city}
             //</h4> 
             //):(
             //<h4>Hello world!</h4>
             //);

             //let renderTextBlock = null;
             //if(flag){
               // renderTextBlock =<h4>
                 //   Name is {name},he/she is belongs to this city{city}

                //</h4>
             //}
             //else{
               // renderTextBlock= <h4>Hello world!</h4>
             //}
             return(
        <div>
        <h3 className="title">ECommerce project</h3>
        <button onClick={handleToggleText}>Toggle Text</button>
        {/*<ProductItem/>*/}
        {flag ? (
            <h4>
                {name}and{city}
                </h4>
                ) : (
                <h4>Hello</h4>
                )}
                <div>
                    <button style={{backgroundcolor:changeStyle ? 'black':'white',color:changeStyle ?'white':'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                    <p>Count is{count}</p>
                </div>
       
        <ul>
            {
                listOfProducts.map((item,index) =>(
                    <ProductItem singleProductItem={item} key={index}/>
                ))
            }
        </ul>
        </div>
    );
}
export default ProductList