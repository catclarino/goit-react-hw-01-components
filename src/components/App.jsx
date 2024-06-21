import user from '../data/user.json';
import Profile from './Profile/profile';

import data from '../data/data.json';
import Statistics from './Statistics/statistics';

import friends from '../data/friends.json';
import FriendList from './FriendList/friendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/transactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
