import './Skills.css'

function Skills() {
    return (
    
        <div id="skill" className="row skillContainer p-5">
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>HTML</h1>
            <div className="m-2 progress" style={{width:"100%"}}> 
                <div className="progress-bar" role="progressbar" style={{width:"75%" , background:"#FFA500"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>CSS</h1>
            <div className="m-2 progress" style={{width:"100%"}}>
                <div className="progress-bar " role="progressbar" style={{width:"75%" , background:"#FFA500"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>JavaScript</h1>
            <div className="m-2 progress" style={{width:"100%"}}>
                <div className="progress-bar " role="progressbar" style={{width:"70%" , background:"#FFA500"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>React</h1>
            <div className="m-2 progress" style={{width:"100%"}}>
                <div className="progress-bar " role="progressbar" style={{width:"60%" , background:"#FFA500"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>Flask</h1>
            <div className="m-2 progress" style={{width:"100%"}}>
                <div className="progress-bar " role="progressbar" style={{width:"85%" , background:"#FFA500"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 m-2">
            <h1 className="skillpro" style={{color:"#FFA500"}}>Python</h1>
            <div className="m-2 progress"style={{width:"100%"}} >
                <div className="progress-bar " role="progressbar" style={{width:"80%" , background:"#FFA500"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
   
    )
}

export default Skills
