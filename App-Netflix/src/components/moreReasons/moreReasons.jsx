import './moreReasons.css';
import axios from 'axios';
function MoreReasons() {
    var userName = "RAJ";
    var userAge = 20;
    var isFeePaid = true;
    var countryDetails = {
        name: 'India',
        code: 'IND'
    }
    var productDetailsInfo = {name: 'KRish'};
    axios.get("https://fakestoreapi.com/products/1").then((response) =>{
        console.log("response");
        console.log(response);
        productDetailsInfo = response.data;
    })

    var moreReasons = [
        {
            title: 'Enjoy on your TV',
            text: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
        },
        {
            title: 'Download your series to watch offline',
            text: 'Save your favourites easily and always have something to watch.'
        },
        {
            title: 'Watch everywhere',
            text: 'Stream unlimited films and series on your phone, tablet, laptop and TV.'
        },
        {
            title: 'Create profiles for children',
            text: 'Send children on adventures with their favourite characters in a space made just for them — free with your membership.'
        }
    ];
    
    // document.querySelector("span").innerText = userName;
    return (
        <>
            <div>User name - {userName}</div>
            <div>Age - {userAge}</div>
            <div>
                FEepaid - {isFeePaid.toString()}
            </div>
            <div>
                Country Details - {JSON.stringify(countryDetails)}
            </div>
            <div>
                productDetailsInf0 - {JSON.stringify(productDetailsInfo)}
            </div>
            <div className="moreReasons">
                {
                    moreReasons.map((reason) => (
                        <div className="card" style={{ width: '15rem', height: '380px' }} >
                            <div className="card-body">
                                <h5 className="card-title">{reason.title}</h5>
                                <p className="card-text">{reason.text}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </>
    );
}

export default MoreReasons