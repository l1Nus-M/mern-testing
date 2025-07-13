import React from 'react';

function BugList({ bugs, onUpdate, onDelete }) {
  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id}>
          <strong>{bug.title}</strong> - {bug.status}
          <button onClick={() => onUpdate(bug._id, { status: 'in-progress' })}>In Progress</button>
          <button onClick={() => onUpdate(bug._id, { status: 'resolved' })}>Resolve</button>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BugList;