import React from 'react'
import Icon from "react-crud-icons";
import axios from 'axios';
import "../../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useNavigate } from 'react-router-dom';


const Employee = ({ setEmployeeId, employee, allEmployees, setAllEmployees }) => {
    const navigate = useNavigate();
    const iconClick = () => {
        setEmployeeId(employee.Id)
        navigate(`/updateEmployee/${employee.Id}`);
    }

    const deleteClick = async () => {
        axios.delete(`https://localhost:7067/DeleteEmployee/${employee.Id}`).
            then((response) => {
                const remainemployee = allEmployees.filter((femployee) => femployee.Id !== employee.Id)
                setAllEmployees(remainemployee);
            }).
            catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="flex flex-col justify-items-stretch	 bg-red-100 m-4  p-4 w-26">
                <div className='flex justify-between'>
                    <Icon
                        name="edit"
                        tooltip="Edit"
                        theme="light"
                        size="small"
                        onClick={iconClick}
                    />
                    <Icon
                        name="delete"
                        tooltip="Delete"
                        theme="light"
                        size="small"
                        onClick={deleteClick}
                    />
                </div>
                <div className='border-solid flex justify-between'>
                    <h1 className="text-xl font-bold">Id- </h1>
                    <div className="truncate">{employee.Id}</div>
                </div>
                <div className='border-solid flex justify-between'>
                    <h1 className="text-xl font-bold ">Employee name - </h1>
                    <div className="truncate">{employee.Employee_name}</div>
                </div>
                <div className='border-solid flex justify-between'>
                    <h1 className="text-xl font-bold">Employee age- </h1>
                    <div className="truncate">{employee.Employee_age}</div>
                </div>
                <div className='border-solid flex justify-between'>
                    <h1 className="text-xl font-bold">Employee salary- </h1>
                    <div className="truncate">{employee.Employee_salary}</div>
                </div>
                {/* <div className='border-solid flex justify-between'>
          <h1 className="text-xl font-bold">Employee age- </h1>
          <div className="truncate">{employee.Employee_age}</div>
        </div> */}
            </div>
        </>
    )
}

export default Employee