
import React from "react";

//Style Of Component
import './selectProgres.scss';

const SelectProgres = ({ element, setElement }) => {  
 

  return(
    <div className="view-table select-custom" > 
      <select className="view-table list-progress" id="view-table list-progress" value={  element.status } onChange={ (event) => setElement({ ...element, status: event.target.value }) }> 
        <option value="BACKLOG">backlog</option>
        <option value="TODO">to do</option>
        <option value="IN PROGRESS">in progress</option>
        <option value="IN REVIEW">in review</option>
        <option value="COMPLETED">completed</option>
        <option value="CLOSED">closed</option> 
      </select>
    </div>  
  )
}

export default React.memo(SelectProgres);  
 