import React from 'react'
import Menu from '../assets/img/Header/Menu.svg'
import Logo from '../assets/img/Header/Logo.svg'
import Search from '../assets/img/Header/Search.svg'
import Shopping_Bag from '../assets/img/Header/shopping_bag.svg'

const Header = () => {
    return (
        <div className='Header_wrap'>
            <div className="header">
                <div className="menu">
                    <img src={Menu} alt="" />
                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="right">
                    <div className="search">
                        <img src={Search} alt="" />
                    </div>
                    <div className="shopping_bag">
                        <img src={Shopping_Bag} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header