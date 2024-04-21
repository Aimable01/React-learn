import React, { useState } from "react";

export default function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
    setFiles([...files, selectedFile]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        style={{ border: "1px dashed black", padding: "20px" }}
      >
        {" "}
        <input type="file" onChange={handleFileChange} />{" "}
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}{" "}
      </div>
      <div>
        <ul>
          {files.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
