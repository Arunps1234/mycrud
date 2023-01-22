import React,{useState, useEffect} from 'react'

const Data=()=>{
    const [data, setData] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;


    useEffect(() => {
        fetch('http://localhost:10000/employess').then(res => {
            return res.json();
        }).then(resp => {
            setData(resp)
             console.log(data)
        }).catch(error => {
            console.log("something went wrong " + error)
        })
   }, [data]) 


    return(
       <div></div> 
    )
    }

export default Data