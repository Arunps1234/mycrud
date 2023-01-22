import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PageNumber from './pageNumbers'
import "../App.css"
import './Employeedlisting.css'


const Employeelisting = () => {
    const Navigate = useNavigate();

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)


    const [searchbar, setSearchBar] = useState('')
    const [enlargesearch, setEnlargeSearch] = useState(false)




    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    // index=0,10 for 1 and 20
    // for 2 and 10 10 ,20

    useEffect(() => {
        fetch('http://localhost:10000/employess').then(res => {
            return res.json();
        }).then(resp => {
            setData(resp)

            // console.log(data)
        }).catch(error => {
            console.log("something went wrong " + error)
        })
    }, [data])

    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)


    const LoadEdit = (id) => {
        Navigate('/employee/edit/' + id)
    }

    const LoadDetails = (id) => {
        Navigate('./employee/detatil/' + id)
    }

    const Removefunction = (id) => {
        if (window.confirm("DO YOU WANT TO REMOVE ?")) {
            fetch("http://localhost:10000/employess/" + id, {
                method: "DELETE"
            }).then(res => {
                alert("Deleted Successfully!")
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const paginate = pagenumber =>
        setCurrentPage(pagenumber);



    //console.log(currentPost)
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                        <h1>Employee lists</h1>

                    </div>
                    <div>
                        <input type="search" placeholder='Search by name...' className='searchinput' value={searchbar} onChange={e => setSearchBar(e.target.value)} onClick={e => setEnlargeSearch(true)} id={enlargesearch ? "active" : ""}></input>

                    </div>
                    <div className='card-body'>
                        <div>
                            <Link to="/employee/create" className='btn btn-success'>Add+</Link>
                        </div>
                        <table className='table table-bordered'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>

                                </tr>


                            </thead>
                            <tbody>

                                {currentPost.length > 0 ?








                                    ( 
                                        
                                        
                                        
                                
                                        currentPost.filter(value => value.name.toLowerCase().includes(searchbar.toLowerCase())) 
                                        .map(value => (
                                            <tr key={value.id}>
                                                <td >{value.id}</td>
                                                <td >{value.name}</td>
                                                <td >{value.email}</td>
                                                <td >{value.phone}</td>
                                                <td>
                                                    <button className='btn btn-success' onClick={() => { LoadEdit(value.id) }}>Edit</button> &nbsp;
                                                    <button className='btn btn-danger' onClick={() => { Removefunction(value.id) }}>Remove</button> &nbsp;
                                                    <button className='btn btn-primary' onClick={() => { LoadDetails(value.id) }}>Details</button>

                                                </td>
                                            </tr>
                                        ))) : (<h5  className="error" id='error'>NO DATA FOUND</h5>)
                                }


                            </tbody>
                        </table>



                    </div>
                </div>
            </div >
            {/* <Pagination postperpage={postperpage} totalpost={data.length} paginate={paginate}/>*/}

            <br />
            <div className='pagination'>
            <PageNumber Postperpage={postPerPage} totalposts={data.length} paginate={paginate} />
</div>
        </>
    )
}
export default Employeelisting