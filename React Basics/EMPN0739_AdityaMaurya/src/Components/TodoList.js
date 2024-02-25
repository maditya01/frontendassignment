import React from 'react';
import ToggleButton from './ToggleButton'; // Assuming you have a ToggleButton component

const getCurrentDate = () => {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}
const CurrentDate = () => {
  const date = getCurrentDate();

  return (
    <div>
      <h2>{date}</h2>
    </div>
  );
}


const TaskCard = (props) => {
  return (
    <div className="card w-75 mx-auto mt-4" style={{ borderLeft: '20px solid Turquoise' }}>
      <div className="card-header bg-primary text-white">
        <h2 className='ml-4'>Task Title: {props.item}</h2>
      </div>
      <div className="card-body">
        <h4 className="card-subtitle mb-3">Task Created date: {CurrentDate()}</h4>
        <h4 className="card-text">Task Description: {props.desc}</h4>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <ToggleButton />
          </div>
          <div className='icons'>
            <i
              className="fa-solid fa-trash-can icon-delete text-danger cursor-pointer"
              onClick={() => {
                props.deleteItem(props.index);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;