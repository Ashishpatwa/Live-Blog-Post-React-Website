import "./posts.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import viewPost from "../../redux/actions/viewPostAction";
import { useNavigate  } from 'react-router-dom'; 

function Post(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postList = useSelector((state)=>{
        console.log(state)
        return state.createPost.items
});

function handleViewContent(id){
    console.log(id)
    dispatch(viewPost(id))
    navigate('/view/content');

}

if (postList.length === 0) {
    return <div className="container">
            <div className="posts">
                <div className="noPost">No blogs found</div>
            </div>
        </div>;
}

    return(
        <div className="container">
            <div className="posts">
                <h2 class="headerLine">Our Blogs</h2>

                <div class="card_container">
                {  postList.map(item=>
                
                    <div class="card_item">
                          <img src={item.image} alt="" />
                        <div class="card_info">
                            <li>{item.title}</li>
                            <li>{item.category}</li>
                            <li>{item.description}</li>
                            <button class="btn btn-outline-primary btn-sm mt-1" onClick={()=>handleViewContent(item.id)}>Read More</button>
                        </div>
                    </div>
                

                )}

                </div>

                
            </div>
        </div>
      
    );
}

export default Post;