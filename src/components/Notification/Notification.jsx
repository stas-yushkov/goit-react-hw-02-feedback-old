import PropTypes from 'prop-types';
import { StyledNotification, Title } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <Title>{message}</Title>
    </StyledNotification>
  );
};

Notification.propTypes  = {
  message: PropTypes.string.isRequired,
}

export { Notification };
