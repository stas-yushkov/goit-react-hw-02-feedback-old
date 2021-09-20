import PropTypes from 'prop-types';
import { ListItem, Button, ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonList>
        {options.map(name => (
          <ListItem key={name}>
            <Button type="button" onClick={() => onLeaveFeedback(name)}>
              {name}
            </Button>
          </ListItem>
        ))}
      </ButtonList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
