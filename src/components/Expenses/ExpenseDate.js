function ExpenseDate(props){
   const month=props.dat.toLocaleString('en-US',{month : 'long' });
   const day=props.dat.toLocaleString('en-US',{day : '2-digit' });
   const year=props.dat.getFullYear()
   
   return(<div className='expense-item__date'>
   <div>{month}</div>
   <div>{day}</div>
   <div>{year}</div>
   </div>);
    

}

export default ExpenseDate;