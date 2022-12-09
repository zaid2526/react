import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseList from './ExpenseList'
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // console.log("after",filteredExpnses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpnses} />
        {/* <ExpenseList filteredExpnses={filteredExpnses}/> */}
        {filteredExpnses.length === 0 && <p>no data found</p>}
        {filteredExpnses.length > 0 &&
          filteredExpnses.map((expense) => {
            return (
              <div key={expense.id} id={expense.id}>
                <ExpenseItem
                  id={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </div>
            );
          })}
      </Card>
    </div>
  );
}

export default Expenses;
