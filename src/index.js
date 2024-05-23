import React from 'react';
import ReactDOM from 'react-dom/client';  // 변경: react-dom/client 사용
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);  // 변경: createRoot 사용

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
