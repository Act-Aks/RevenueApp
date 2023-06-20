import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSaveExpense({
      title,
      amount,
      date,
    });
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min={"2017-01-01"}
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
