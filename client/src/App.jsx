import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [studentEmail, setStudentEmail] = useState('');
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', instructor: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching courses', err);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/courses', newCourse);
      setNewCourse({ title: '', description: '', instructor: '' });
      fetchCourses();
      alert('Course added successfully!');
    } catch (err) {
      alert('Failed to add course');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const name = studentEmail.split('@')[0];
      const res = await axios.post('http://localhost:5000/api/students', {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email: studentEmail
      });
      setStudentId(res.data._id);
      setStudentName(res.data.name);
    } catch (err) {
      alert('Registration failed. This email might already be registered.');
    }
  };

  const enroll = async (courseId) => {
    if (!studentId) return alert('Please join the platform first!');
    try {
      await axios.post('http://localhost:5000/api/students/enroll', {
        studentId,
        courseId
      });
      alert('Successfully enrolled in course!');
    } catch (err) {
      alert('Enrollment failed. You might already be enrolled.');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>EduStream</h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Master your future with world-class courses.</p>
      </header>
      
      {!studentId ? (
        <div className="section-card registration-box">
          <h2 style={{ textAlign: 'center', margin: 0 }}>Join our community</h2>
          <p style={{ textAlign: 'center', color: '#64748b' }}>Enter your email to start learning today.</p>
          <form onSubmit={handleRegister} className="input-group">
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={studentEmail} 
              onChange={(e) => setStudentEmail(e.target.value)}
              required 
            />
            <button type="submit">Get Started</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              onClick={() => setIsAdmin(!isAdmin)} 
              style={{ background: 'transparent', color: '#6366f1', fontSize: '0.9rem' }}
            >
              {isAdmin ? 'Back to Student View' : 'Open Admin Portal'}
            </button>
          </div>
        </div>
      ) : (
        <div className="status-badge">
          Welcome back, {studentName}! You are ready to enroll.
        </div>
      )}

      {isAdmin && !studentId && (
        <div className="section-card" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
          <h2 style={{ marginTop: 0 }}>Create New Course</h2>
          <form onSubmit={handleAddCourse}>
            <div style={{ marginBottom: '15px' }}>
              <input 
                style={{ width: '100%', boxSizing: 'border-box' }}
                placeholder="Course Title" 
                value={newCourse.title}
                onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input 
                style={{ width: '100%', boxSizing: 'border-box' }}
                placeholder="Instructor Name" 
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <textarea 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0',
                  minHeight: '100px',
                  fontFamily: 'inherit'
                }}
                placeholder="Course Description" 
                value={newCourse.description}
                onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" style={{ width: '100%', background: '#10b981' }}>Publish Course</button>
          </form>
        </div>
      )}

      <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Explore Courses</h2>
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course._id} className="course-card">
              <span className="instructor-badge">{course.instructor}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div style={{ marginTop: '20px' }}>
                <button className="enroll-btn" onClick={() => enroll(course._id)}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#64748b' }}>
            No courses available yet. Add some to your database to see them here!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
