import './Footer.scss';
const Footer = () => {
    return <footer className="footer">
        <div className="footer__language">
            <i className="fa-solid fa-earth-americas"></i>{' '}
            <small>EN</small>
        </div>
        <div className="footer__readings">
            <small className="footer--item help">help</small>
            <small className="footer--item terms">terms</small>
            <small className="footer--item privacy">privacy</small>
        </div>
    </footer >
}

export default Footer;