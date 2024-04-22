import "./error.css";

function Error(){

    return(
        
<div class="bottom_container">
    <div class="error_page">
        <div class="content">
                <h1>Oops!</h1>
                <h3>We can't seem to find the page you're looking for</h3>
                <h2>Error Code: 404</h2>
                <a href="/"> <button class="btn btn-danger">Back to home</button></a>
        </div>
        <div class="gif">
            <img src="/images/error.jpeg" alt="error" />
        </div>
     </div>
</div>

    );
}

export default Error;