import React from 'react';

function FullWidthElement(props) {
  return (
    <div className='container relative rounded-xl overflow-auto p-8 bg-purple-800'>


      <div className='grid grid-cols-2 gap-4 font-mono leading-6'>
        <div className='bg-green-400'>
          <img src={props.img} alt='Bild'></img>
        </div>
        <div className='bg-green-400'>{props.children}</div>
      </div>

    </div>
  )
}

export default FullWidthElement;
