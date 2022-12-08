import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setEnteredTitle((prevTitle)=>{
    //     return event.target.value;
    // })

    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    //   });
  };
  // console.log("sds",enteredTitle);
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)

    setEnteredAmount(()=>{
        return  event.target.value;
        
    })

    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)

    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    //   });
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate),
    }
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Title</label>
          <input type="text"value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2023-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
