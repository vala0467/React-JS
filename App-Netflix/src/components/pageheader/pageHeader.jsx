import PageBackground from '../../assets/images/pageBackground.jpg';
import './pageHeader.css';

function PageHeader() {
    return (
        <div>
            <header className="page-header">
                <div className='row'>
                    <div className='col-md-3 pageLogo'>NETFLIX</div>
                    <div className='col-md-6'></div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className="dropdown col-md-6">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Chines</a></li>
                                    <li><a className="dropdown-item" href="#">Japanese</a></li>
                                    <li><a className="dropdown-item" href="#">Greek</a></li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn btn-danger'>Signin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default PageHeader;