import React, { useState } from 'react'
import logo from './images/logo.svg'
import './Navbar.scss'

export default function Navbar() {
    
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked,setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        }else{
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div>
            <nav className='mobile-navbar'>
                <img className="logo" src={logo} alt="logo"/>
                <div className="burger-menu">
                    <div className='w-full h-full hover:cursor-pointer flex flex-column items-end justify-between' onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                    
                </div>
                <div className={menu_class}>
                    Option 1
                </div>
            </nav>
        </div>
    )
}
