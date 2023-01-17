// Guestbook component

import { useState, useEffect } from "react";
// import { useState, useEffect } from "React";

function Guestbook() {
  const [inputs, setInputs] = useState(() => {
    const savedGuest = localStorage.getItem("greeting");

    // If
    if (savedGuest) {
      return JSON.parse(savedGuest);
    } else {
      return [];
    }
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("greeting", JSON.stringify(inputs));
  }, [inputs]);

  function handleInput(e) {
    setInput(e.target.value);
  }

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
    setInput("");
  }

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
