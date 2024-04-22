import Layout from "../../components/layout";
import Form from "../../components/form/UpdateForm/form";

import "./editBlog.css";

function EditBlog(){
    return(
        <Layout>
        <div className="container">
            <div className="form">
                <h2 className="form-header">Update Blog</h2>
                <Form />
            </div>
        </div>
        </Layout>
    );
}

export default EditBlog;