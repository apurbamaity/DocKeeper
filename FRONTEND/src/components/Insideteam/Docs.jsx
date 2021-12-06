import React, { Component } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import './Insideteam.css';



class Docs extends Component {

  /*downloadRandomImage = (id) => {


          console.log("hereeeeeee")


    fetch("http://localhost:5000/api/files/"+id).then((response) => {
      console.log(response);
      const filename = response.headers
        .get("Content-Disposition")
        .split("filename=")[1];
      console.log(response.headers.get("Content-Disposition"));
      console.log(response);
      response.blob().then((blob) => {


        let url = window.URL.createObjectURL(blob);

        let a = document.createElement("a");

        a.href = url;

        a.download = filename;

        a.click();

      });


    toast.success('🦄 file d successfully!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
    });


    });
  };*/

  /*downloadRandomImage = (param) => {


    fetch("http://localhost:5000/api/files/"+param).then((response) => {
      console.log(response);
      const filename = response.headers
        .get("Content-Disposition")
        .split("filename=")[1];
      console.log(response.headers.get("Content-Disposition"));
      console.log(response);
      response.blob().then((blob) => {


        let url = window.URL.createObjectURL(blob);

        let a = document.createElement("a");

        a.href = url;

        a.download = filename;

        a.click();

      });


    toast.success('🦄 file d successfully!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
    });


    });
  };*/

  downloadRandomImage = (param) => {



    fetch(process.env.REACT_APP_SERVER_URL+"/api/files/"+param).then((response) => {
      console.log(response);
      const filename = response.headers
        .get("Content-Disposition")
        .split("filename=")[1];
      console.log(response.headers.get("Content-Disposition"));
      console.log(response);
      response.blob().then((blob) => {


        let url = window.URL.createObjectURL(blob);

        let a = document.createElement("a");

        a.href = url;

        a.download = filename;

        a.click();

      });


    /*toast.success('🦄 file d successfully!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
    });*/


    });
  };






  render() {
    return (
        <>
        <ToastContainer/>

       

        <div class="text pointer" onClick={() =>this.downloadRandomImage(this.props.doc.id)}>
                <span ><h6> <i class="fa fa-file" aria-hidden="true"></i> {this.props.doc.name}   
                <i class="fa text-danger fa-arrow-circle-down" aria-hidden="true"></i></h6></span>
        </div>

        {/*<Hello id={this.props.doc.name} func={this.downloadRandomImage(this.props.doc.id)}/>*/}

        {/*<button onClick={this.downloadRandomImage}>Download</button>*/}

        
        </>
    );
  }
}

export default Docs;
