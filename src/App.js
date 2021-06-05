import logo from './logo.svg';
import './App.css';
import PrivateRepos from './PrivateRepos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrivateRepos />
        <p>
            <small>v{process.env.REACT_APP_VERSION}</small></p>
        <a
          className="App-link"
          href="https://devmentor.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          React with devmentor.pl
        </a>

      </header>
      
    </div>
  );
}

export default App;
