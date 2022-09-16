import React, {useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) =>{
        setUsersList((prevUserList) => {
          return [...prevUserList, {name: uName, age: uAge}];
        })
  }
  return (
    <Fragment>
          <AddUser onAddUser={addUserHandler} /> 
          <UserList users ={usersList} />  {/*ইউজার লিস্ট এ ডাটা ডুকিয়ে তা ইউজার লিস্ট কমাপোনেন্ট এ পাঠানো হয়েছে (users)হিসেবে */}
    </Fragment>
  );
}

export default App;
