import React, { Component } from 'react';
import { capitalize } from '../../utils';
import { ListItem, Title, Button, ButtonList } from './StyledComponents';

class FeedBackOptions extends Component {
  render() {
    const { buttonList } = this.props

    return (
      <div>
        <Title>Please leave feedback</Title>
        <ButtonList>
          {buttonList && buttonList.map(name => (
            <ListItem key={name}>
              <Button
                type='button'
                data-name={name}
                onClick={this.props.handleIncrement}
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

export  default FeedBackOptions;