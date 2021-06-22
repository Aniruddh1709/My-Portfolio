import im from '../me.jpg'

function Aboutme() {
    return (
            <div id="about" className="card p-5">
                <div className="Innercard row g-0 p-2 bg-dark">
                <img src={im} alt="..." className=" cardBack col-sm-12 col-md-12 col-lg-6"/>
                <div className="card__details col-sm-12 col-md-12 col-lg-6 p-3 ">
                    <div className="name">Aniruddh Premdas</div>
                    <p className="mt-5" style={{fontSize:"1.5rem",color:"#FFA500"}}>
                    Hi,I am a third year engineering student who's interested in coding and web development. I design and develop websites and web apps.
                     I am always open to projects and collaborations and anyone interested can contact me.
                    </p>
                </div>
                </div>
            </div>
    )
}

export default Aboutme
