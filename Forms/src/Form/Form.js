import React from 'react';

const form = (props) =>{
  return(
    <div className="Form">
    <form>
    Comma Seperated<br /> <input type="text"  onChange={props.change} value={props.multitext} />
    <br />Multiline<br /> <textarea rows={props.rows} value={props.text} onChange={props.changeText}/>
    
    </form>
    </div>
  );
};
export default form;
