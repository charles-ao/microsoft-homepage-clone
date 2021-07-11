import { VscChevronDown, VscSearch, VscClose } from "react-icons/vsc";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import Logo from '../../images/logo.png';
import LoginIcon from '../../images/login-icon.svg';
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const {loadDropbar, toggleDrop, toggleSide, loadSidebar} = useGlobalContext();
  return (
    <div>
        <nav>
          <div className='nav-center'>
            <div  className='nav-content-mobile-left'  onClick={toggleSide}>
              <div className='menu'>
                {loadSidebar ? <VscClose /> : <IoMenuOutline />}
              </div>
              <div className='search-ico-m'>
                <VscSearch />
              </div>
            </div>
            <div className='nav-content-left'>
              <div className='nav-header'>
                <img src={Logo}  className='logo' alt='logo'/>
              </div>
              <ul className='nav-links'>
                <li className='nav-item'><a href='/'>microsoft 365</a></li>
                <li className='nav-item'><a href='/'>office</a></li>
                <li className='nav-item'><a href='/'>windows</a></li>
                <li className='nav-item'><a href='/'>xbox</a></li>
                <li className='nav-item'><a href='/'>support</a></li>
              </ul>
            </div>
            <div className='nav-content-right'>
              <div 
                onClick={toggleDrop}
                className={loadDropbar? 
                  'all-microsoft drop-active' 
                  : 
                  'all-microsoft'
                }>
                <p>all microsoft</p>
                <VscChevronDown />
              </div>
              <div className='search-ico'>
                <VscSearch />
              </div>
              <div className='cart-ico'>
                <IoCartOutline />
              </div>
              <img src={LoginIcon} className='login-icon' alt='login-icon'/>
            </div>
          </div>
        </nav>
         
    </div>
  )
}

export default Navbar