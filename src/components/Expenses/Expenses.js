import './Expenses.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import {useState} from 'react';

function Expenses(props){
     
     const [selectedYear,setSelectedYear] = useState('2019');

     function selectYearHandler(selectYear)
     {
          setSelectedYear(selectYear);
          
     }
     const filteredExpenses=props.exp.filter(expenses =>{
          return expenses.date.getFullYear().toString()===selectedYear;
     });

    



     return (<li>
      <Card className="expenses">
      <ExpenseFilter default={selectedYear} onSelectYear={selectYearHandler} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>  
      </Card>
      </li>
     );

}

export default Expenses;