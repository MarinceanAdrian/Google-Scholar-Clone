import './SidebarDetails.scss';
import { useContext } from 'react';
import { APIContext } from '../../../context/APIContext';

const SidebarDetails = () => {
    const { resultsSearchMetadatas } = useContext(APIContext);

    // const { time_taken_displayed, total_results } = resultsSearchMetadatas;

    return <nav className="findings--secondary-nav">
        <div className='secondary__nav--icon-container'>
            <img className="secondary__nav--icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/2048px-Google_Scholar_logo.svg.png" alt="google scholar icon" />
            <span>Articles</span>
        </div>
        <div className="secondary__nav--results">
            <span>About {resultsSearchMetadatas.total_results} results (<strong>{resultsSearchMetadatas.time_taken_displayed.toFixed(2)}</strong> sec)</span>
        </div>
    </nav>
}

export default SidebarDetails;