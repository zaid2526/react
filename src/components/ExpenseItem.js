import './ExpenseItem.css'

function ExpenseItem(props) {
    
  return (
    <div className="expense-item">
      <div> {props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
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
