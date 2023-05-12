import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useUsersStore } from "./store";
export default function EmployeeInfo() {
  const data = useUsersStore((state) => state.data);
  const filteredData = useUsersStore((state)=>state.filteredData)
  const setFilteredData = useUsersStore((state)=>state.setFilteredData)
  const getUsers = useUsersStore((state) => state.getUsers);
  const columns = [
    "id",
    "name",
    "gender",
    "email",
    "salary",
    "experience",
    "hiredDate",
  ];

  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortClick = (column) => {
      let newSortOrder = sortOrder === "asc" ? "desc" : "asc";
      let sortedRows = filteredData.slice().sort((a, b) => {
        if (isNaN(a[column])) {
          return a[column].localeCompare(b[column]) * (newSortOrder === "asc" ? 1 : -1);
        } else {
          return (a[column] - b[column]) * (newSortOrder === "asc" ? 1 : -1);
        }
      });
      setSortOrder(newSortOrder);
      setFilteredData(sortedRows);
  };

  useEffect(() => {
    console.log('data',data)
    setRows(data);
    setFilteredData(data)
  }, [data]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} onClick={() => handleSortClick(column)}>
                  {column}{" "}
                  {sortBy === column && (
                    <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.experience}</TableCell>
                <TableCell>{row.hiredDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
// }
