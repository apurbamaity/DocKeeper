import react,{useState , juseeffect} from 'react';
import { ToastContainer,toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './Form.css'
import Navbar from './Navbar'
import Footer from './Footer'


const Signup = () =>{

        const [teamname,setTeamname] = useState("");
        const history = useHistory()

        const [formdata,setFormdata] = useState({username:"",userid:"",password:"",conpass:""})   
        const update =(event) =>{
                let val = event.target.value
                let name = event.target.name
                setFormdata((prev) => {
                        if( name === "username"){
                                return{username:val,userid:prev.userid,password:prev.password,conpass:prev.conpass}
                        }else if(name ==="userid"){
                                return{username:prev.username,userid:val,password:prev.password,conpass:prev.conpass}
                        }else if(name === "password"){
                                return{username:prev.username,userid:prev.userid,password:val,conpass:prev.conpass}
                        }else{
                                return{username:prev.username,userid:prev.userid,password:prev.password,conpass:val}
                        }
                })
                //console.log(formdata)
        } 

        const submit = () =>{
                console.log(formdata)
                if(formdata.password !== formdata.conpass){
                        toast.error("password not matched",{
                                position:"bottom-center",autoClose:2000,
                        })
                }else if(formdata.userid.includes("@")){
                        
                        axios.post(process.env.REACT_APP_SERVER_URL+"/register",formdata)
                        .then( (response) => {
                                //etProducts(response.data)
                                console.log(response)
                                if(response.data == 202){
                                        toast.success("Successfully registered , now login",{
                                                position:"bottom-center",autoClose:1000,
                                        })
                                        history.push("/signin")

                                }else if(response.data == 405){
                                        toast.error("This Email Already Present try login",{
                                                position:"bottom-center",autoClose:2000,
                                        })
                                }
                        },(error)=>{
                        })
                }else{
                        toast.error("enter a valid email-id",{
                                position:"bottom-center",autoClose:2000,
                        })
                }

                //localStorage.setItem("username",formdata.username)
                //history.push("/")
        }


return(


        <>

                <ToastContainer />
                <Navbar />

                <div id="Join" className="container mt-5">
                        
                        <div className="outer p-1">
                                
                                <div className="join_inner row p-2">
                                        <div className="col-lg-6 col-sm-6">
                                                <img src="https://miro.medium.com/max/1043/1*uMxwajzG5l3n2x7_izXdHw.png"
                                                style={{width:"100%"}} />
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                                <div className="h-100 d-flex justify-content-center align-items-center">
                                                        <div className="">
                                                                <h1 className="text-center">Sign Up Here</h1>
                                                                <div className="py-2 p-large">Already have an account <a className="text-danger" href="/signin">signin</a> here</div>
                                                                <input onChange={update} name="username" type="text" className="p-2 w-100 " placeholder="enter username" /><br/><br/>
                                                                <input onChange={update} name="userid" type="email" className="p-2 w-100 " placeholder="enter email-id" /><br/><br/>
                                                                <input onChange={update} name="password" type="password" className="p-2 w-100 " placeholder="enter password" /><br/><br/>
                                                                <input onChange={update} name="conpass" type="text" className="p-2 w-100 " placeholder="confirm password" /><br/><br/>
                                                                <input onClick={submit} type="submit" value="signup" className="w-100 btn btn-success text-white" />
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

export default Signup