// Guestbook component

import { useState, useEffect } from "react";
// import { useState, useEffect } from "React";
// Note: Had issues with the dev server not running, and the problem was the import of useState and useEffect being from 'React' instead of 'react'.
// Who knew you could waste 5 hours looking for a an R.....

function Guestbook() {
  const [inputs, setInputs] = useState(() => {
    const savedGuest = localStorage.getItem("greeting");

    // If saved guest is true, parse it into the savedGuest string, else set it to blank.
    if (savedGuest) {
      return JSON.parse(savedGuest);
    } else {
      return [];
    }
  });

  // Setting to useState to blank
  const [input, setInput] = useState("");

  // Sending messages to localStorage
  useEffect(() => {
    localStorage.setItem("greeting", JSON.stringify(inputs));
  }, [inputs]);

  // Setting setInput to value of input field
  function handleInput(e) {
    setInput(e.target.value);
  }

  // Taking the input from inputField and setting setInputs
  function handleSubmit(e) {
    e.preventDefault();

    if (input !== "") {
      setInputs([
        ...inputs,
        {
          id: inputs.length + 1,
          text: input.trim(),
        },
      ]);
    }
    // Clearing out the input field after sending message
    setInput("");
  }

  // Const to set the hour and min for the timestamp.
  const timeStamp = new Date().toString().substring(15, 21);

  return (
    <div className="GB">
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          placeholder="Write a christmas greeting!"
          value={input}
          onChange={handleInput}
        />
      </form>
      <ul className="inputList">
        {inputs.map((input) => (
          <>
            <li className="timestamp">{timeStamp}</li>
            <li className="guestmessage" key={input.id}>
              {input.text}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Guestbook;
