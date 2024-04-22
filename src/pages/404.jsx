import Error from "../components/404/error";
import Layout from "../components/layout";

function NotFound(){
    return(
        <Layout>
           <Error/>
        </Layout>
    );
}

export default NotFound;