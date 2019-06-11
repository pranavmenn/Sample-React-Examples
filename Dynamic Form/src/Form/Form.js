import React from 'react';

const form = (props) =>{
  return(
  <div className="Form">
  <form onSubmit={props.submit}>
  Email:<input type="text" onChange={props.email} /><br />
  Password:<input type="password" onChange={props.pass} /><br />
  <button onClick={props.submit} type="submit" disabled={props.disable}>Submit</button>
  </form>
  </div>
);
};
export default form;
