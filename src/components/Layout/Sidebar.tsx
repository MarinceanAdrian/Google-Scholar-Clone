import { useContext } from 'react';
import BurgerMenu from './BrugerMenu';
import { BlurContext } from '../../context/BlurPageContext';
// import logo from '../../assets/google_scholar_logo.png';
import './Sidebar.scss';

const Sidebar = () => {
    // context
    const { isSidebarVisible } = useContext(BlurContext);

    return (
        < nav className={`sidebar ${isSidebarVisible ? 'active' : ''}`
        }>
            <header className="sidebar__header">
                <BurgerMenu />
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Scholar_logo.png?20190206225436" alt="" />
                </div>
            </header>
            <main className="sidebar__body">
                <ul className="sidebar__body--list">
                    <li className='sidebar__list-item'>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span>my profile</span>
                    </li>
                    <li className='sidebar__list-item'>
                        <i className="fa-solid fa-star"></i>
                        <span>my library</span>
                    </li>
                    <li className='sidebar__list-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <span>alerts</span>
                    </li>
                    <li className='sidebar__list-item'>
                        <i className="fa-solid fa-magnifying-glass-chart"></i>
                        <span>metrics</span>
                    </li>
                    <li className='sidebar__list-item advanced'>
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                        <span>advanced search</span>
                    </li>
                    <li className='sidebar__list-item'>
                        <i className="fa-solid fa-wrench"></i>
                        <span>settings</span>
                    </li>
                </ul>
            </main>
        </nav >
    )
}

export default Sidebar;