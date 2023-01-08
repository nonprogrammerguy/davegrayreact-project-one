import React from 'react'

const InputBoxComponent = ({handleTextValueChange}) => {
   
  return (
    <input 
      className='input-box' 
      placeholder='Add color name'
      name='textValue' onChange={(e) => handleTextValueChange(e)}
    />
  )
}

export default InputBoxComponent;