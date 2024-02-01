import Tab from './Tab';

function Home() {

  return (
    <div className="container">
      <div className="wrapper">
        <header className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 60" fill="currentColor" font-family="Google Sans">
            <text x="50%" y="50%" font-size="40" font-family="Google Sans" font-weight="bold" text-anchor="middle" dominant-baseline="middle">MalDetect</text>
          </svg>
        </header>
        <p className="about">
          Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.
        </p>
        <div>
          <Tab />
          <div className="tip bg-body-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.85a.6.6 0 0 0 .6-.6v-6.5a.6.6 0 1 0-1.2 0v6.5a.6.6 0 0 0 .6.6Zm.45-10.45a.6.6 0 1 1-1.2 0v-.8a.6.6 0 1 1 1.2 0v.8Z"></path>
              <path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-1.2a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6Z" clipRule="evenodd"></path>
            </svg>
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
