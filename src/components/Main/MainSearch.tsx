import Input from '../Layout/Input';
import './MainSearch.scss';

const MainSearch = () => {
    return (
        <>
            <section className="landing">
                <div className="landing__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Scholar_logo.png?20190206225436" alt="Google scholar logo" />
                </div>
                <div className="landing__search">
                    <Input type="text" className='landing__form' />
                </div>
                <div className="landing__options">
                    <input type="radio" name="options" /> <small>Articles</small>
                    <input type="radio" name="options" /> <small>Case law</small>
                </div>
                <p className="landing__motto">stand on the shoulders of giants</p>
            </section>
        </>
    )
}

export default MainSearch;