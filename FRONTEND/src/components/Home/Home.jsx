import react,{useEffect ,useState} from 'react';

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import './Home.css'
import Profile from './Profile'
import axios from 'axios'

import { ToastContainer,toast } from 'react-toastify';

const Home = (props) =>{

        const [user,setUser] = useState({username:"",userid:""});

        const logout = () =>{
                localStorage.removeItem('userid');
                window.location.reload()
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

        useEffect(() => {
                if(props.location.status === "create_team_success"){
                        toast.success("team created successfully",{
                                        position : "top-center",autoClose : 2000
                        })
                }else if(props.location.status === "signin_success"){
                        window.location.reload()
                }

        },[]);




        return(
                <>
                        <div class="profile p-3">
                                <Profile user={user}/>
                                <input onClick={logout} type="submit" class="w-100 btn btn-danger" value="logout" />
                        </div>

                        <ToastContainer />
                        <Navbar />
                        <Hero />
                        <Footer />


                </>
        )
}

export default Home