import React from 'react';

function Hour(props) {
  return (
    <div className="hora">
      <div>{props.hora}</div>
      <div>{props.estadoDelCielo}</div>
      <div>{props.temperatura}</div>
    </div>
  );
}

export default Hour;
