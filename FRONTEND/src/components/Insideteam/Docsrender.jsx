import react from 'react';
import Docs from './Docs'

const Docsrender = (props) =>{

        console.log(props.d.name)

        if(props.d.name == null){
                return(
                        <div className="text-danger"></div>
                )
        }else{
                return(
                        <Docs doc={props.d} />
                )
        }

}

export default Docsrender