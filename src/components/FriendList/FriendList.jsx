import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <Item className="item" key={friend.id}>
          <FriendListItem people={friend} />
        </Item>
      ))}
    </FriendsList>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};