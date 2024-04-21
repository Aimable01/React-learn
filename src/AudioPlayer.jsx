import React, { useState, useRef } from "react";

export default function AudioPlayer() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const audioRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
    setCurrentFileIndex(0); // Reset to first file
  };

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const playNext = () => {
    if (currentFileIndex < selectedFiles.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  const playPrev = () => {
    if (currentFileIndex > 0) {
      setCurrentFileIndex(currentFileIndex - 1);
    }
  };

  return (
    <div>
      <h2>Audio Player</h2>
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileChange}
      />
      {selectedFiles.length > 0 && (
        <audio
          controls
          ref={audioRef}
          src={URL.createObjectURL(selectedFiles[currentFileIndex])}
        >
          Your browser does not support the audio element.
        </audio>
      )}
      <div>
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
        <button onClick={playPrev}>Previous</button>
        <button onClick={playNext}>Next</button>
      </div>
    </div>
  );
}
