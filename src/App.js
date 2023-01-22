import React,{useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employeelisting from './Components/Employeelisting'
import EmplyeeCreate from './Components/EmplyeeCreate'
import Errorpage from './Components/Errorpage'
import EmpEdit from './Components/EmpEdit'
import EmploDetails from './Components/EmployDetail'
import Data from './Components/Data'

const App = () => {
const[send, setSend]=useState('')
const checkbox=(check)=>{
  setSend(check)
}

  return (








    <div>
      
      <br /><br /><br /><br /><br />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Employeelisting />}></Route>
          <Route path='/employee/create' element={<EmplyeeCreate val={checkbox} />} ></Route>
          <Route path="*" element={<Errorpage />}></Route>

          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>

          <Route path="/employee/detatil/:empid" element={<EmploDetails data={send}/>}></Route>
        </Routes>


      </BrowserRouter>



    </div>
  )
}
export default App