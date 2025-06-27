import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ReceipeList from './pages/recipes';
import CommentsList from './pages/comments';
import {useNavigate,Link,useRoutes} from 'react-router-dom';
import RecipeDetailsPage from './pages/recipe-details';
import NotFoundPage from './pages/not-found';
import Layout from './components/layout';
import ReactHookFormExample from './pages/react-hook-form-example';
import Hooks from './pages/hooks1';
import Memo from './pages/use-memo-example';
import ReactQueryDemo from './pages/react-query';

function CustomRoutes(){
  const element=useRoutes([
    {
      path :'/home',
      element:<Layout/>,
      children:[
        {
          path:'recipe-list',
          element:<ReceipeList/>},
          { path:'comments-list',
            element:<CommentsList/>},
          {path:'recipe-list/:id',
          element:<RecipeDetailsPage/>},
      ],
    },
    {
      path:'*',
      element:<NotFoundPage/>,
    },
    {
      path:'/react-hook-form',
      element:<ReactHookFormExample/>
    },
    {
      path:'/hooks',
      element:<Hooks/>
    },
     {
      path:'/memo',
      element:<Memo/>
    },
    {
      path:'/callback',
      element:<Callback/>
    },
    {
      path:'/react-query-demo',
      element:<ReactQueryDemo/>
    },
  ]);

return element
}

function App() {


  const naviagte=useNavigate()
  return(
    <div>
     {/*<h1>React routing,Custom hooks and more</h1>
      <div>
        <Link to={'/home/recipe-list'}>
        Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button onClick={()=>naviagte('/home/recipe-list')} style={{background:'purple',color:'white'}}>Naviagte to Recipe list Page</button>
      <button onClick={()=>naviagte('/home/comments-list')} style={{background:'purple',color:'white'}}>Navigate to Comments list page</button>*/}

     {/* <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<ReceipeList />}/>
        <Route path="comments-list" element={<CommentsList />}/>
        <Route path="recipe-list/:id" element={<RecipeDetailsPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes> */}
      <CustomRoutes/>
      </div>
  );
}
export default App;
  