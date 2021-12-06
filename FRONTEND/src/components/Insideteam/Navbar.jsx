import axios from 'axios';
import react,{useState , useEffect} from 'react';
import './Insideteam.css'


const Navbar = (props) =>{

        const [team,setTeam] = useState("");

        const getTeamName = () =>{

                const url = process.env.REACT_APP_SERVER_URL
                axios.get(url+"/getteamname/"+props.teamid)
                        .then( (response) => {
                                setTeam(response.data)
                        },(error)=>{
                })
        }

        useEffect(() => {
                getTeamName()
        },[]);
        return(
                <>
                        <nav class="navbar navbar-expand-md1 bg-light px-lg-3 px-3">
                                {/*<span class=""> <h4 class="logotext__1"><i class="fa fa-bars" aria-hidden="true"></i></h4>       
                                  <span><a href="/"> <h4 class="logotext">DOCX</h4>  </a>     </span>   </span>*/}

                                <div class="d-flex flex-row">
                                        <div class="logotext__1 h4 px-2">
                                                <i class="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                        <div class=" h4 px-2">
                                                <a href="/">DOCKEEP</a>
                                        </div>
                                </div> 

                                <span class=""> 
                                        <a class="h6" href=""><span class="href">  {team}</span></a><br/>
                                        <span class="p-small text-success">{props.teamid}</span>
                                </span>
                        </nav>
                </>
        )
}

export default Navbar