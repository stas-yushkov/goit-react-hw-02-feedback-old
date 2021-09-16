import { StyledNotification, Title } from './StyledComponents';

const Notification = ({ message }) => {

  return (
    <StyledNotification>
      <Title>{ message }</Title>
    </StyledNotification>
  )
}

export default Notification;