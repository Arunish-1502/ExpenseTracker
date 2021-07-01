import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css'


function NewExpense(props)
{
    const[isEditing,setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    function editHandler()
    {
        setIsEditing(true);
    }

    function stopHandler()
    {
        setIsEditing(false);
    }

    let showButton=<center><button onClick={editHandler}>Add Expense</button></center>;

    if(isEditing)
    {
         showButton=<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopHandler}/>;
    }


    return(
        <div className='new-expense'>
            {showButton}
        </div>
    );
}

export default NewExpense;