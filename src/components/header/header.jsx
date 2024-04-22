import "./header.css";
import logoImage from './logo.jpeg';

function Header(){

    return(
        <div className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand col-5 design">
                    <img src={logoImage} alt="logo" className="logoimage" />
                    <div className="icon">
                    <h1>Blog</h1><span>Trendz</span>
                    </div>
                </a>
               
                <div id="left">
                    <ul className="nav-ul">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/view/blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/add/blog">Create</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
      </div>
    
    );
}

export default Header;