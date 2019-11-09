import React from 'react';

function Time ({counter}) {
  const hour = Math.floor(counter / 3600);
  const min = Math.floor((counter % 3600) / 60);
  const sec = counter % 60;
  return <div style={style}>
    <span>{hour.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
    :
    <span>{min.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
    :
    <span>{sec.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
  </div>;
}

const style = {
  color: '#FFF',
  fontSize: 40,
  fontWeight: 'bold'
};

export {Time};