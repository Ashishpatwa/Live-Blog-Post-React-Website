const viewPost = (id)=>{
    return {
        type: 'View_Post',
        payload: id
    }
}

export default viewPost;