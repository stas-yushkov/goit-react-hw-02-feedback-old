import PropTypes from 'prop-types';
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

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export { Section };
