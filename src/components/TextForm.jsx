import React, { useState } from "react";

export default function TextForm(props) {

  // This method is used to convert the text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // This method is used to convert the text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // This method is used to clear the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // This method is used to convert the first letter of each sentence to uppercase
  const handleSentenceClick = () => {
    let newText = text
      .split(".")
      .map((sentence) => {
        sentence = sentence.trim();
        if (sentence.length == 0) {
          return sentence;
        }
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      })
      .join(". ");
    setText(newText);
  };

  // This method is used to copy the text
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // This method is used to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="email"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Sentence case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          Characters Count: {text.length} | Word Count: {text.split(" ").length}{" "}
          | Sentence Count: {text.split(".").length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
