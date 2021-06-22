import './portfolio.css'
import whatsapp_image from '../whatsapp_image.png'
import chatapp from '../chatapp.jpg'
import omr from '../what-is-omr.png'
import hulu from '../hulu.png'
function Portfolio() {
    return (

 
  <div id="carouselExampleCaptions" className="p-5 carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className=" carousel-inner">
    <div className="carousel-item active">
      <div className="d-block w-100">
          <a href="https://github.com/Aniruddh1709/Whatsapp_chef">
          <img  className="pb-5 project" src={whatsapp_image} alt="...."></img>
          </a>
      </div>
      <div className=" carousel-caption d-none d-md-block">
        <h5 h5 className=" pt-5">Whatsapp Chef Chatbot</h5>
        <p>Gets you recipes of Food Items using computer Vision</p>
      </div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100" alt="...">
      <a href="https://hulu-clone-nu-livid.vercel.app/">
      <img  className="pb-5 project" src={hulu} alt="...."></img>
      </a>
      </div>
      <div className=" carousel-caption d-none d-md-block">
        <h5 h5 className="pt-5">Hulu Movie App</h5>
        <p>Frontend clone of a movie streaming App </p>
      </div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100" alt="...">
        <a href="https://github.com/Aniruddh1709/OMR-Scanner">
      <img  className="pb-5 project" src={omr} alt="...."></img>
      </a>
      </div>
      <div className=" carousel-caption d-none d-md-block">
        <h5 h5 className="pt-5">OMR Scanner App</h5>
        <p>Reads and Scans an OMR sheet to calculate the score of a student</p>
      </div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100" alt="...">
      <a href="https://naughty-leakey-215b77.netlify.app/">
      <img  className="pb-5 project" src={chatapp} alt="...."></img>
      </a>
      </div>
      <div className=" carousel-caption d-none d-md-block">
        <h5 className="pt-5">Online Chat App</h5>
        <p>An online chat room made with socket.io</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Portfolio;
