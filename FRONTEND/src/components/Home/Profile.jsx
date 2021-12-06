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
                                                <h1>ACCOUNT DETAILS</h1>
                                        </div>
                                        <div class="row">
                                                <h4>name</h4>
                                                <div class="p-small">{props.user.username}</div>
                                        </div>
                                        <div class="row">
                                                <h4>emails id</h4>
                                                <div class="p-small">{props.user.userid}</div>
                                        </div>
                                </div>
                        </div><br/>


                </>
        )



}

export default Profile