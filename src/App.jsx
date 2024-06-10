import React, { useState, useEffect } from 'react';
import GroupPopup from './Components/GroupPopup/GroupPopup';
import NoteInput from './Components/NoteInput/NoteInput';
import NoteList from './Components/NoteList/NoteList';
import './App.css';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState({});
  const [currentGroup, setCurrentGroup] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    setGroups(savedGroups);
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addGroup = (groupName) => {
    if (groupName.trim()) {
      setGroups([...groups, groupName]);
      setCurrentGroup(groupName);
      setIsPopupOpen(false);
    }
  };

  const addNote = (noteContent) => {
    const newNote = {
      content: noteContent,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes({
      ...notes,
      [currentGroup]: [...(notes[currentGroup] || []), newNote],
    });
  };

  const handlePopupClick = (e) => {
    if (e.target.className === 'overlay') {
      setIsPopupOpen(false);
    }
  };

  return (
    
    <div className="main">
      <div className='left'>
      <h1 className="heading">Pocket Notes</h1>
        <button onClick={() => setIsPopupOpen(true)} className="create-group-btn"><b>+</b> Create Notes Group</button>
        {isPopupOpen && (
          <div className="overlay" onClick={handlePopupClick}>
            <GroupPopup onClose={() => setIsPopupOpen(false)} onSave={addGroup} />
          </div>
        )}
        <div className="groups">
          {groups.map((group, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroup(group)}
              className={`group-btn ${currentGroup === group ? 'active' : ''}`}
            >
              {group}
            </button>
          ))}
        </div>
        
      </div>
      <div className="right">
      {currentGroup && (
          <div>
            <h2>{currentGroup}</h2>
            <NoteInput onSave={addNote} />
            <NoteList notes={notes[currentGroup] || []} />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default App;
