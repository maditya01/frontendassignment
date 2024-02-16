import React, { useEffect, useState, useCallback } from 'react'
import Employee from './Employee/Employee.js';
import axios from 'axios';

const Employees = ({setEmployeeId, newEmployee, url}) => {
  const [allEmployees, setAllEmployees] = useState([]);
  //Here we have to use useCallback hook.
  const fetchAllEmployees = useCallback(async () => {
    const { data } = await axios.get(`https://localhost:7067/GetEmployees`);
    console.log(data);
    setAllEmployees(data);
  }, [])

  useEffect(() => {
    fetchAllEmployees();
  }, [fetchAllEmployees])

  useEffect(() => {
    setAllEmployees({ ...allEmployees, newEmployee});
  }, [newEmployee])

  if (!allEmployees?.length) {
    return 'No Employees'
  }
  return (
    <>
      {allEmployees?.map((employee)=>(<Employee setEmployeeId={setEmployeeId} employee={employee} allEmployees={allEmployees} setAllEmployees={setAllEmployees} />))}
    </>
  )
}

export default Employees