import Typed from 'react-typed';


function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Developer</h1>
                <Typed
                className="typed-text"
                strings={["I","Am","Aniruddh"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
               
            </div>
            
        </div>
    )
}

export default Header
