import React from 'react';

function Alert(props) {

    const capitalized=(word)=>
    {
            var lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
    }


  return (
    <>
      {props.alerts && (
        <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalized(props.alerts.type)}</strong>: {props.alerts.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </>
  );
}

export default Alert;
