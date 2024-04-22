
const createPostReducer = (state={}, action)=>{

console.log("aaaaaaaaaaaaaa",state)

    switch(action.type){
        case 'Create_Post':
            return { 
                ...state,
                items: [...state.items, action.payload] };
            
        case 'View_Post':
            let postDetail = state.items.filter((viewPost)=> viewPost.id == action.payload)
            return {
                ...state,
                viewPost: ( postDetail.length > 0 ) ? postDetail[0] : {}
            };
        case 'Delete_Post':
            return {
                ...state,
                items: state.items.filter((post)=>post.id != action.payload) 
            }
        case 'Update_Post':
           
         return {
            ...state,
            items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item)
          }
           
           
        default:
            return state
    }
    
}

export default createPostReducer