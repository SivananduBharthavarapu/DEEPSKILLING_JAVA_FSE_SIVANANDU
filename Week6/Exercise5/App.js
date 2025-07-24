import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: "React Bootcamp",
      startDate: "01-Jan-2025",
      endDate: "30-Mar-2025",
      status: "ongoing"
    },
    {
      name: "Java Spring Batch",
      startDate: "10-Feb-2025",
      endDate: "25-May-2025",
      status: "completed"
    }
  ];

  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
