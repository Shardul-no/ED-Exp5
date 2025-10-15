import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 8rem 0 6rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const ServiceImage = styled.div`
  height: 300px;
  background: ${({ theme }) => theme.colors.lightGray};
  background-size: cover;
  background-position: center;
  
  @media (min-width: 768px) {
    flex: 1;
    height: 400px;
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  
  @media (min-width: 768px) {
    flex: 1;
    padding: 3rem;
  }
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
      color: ${({ theme }) => theme.colors.darkGray};
      position: relative;
      
      &::before {
        content: '✓';
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
        position: absolute;
        left: -1.5rem;
      }
    }
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const IndustryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem 0 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 0.95rem;
  }
`;

const IndustryIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CtaSection = styled(Section)`
  background: linear-gradient(135deg, #0A2342 0%, #0a1a33 100%);
  color: white;
  text-align: center;
  padding: 5rem 1.5rem;
  
  h2 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
  }
`;

const Services = () => {
  const services = [
    {
      id: 'procurement',
      title: 'Procurement Solutions',
      description: 'Access a curated marketplace for steel, cement, chemicals, and industrial inputs — all from verified suppliers with real-time pricing and transparent terms.',
      features: [
        'Wide network of verified suppliers',
        'Real-time price tracking',
        'Quality assurance',
        'Streamlined ordering process',
        'Dedicated account management'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'financing',
      title: 'Supply Chain Financing',
      description: 'Unlock working capital for procurement, vendor payments, and growth initiatives through our network of financial partners with flexible terms and competitive rates.',
      features: [
        'Quick approval process',
        'Flexible repayment options',
        'Competitive interest rates',
        'No collateral required for eligible businesses',
        'End-to-end support'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'analytics',
      title: 'Analytics & Insights',
      description: 'Leverage AI-driven insights and market intelligence to optimize your procurement strategy, manage inventory efficiently, and make data-backed business decisions.',
      features: [
        'Real-time market analytics',
        'Inventory optimization',
        'Price trend analysis',
        'Custom reporting',
        'Predictive insights'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const industries = [
    {
      name: 'Construction',
      description: 'Streamline your construction material procurement and working capital needs.',
      icon: 'building'
    },
    {
      name: 'Manufacturing',
      description: 'Optimize your raw material supply chain and production efficiency.',
      icon: 'industry'
    },
    {
      name: 'Infrastructure',
      description: 'Large-scale project support with reliable material sourcing and financing.',
      icon: 'hard-hat'
    },
    {
      name: 'Engineering',
      description: 'Specialized solutions for engineering firms with complex material requirements.',
      icon: 'cogs'
    }
  ];

  return (
    <ServicesContainer className="container">
      <Section>
        <SectionTitle>Our Services</SectionTitle>
        
        {services.map((service) => (
          <ServiceCard key={service.id} id={service.id}>
            <ServiceImage style={{ backgroundImage: `url(${service.image})` }} />
            <ServiceContent>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Learn More</button>
            </ServiceContent>
          </ServiceCard>
        ))}
      </Section>

      <Section>
        <SectionTitle>Industry Focus</SectionTitle>
        <IndustryGrid>
          {industries.map((industry, index) => (
            <IndustryCard key={index}>
              <IndustryIcon>
                <i className={`fas fa-${industry.icon}`}></i>
              </IndustryIcon>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </IndustryCard>
          ))}
        </IndustryGrid>
      </Section>

      <CtaSection>
        <h2>Let's build the future of industrial growth together</h2>
        <p>Get in touch with our team to discuss how CapMateria can support your business needs.</p>
        <button className="btn btn-secondary">Contact Sales</button>
      </CtaSection>
    </ServicesContainer>
  );
};

export default Services;
