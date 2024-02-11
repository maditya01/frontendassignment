import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ErrorHandler from './components/Error/ErrorHandler';
import FormUpdate from './components/Form/FormUpdate';
import Screen from './components/Home/Screen';

function App() {
  const url = "https://localhost:7067";
  const [newEmployee, setNewEmployee] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const message = "Invalid path";
  return (
    <Routes>
      <Route path="/" element={<Screen />}></Route>
      <Route path="/getAllEmployee" element = {<Home setEmployeeId={setEmployeeId} newEmployee={newEmployee} url={url} />}></Route>
      <Route path="/addNewEmployee" element={<Form setNewEmployee={setNewEmployee}  url={url} />}></Route>
      <Route path="/updateEmployee/:id" element ={<FormUpdate EmployeeId={employeeId} url={url}  />}></Route>
      <Route path="/errorHandler" element={<ErrorHandler message={message} />}></Route>
      <Route path="*" element={<Navigate to="/errorHandler" />} />
    </Routes>
  );
}

export default App;
