import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../App.css"
import "./Empdetails.css"
const EmploDetails = () => {
    const [data, SetData] = useState({});

    const { empid } = useParams();


    useEffect(() => {
        fetch("http://localhost:10000/employess/" + empid).then(
            res => {
                return res.json();
            })
            .then(resp => {
                SetData(resp)
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

console.log(data.check)




    return (
        <>
        <Link to="/" className='btn btn-danger' id="onee">Back</Link>
        <br></br><br></br>
        < div className='card' id="cards">

            {data.name ?
                <h1>Name:{data.name}</h1> : <h1>Name: No Name Found</h1>

            }
            {data.email ?
                <h1>Email:{data.email}</h1> : <h1>Email: No Email Found</h1>
            }

            {data.phone ?
                <h1>Phone:{data.phone}</h1> : <h1>Phone: No Phone number found</h1>
            }
            



            { data.check ? 
            <h1>Is Active: True </h1> :             <h1>Is Active: False </h1>
            }
        </div>
        </>
    )
}

export default EmploDetails