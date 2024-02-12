import React from 'react'
import { useNavigate } from 'react-router-dom';

const Screen = () => {
    const navigate = useNavigate();

    function getAllEmployee() {
        navigate('/getAllEmployees');
    }
    function addNewEmployee() {
        navigate('/addNewEmployee')
    }

    return (
        <>
            <div className='flex items-center flex-col space-y-4 bg-slate-50	 p-10 '>
                <div className="display-flex">Welcome to the frontend assignemnt project</div>
                <h1 className='bg-red-200'>To See the correct output you need to run the backend folderName is EMPN0739 there first run the .sol file
                </h1>
                <h1>Delete and Update action I have applied for every employee you can select which employee you want to delete or update</h1>
            </div>
            <div className='flex justify-around	mt-10'>
                <button className='bg-red-200 p-5 rounded' onClick={getAllEmployee}>GetAllEmployees</button>
                <button className='bg-red-200 p-5 rounded' onClick={addNewEmployee}>AddNewEmployee</button>
            </div>
        </>
    )
}

export default Screen