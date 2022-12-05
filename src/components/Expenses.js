import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from './Card'

function Expenses(){
    const expenses = [
        {
          id: "e1",
          title: "CarInsurance",
          amount: 980,
          date: new Date(2012, 4, 8),
        },
        {
          id: "e1",
          title: "CarInsurance2",
          amount: 980,
          date: new Date(2012, 4, 8),
        },
        {
          id: "e1",
          title: "CarInsurance3",
          amount: 980,
          date: new Date(2012, 4, 8),
        },
        {
          id: "e4",
          title: "CarInsurance4",
          amount: 980,
          date: new Date(2012, 4, 8),
        },
      ];
    
      return(
        <Card className="expenses">
          {
            expenses.map((expense) => {
              return (
                <div>
                  <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                  />
                </div>
              )
            })
          }
        </Card>
        
      )
}

export default Expenses;