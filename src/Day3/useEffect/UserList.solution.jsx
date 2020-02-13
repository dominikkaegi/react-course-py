import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { FaTrash, FaEdit } from "react-icons/fa";
import * as api from "../../utils/api.user";

export default function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then((users = []) => {
      setUsers(users);
    });
  }, [users]);

  let deleteUser = id => {
    api.deleteUserById(id).then(deletedUser => {
      setUsers(users.filter(item => item.id !== deletedUser.id));
    });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Actions</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  <span className="icon">
                    <FaTrash onClick={() => deleteUser(user.id)} />
                  </span>
                  <span className="icon">
                    <FaEdit />
                  </span>
                </TableCell>
                <TableCell align="left">{user.firstName}</TableCell>
                <TableCell align="left">{user.lastName}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.avatar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
