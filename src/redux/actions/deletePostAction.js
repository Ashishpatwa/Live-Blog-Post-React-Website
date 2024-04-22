const deletePost = (id)=>{
    return {
        type: 'Delete_Post',
        payload: id
    }
}

export default deletePost;