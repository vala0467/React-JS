
import './pageContent.css';

function PageContent() {
    return (
        <>
            <div className="page-content">
                <h1 className='pageContentText'>Unlimited films, series and more</h1>
                <h3 className='tagLine'>Starts at £5.99. Cancel at any time.</h3>
            </div>
            <div>
                <form className='d-flex justify-content-center mt-4'>
                    <input className='emailInput' type="email" placeholder='Email Address' />
                    <button className='btn btn-danger getStartedBtn btn-lg'>Get Started <i className="bi bi-chevron-right"></i></button>
                </form>
            </div>
        </>
    );
}   

export default PageContent;