import React from 'react'
import "./pageNumber.css"
const PageNumber = ({ Postperpage, paginate, totalposts }) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalposts / Postperpage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav className='main'>
            <ul className='Pagination'>
                {
                    pageNumber.map(Number => (
                        <li key={Number} className='page-item'>
                            <a onClick={()=>paginate(Number)} href="" className='page-link'>{Number}</a>
                        </li>
                    ))
                }







            </ul>

        </nav>
    )
}
export default PageNumber