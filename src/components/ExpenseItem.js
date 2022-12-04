import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate=new Date(2012,12,4)
    const expenseTitle= "car Insurance"
    const expensePrice= 2425
  return (
    <div className="expense-item">
      <div> {expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>

    // <div>
    //   <div> Expense Item</div>
    //   <div>
    //     <h4>Food Rs 10</h4>
    //     <h4>petrol Rs 100</h4>
    //     <h4>Movie Rs 2000</h4>
    //   </div>
    // </div>
  );
}

export default ExpenseItem;
