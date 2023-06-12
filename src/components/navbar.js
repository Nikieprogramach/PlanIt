import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { Button } from './Button';

function NavBar() 
{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <nav className = 'navbar'>
            <div className = "navbar-container">
                <Link to = "/" className='navbar-logo' onClick={closeMobileMenu}>
                    PlanIt
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu.active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/photos' className='nav-links' onClick={closeMobileMenu}>
                            Photos
                        </Link>
                    </li>
                    {localStorage.getItem('sessionId') != null ? 
                    <li className='nav-item sign-up-button'>
                        {/* <Link to='/sign-out' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Out
                        </Link> */}

                        {button && <Button buttonStyle='btn--outline' path='/sign-out'>Sign Out</Button>}
                    </li>
                    :
                    // <li className='nav-item'>
                    // <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    //     Sign Up
                    // </Link>
                    // </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                    }
                    {localStorage.getItem('sessionId') == null ?
                    <li className='nav-item sign-up-button'>
                            {button && <Button buttonStyle='btn--outline' path='/sign-up'>Sign Up</Button>}
                    </li>
                    :
                    <></>
                    }
                </ul>
            </div>
        </nav> 
    )
}

export default NavBar