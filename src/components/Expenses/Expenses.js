import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilters';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((item) =>
                <ExpenseItem title={item.title}
                    amount={item.amount}
                    date={item.date} />
            )}
        </div>
    )
}

export default Expenses
