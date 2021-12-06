import react,{useState , useEffect} from 'react';
import './Joincreate.css'
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
 import {useHistory} from 'react-router-dom'


import Join from './Join'
import Navbar from './Navbar'
import Create from './Create'
import Footer from './Footer'
import Profile from './Profile'
import axios from 'axios'

const Joincreate = () =>{

        const [user,setUser] = useState({username:"",userid:""});
        const history = useHistory() 

        const logout = () =>{
                localStorage.removeItem('userid');
                history.push({
                        pathname: '/',
                        status:"signin_success",
                });
        }




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
        },[]);



        return(
                <>
                        <div class="profile p-3">
                                <Profile user={user}/>
                                <input onClick={logout} type="submit" class="w-100 btn btn-danger" value="logout" />
                        </div>


                        <ToastContainer />
                        <Navbar />
                        <Join />
                        <Create />
                        <Footer />
                </>
        )



}

export default Joincreate