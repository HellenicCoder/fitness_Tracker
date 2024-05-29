// src/components/ActivitySummary.js
import React from 'react';

const ActivitySummary = ({ activities }) => {
  // Calculate total duration
  const totalDuration = activities.reduce((total, activity) => total + parseInt(activity.duration || 0), 0);

  // Calculate average duration per activity
  const averageDuration = activities.length > 0 ? totalDuration / activities.length : 0;

  return (
    <div>
      <h2>Activity Summary</h2>
      <p>Total Duration: {totalDuration} minutes</p>
      <p>Average Duration per Activity: {averageDuration.toFixed(2)} minutes</p>
    </div>
  );
};

export default ActivitySummary;
