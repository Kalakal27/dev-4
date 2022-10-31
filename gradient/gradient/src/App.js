import './App.css';
import {useState} from 'react';

function App() {
  const [colors, setColor] = useState(['#ff0000', '0000ff']);
  const [degrees, setDegrees] = useState(0);

  const makeGradientString =() => {
    const colorString = colors.reduce((acc, currentValue) => {
      return `${acc}, ${currentValue}`
    });
  return `linear-gradient(${degrees}deg, ${colorString})`;
  };
  return (
    <>
    {colors.map((color, i) => (
       <div className="App">
       {/* button to change color */}
      <input 
      type="color"
      name={`color-${i}`}
      value={`${color}`}
      />
      <label htmlFor={`color-${i}`}>{`color-${i}`}</label>
     </div>
    ))}
      <div 
      className="display-box"
      style={{
        background: makeGradientString()
      }}
      ></div>
    </>
  );
}

export default App;
