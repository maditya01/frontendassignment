import axios from 'axios';

const API = axios.create({baseURL: 'https://localhost:3001'});
// console.log(API);

export const fetchAllEmployees = ()=>{API.get('/GetEmployees')};
export const fetchSingleEmployee = (id)=>{API.get(`/GetEmployee/${id}`)}
export const AddEmployee = (newEmployee)=>{API.post(`/AddEmployee`,newEmployee)};//Sending new Employee in body.
export const updateEmployee = (id,updatedEmployee)=>{API.put(`/UpdateEmployee/${id}`,updatedEmployee)}; //Sending Employee in body.
export const deleteEmployee = (id)=> {API.delete(`/DeleteEmployee/${id}`)};