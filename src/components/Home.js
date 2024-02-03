import Tab from './Tab';
import {ReactComponent as MalDetectText} from "../icons/MalDetect_Text.svg";
import {ReactComponent as InfoIcon} from "../icons/information.svg";

const Home = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <header className="text-primary">
          <MalDetectText />
        </header>
        <p className="about">
          Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.
        </p>
        <div>
          <Tab />
          <div className="tip bg-body-secondary">
            <InfoIcon />
            <span>
              Want to automate submissions? <a href="/">Check our API</a>, or access your <a href="/">API key</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
