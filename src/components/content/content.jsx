import deletePost from "../../redux/actions/deletePostAction";
import Error from "../404/error";
import "./content.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import viewPost from "../../redux/actions/viewPostAction";
import { useLikeContext } from '../../contextApi/likeReducer';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function Content() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { state, likeDispatch } = useLikeContext();
    const [liked, setLiked] = useState(false);

    console.log("op", state)
  
    const post = useSelector((state) => {
      return state.createPost.viewPost;
    });

    console.log("id", post.id);
  
    function handleEdit(id) {
      dispatch(viewPost(id));
      navigate('/edit/blog');
    }
  
    function handleDelete(id) {
      dispatch(deletePost(id));
      toast.success("Deleted Successfully !", {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(()=>{
        navigate('/view/blogs');
    },1500)
     
    }
  
    function handleLike(id) {
      if (liked) {
        likeDispatch({ type: 'UnLike_Content', id: id });
        toast.success("UnLiked Successfully !", {
          position: toast.POSITION.TOP_CENTER
        });
      } 
      else {
        likeDispatch({ type: 'Like_Content', id: id });
        toast.success("liked Successfully !", {
          position: toast.POSITION.TOP_CENTER
        });
      }

      setLiked(!liked);
    }
  
    if (!post.id) {
      return <Error />;
    }
  
    return (

      <div className="container">
        <div className="post">
        <ToastContainer/>
          <h2 className="title">{post.title}</h2>
          <div className="actions">
            <div className="left">
              <button className="btn btn-primary" onClick={()=>handleLike(post.id)}>
                {liked ? 'Unlike' : 'Like'} { state.likeData.map((item) =>
            item.id === post.id && item.like ? item.like : "")}
              </button>
            </div>
            <div className="right">
              <button className="btn btn-warning" onClick={() => handleEdit(post.id)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </div>
          <div className="mainContent">
            <div className="category">
              Category: <i>{post.category}</i>
            </div>
            <div className="ContentImage">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="Description">{post.description}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Content;
  