import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ViewBlogs from '../pages/viewBlogs';
import EditBlog from '../pages/editBlog/editBlog';
import AddBlog from '../pages/addBlog/addBlog';
import ViewContent from '../pages/viewContent';
import ViewBlogs from '../pages/viewBlogs';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Error from '../pages/404';
import Home from '../pages/home/home';
import { LikeProvider } from '../contextApi/likeReducer';
// import { LikeProvider } from '../contextApi/context';
// import { useReducer } from 'react';
// import {reducer, initialState} from "../contextApi/likeReducer"

function Router() {
  // const {state, likeDispatch} = useReducer(reducer, initialState)
  return (
    <Provider store={store}>
    <LikeProvider>
      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='view/content' element={<ViewContent/>}></Route>
          <Route path='view/Blogs' element={<ViewBlogs/>}></Route>
          <Route path='edit/blog' element={<EditBlog/>}></Route>
          <Route path='add/blog' element={<AddBlog/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
     
    </LikeProvider>
    </Provider>
  );
}

export default Router;