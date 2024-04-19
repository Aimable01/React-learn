// uploading files in react js
import { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const renderFile = () => {
    if (!selectedFile) return <p>Select a file</p>;
    if (selectedFile.type.startsWith("image/"))
      return (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      );
    return <p>{selectedFile.name}</p>;
  };

  return (
    <div>
      <h2>File upload</h2>
      <input type="file" onChange={handleFileChange} />
      <div>{renderFile()}</div>
    </div>
  );
}
