import React from 'react';
import './NoteList.css';
const NoteList = ({ notes }) => {
  return (
    <div className="note-list" >
      {notes.map((note, index) => (
        <div key={index} className="note" style={{display:"flex",justifyContent:"space-between", padding:"20px"}}>
          <small>
             {new Date(note.createdAt).toLocaleString()}<br />
            {/*Updated: {new Date(note.updatedAt).toLocaleString()}*/}
          </small>
          <p>{note.content}</p>
          
        </div>
      ))}
    </div>
  );
};

export default NoteList;
