import { useContext } from 'react';
import { BlurContext } from '../../context/BlurPageContext';
import CSS from 'csstype';
import './Wrapper.scss';

type WrapperProps = {
    children: JSX.Element | JSX.Element[]
}

type CSSProps = {
    height: string,
    opacity: CSS.Property.Opacity | string,
    pointerEvents: CSS.Property.PointerEvents
}

const Wrapper = ({ children }: WrapperProps) => {

    const { isSidebarVisible } = useContext(BlurContext);
    console.log(isSidebarVisible);

    // inline styles
    const wrapperStyles: CSSProps = {
        height: '100vh',
        opacity: isSidebarVisible ? '0.3' : '',
        pointerEvents: isSidebarVisible ? 'none' : 'all',
    }
    return (
        <div style={wrapperStyles} className="page__landing">
            {children}
        </div>
    )
}


export default Wrapper;