import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img className='logo' src={logo} alt="" />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Header
