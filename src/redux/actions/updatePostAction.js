const updatePost = (data)=>{
    return {
        type: 'Update_Post',
        payload: data
    }
}

export default updatePost;