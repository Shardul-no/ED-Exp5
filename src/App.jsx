import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [assignments, setAssignments] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Entereprenuership Development</h1>
      </header>
      
      <main className="content">
        <section className="section">
          <h2>Assignments</h2>
          <div className="cards-container">
            {assignments.map(item => (
              <Card key={`assignment-${item.id}`} item={item} type="assignment" />
            ))}
          </div>
        </section>
        
        <section className="section">
          <h2>Experiments</h2>
          <div className="cards-container">
            {experiments.map(item => (
              <Card key={`experiment-${item.id}`} item={item} type="experiment" />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
