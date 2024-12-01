import React from 'react';

const Button = ({ InnerText,btnOnclick }) => {
  return (
    <button onClick={btnOnclick} className=''>
      {InnerText}
    </button>
  )
};

export default Button;