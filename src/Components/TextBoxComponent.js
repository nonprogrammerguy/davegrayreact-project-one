const TextBoxComponent = ({textValue, bgColor}) => {
  return (
    <div className='value-box' style={bgColor}>
        {textValue ? textValue : 'Empty Value'}
    </div>
  )
}

export default TextBoxComponent;