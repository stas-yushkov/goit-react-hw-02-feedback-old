import { StyledNotification, Title } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <Title>{message}</Title>
    </StyledNotification>
  );
};

export { Notification };
