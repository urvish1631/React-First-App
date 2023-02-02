import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 294.23, date: new Date(2022, 8, 22) },
    { id: 2, title: 'Car Maintainence', amount: 2294.23, date: new Date(2022, 3, 21) },
    { id: 3, title: 'New Meal Brunch', amount: 4.23, date: new Date(2022, 2, 3) },
    { id: 4, title: 'Accident', amount: 23, date: new Date(2022, 5, 4) },
  ];

  // return React.createElement('div', {}, React.createElement('h2', {}, "Let's get Started"), React.createElement(Expenses, { items: expenses },),);

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
