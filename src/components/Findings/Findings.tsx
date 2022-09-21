import Result from './Result/Result'
import { useContext } from 'react';
import { APIContext } from '../../context/APIContext';
import Navbar from '../Layout/Navbar';
import MainFindings from './SidebarDetails/MainFindings/MainFindings';
import SidebarDetails from './SidebarDetails/SidebarDetails';

const Findings = () => {
    const { results } = useContext(APIContext);
    return (
        <>
            <Navbar />
            <SidebarDetails />
            <MainFindings />
        </>
    )
}

export default Findings;