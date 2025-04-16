import React from 'react';
import logo from '../../assets/img/logo.jpg';
import './NavbarComponent.css'

function NavbarComponent() {
    const navItems = [
        {
            id: 1,
            item: 'Home'
        },
        {
            id: 2,
            item: 'About Us'
        },
        {
            id: 3,
            item: 'Product'
        },
        {
            id: 4,
            item: 'Contact'
        },
        ]

    return (
        <div className='main-container'>
            <div className='inner-container'>
                <img src={logo} alt="" />
                <div className='navbar-item'>
                    {navItems.map((item, i) => (
                        <span key={i}>{item.item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent