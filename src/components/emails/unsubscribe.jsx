import React, {useState} from 'react';
import logo1 from '../../images/logo7.png';
import {Link} from 'react-router-dom';
import './emails.css'

function Unsubscribe(){

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <>
                    <div className='nav'>
        <div className='logo'>
            <Link style={{textDecoration: 'None'}} to='/'><img src={logo1} alt='logo'/></Link>
        </div>
        <button 
            onClick={() => {
                setIsNavExpanded(!isNavExpanded)
            }}
            className="hamburger">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div className={isNavExpanded ? "nav__menu expanded" : "nav__menu"}>
            <ul>
                <Link style={{textDecoration: 'None'}}  to="/"><li>Home</li></Link>
                <Link style={{textDecoration: 'None'}}  to="/blog"><li>Blog</li></Link>
                <Link style={{textDecoration: 'None'}}  to="/services"><li>Services</li></Link>
                <Link style={{textDecoration: 'None'}}  to="/about"><li>About Us</li></Link>
                <Link style={{textDecoration: 'None'}}  to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
        </div>

        <div className='hero-div'>
            <div className='overlay'></div>
            <div className='hero'>
                <h2>Unsubscribe</h2>
            </div>
        </div>

        <div className='unsub'>
            <form>
                <h2>Email preferences</h2>
                <p>Enter your email below to unsubscribe from receiving emails from us</p>
                <input 
                    type='email' required
                    placeholder='Enter your email'
                />
                <div className='submit'>
                    <input 
                        type='submit'
                    />
                </div>
            </form>
        </div>

        </>
    )
}

export default Unsubscribe;