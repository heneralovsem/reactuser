import React, { useEffect, useState } from "react";
import axios from "axios";
import UserBlock from "../components/UserBlock/UserBlock";

function UsersPage() {

  const [data, setData] = useState([])
  async function fetchUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(response.data)
      
  }
  useEffect(() => {
    fetchUsers();
  }, [])
  console.log(data)
  return (
    <div>
        <div className="users__wrapper">
          {data.map((user) => (<UserBlock key={user.id} name={user.name} username={user.username} email={user.email} id={user.id} />))}
        </div>
        
    </div>
  );
}

export default UsersPage;