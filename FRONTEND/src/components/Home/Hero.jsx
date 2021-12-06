import react,{useState,useEffect} from 'react';
import axios from 'axios'
import './Home.css'

import Profile from './Profile'


const Teams = (props) =>{

        const data = props.team


        if(props.team == ""){
                return(
                        <>
                                <h1 class="text-center text-success">all your teams will shown here</h1>
                        </>
                )
        }else{
                return(

                <>
                
                {data.map((d)=>(
                    /*<Sing name={d.name} link={d.imglink} />*/
                    <>
                        
                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                <div class="D p-2">
                                        <a href={"/team/"+d.teamid+"#comehere"}><div class="">
                                                <img src="data:image/jpeg;base64,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"
                                                style={{width:"100%"}} />
                                        </div></a>
                                        <div class="text-center">
                                                <span class="p-large">{d.teamname}</span><br/>
                                                <div class="unread p-large">TEAM KEY </div>
                                                <div class="unread h4 text-white">{d.teamid}</div>
                                        </div>
                                </div>
                                                                
                        </div>
                    </>
                ))}  

                </>

                
                )
        }



}




const Hero =()=>{


        const [team,setTeam] = useState([]);
        const userid = localStorage.getItem("userid")

        

        useEffect(() => {
                
                if(userid != null){


                        const url = process.env.REACT_APP_SERVER_URL

                        const teamname = localStorage.getItem('userid')
                //console.log(teamname)
                        axios.get(url+"/getallteam/"+teamname)
                        .then( (response) => {
                                console.log(response)
                                if(response.data == ""){
                                        console.log("yah uits nulll")
                                }
                                setTeam(response.data)
                        },(error)=>{

                        })



                }
                

        },[]);


        return(
                <>



                        <div class="Hero mt-5">


                                <div class="container">
                                        <div class="row">
                                                
                                                <div class="col-lg-6 col-md-6 col-12 text-danger px-5 image">
                                                        <img 
                                                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
                                                         />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-12 py-5">
                                                        <h1 class="text-danger head_text">ONE WORKSPACE. EVERY TEAM.</h1>
                                                        <div class="p-large head_para">WE ARE MORE THAN A DOC TRY IT FREE TODAY OR JOIN A EXISTING TEAM</div>
                                                        <div class="py-3 head_btn">
                                                                <a href="/joinorcreate#join"><input type="submit" class="btn w-100 btn-info" value="Join A Workspace" /></a>
                                                        </div>
                                                </div>
                                         </div>
                                </div>


                                {/*MAIN DIV --2 */}
                                <div class="container py-lg-3 py-0">
                                        <div class="B py-3">
                                                <div class="d-flex justify-content-center py-3">
                                                        <div class="A"> TRUSTED BY TEAMS AT</div>
                                                </div>
                                                <div class="d-flex flex-row justify-content-center">
                                                        <a href="https://www.pixer.io/"><div class="px-2 text-danger">PIXER</div></a>
                                                        <a href="https://www.travelparks.com/"><div class="px-2 text-info">TRAVELPARK</div></a>
                                                        <a href="https://www.spotify.com/us/"><div class="px-2 text-success">SPOTIFY</div></a>
                                                </div>


                                        </div>
                                </div><br/><br/><br/>


                                {/* MAIN DIV -- 4*/}

                                <div class="container p-2">
                                        <div class=" B1  p-2">

                                                <div class="explore_teams text-center h3 py-3">
                                                        EXPLORE ALL WORKSPACES
                                                </div>
                                                <div class=" row text-center" id="team">


                                                        <Teams team={team}/>


                                                        {/*<div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/01"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                         <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/02"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/03"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/04"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>*/}
                                                </div>
                                        </div>
                                </div>


                                {/* MAIN DIV -- 3*/}
                                <div class="container py-lg-5 py-3 main_div">
                                        <div class="inn">
                                                <div class="row C">
                                                       
                                                        <div class="col-lg-6 col-md-6">
                                                                <img src="https://media.istockphoto.com/vectors/happy-young-employees-giving-support-and-help-each-other-vector-id1218490893?k=20&m=1218490893&s=612x612&w=0&h=svJxkZEFiciFHufK4LNn13TpNip1cVPW9Ig0Ahuugqs="
                                                                />
                                                        </div>
                                                        <div class="col-lg-6 col-md-6" style={{position: 'relative'}}>
                                                                <div style={{/*position: 'absolute' , top:"50%"*/}} class="h-100 d-flex justify-content-center align-items-center">
                                                                        <div class="h4">

                                                                                YOUR ALL TEAMS WILL BE SHOWN HERE..<br/><br/>
                                                                                <a href="/joinorcreate#join"><input type="submit" class="btn btn-success w-100 " value="Join A Workspace" /></a><br/><br/>
                                                                                <a href="/joinorcreate#create"><input type="submit" class="btn btn-warning w-100 " value="Create A Workspace" /></a>
                                                                                </div><br/>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>







                        </div>
                        



                </>
        )
}

export default Hero