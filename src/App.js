import './App.css';
import TextBoxComponent from './Components/TextBoxComponent';
import InputBoxComponent from './Components/InputBoxComponent';
import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState(null);

  const [bgColor, setBgColor] = useState({
    backgroundColor: '#ffffff',
  });

  const mapping = [
    'Grey',
    'grey',
    'SlateGray',
    'black',
    'Dim Grey',
    'Very Light Grey',
    'Free Speech Grey',
    'AliceBlue',
    'BlueViolet',
    'CadetBlue',
    'Corn Flower Blue',
    'DarkSlateBlue',
    'DarkTurquoise',
    'DeepSkyBlue',
    'DodgerBlue',
    'LightBlue',
    'LightSteelBlue',
    'Aquamarine',
    'MediumBlue',
    'NavyBlue',
    'MidnightBlue',
    'PaleTurquoise',
    'PowderBlue',
    'RoyalBlue',
    'SkyBlue',
    'SteelBlue',
    'aquamarine',
    'azure',
    'True Iris Blue',
    'turquoise',
    'DarkSlateGray',
    'Rich Blue',
    'Midnight Blue',
    'Slate Blue',
    'Summer Sky',
    'Free Speech Blue',
    'RosyBrown',
    'brown',
    'Dark Tan',
    'Light Wood',
    'Dark Wood',
    'Dark Green',
    'DarkKhaki',
    'DarkOliveGreen',
    'Medium Forest Green',
    'Pale Green',
    'DarkOrange',
    'DarkSalmon',
    'Mandarian Orange',
    'PapayaWhip'
  ];

  const handleTextValueChange = (e) => {
    let inputValue = e.target.value;

    setTextValue(inputValue);

    handleBackgroundColorMapping(inputValue);
  }

  const handleBackgroundColorMapping = (inputValue) => {
    let bgColorMapping = {
      backgroundColor: '#ffffff',
    };

    if (inputValue === '') {
      setBgColor(bgColorMapping);

      return;
    }

    let colorExists = mapping.indexOf(inputValue);

    if (colorExists < 0) {
      setBgColor(bgColorMapping);

      return;
    }

    bgColorMapping.backgroundColor = mapping[colorExists] ?? '#ffffff';

    setBgColor(bgColorMapping);
  }

  return (
    <div className='content'>
      <TextBoxComponent textValue={textValue} bgColor={bgColor} />
      <InputBoxComponent handleTextValueChange={handleTextValueChange}/>
    </div>
  );
}

export default App;
