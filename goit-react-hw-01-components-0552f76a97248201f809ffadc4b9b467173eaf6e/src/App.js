import { Component } from 'react';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';

import './css/common.css';

import { name, tag, location, avatar, stats } from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
class App extends Component {
  render() {
    return (
      <>
        <FriendList friends={friends} />
        <Statistics title={'upload stats'} stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </>
    );
  }
}

export default App;
