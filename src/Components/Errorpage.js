import React from 'react'
import { CgDanger } from "react-icons/cg";
import {Link} from 'react-router-dom'

const Errorpage=()=>{
    return(
        <div>
            <h1 style={{position:"absolute", top:'300px', left:'450px'}}>Something went to Wrong! <CgDanger/></h1>
            <Link to="/" className='btn btn-success' style={{position:'absolute', top:'390px', left:'580px'}}>Click here to move Home page</Link>
        </div>
    )
}
export default Errorpage