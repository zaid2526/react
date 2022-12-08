import './ExpenseList.css'

import ExpenseItem from './ExpenseItem';

const ExpenseList=(props)=>{
    // {props.filteredExpnses.length===0 && <p>no data found</p>}
        if(props.filteredExpnses.length===0){
          return <h2 className='expenseslist__fallback'>Expenses not found</h2>
        }


            return (
              <ul className='expenses-list'>
                {
                  props.filteredExpnses.map((expense) => {
                    return(<div key={expense.id} id={expense.id}>
                      <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                      />
                    </div>)
                    
                  })
                } 
              </ul>
            )
};


export default ExpenseList;