import React, {useState} from "react"; 
import {CreationRow} from "../../components/CreationRow"; 
import { RowList } from "../../components/RowList";

//Style Of Component
import './toDoListView.scss';

const ToDoListView = ( ) => {
 
	const [listComplete,setListComplete ]=useState( [ ] )

  const labelGrid = [ 'name', 'description', 'status', 'modification', 'delete' ]

  

  return (
    <div className="todolist-todolistview">  
				<div  className="todolistview-title" >
						<h1>TO DO LIST</h1>
				</div>
				<CreationRow listComplete={listComplete} setListComplete={setListComplete} />  
        <div className="todolistview-grid">  
          <div className="todolistview-grid-title">
            { labelGrid.map( (item,index)=> <label className={"view-title "+item} key={index}> {item} </label> ) }
          </div> 
          <ul>
            { 
              listComplete.map( (item,index) =>  
                <RowList item={item} index={index}  listComplete={listComplete} setListComplete={setListComplete} key={index}/>  
                )
            } 
          </ul>
        </div>
    </div>
  ); 
}
export default React.memo(ToDoListView); 