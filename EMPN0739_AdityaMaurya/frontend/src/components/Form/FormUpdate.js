import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const FormUpdate = ({ employeeId,url }) => {
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState({
        Id: "",
        Employee_name: "",
        Employee_age: "",
        Profile_image: "",
        Employee_salary: ""
    })
    function getData() {
        axios.get(`https://localhost:7067/GetEmployee/${employeeId}`).
            then((res) => {
                const data = res.data.data[0]
                setEmployeeData({ Id: data.Id, Employee_name: data.Employee_name, Employee_age: data.Employee_age, Employee_salary: data.Employee_salary })
            }).
            catch((error) => {
                const message = error.response.data.message;
                navigate('/errorHandler', { state: { message } })
            })
    }
    useEffect(() => {
        getData();
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`https://localhost:7067/UpdateEmployee/${employeeId}`, employeeData).
            then((response) => {
                navigate('/')
            }).
            catch((error) => {
                const message = error.response.data.message;
                navigate('/errorHandler', { state: { message } })
            })
    }
    return (
        <>
            <div className='flex items-center justify-center flex-col space-y-6'>
                <h1 className="text-3xl font-bold ">Update Employee</h1>
                <form className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md' onSubmit={submitHandler}>
                    <div>
                        <textarea value={employeeData.Id} onChange={(e) => setEmployeeData({ ...employeeData, Id: e.target.value })}
                            required id="Id" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Id"></textarea>
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
                        <button type="submit" className='text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>Update</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default FormUpdate