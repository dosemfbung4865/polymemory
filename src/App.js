import React, { useState, useEffect } from 'react';
import MemoEditor from './components/MemoEditor';
import TagInput from './components/TagInput';
import FileDropzone from './components/FileDropzone';
import MemoButtons from './components/MemoButtons';
import CalendarView from './components/CalendarView';
import ProjectManager from './components/ProjectManager';
import './App.css';

const App = () => {
  const [data, setData] = useState({ key: 'value' });

  // 컴포넌트가 마운트될 때, `localStorage`에서 데이터를 읽어옵니다.
  useEffect(() => {
    const storedData = localStorage.getItem('someKey');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, []);

  // 데이터를 저장하는 함수
  const saveData = () => {
    localStorage.setItem('someKey', JSON.stringify(data));
  };

  return (
    <div className="App">
      <h1>Memo Editor</h1>
      <MemoEditor />
      <TagInput />
      <FileDropzone />
      <MemoButtons onSave={saveData} onCancel={() => console.log('Cancel button clicked')} />
      <h1>Calendar</h1>
      <CalendarView />
      <h1>Project Manager</h1>
      <ProjectManager />
      <h1>Stored Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default App;
