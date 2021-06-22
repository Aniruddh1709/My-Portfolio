import logo from '../logo.png'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
        <li className="nav-item"><a className="nav-link" href="#skill">Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#exp">Experience</a></li>
        <li className="nav-item"><a className="nav-link" href="#carouselExampleCaptions">Portfolio</a></li>
        <li className="nav-item"><a className="nav-link" href="http://github.com/Aniruddh1709">Github</a></li>
        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/aniruddh-premdas-80a7b0169">Contact Me</a></li>

        
      </ul>
      
    </div>
    </div>
</nav>
    )
}

export default Navbar
