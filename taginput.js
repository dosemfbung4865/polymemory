import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const TagInput = () => {
  const [tags, setTags] = useState([]);

  return (
    <TagsInput value={tags} onChange={setTags} />
  );
};

export default TagInput;
