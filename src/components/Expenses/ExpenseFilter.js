
import './ExpenseFilter.css';

function ExpenseFilter(props) {
   
    function yearChangeHandler(event)
    {
        const pickedYear=event.target.value;
        props.onSelectYear(pickedYear);
    }

    return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.default} onChange = {yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;