import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='bg-danger text-white'>Welcome to e-Raktakanika</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><h1><b>Logo</b></h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/App">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
            </li>

      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
           
  );
}

export default App;
