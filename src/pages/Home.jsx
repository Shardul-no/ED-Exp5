import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0A2342 0%, #0a1a33 100%);
  color: white;
  padding: 8rem 0 6rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin: 1.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => `${theme.colors.secondary}15`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CtaSection = styled(Section)`
  background: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 600px;
    margin: 0 auto 2rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Empowering India's Industrial Backbone</HeroTitle>
          <HeroSubtitle>
            CapMateria helps businesses procure raw materials and access working capital faster, smarter, and at scale.
          </HeroSubtitle>
          <ButtonGroup>
            <Link to="/services" className="btn btn-secondary">Get Started</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <Section>
        <div className="container">
          <SectionTitle>Why Choose CapMateria?</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <IconWrapper>
                <i className="fas fa-bolt"></i>
              </IconWrapper>
              <h3>Fast Credit Decisions</h3>
              <p>Get quick approval on your financing needs with our streamlined process.</p>
            </FeatureCard>
            
            <FeatureCard>
              <IconWrapper>
                <i className="fas fa-shield-alt"></i>
              </IconWrapper>
              <h3>Reliable Network</h3>
              <p>Access verified suppliers and trusted financial partners in one place.</p>
            </FeatureCard>
            
            <FeatureCard>
              <IconWrapper>
                <i className="fas fa-chart-line"></i>
              </IconWrapper>
              <h3>Data-Driven Insights</h3>
              <p>Make informed decisions with our advanced analytics and market intelligence.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </Section>

      <CtaSection>
        <div className="container">
          <h2>Join India's Next Wave of Industrial Growth</h2>
          <p>Partner with CapMateria and take your business to new heights with our comprehensive procurement and financing solutions.</p>
          <Link to="/contact" className="btn btn-primary">Partner with Us</Link>
        </div>
      </CtaSection>
    </>
  );
};

export default Home;
