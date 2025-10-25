import React from 'react';
import './styleAndClassBinding.css';

export function StyleAndClassBinding() {
    var userClassName = "msgBlock";
    return (
        <div>
            <h2>Style and Class Binding</h2>
            <div style={{"color": 'green', "fontSize": "20px", "fontWeight": 'bold'}} className={userClassName}>
                This box is styled using CSS class binding.
            </div>
        </div>
    );
}

{/* <b style="background-color: blue;font-size:20px;border:2px solid"></b> */}

{/* <div class="abc"></div> */}