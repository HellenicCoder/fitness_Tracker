// src/App.js
import React, { useState } from 'react';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import ActivitySummary from './components/ActivitySummary';
import './styles.css';

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const deleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <div className="App">
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activities} onDelete={deleteActivity} />
      <ActivitySummary activities={activities} />
    </div>
  );
}

export default App;
