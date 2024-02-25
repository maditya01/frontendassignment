import React, { useState } from 'react'
import "./App.css"
import TodoInput from './Components/ToDoInput'
import Todolist from  './Components/TodoList'

function App() {
  const [listTodo,setListTodo]=useState([]);
  const [listDescription,setListDescription]=useState([]);
  let addList = (inputText,Description)=>{
    if(inputText!=='' && Description!=='')
      setListTodo([...listTodo,inputText]);
      setListDescription([...listDescription,Description]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
    let newListDescription = [...listDescription];
    newListDescription.splice(key,1)
    setListDescription([...newListDescription])
  }
  return (
    <div>
        <h1 className="ml-4 mt-4 fw-bold" style={{color:'Red', textAlign:'center'}}>ToDo List Application </h1>
      <div>
        <TodoInput addList={addList}/>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} desc={listDescription[i]} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div> 
   )
} 

export default App