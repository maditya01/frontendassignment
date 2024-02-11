import React from 'react'
import { useNavigate } from 'react-router-dom';

const Screen = () => {
    const navigate = useNavigate();

    function getAllEmployee() {
        navigate('/getAllEmployee');
    }
    function addNewEmployee() {
        navigate('addNewEmployee')
    }

    return (
        <>
            <div className="display-flex mb-20">Welcome to the frontend assignemnt project</div>
            <div className='flex justify-around	'>
                <button className='bg-red-200 p-5 rounded' onClick={getAllEmployee}>GetAllEmployee</button>
                <button className='bg-red-200 p-5 rounded' onClick={addNewEmployee}>AddNewEmployee</button>
            </div>
        </>
    )
}

export default Screen