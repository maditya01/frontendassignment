import React, { useEffect } from 'react'
import Employees from '../Employees/Employees.js'
import { useLocation } from 'react-router-dom';
const Home = ({setEmployeeId, newEmployee,url}) => {
    return (
        <>
            <div className="text-black  p-5 m-5 flex flex-col">
                <h1 className="text-3xl font-bold"> Total Employees </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Employees setEmployeeId={setEmployeeId} newEmployee={newEmployee} url={url}  />
                </div>
            </div>
        </>
    )
}

export default Home