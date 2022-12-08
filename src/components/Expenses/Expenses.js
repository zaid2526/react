import React, { useState } from 'react';

import './Expenses.css'

import ExpenseList from "./ExpenseList";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  // console.log("after",filteredExpnses);
  
    
      return(
        <div>
          <Card className="expenses">
          <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList filteredExpnses={filteredExpnses}/>
        



        </Card>
        </div>
        
      )
}

export default Expenses;