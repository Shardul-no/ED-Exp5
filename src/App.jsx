import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: '#0A2342',
    secondary: '#00A6A6',
    white: '#FFFFFF',
    lightGray: '#F5F7FA',
    darkGray: '#6B7280',
  },
  fonts: {
    primary: '"Poppins", sans-serif',
    secondary: '"Inter", sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 70px; /* Account for fixed navbar */
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    flex: 1;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    width: 100%;
    padding: 2rem 0;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    min-width: 100px;
    white-space: nowrap;
    
    &-primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      
      &:hover {
        background-color: #071a33;
      }
    }
    
    &-secondary {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      
      &:hover {
        background-color: #008b8b;
      }
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
