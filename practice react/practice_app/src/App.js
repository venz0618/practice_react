import logo from './logo.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className='container'>
      
        {/* <img src={logo} className="App-logo" alt="logo"  width="80px"/>
        <h1>Fun facts about react</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k starts on Github</li>
          <li>Is maintained by Facebook</li>
          <li> Powers thousands of enterprise apps, including mobile apps</li>
        </ul> */}
        <Navbar/>
        <Main/>
        
    </div>
  );
}

export default App;
