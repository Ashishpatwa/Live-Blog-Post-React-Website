// import { createStoreHook } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import createPostReducer from './reducers/createPostReducer';

const mainReducer = combineReducers({
    createPost: createPostReducer
})

const initialData = {
    createPost: {items: [{
        id:11,
        title: "The Art of Travel Photography",
        category: "Photography",
        description: "Travel photography is more than just capturing beautiful landscapes and tourist attractions. It's about telling a story through your lens, capturing the essence of a place, and conveying the emotions of your journey. In this blog post, we'll explore the art of travel photography and share some tips to help you take stunning travel photos that will leave a lasting impression.",
        image: "/images/blog.jpeg",
        like: 0
    },
    {
        id:21,
        title: "The Art of Travel Photography",
        category: "Photography",
        description: "Travel photography is more than just capturing beautiful landscapes and tourist attractions. It's about telling a story through your lens, capturing the essence of a place, and conveying the emotions of your journey. In this blog post, we'll explore the art of travel photography and share some tips to help you take stunning travel photos that will leave a lasting impression.",
        image: "/images/blog.jpeg",
        like: 0
    }
    ],
    viewPost: {} 
}

   
}


const store = createStore(mainReducer,initialData)

export default store;
