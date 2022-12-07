import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const initialExpenses = [
  {
    id: "e1",
    title: "CarInsurance",
    amount: 980,
    date: new Date(2022, 4, 8),
  },
  {
    id: "e2",
    title: "toilet paper",
    amount: 90,
    date: new Date(2022, 4, 8),
  },
  {
    id: "e3",
    title: "Movie",
    amount: 367,
    date: new Date(2021, 9, 3),
  },
  {
    id: "e4",
    title: "petrol",
    amount: 209,
    date: new Date(2020, 4, 8),
  },
];
const App=()=> {
  
  const [expenses,setExpenses]=useState(initialExpenses)
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
    // setExpenses([expense, ...expenses])

  }
  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };
  
  
  // const addExpenseListHandler=()=>{
  //   setExpenseList(expenses);
  //   console.log("onsubmit")
  
  // }

  return (
    <div>
      <h2>Let's get started!</h2>
    <p>this will also be visible</p>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenses} />
    </div>

  )
}

export default App;
