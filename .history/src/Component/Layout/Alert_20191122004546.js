import React from "react";

export const Alert = ({ alert }) => {
  return alert !== null && <div className={"alert alert-${alert.type}"}>
      <i 'fas fa-info-circle' />     

          {alert.msg}

  </div>;
};
