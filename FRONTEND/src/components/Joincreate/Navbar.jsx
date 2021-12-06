import react from 'react';
import './Joincreate.css'

const Nav = () =>{


        const logout = () =>{
                localStorage.removeItem('userid');

        }


        const userid = localStorage.getItem('userid')
        if(userid == null){

                return(
                        <>

                                <nav class="navbar navbar-expand-md1 bg-light px-lg-3 px-3">
                                        <a href="/"> <span class=""> <h4 class="logotext">DOCX</h4>       </span></a>

                                        <span class=""> 
                                                <a class="h6" href="/signin"><span class="href">  Signin</span></a>
                                        </span>
                                </nav>


                        </>
                )
        }else{
                return(
                        <>

                                <nav class="navbar navbar-expand-md1 bg-light px-lg-3 px-3">
                                        <a href="/"> <span class=""> <h4 class="logotext">DOCX</h4>       </span></a>

                                        <span class=""> 
                                                <span class="href showprofile">  
                                                <span class=""> <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i> </span></span>

                                                <a class="h6 px-2 text-danger" href=""><span class="href">  
                                                <span onClick={logout} class="add_border h5 "> logout </span> </span></a>
                                        </span>
                                </nav>


                        </>
                )
        }
}

const Navbar = () =>{
        return(


                <Nav />
        )
}

export default Navbar