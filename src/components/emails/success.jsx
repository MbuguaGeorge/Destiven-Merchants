import React from 'react';
import './emails.css';
import {Link} from 'react-router-dom';

function Success(){
    return (
        <>
            <div className='success'>
                <h2>We have removed your email address from our list</h2>
                <p>We're sorry to see you go</p>
                <p>For questions or comments, please contact us at: <span>stephen@destivenmerchants.com</span></p>
                <Link to='/'><h5>&lt;&lt; return to our website</h5></Link>
            </div>
        </>
    )
}

export default Success;