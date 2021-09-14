import ListItem from './ListItem.styled';
import RoundBlob from './RoundBlob.styled';
import UserImage from './UserImage.styled';
import UserName from './UserName.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem className="item">
      <RoundBlob className="status" isOnline={isOnline} />
      <UserImage className="avatar" src={avatar} alt={name} width="48" />
      <UserName className="name">{name}</UserName>
    </ListItem>
  );
}

export default FriendListItem;
