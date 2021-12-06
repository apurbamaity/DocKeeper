import react,{useState , useEffect} from 'react';
import { ToastContainer,toast } from "react-toastify";
import axios from 'axios'
import './Joincreate.css'

import {useHistory} from 'react-router-dom'

const Create = () =>{

        const [teamname,setTeamname] = useState("");
        const history = useHistory()

        const updateTeamname = (event) => {
                setTeamname(event.target.value)
                //console.log(teamname)
        }

        const createTeam = () =>{

                const userid = localStorage.getItem('userid')
                if(userid == null){
                         toast.error("Sign in to continue",{
                                        position : "top-center",autoClose : 2000
                        })
                        return
                 }


                const url = process.env.REACT_APP_SERVER_URL
                console.log(teamname)
                axios.get(url+"/create/"+teamname+"/"+localStorage.getItem("userid"))
                .then( (response) => {
                        console.log(response)
                        if(response.data == 123){
                                history.push({
                                        pathname: '/',
                                        status:"create_team_success",
                                });

                        }
                },(error)=>{

                })
        }


return(


        <>

                <div id="create" class="container mt-3">
                        
                        <div class="outer p-1">
                                
                                <div class="join_inner row p-2">
                                        <div class="col-lg-6 col-sm-6">
                                                <img src="https://img.freepik.com/free-vector/creative-team-concept-illustration_114360-3894.jpg?size=626&ext=jpg"
                                                style={{width:"100%"}} />
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                                <div class="h-100 d-flex justify-content-center align-items-center">
                                                        <div class="">
                                                                <h1 class="text-center">create a team now</h1>
                                                                <input onChange={updateTeamname} type="text" name="teamname" class="join_inner w-100" placeholder="enter team name" /><br/><br/>
                                                                <input onClick={createTeam} type="submit" value="create now" class="w-100 btn btn-warning text-black" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>


                




        </>
)


}

export default Create