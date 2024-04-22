import Layout from "../../components/layout";
import "./home.css";

function Home(){

    return(
        <Layout>
        <div className="container">
            <div className="item">
                <h2 className="slogan">Explore fresh blog posts by writers in various categories.</h2>
                <div className="action-btn">
                    <a href="/view/blogs" className="button"><button className="btn btn-warning btn-lg">Explore Blogs</button></a>
                    <a href="/add/blog" className="button"><button className="btn btn-primary btn-lg">Create Blogs</button></a>
                </div>
                <img class="contentImg" src="/images/blog.jpeg" alt="Blog logo"/>
            </div>
        </div>
        </Layout>
    ); 
}

export default Home;