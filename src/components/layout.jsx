import Footer from "./footer/footer";
import Header from "./header/header";


function Layout({title="Blog Post", children}){    //Object Destructing of props
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
} 

export default Layout;