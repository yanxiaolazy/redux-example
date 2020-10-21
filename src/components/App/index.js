import React from 'react';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Footer from '../Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
