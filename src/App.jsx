import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [assignments, setAssignments] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentViews, setStudentViews] = useState({
    shardul: 'assignments',
    rushikesh: 'assignments'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assignmentsRes, experimentsRes] = await Promise.all([
          fetch('/src/data/assignments.json'),
          fetch('/src/data/experiments.json')
        ]);
        
        if (!assignmentsRes.ok || !experimentsRes.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const assignmentsData = await assignmentsRes.json();
        const experimentsData = await experimentsRes.json();
        
        setAssignments(assignmentsData);
        setExperiments(experimentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewChange = (student, view) => {
    setStudentViews(prev => ({
      ...prev,
      [student]: view
    }));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const renderContent = (student) => {
    const items = studentViews[student] === 'assignments' ? assignments : experiments;
    return (
      <div className="cards-container">
        {items.map(item => (
          <Card 
            key={`${student}-${studentViews[student]}-${item.id}`} 
            item={item} 
            type={studentViews[student]} 
          />
        ))}
      </div>
    );
  };

  const renderStudentSection = (student, name) => (
    <div className="student-section">
      <h2>{name}</h2>
      <div className="dropdown-container">
        <select 
          value={studentViews[student]}
          onChange={(e) => handleViewChange(student, e.target.value)}
          className="view-selector"
        >
          <option value="assignments">Assignments</option>
          <option value="experiments">Experiments</option>
        </select>
      </div>
      {renderContent(student)}
    </div>
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Entereprenuership Development</h1>
      </header>
      
      <main className="content">
        <div className="student-columns">
          <section className="section">
            {renderStudentSection('shardul', 'Shardul')}
          </section>
          
          <section className="section">
            {renderStudentSection('rushikesh', 'Rushikesh')}
          </section>
        </div>
      </main>
      
      <div className="figma-button-container">
        <a 
          href="https://www.figma.com/make/BMZwB7vmhlWvjAlmZEtG0z/Capmateria-B2B-Financing-Platform?node-id=0-1&t=GEeLa3r2PkynaAGX-1" 
          className="figma-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Figma Design
        </a>
      </div>
    </div>
  );
}

export default App;
