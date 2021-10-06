import React,{useState}from "react"; 
import {SelectProgres} from "./../SelectProgres";

//Style Of Component
import './creationRow.scss';

const CreationRow = ( {listComplete, setListComplete} ) => {

	const [ addRow, setAddRow ]= useState({ id:null , name:"", description:"", status:"BACKLOG" })
 
	const addRowList = () => {  
		setAddRow({ ...addRow, id:listComplete.length  })    
		const newList = [...listComplete];
		newList.push(addRow)
		setListComplete( newList )
	} 

  return(
    <> 
      <div className="todolist-creationrow" >  
        <div className="creationrow-container name">  
            <label className="label"> Assegnazione </label>  
            <input className="input" type="text" label={addRow.name} value={addRow.name}  onChange={ (event) => setAddRow({ ...addRow, name: event.target.value }) } /> 
        </div>      
        <div className="creationrow-container description">  
            <label className="label"> Descrizione </label> 
            <input className="input" type="text" label={addRow.description} value={addRow.description}  onChange={ (event) => setAddRow({ ...addRow, description: event.target.value }) } />  
        </div>   
        <div className="creationrow-container status">  
          <label className="label"> Status </label> 
          <SelectProgres element={addRow}   setElement={setAddRow}/>  
        </div>   
        <div  className="creationrow-container button">
          <button className="creationrow-send-work-list"  onClick={ addRowList }>SUBMIT</button>
        </div>
      </div>  
    </>
  )
}
 
export default React.memo(CreationRow);
