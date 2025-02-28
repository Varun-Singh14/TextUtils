import React, { useState } from "react";

export default function TextForm(props) {
  // This method is used to convert the text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  // This method is used to convert the text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  // This method is used to clear the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
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
    props.showAlert("Converted to Sentence case!", "success");
  };

  // This method is used to copy the text
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  };

  // This method is used to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="email"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onFocus={(e) =>
              e.target.style.setProperty(
                "--placeholder-color",
                props.mode === "dark" ? "white" : "#042743"
              )
            }
          />
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceClick}>
          Sentence case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          Characters Count: {text.length} | Word Count:{" "}
          {text.trim().split(/\s+/).filter(Boolean).length}  | Sentence Count:{" "}
          {text.split(".").length-1}
        </p>
        <p>{0.008 * text.split(/\s+/).filter(Boolean).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
