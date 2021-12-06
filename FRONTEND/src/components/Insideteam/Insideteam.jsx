import react from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify";


import Navbar from './Navbar.jsx'
import Mainbody from './Mainbody'
import Chatbox from './Chatbox'


const Insideteam = () =>{

        const {teamid} = useParams()
        //console.log(teamid)


        return(

                <>
                        <ToastContainer />
                        <Navbar teamid={teamid}/>
                        <Mainbody id={teamid}/>
                        {/*<Chatbox id={teamid}/>*/}



                </>
        )
}

export default Insideteam