import Layout from "../../components/layout";
import Form from "../../components/form/CreateForm/form";
import "./addBlog.css";

function AddBlog(){
    return(
        <Layout>
            <div className="container">
                <div className="form">
                    <h2 className="form-header">Create Blog</h2>
                    <Form />
                </div>
            </div>
        </Layout>
    );
}

export default AddBlog;