import react,{useEffect,useState} from 'react';

import axios from 'axios'
const Profile = (props) =>{

        /*const [user,setUser] = useState({username:"",userid:""});




        const getuserdetails = () =>{
                const url = process.env.REACT_APP_SERVER_URL
                const userid = localStorage.getItem('userid')
                axios.get(url+"/getsingleuserdetails/"+userid)
                        .then( (response) => {
                                console.log(response)
                                setUser(response.data)
                        },(error)=>{

                })
        }

        useEffect(() => {
                getuserdetails()
        },[]);*/

        


        return(

                <>

                        <div class="">
                                <div class="col">
                                        
                                        <div class="row">
                                                <div class="d-flex flex-direction-row justify-content-between align-content-center">
                                                        <div><h1>ACCOUNT DETAILS</h1></div>
                                                        <div class="cross" ><i class="text-danger pointer fa fa-times fa-2x" aria-hidden="true"></i> </div>

                                                </div>
                                        </div>
                                        <div class="row">
                                                <h4>name</h4>
                                                <div class="p-small">{props.user.username}</div>
                                        </div>
                                        <div class="row">
                                                <h4>email id</h4>
                                                <div class="p-small">{props.user.userid}</div>
                                        </div>
                                </div>
                        </div><br/>


                </>
        )



}

export default Profile