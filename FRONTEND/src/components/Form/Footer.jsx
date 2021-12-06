import react from 'react';
import './Form.css'


const Footer = () =>{




        return (
                <>


                <footer style={{marginTop:"230px"}}>

                <div className="container p-5">
                        <div className="row">
                                <div className="col-sm-6 col-lg-6 col-md-6 col-12">
                                        <p className="h2"> <a className="navbar-brand" href="/"><span>Game</span><span>Reck</span><span>.com</span></a>
                                        </p>
                                        <p className="h4 text-white">Everything about games at one place.</p>
                                </div>

                                <div className="col-sm-6 col-lg-6 col-md-6 col-12">
                                        <p className="p-large text-white">Write for us at gamereck@gmail.com.</p>
                                        <a  className="h5 text-white">REGISTER</a>
                                </div>

                        </div>
                </div>


        </footer>


                </>
        )



}

export default Footer