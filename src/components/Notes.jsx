import React, { useState } from "react";
import "../styles/notes.css";

function Notes() {
  const [note, setNote] = useState("This is how I am going to learn MERN Stack in next 3 months.");
  return (
    <div className='notes'>
      <h2>All Notes</h2>
      <textarea
        value={note}
        onChange={(e) => {
          setNote((prev) => {
            prev + e.target.value;
          });
        }}></textarea>
    </div>
  );
}

export default Notes;
