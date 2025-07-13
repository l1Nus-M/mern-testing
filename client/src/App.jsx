import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState('');

  const fetchBugs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bugs');
      setBugs(res.data);
    } catch (err) {
      setError('Failed to fetch bugs');
    }
  };

  useEffect(() => { fetchBugs(); }, []);

  const addBug = async (bug) => {
    try {
      const res = await axios.post('http://localhost:5000/api/bugs', bug);
      setBugs([...bugs, res.data]);
    } catch {
      setError('Failed to add bug');
    }
  };

  const updateBug = async (id, updates) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/bugs/${id}`, updates);
      setBugs(bugs.map(b => b._id === id ? res.data : b));
    } catch {
      setError('Failed to update bug');
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${id}`);
      setBugs(bugs.filter(b => b._id !== id));
    } catch {
      setError('Failed to delete bug');
    }
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <BugForm onSubmit={addBug} />
      <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />
    </div>
  );
}

export default App;