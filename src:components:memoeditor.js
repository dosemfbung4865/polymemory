import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MemoEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
};

export default MemoEditor;
