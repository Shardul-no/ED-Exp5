import { useState, useEffect } from 'react';
import styled from 'styled-components';
import assignmentsData from '../data/assignments.json';
import experimentsData from '../data/experiments.json';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DropdownContainer = styled.div`
  margin-bottom: 2rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ItemCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 6px;
`;

const ItemTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: background 0.2s;
  
  &:hover {
    background: #2980b9;
  }
`;

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (selectedOption === 'assignments') {
      setItems(assignmentsData);
    } else if (selectedOption === 'experiments') {
      setItems(experimentsData);
    } else {
      setItems([]);
    }
  }, [selectedOption]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <DropdownContainer>
          <h2>View Content</h2>
          <Select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="assignments">Assignments</option>
            <option value="experiments">Experiments</option>
          </Select>

          {items.length > 0 && (
            <ItemList>
              {items.map((item) => (
                <ItemCard key={item.id}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ViewButton href={item.href} target="_blank" rel="noopener noreferrer">
                    View {selectedOption === 'assignments' ? 'Assignment' : 'Experiment'}
                  </ViewButton>
                </ItemCard>
              ))}
            </ItemList>
          )}
        </DropdownContainer>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
