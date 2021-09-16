import React from 'react';
import { StyledSection, Title } from './StyledComponents';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{ title }</Title>
      { children }
    </StyledSection>
  )

};

export default Section;