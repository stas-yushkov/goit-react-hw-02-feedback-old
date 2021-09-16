import React, { Component } from 'react';
import { capitalize } from '../../utils';
import { ListItem, Button, ButtonList } from './StyledComponents';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props

    return (
      <div>
        <ButtonList>
          {options && options.map(name => (
            <ListItem key={name}>
              <Button
                type='button'
                data-name={name}
                onClick={onLeaveFeedback}
              >
                {capitalize(name)}
              </Button>
            </ListItem>
          ))}
        </ButtonList>
      </div>
    )
  }
}

export  default FeedbackOptions;