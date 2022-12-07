import React,{useState} from 'react'

import "./ExpenseItem.css";


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title)
  // const [amount, setAmount]=useState(props.amount)
  // const eventHandler=()=>{
  //   // console.log('button clicked..!!!')
  //   // console.log('befor....',title);
  //   setTitle('updated'); // it is like an async function 
  //   // console.log("after", title)
    
  // }
  
  const deleteHandler=()=>{
    console.log('button clicked..!!!')
    const toDelete=document.getElementById(props.id);
    toDelete.remove();
  }
  // const updateAmount=()=>{

  //   setAmount(100); // it is like an async function 
  // }
  return (
    <Card  className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
      <button onClick={deleteHandler}>Delete</button>
      {/* <button onClick={updateAmount}>Update Amount</button> */}
    </Card>

 
  );
}

export default ExpenseItem;
