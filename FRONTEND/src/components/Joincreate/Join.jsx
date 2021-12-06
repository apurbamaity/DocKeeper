import react,{useState , juseeffect} from 'react';
import axios from 'axios'
import { ToastContainer,toast } from "react-toastify";
import './Joincreate.css'


const Join = () =>{

        const [teamname,setTeamname] = useState("");

        const updateTeamname = (event) => {
                setTeamname(event.target.value)
                //console.log(teamname)
        }

        const joinTeam = () =>{
                 const userid = localStorage.getItem('userid')
                 if(userid == null){
                         toast.error("Sign in to continue",{
                                        position : "top-center",autoClose : 2000
                        })
                        return
                 }
                 const url = process.env.REACT_APP_SERVER_URL
                 axios.get(url+"/join/"+teamname+"/"+userid)
                .then( (response) => {
                        console.log(response)
                        if(response.data == 205){
                                console.log("successs")
                                toast.success("successfully joined the team",{
                                        position : "top-center",autoClose : 2000
                                })
                        }else if(response.data == 402){
                                console.log("successs")
                                toast.error("alreadey joined the team",{
                                        position : "top-center",autoClose : 2000
                                })
                        }else if(response.data == 403){
                                console.log("successs")
                                toast.error("This team not exist",{
                                        position : "top-center",autoClose : 2000
                                })
                        }
                },(error)=>{

                })
        }


return(


        <>

                <div id="Join" class="container mt-3">
                        
                        <div class="outer p-1">
                                
                                <div class="join_inner row p-2">
                                        <div class="col-lg-6 col-sm-6">
                                                <img src="https://thumbs.dreamstime.com/b/puzzle-team-concept-business-person-teamwork-success-vector-illustration-177685232.jpg"
                                                style={{width:"100%"}} />
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                                <div class="h-100 d-flex justify-content-center align-items-center">
                                                        <div class="">
                                                                <h1 class="text-center">join here with team key</h1>
                                                                <input onChange={updateTeamname} type="text" class="w-100 join_inner" placeholder="enter team key" /><br/><br/>
                                                                <input onClick={joinTeam} type="submit" value="join now" class="w-100 btn btn-success text-white" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>




        </>
)


}

export default Join