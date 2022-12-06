import "./ExpenseItem.css";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


function ExpenseItem(props) {
  const eventHandler=()=>{
    console.log('button clicked..!!!')
    
  }
  const deleteHandler=()=>{
    console.log('button clicked..!!!')
    const toDelete=document.getElementById(props.id);
    toDelete.remove();
  }
  
  return (
    <Card  className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={eventHandler}>Submit</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>

 
  );
}

export default ExpenseItem;
