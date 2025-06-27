//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import ContextButtonComponent from './components/context-concepts/button';
import ContextTextComponent from './components/context-concepts/text';
import FormComponent from './components/form';
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
//import ClassBasedComponent from './components/class-bases-component';
//import ClassBasedComponent from './components/class-based-component';
//import FunctionalComponent from './component/functional-component';
//import ProductList from './components/products';
//import Users from './components/users';
//import UseReducerExample from './components/use-reducer-example';




const dummyProductData=['Product 1','Product 2','Product 3'];


{/*App->product List-> product item->button component*/}

function App() {
  return(
  <div>
    <h1>React JS </h1>
    {/*<ClassBasedComponent />*/}
    {/*<FunctionalComponent />*/}

   {/*<ProductList listOfProducts={dummyProductData} name="Roxy" city="ABC" /> */}
   {/*<Users />*/}
   {/*<ContextButtonComponent/>
   <ContextTextComponent/>*/}
   {/*<UseReducerExample/>*/}
   {/*<FormComponent/>*/}
   <div style={{display:'flex',gap:'20px'}}>
    <LoginComponent/>
    <RegisterComponent/>
   </div>

  </div>
 );
}
export default App;