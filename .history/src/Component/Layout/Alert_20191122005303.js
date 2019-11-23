import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
        console.log("haha")
      <div className={"alert alert-${alert.type}"}>
        <i className='fas fa-info-circle' />

        {alert.msg}
      </div>
    )
  );
};
export default Alert;
