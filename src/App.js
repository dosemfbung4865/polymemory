import React from 'react';
import MemoEditor from './components/MemoEditor';
import TagInput from './components/TagInput';
import FileDropzone from './components/FileDropzone';
import MemoButtons from './components/MemoButtons';
import './App.css';

const App = () => {
  const handleSave = () => {
    console.log('Save button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  return (
    <div className="App">
      <h1>Memo Editor</h1>
      <MemoEditor />
      <TagInput />
      <FileDropzone />
      <MemoButtons onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default App;
