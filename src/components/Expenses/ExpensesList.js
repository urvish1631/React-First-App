import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


function ExpensesList(props) {
    if (props.items.length === 0) {
        return <h2 className='expenses-list_fallback'>Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>{ 
        props.items.map((item) =>
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date} />
        )}
        </ul>
    )
}

export default ExpensesList