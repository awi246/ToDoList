/* eslint-disable react/prop-types */
const Item= ({todoName, todoDate, DeleteButtonClick})=> {
  return (
    <div className="container">
      <div className="row Arow">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button className="btn btn-danger Abutton" onClick={()=>DeleteButtonClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Item;
