import React from "react"
import './ShowData.css'
const ShowData = (props) =>{
    return (
        <div className="form-showdata">
            <div>
                <h3>Name : {props.name}</h3>
                <h3 style={{marginLeft:'100px'}}>  Age :  {props.age}</h3>
            </div>
            
        </div>
    )
}



export default ShowData