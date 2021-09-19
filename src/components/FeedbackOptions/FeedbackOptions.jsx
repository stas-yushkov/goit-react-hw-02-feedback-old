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

export { FeedbackOptions };
