import React, { useState } from 'react'
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
        <div style={{"width":"100%","height":"100vh"}}>
            <nav className='mobile-navbar'>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <div className={menu_class}>
                    Option 1
                </div>
            </nav>
        </div>
    )
}
