function Experience({company,workdone,time,location}) {
    return (
        <div id="exp" className="card p-5">
                <div className="Innercard row p-2 bg-dark">
                <div className=" pt-5 row expcard col-sm-12 col-md-12 col-lg-6 p-5">
                    <div className="col-12"><h1 >{company}</h1></div>
                    <div className="col-12"><h2>{location}</h2></div>
                    <div className="col-12"><h3>{time}</h3></div>
                </div>
                <div className="card__details col-sm-12 col-md-12 col-lg-6">
                    <div className="name"></div>
                    <p className="mt-5" style={{fontSize:"1.5rem",color:"#FFA500"}}>
                    {workdone}
                    </p>
                </div>
                </div>
            </div>
    )
}

export default Experience
