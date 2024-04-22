const createPost = (data)=>{
    return {
        type: 'Create_Post',
        payload: data
    }
}

export default createPost;