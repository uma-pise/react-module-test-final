import React, { useState } from 'react';
import './NoteInput.css';
const NoteInput = ({ onSave }) => {
  const [noteContent, setNoteContent] = useState('');

  const handleSave = () => {
    if (noteContent.trim()) {
      onSave(noteContent);
      setNoteContent('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="note-input">
      <input
        type="text"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your text here..."
      />
      <button onClick={handleSave}>Enter</button>
    </div>
  );
};

export default NoteInput;
