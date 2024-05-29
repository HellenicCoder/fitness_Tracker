// src/components/ActivityList.js
import React from 'react';

const ActivityList = ({ activities, onDelete }) => {
  return (
    <div>
      <h2>Activity List</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <div>Type: {activity.type}</div>
            <div>Duration: {activity.duration} minutes</div>
            <div>Date: {activity.date}</div>
            <div>Notes: {activity.notes}</div>
            <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
