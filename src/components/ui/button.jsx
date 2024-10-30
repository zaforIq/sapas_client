import React from 'react';

const Button = ({ InnerText,btnOnclick }) => {
  return (
    <button onClick={btnOnclick} className='border border-[#1a69b9] hover:bg-gradient-to-r from-[#1a69b9] to-[#17918e] hover:text-white font-bold py-2 px-4 rounded'>
      {InnerText}
    </button>
  )
};

export default Button;