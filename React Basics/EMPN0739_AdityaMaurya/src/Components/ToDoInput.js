
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  const [description, setDescription] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleAddList();
    }
  };

  const handleAddList = () => {
    if (inputText.trim() === '' ) {
      console.log("Aman")
      toast("Please enter a valid Title");
    } 
    else if(description.trim() === '')
    {
        toast('Write your description here...');
    }
    else {
      props.addList(inputText, description);
      setInputText('');
      setDescription('');
    }
  };

  return (
    <div>
      <h3 className="ml-4 mr-4 mb-2 mt-2" style={{ color: 'Red', fontSize: '50px' }}>Title</h3>
      <input
        type="text"
        className="input-box-todo ml-8"
        placeholder="Enter your title"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <h3 className="ml-4 mr-4 mb-2 mt-2" style={{ color: 'Red', fontSize: '50px' }}>Description</h3>
      <input
        type="text"
        className="input-box-todo ml-8"
        placeholder="Enter your description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className="btn btn-secondary ml-4"
        onClick={handleAddList}
        style={{ marginLeft: '13px' }}
      >
       <i className="fa-solid fa-plus icon-add"></i> Add Item
      </button>
      <ToastContainer
/>

    </div>
  );
}

export default TodoInput;
