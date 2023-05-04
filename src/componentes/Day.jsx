import React from 'react';

function Day(props) {
  return (
    <div className="dia">
      <div>{props.day}</div>
      <div>{props.tempMin}</div>
      <div>{props.tempMax}</div>
      <div>{props.weatherThype}</div>
    </div>
  );
}

export default Day;
