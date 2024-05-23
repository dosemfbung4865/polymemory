import React from 'react';

const MemoButtons = ({ onSave, onCancel }) => {
  return (
    <div>
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default MemoButtons;
