import React, { useState, useEffect } from "react"
import { createData, getData, getSingleUser } from "../database/api"
const Practibe = () => {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState(null);
  const fetchUsers = () => {
    getData().then(users => setUsers(users))
  }

  const onGetSingleUser = () => {
    if(userId){
      getSingleUser(userId).then(user => setUser(user))
    }    
  }
  return (
    <div>
      <div>
        <button onClick={createData}>Make Data</button>
        <button onClick={fetchUsers}>Get Data</button>
      </div>
      {users.length ? (
        <>
          <h3>Restrive Users List</h3>
          <ul>
            {users.map(user => (
              <li
                key={user.id}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "800px",
                }}
              >
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.age}</div>
                <div>{user.createdAt}</div>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <div>
        <input
          type="text"
          placeholder="input user id"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <button onClick={onGetSingleUser}>Get Single User</button>
      </div>
      {user && <>
        <h3>SingleUser</h3>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.gender}</div>
        <div>{user.email}</div>
        <div>{new Date(user.createdAt.seconds * 1000).toLocaleString()}</div>
      </>}
      
      
    </div>
  )
}

export default Practibe
