import "./form.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom'; //use for Single page application

import updatePost from "../../../redux/actions/updatePostAction"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Form(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postData = useSelector((state)=>{
        return state.createPost.viewPost
    })

    const [createBlogFields, setBlogFields] = useState({
        title: postData.title,
        category: postData.category,
        description: postData.description,
        image: postData.image,
    })

    const [ErrorBlogFields, setErrorFields] = useState({
        titleErr: '',
        categoryErr: '',
        descriptionErr: '',
        imageErr: '',
    })

    function handleInputChange(e) {
        if (e.target.name === "image") {
          const selectedImage = e.target.files[0];
          console.log(selectedImage);
          if (selectedImage) {
            const imageURL = URL.createObjectURL(selectedImage);
         
            setBlogFields({
                ...createBlogFields,
                [e.target.name]: imageURL,
              });
          }
        } else {
          setBlogFields({
            ...createBlogFields,
            [e.target.name]: e.target.value,
          });
        }
      }
      

    function handleSubmit(e){
        e.preventDefault();

        Object.assign(createBlogFields, {id:postData.id})

        if(validateForm()){

            dispatch(updatePost(createBlogFields))

            toast.success("Updated Successfully !", {
                position: toast.POSITION.TOP_CENTER
              });
            setTimeout(()=>{
                navigate('/view/blogs');
            },1500)
        }
        else{
            toast.error("Invalid Submition",{
                position: toast.POSITION.TOP_CENTER
            })
        }

    }

    function validateForm(){
        var isformvalid = true;
        setErrorFields({
            titleErr: '',
            categoryErr: '',
            descriptionErr: '',
            imageErr: '',
        })
        if(createBlogFields.title == ""){
            isformvalid = false;
            setErrorFields(prevState=>({
                ...prevState,
                titleErr: "Please fill title"
            }))
        }
        else if(createBlogFields.category == ""){
            isformvalid = false;
            setErrorFields(prevState=>({
                ...prevState,
                categoryErr: "Please fill Category"
            }))
        }
        else if(createBlogFields.description == ""){
            isformvalid = false;
            setErrorFields(prevState=>({
                ...prevState,
                descriptionErr: "Please fill description"
            }))
        }
        else if(createBlogFields.image == ""){
            isformvalid = false;
            setErrorFields(prevState=>({
                ...prevState,
                imageErr: "Please select image"
            }))
        }

        return isformvalid;
    }


    return(
                <form action="/" method="post" >
                    <ToastContainer/>
                    <div className="form-wrap">
                        <label htmlFor="title">Title</label>
                        {
                            ErrorBlogFields.titleErr.length > 0 && <p className="error">{ErrorBlogFields.titleErr}</p>
                        }
                    </div>
                    <input type="text" name="title" id="title" value={createBlogFields.title} onChange={handleInputChange} onlyRead />

                    <div className="form-wrap">
                        <label htmlFor="category">Category</label>
                        {
                            ErrorBlogFields.categoryErr.length > 0 && <p className="error">{ErrorBlogFields.categoryErr}</p>
                        }
                    </div>
                    <input type="text" name="category" id="category"value={createBlogFields.category} onChange={handleInputChange}  />
                    <div className="form-wrap">
                        <label htmlFor="description">Description</label>
                        {
                            ErrorBlogFields.descriptionErr.length > 0 && <p className="error">{ErrorBlogFields.descriptionErr}</p>
                        }
                    </div>
                    <textarea name="description" id="description" cols="50" rows="4" value={createBlogFields.description} onChange={handleInputChange} ></textarea>
                    <div className="form-wrap">
                        <label htmlFor="image">Image</label>
                        {
                            ErrorBlogFields.imageErr.length > 0 && <p className="error">{ErrorBlogFields.imageErr}</p>
                        }
                    </div>
                    <input type="file"  accept="image/*" name="image" id="image" onChange={handleInputChange} />
                
                    <button type="button" className="btn btn-primary submit-formm" onClick={handleSubmit}> Publish</button>
                </form>
    );
}

export default Form;