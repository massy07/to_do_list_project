import React, {useState}  from "react"; 
import {SelectProgres} from "./../SelectProgres";
import deleteImg from "../../image/delete.svg";
import database from "../../image/database.svg";
 
//Style Of Component
import './rowList.scss';

const RowList = ({ item, index ,listComplete, setListComplete }) => { 

	const [ showInput, setShowInput ]= useState( false )  
  const [ elementChainge, setElementChange ]= useState( item )

  const deleteRow = (index) => { 
		const tempList = [...listComplete];
		tempList.splice( index, 1) 
		setListComplete( tempList )
	}
 
  const insertRow = ( element, index ) => {
		const tempList = [...listComplete];
		tempList.splice( index, 1,element) 
		setListComplete( tempList ) 
  }

  const updateValue = (index) => {
    if(showInput){ 
      insertRow( elementChainge, index)
    }
    setShowInput(!showInput)
  }
 

  return (  
        <li className="todolist-rowlist">
          {!showInput&&  <label className="show-row name">{ item.name } </label>}
          {showInput&& <input className="show-row name input" type="text" label={elementChainge.name} value={elementChainge.name}  onChange={ (event) => setElementChange({ ...elementChainge, name: event.target.value }) } />}
          {!showInput&&  <label className="show-row description"> { item.description } </label> }
          {showInput&&  <input className="show-row description input" type="text" label={elementChainge.description} value={elementChainge.description}  onChange={ (event) => setElementChange({ ...elementChainge, description: event.target.value }) } /> }
          <div className="show-row status input">
            <SelectProgres element={elementChainge}   setElement={setElementChange}/> 
          </div>
          <div className="show-row modification" onClick={ () => updateValue(index)}> 
            <img src={database} alt={database}  /> 
          </div>
          <div className="show-row delete" onClick={ () => deleteRow(index)}> 
            <img src={deleteImg} alt={deleteImg} /> 
          </div>  
        </li>   
  )
}

export default React.memo(RowList);  
