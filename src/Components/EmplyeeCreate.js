import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import EmploDetails from './EmployDetail';
import "./EmplyeeCreate.css"
const EmplyeeCreate = ({ val }) => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [check, setCheck] = useState(false)
    const [namelval, setNamelVal] = useState(false)
    const [emailval, setEmails] = useState(false)
    const [phoneval, setPhoneVal] = useState(false)




    function clickSubmit(e) {
        e.preventDefault();
        val(check);
        { setName(''); setEmail(''); setPhone(''); setCheck(false); }
        { setNamelVal(false) }
        { setEmails(false) }
        { setPhoneVal(false) }

        if(name=="",email=="", phone==""){
            setNamelVal(true);
            setEmails(true)
            setPhoneVal(true)
        }
        console.log(check)

        console.log({ name, email, phone, check });

        const data = { name, email, phone, check }

        fetch('https://test-api-n1bp.onrender.com/employess', {
            method: "POST",
            headers: { "content-type": 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            alert('Added successsfully')
            navigate('/')
        }).catch(error => {
            console.log(error)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={clickSubmit} >

                        <div className="card" >
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input on className="form-control" value={name} onChange={e => setName(e.target.value)} onMouseDown={e => setNamelVal(true)} required></input>

                                            {name == "" && namelval &&
                                                <span className='text-danger'>Please Enter Name</span>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} onMouseDown={e => setEmails(true)} required></input>
                                            {email == "" && emailval &&
                                                <span className='text-danger'>Please Enter Email</span>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" value={phone} onChange={e => setPhone(e.target.value)} onMouseDown={e => setPhoneVal(true)} required></input>
                                            {
                                                phone == "" && phoneval &&
                                                <span className='text-danger'>Please Enter Phone</span>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox" checked={check} className="form-check-input" onChange={e => setCheck(e.target.checked)}></input>
                                            <label className="form-check-label" >Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className='btn btn-danger' style={{ float: 'right' }}>Back</Link>
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
export default EmplyeeCreate