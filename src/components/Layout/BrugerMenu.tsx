import { useContext } from 'react';
import { BlurContext } from '../../context/BlurPageContext';
const BurgerMenu = () => {
    const { handleSidebarReveal } = useContext(BlurContext)
    return (
        <>
            <div className="burger__icon" onClick={handleSidebarReveal}>
                <i className="fa-solid fa-bars" style={{ fontSize: '1.15rem' }}></i>
            </div>
        </>
    )
}


export default BurgerMenu;