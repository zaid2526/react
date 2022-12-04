import ExpenseItem from "./components/ExpenseItem";

function App() {
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
    <div>
      <h2>Let's get started!</h2>
        <p>this will also be visible</p>
      {
        
        expenses.map((expense) => {
          return (
            <div>
              
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              ></ExpenseItem>
            </div>
          )
        })
      }
    </div>
    
  )
  
  
}

export default App;
