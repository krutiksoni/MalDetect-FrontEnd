import logo from '../images/logo.svg';
import appIcon from '../images/appIcon.svg';
import notification from '../images/notification.svg';
import modeChangeIcon from '../images/modeChangeIcon.svg';

function Header() {
    return (
        <div className="header">
            <div className="leftSide">
                <ul>
                    <li><a href="/"><img src={logo} alt="Logo" /></a></li>
                    <li><a href="/">Intelligence</a></li>
                    <li><a href="/">Hunting</a></li>
                    <li><a href="/">Graph</a></li>
                    <li><a href="/">API</a></li>
                </ul>
            </div>
            <div className="rightSide">
                <ul>
                    <li><a href="/"><img src={appIcon} alt="App" /></a></li>
                    <li><a href="/"><img src={notification} alt="Notifications" /></a></li>
                    <li><a href="/"><img src={modeChangeIcon} alt="Mode" /></a></li>
                    <li><a href="/">Sign in</a></li>
                    <li><a href="/" className='rounded-pill'>Sign Up</a></li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;