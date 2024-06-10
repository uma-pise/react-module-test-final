import React, { useState } from 'react';
import './GroupPopup.css';

const GroupPopup = ({ onClose, onSave }) => {
    /*const colour = [
        "#B38BFA",
        "#FF79F2",
        "#43E6FC",
        "#F19576",
        "#0047FF",
        "#6691FF",
    ];*/
    //const [selectedColor, setSelectedColor] = useState("");
    const [groupName, setGroupName] = useState('');

    const handleSave = () => {
        if (groupName.trim()) {
        onSave(groupName);
        setGroupName('');
        }
    };

  return (
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <div className="popup-content">
        <p style={{fontSize:"25px", fontWeight:"500",lineHeight:"45px"}}> Create New Notes Group</p>
        <div style={{display:"flex"}}>
            <label className="label" style={{fontSize:"25px", fontWeight:"500",alignItems:"left",padding:"0px 10px"}}>Group Name</label>
            <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter your group name..."
            style={{fontSize:"22px", padding:"2px 22px", fontWeight:"400", width:"350px", marginLeft:"13px", 
                borderRadius :"50px", border:"2px solid #CCCCCC", }}
            /> 
        </div>
        <div style={{display:"flex",marginTop:"15px"}}>
            <label style={{fontSize:"25px", fontWeight:"500",alignItems:"left",padding:"0px 10px"}}>Choose Colour</label>
            
        </div>
        <button onClick={handleSave} style={{background:"black", color:"white", borderRadius:"50px", fontSize:"20px",
            position:"fixed", bottom:"230px", right:"460px",width: "90px", height: "35px"
        }}>Create</button>
        {/*<button onClick={onClose}>Close</button>*/}
      </div>
    </div>
  );
};

export default GroupPopup;
