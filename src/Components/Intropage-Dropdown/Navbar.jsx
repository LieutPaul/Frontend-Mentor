import ham from './images/ham.png'
import { ReactComponent as Brand } from './images/logo.svg'
import './Navbar.scss'

const Navbar = ({showNavbar,setShowNavbar}) => {
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar flex">
        <div className="flex w-full blg:w-fit">
            
            <div className="logo">
                <Brand />
            </div>
            
            <div className="menu-icon w-full" onClick={handleShowNavbar}>
                <img className='logo-img' src={ham} alt="hamburger"/>
            </div>
            
            <div className={`nav-elements`}>
                <ul>
                    <li className='navbar-text'>
                        Features
                    </li>
                    <li className='navbar-text'>
                        Company
                    </li>
                    <li className='navbar-text'>
                        Careers
                    </li>
                    <li className='navbar-text'>
                        About
                    </li>
                </ul>
            </div>
        
        </div>

        <div className={`nav-elements ${!showNavbar && 'mr-4 flex'}  ${showNavbar && 'active'}`}>
            <ul className={`${showNavbar && 'ml-4 mt-4'}`}>
                {showNavbar && 
                <>
                    <li className='text-white'>
                        Features
                    </li>
                    <li className='text-white'>
                        Company
                    </li>
                    <li className='text-white'>
                        Careers
                    </li>
                    <li className='text-white'>
                        About
                    </li> 
                </>
                }
            </ul>

            {!showNavbar &&

            <ul className='w-full flex justify-center'>
                <li>
                    <div className='navbar-text'>Login</div>
                </li>
                <li>
                    <div>
                        <button className={`register-button`}>Register
                        </button>
                    </div>
                </li>
            </ul>

            }
            
            { showNavbar && 
            
            <div className='w-full text-center'>
                <div className='mt-4 text-center text-white'>
                    Login
                </div>
                <div>
                    <div className='mt-4 w-full flex flex-column justify-center items-center'>
                        <button disabled={false} className='w-4/5 register-button-phone' onClick={()=>{console.log("Pressed.")}}>Register</button>
                    </div>
                </div>
            </div>
            
            }
        </div>
    
    </nav>
  )
}

export default Navbar