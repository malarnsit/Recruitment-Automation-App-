import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/candidates')  // Make sure the URL is correct
      .then(response => response.json())
      .then(data => setCandidates(data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  return (
    <div className="App">
      <h1>Recruitment App</h1>
      <ul>
        {candidates.length > 0 ? (
          candidates.map(candidate => (
            <li key={candidate._id}>
              {candidate.name} - {candidate.applicationStatus}
            </li>
          ))
        ) : (
          <li>No candidates available</li>
        )}
      </ul>
    </div>
  );
}

export default App;
