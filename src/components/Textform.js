// import React from 'react'
// import PropTypes from 'prop-types'
import React, { useState } from 'react';



export default function Textform(props) {
  const [text, setText] = useState('Enter your text');
  const handleOnChange = (event) =>{
    console.log("handle on change");
    setText(event.target.value);
  }

  const handleUpClick = (event) => {
    console.log("uppercase clicked");
    // setText("u have clicked on uppercase button");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoUpClick = (event) => {
    console.log("lowercase clicked");
    // setText("u have clicked on uppercase button");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handllClearClick = (event) => {
    console.log("lowercase clicked");
    // setText("u have clicked on uppercase button");
    let newText = ' '
    setText(newText);
  }



  return (
    <div>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
                <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoUpClick}>Lowercase</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handllClearClick}>Reset</button>
            </div>

          {/* counting words */}
            <div className='continer my-3'>
                <h1>text summery</h1>
                <p>{text.split(" ").length} words  and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>

        </div>
        
    </div>
  )
}
