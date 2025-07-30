import React from 'react';

function CourseDetails() {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' }
  ];

  return (
    <div className="section">
      <h2>Course Details</h2>
      <div className="card-row">
        {courses.map((course, i) => (
          <div className="card" key={i}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;


