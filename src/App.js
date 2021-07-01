import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const expensesStart = [
  { 
    id:'e1',
    title: 'Toilet Paper',
    amount: '90',
    date: new Date(2020,5,14)
  },
  {
    id:'e2',
    title: 'TV',
    amount: '900',
    date: new Date(2021,5,12)
  },
  {
    id:'e3',
    title: 'Car Insurance',
    amount: '9000',
    date: new Date(2021,6,28)
  },
  {
    id:'e4',
    title: 'New Desk(Wooden)',
    amount: '6000',
    date: new Date(2021,2,12)
  },
  {
    id:'e5',
    title:'Cricket Bat',
    amount:'200',
    date:new Date(2021,9,10)
  }
];
function App(props) {
  
  console.log(expensesStart[0].title);
  const [expenses,setExpenses] = useState(expensesStart);

  function addExpenseHandler(expense)
  {
    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses];
    });
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses exp={expenses}/>
    </div>
  );
}

export default App;
