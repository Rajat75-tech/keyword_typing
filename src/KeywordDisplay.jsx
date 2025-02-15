import React, { useState } from 'react';

function KeywordDisplay() {
  // State to hold the current input value and the value to display
  const [keyword, setKeyword] = useState('');
  const [displayText, setDisplayText] = useState('');

  // Update state when the user types into the input
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  // When the button is clicked, set displayText to the current keyword
  const handleButtonClick = () => {
    setDisplayText(keyword);
  };

  // State to hold the current input value
  const [keyword1, setKeyword1] = useState('');

  // onChange handler updates the state immediately
  const handleInputChange1 = (event) => {
    setKeyword(event.target.value);
  };

  return (
    // <div style={{ padding: '20px' }}>
    //   <h2>Enter a Keyword</h2>
    //   <input
    //     type="text"
    //     placeholder="Type here..."
    //     value={keyword}
    //     onChange={handleInputChange}
    //     style={{ padding: '10px', fontSize: '16px' }}
    //   />
    //   <button
    //     onClick={handleButtonClick}
    //     style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
    //   >
    //     Show Keyword
    //   </button>
    //   {/* Display the result only if displayText is not empty */}
    //   {displayText && (
    //     <div style={{ marginTop: '20px' }}>
    //       <strong>Result:</strong> {displayText}
    //     </div>
    //   )}
    
    <div style={{ padding: '20px' }}>
      <h2>Enter a Keyword</h2>
      <input
        type="text"
        placeholder="Type here..."
        value={keyword}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      {/* Display the result immediately as the user types */}
      <div style={{ marginTop: '20px' }}>
        <strong>Result:</strong> {keyword}
      </div>
    </div>
  );
}

export default KeywordDisplay;