import React from 'react';
import './App.css';
import ClassComponent from './class/ClassComponent';
import FunctionNomal from './functionNomal/FunctionNomal';
import FunctionReducer from './functionReducer/FunctionReducer';
import FunctionRedux from './functionRedux/FunctionRedux';
import FuntionReduxImmer from './funtionReduxImmer/FuntionReduxImmer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionNomal />
      <FunctionReducer />
      <FunctionRedux />
      <FuntionReduxImmer />
    </div>
  );
}

export default App;
