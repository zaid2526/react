import React, { useState } from 'react';

import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
  // const [filteredYear, setFilteredYear] = useState('2020');

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };
  
  console.log("after",props.expenses);
    
      return(
        <div>
          <Card className="expenses">
          {/* <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
          {
            props.expenses.map((expense) => {
              
              return (
                <div id={expense.id}>
                  <ExpenseItem
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                  />
                </div>
              )
            })
          }
        </Card>
        </div>
        
      )
}

export default Expenses;