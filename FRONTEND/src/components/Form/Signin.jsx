import react,{useState , juseeffect} from 'react';
import {useHistory} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios'
import './Form.css'
import Navbar from './Navbar'
import Footer from './Footer'


const Signin = () =>{

        const [formdata,setFormdata] = useState({userid:"",password:""})  
        const history = useHistory() 

        const update =(event) =>{
                let val = event.target.value
                let name = event.target.name
                setFormdata((prev) => {
                        if( name === "userid"){
                                return{userid:val,password:prev.password}
                        }else{
                                return{userid:prev.userid,password:val}
                        }
                })
        } 

        const submit = () =>{
                console.log(formdata)
                
                        
                        axios.post(process.env.REACT_APP_SERVER_URL+"/signin",formdata)
                        .then( (response) => {
                                //console.log(response)
                                if(response.data == 401){

                                        toast.error("This email not exist , register",{
                                                position:"bottom-center",autoClose:2000,
                                        })
                                }else if(response.data == 402){
                                        toast.error("Password dont match",{
                                                position:"bottom-center",autoClose:2000,
                                        })
                                }else{
                                        localStorage.setItem("userid",formdata.userid)
                                        history.push({
                                                pathname: '/',
                                                status:"signin_success",
                                        });
                                }
                        },(error)=>{



                        })


        };
                

                //localStorage.setItem("username",formdata.username)
                //


return(


        <>

                <ToastContainer />
                <Navbar />

                <div id="Join" className="container mt-5">
                        
                        <div className="outer p-1">
                                
                                <div className="join_inner row p-2">
                                        <div className="col-lg-6 col-sm-6">
                                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-here-2161443-1815085.png"
                                                style={{width:"100%"}} />
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                                <div className="h-100 d-flex justify-content-center align-items-center">
                                                        <div className="">
                                                                <h1 className="text-center">Welcome Back :) to Family</h1>
                                                                <div className="py-2 p-large">Don't have an account <a className="text-danger" href="/signup">signup</a> here</div>
                                                                <input onChange={update} name="userid" type="text" className="px-2 w-100 join_inner" placeholder="enter registered email-id" /><br/><br/>
                                                                <input onChange={update} name="password" type="text" className="px-2 w-100 join_inner" placeholder="enter password" /><br/><br/>
                                                                <input onClick={submit} type="submit" value="signin" className="w-100 btn btn-success text-white" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>

                <Footer />






        </>
)


}

export default Signin