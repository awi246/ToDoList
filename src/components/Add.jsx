import { useRef } from "react";

/* eslint-disable react/prop-types */
function AddTODO({ onNewItem }) {
  const todoName = useRef("");
  const todoDate = useRef("");

  const handleButtonClick = () => {
    const todoNameValue = todoName.current.value;
    const todoDateValue = todoDate.current.value;
    onNewItem(todoNameValue, todoDateValue);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6">
          <input type="text" placeholder="Add Todo Here" ref={todoName} />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={todoDate} />
        </div>
        <div className="col-sm-2">
          <button
            className="btn btn-success Abutton"
            onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTODO;
