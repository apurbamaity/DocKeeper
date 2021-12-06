import react,{Component} from 'react';
import './Insideteam.css'
import axios from 'axios'
import { ToastContainer,toast } from "react-toastify";

const change = (x) =>{
        console.log(x)
}




class Chatbox extends Component{

        state = {
                file: "",
                error: "",
                msg: "",
                comment:"",
                fileis:0,
        };

        uploadFile = (event) => {



        event.preventDefault();
        this.setState({ error: "", msg: "" });

        /*if (!this.state.file) {
        //this.setState({ error: "Please upload a file." });
        return;
        }*/

        if (this.state.file.size >= 1000000) {
                toast.error('🦄 file size should be less 1 mb!!', {
                        position: "top-center",
                        autoClose: 2000,
                        closeOnClick: true,
                });
                return;
        }

        let data = new FormData();
        data.append("file", this.state.file);
        data.append("name", this.state.file.name);
        data.append("msg", this.state.comment);


        const url = process.env.REACT_APP_SERVER_URL
        const send = this.props.id+"&&"+localStorage.getItem('userid')+"&&"+this.state.comment
        console.log(typeof data.file)
        
        /*if(data.name == undefined){
                console.log("hereee"+data.name)
                axios.post(url+"/files1/"+send).then(

                (response) => {

                        toast.success('🦄 file uploaded successfully!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });


                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );
        }else{


                console.log("here2")
                axios.post(url+"/files/"+send, data).then(

               

                (response) => {

                        toast.success('🦄 file uploaded successfully!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });


                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );

        }*/

        if(this.state.fileis === 0){
                console.log("hereee"+data.name)
                axios.get(url+"/files1/"+send).then(

                (response) => {

                        /*toast.success('🦄 file uploaded successfully!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });*/


                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );
        }else{


                console.log("here2")
                axios.post(url+"/files/"+send, data).then(

               

                (response) => {

                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );

        }

        /*try{
                var x = data.name[0]
                axios.post(url+"/files/"+send, data).then(

               

                (response) => {

                        toast.success('🦄 file uploaded successfully!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });


                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );

        }catch(error){

                axios.get(url+"/files1/"+send).then(

                (response) => {

                        toast.success('🦄 file uploaded successfully!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });


                        console.log(response);
                        this.props.met()
                },(error) => {
                        console.log("error");
                }
                );

        }*/



        };


        onTextChange = (event) => {
                //console.log("here")
                this.setState({
                        comment: event.target.value,
                });
                console.log(this.state.comment)
        };

        onFileChange = (event) => {
                this.setState({
                        file: event.target.files[0],
                        fileis:1,
                });
        };


        render(){
                return(

                <>

                        <div class="Chatbox px-2 py-1">
                                <div class="d-flex justify-content-between mb-0 mb-1">
                                        <div class="file">
                                                
                                                <input onChange={this.onFileChange} type="file"/>
                                        </div>
                                        

                                </div>
                                
                                
                                <textarea class="px-1 p-large comment w-100"  onChange={this.onTextChange} placeholder="Enter your comment here" style={{border:"none"}}></textarea>

                                
                                <div class="d-flex flex-row mb-1">
                                        <div class="file w-100">
                                                <input onClick = {this.uploadFile} type="submit" value="send a message" class="h6 text-white w-100 btn btn-info" />
                                        </div>
                                        {/*<div class="file px-2">
                                                <input type="submit" value="send a task" class="h6 text-white w-100 btn btn-success" />
                                        </div>*/}
                                </div>
                                {/*value={comment} onChange={updateComment} value={comment} name="comment" */}

                        </div>
                        

                </>
                )       
        }
        



}


export default Chatbox