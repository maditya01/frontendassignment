import React, { useState } from 'react';

const ToggleButton = () => {
  const [completed, setCompleted] = useState(false);
  const [btnColor, setBtnColor] = useState("red");

  const toggleCompleted = () => {
    btnColor === "red" ? setBtnColor("green") : setBtnColor("red");
    setCompleted(!completed);
  };

  return (
    <div>
      <button class="btn btn-primary" onClick={toggleCompleted} style={{ backgroundColor: btnColor }}>
        {completed ? 'Completed ' : 'Press here to mark as Completed '}
        {completed ? <i className="fa-solid fa-check icon-tick"></i> : <i className="fa-solid fa-clock icon-pending"></i>}
      </button>
    </div>
  );
};

export default ToggleButton;