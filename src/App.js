import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js'
import Navbar from './components/Navbar';
import Header from './components/Header';
import  Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';



const BlueBird = "Created a complete organisation management system Backend from scratch using Postgres and Flask with token based authentication system as well as Google and Linkedin login.Also worked on the task management system backend using Neo4j Graph database to implement the logic of the path followed by tasks"
function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#fff"
          }
        }
      }
    }}/>
    <div className="backgroundContainer">
    <Navbar/>
    <Header/>
    <Aboutme/>
    <Skills/>
    <Experience location ={"Bangalore"}company={"BlueBirde.io"} workdone ={BlueBird} time={"Sept 2020 - Nov 2020"}/>
    <Experience location = {"Remote"} company={"MateRate"} workdone ={"Created Frontend Pages using React and Bootstrap for their portals and integrated them with a Django based backend using Axios"} time={"Aug 2020 - Oct 2020"}/>
    <Portfolio/>
    </div>
    </>
  );
}

export default App;
