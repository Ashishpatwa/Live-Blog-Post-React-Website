import React, { createContext, useReducer, useContext } from 'react';
import { useSelector } from 'react-redux';

const LikeContext = createContext();


const initialState = {
    likeData: [{
              id:11,
              like:0
            },
            {
              id:21,
              like:0
            }
          ]
    }
  

const reducer = (state={items: []}, action) => {
    switch (action.type) {
        case 'Like_Content':

        const updatelikedata = state.likeData.map((item) => {
          if (item.id == action.id)
          {
            item.like = item.like + 1
        
            return item
          } 
          else{ 
            return item
          }})

          if(!updatelikedata.find((item) => item.id === action.id)){
            updatelikedata.push({id: action.id, like:1})
          }
          
         
          return {
            likeData: updatelikedata
          }
        
    
        case 'UnLike_Content':
          return {
            likeData: state.likeData.map((item) => {
            if (item.id == action.id)
            {
              item.like = item.like - 1
              return item
            } 
            else{ 
              return item
            }})
          }
    
        default:
            return state;
    }
}

// Create a custom hook to access the context
export const useLikeContext = () => {
  return useContext(LikeContext);
};

// Create the context provider component
export const LikeProvider = ({ children }) => {
  const [state, likeDispatch] = useReducer(reducer, initialState);

  return (
    <LikeContext.Provider value={{ state, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
