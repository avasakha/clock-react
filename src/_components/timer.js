import React from 'react';

function Time ({counter}) {
  const sec = counter % 60;
  const min = ((counter - sec) / 60) % 60;
  const hour = (counter - min * 60 - sec) / 3600;
  return <div style={style}>
    <span>{ hour>0?hour.toLocaleString('en',{minimumIntegerDigits: 2}):'00'}</span>
    :
    <span>{ min>0?min.toLocaleString('en',{minimumIntegerDigits: 2}):'00'}</span>
    :
    <span>{ sec>0?sec.toLocaleString('en',{minimumIntegerDigits: 2}):'00'}</span>
  </div>;
}

const style = {
  color: '#FFF',
  fontSize: 40,
  fontWeight: 'bold'
};

export {Time};