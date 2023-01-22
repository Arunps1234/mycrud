import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './EmpEdit.css'
const EmpEdit = () => {

const {empid}=useParams();

useEffect(()=>{
fetch('http://localhost:10000/employess/' +empid).then(res=>{
    return res.json();
}).then(resp=>{
setId(resp.id);
setName(resp.name);
setEmail(resp.email);
setPhone(resp.phone);
setCheck(resp.check)


})
},[])











const[id, setId]=useState('')
const[name, setName]=useState('')
const[email, setEmail]=useState('')
const[phone,setPhone]=useState('')
const[check,setCheck]=useState(false)

const navigate=useNavigate();

const handleSubmit=(e)=>{
e.preventDefault()
const data={id, name,email,phone,check}
fetch('http://localhost:10000/employess/' +empid,{
    method:"PUT",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data)
}).then(res=>{
    alert("Edited successfully!")
    navigate('/')
}).catch(console.log('Something went wrong'))
}



    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit} >
                        <div className='card'>
                        <div className='card-title'>
                            <h2>Employee Edit</h2>
                        </div>
                        <div className='card-body'>
                            <div className='row'>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>ID</label>
                                        <input type='text' className='form-control' disabled="disabled" value={id} onChange={e=>setId(e.target.value)} ></input>
                                    </div>
                                </div>


                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input type='text' className='form-control' value={name} onChange={e=>setName(e.target.value)}></input>
                                    </div>
                                </div>



                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type='text' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}></input>
                                    </div>
                                </div>



                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Phone</label>
                                        <input type='text' className='form-control' value={phone} onChange={e=>setPhone(e.target.value)}></input>
                                    </div>
                                </div>


                                <div className='col-lg-12'>
                                    <div className='form-check'>
                                        <input type='checkbox'  className='form-check-input'  checked={check} onChange={e=>setCheck(e.target.checked)}></input>
                                        <label>Is Active</label>

                                    </div>
                                </div>



                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <button   className='btn btn-success' type='submit'>Save</button>
                                        <Link to="/" className='btn btn-danger' style={{float:'right'}}>Back</Link>

                                    </div>
                                </div>



                            </div>



                        </div>
                        </div>
                    </form>



                </div>
                
            </div>
        </div>
    )
}

export default EmpEdit