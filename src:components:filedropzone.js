import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropzone = () => {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
    </div>
  );
};

export default FileDropzone;
