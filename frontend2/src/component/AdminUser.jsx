import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin All Users</h1>
      </div>
      <div className="container">
      <table className=" table table-info ">
  <thead>
    <tr>
      
      <th scope="col">Fullname</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
  
    </tr>
  </thead>
  <tbody className="body table-group-divider">
  {users.map((curUser, index) => {
        return <tr  key={index}>
          <td>{curUser.Fullname}</td>
          <td>{curUser.username}</td>
          <td>{curUser.email}</td>
        </tr>
      })}
  </tbody>
</table>
      </div>
  
    </section>
 
    </>
  );
}
