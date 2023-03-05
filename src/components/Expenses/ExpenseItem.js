import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {

  /* 
  * Array destructuring
  * @Param title contains the existing value.
  * @Param setTitle contains the new value.
  */
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  // setTitle() will call useState()
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
      {/* clicking on this button invokes clickHandler function. */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;