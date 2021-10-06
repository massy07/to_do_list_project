import React from "react"; 
import { Route, BrowserRouter,Switch  } from 'react-router-dom'
import { HomePage } from './views/HomePage'; 
import { ToDoListView } from './views/ToDoListView';

//Style Of Component
import '../src/theme/global.scss';


function App() {
  return (
    <div className="App-todolist">
    <BrowserRouter> 
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  exact path='/listView' component={ToDoListView}/>
      </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
