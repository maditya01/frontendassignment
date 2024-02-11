import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import axios from 'axios';
const Form = ({ setNewEmployee,url }) => {
    let path = "Add New Employee";
    const [employeeData, setEmployeeData] = useState({
        Id: "",
        Employee_name: "",
        Employee_age: "",
        Profile_image: "",
        Employee_salary: ""
    });
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://localhost:7067/AddNewEmployee/', employeeData)
            .then(response => {
                setNewEmployee({ employeeData });
                setEmployeeData({
                    Id: "",
                    Employee_name: "",
                    Employee_age: "",
                    Profile_image: "",
                    Employee_salary: ""
                });
                navigate('/')
            })
            .catch(error => {
                const message = error.response.data.message;
                navigate('/errorHandler', { state: { message } })
            });
        /*useState is asynchronous so here you can not get the updateed taskList array 
        you can use useEffect to see the taskList.
        */
    }

    return (
        <>
            <div className='flex items-center justify-center flex-col space-y-6'>
                <h1 className="text-3xl font-bold ">{path}</h1>
                <form className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md' onSubmit={submitHandler}>
                    <div>
                        <textarea value={employeeData.Id} onChange={(e) => setEmployeeData({ ...employeeData, Id: e.target.value })}
                            required id="Id" className="resize-none max-w-5xl rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Id"></textarea>
                    </div>
                    <div>
                        <textarea value={employeeData.Employee_name} onChange={(e) => setEmployeeData({ ...employeeData, Employee_name: e.target.value })}
                            required id="Employee_name" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Employee_name"></textarea>
                    </div>
                    <div>
                        <textarea value={employeeData.Employee_age} onChange={(e) => setEmployeeData({ ...employeeData, Employee_age: e.target.value })}
                            required id="Employee_age" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Employee_age"></textarea>
                    </div>
                    <div>
                        <textarea value={employeeData.Employee_salary} onChange={(e) => setEmployeeData({ ...employeeData, Employee_salary: e.target.value })}
                            required id="Employee_salary" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Employee_salary"></textarea>
                    </div>
                    <div className='px-2'>
                        <button type="submit" className='text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form