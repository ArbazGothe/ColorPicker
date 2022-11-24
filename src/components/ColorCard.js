import { useState } from 'react';

export default function ColorCard({ color, removeColor, updateColor }) {
  const [newColor, setNewColor] = useState(color.value);

  let styles = { backgroundColor: color.value };
  const [inputVisibility, setInputVisibility] = useState(false);

  function handleChange(event) {
    setNewColor(event.target.value);
  }
  function toggleInput() {
    setInputVisibility(!inputVisibility);
  }
  function keyDownHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      styles = { backgroundColor: newColor };
      updateColor({ id: color.id, value: newColor });
    }
  }

  return (
    <div style={styles} className='card dlt'>
      <div className='d-flex justify-content-end align-start w-100'>
        <svg style={{ width: '18px', height: '18px' }} viewBox='0 0 24 24' onClick={toggleInput}>
          <path
            fill='currentColor'
            d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z'
          />
        </svg>
        <svg
          style={{ width: '18px', height: '18px' }}
          viewBox='0 0 24 24'
          className='detele-icon'
          onClick={() => {
            removeColor(color.id);
          }}>
          <path
            fill='currentColor'
            d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z'
          />
        </svg>
      </div>
      {inputVisibility && (
        <input value={newColor} onChange={handleChange} onKeyDown={keyDownHandler} type='text' className='p-0 input' />
      )}
    </div>
  );
}
