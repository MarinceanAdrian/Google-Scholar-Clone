import BurgerMenu from './BrugerMenu';
import './Navbar.scss';
import { useContext } from 'react';
import { APIContext } from '../../context/APIContext';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { results, setResults } = useContext(APIContext);
    const navigate = useNavigate();
    let options = (
        <>
            <div className="nav__options profile">
                <span className="nav__options--icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <small>my profile</small>
                </span>
            </div>
            <div className="nav__options library">
                <span className="nav__options--icon">
                    <i className="fa-solid fa-star"></i>
                    <small>my library</small>
                </span>
            </div>
        </>
    )


    // if we already have results => we are redirected on the findings page
    if (results.length > 0) {
        options = (
            <>
                <div className="logo" onClick={() => {
                    setResults([])
                    navigate('/');
                }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Scholar_logo.png?20190206225436" alt="" />
                </div>
            </>
        )
    };

    let input = (
        <Input type="text" className='findings__form' />
    )
    return (
        <>
            <nav className="nav" style={{ backgroundColor: results.length > 0 ? '#F5F5F5' : '' }}>
                <div className="nav__options" style={{ gap: results.length > 0 ? '1rem' : '2rem' }}>
                    <nav className="nav__burger--icon">
                        {/* reusable Burger menu icon component */}
                        <BurgerMenu />
                    </nav>
                    {options}
                    {results.length > 0 && input}
                </div>
                <div className="nav__user">
                    <span className="nav__user--icon">
                        <i className="fa-solid fa-user"></i>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar;