import React from 'react';
import { StyledSection, Title, Container } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </StyledSection>
  );
};

export { Section };
